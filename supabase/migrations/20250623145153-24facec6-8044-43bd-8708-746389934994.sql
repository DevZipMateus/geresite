
-- Alterar o tempo de expiração padrão de 3 dias para 24 horas (1 dia)
ALTER TABLE public.clientes 
ALTER COLUMN expiracao SET DEFAULT (now() + interval '1 day');

-- Habilitar as extensões necessárias para cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Criar função para limpeza automática de sites expirados
CREATE OR REPLACE FUNCTION public.cleanup_expired_sites()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    deleted_count integer;
    site_record record;
BEGIN
    -- Log início da limpeza
    RAISE NOTICE 'Iniciando limpeza automática de sites expirados às %', now();
    
    -- Contar quantos registros serão deletados para log
    SELECT COUNT(*) INTO deleted_count
    FROM public.clientes 
    WHERE expiracao < now();
    
    -- Log da quantidade a ser deletada
    RAISE NOTICE 'Encontrados % sites expirados para exclusão', deleted_count;
    
    -- Se não há registros para deletar, sair
    IF deleted_count = 0 THEN
        RAISE NOTICE 'Nenhum site expirado encontrado. Limpeza concluída.';
        RETURN;
    END IF;
    
    -- Deletar registros expirados
    DELETE FROM public.clientes 
    WHERE expiracao < now();
    
    -- Log final
    RAISE NOTICE 'Limpeza automática concluída. % sites removidos às %', deleted_count, now();
    
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Erro durante limpeza automática: %', SQLERRM;
        RAISE;
END;
$$;

-- Criar o cron job para executar a limpeza a cada hora
SELECT cron.schedule(
    'cleanup-expired-sites',
    '0 * * * *', -- A cada hora no minuto 0
    'SELECT public.cleanup_expired_sites();'
);

-- Comentário na tabela para documentar a mudança
COMMENT ON COLUMN public.clientes.expiracao IS 'Data de expiração do site (24 horas após criação). Sites expirados são automaticamente removidos por cron job.';
