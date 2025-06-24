
-- Adicionar campos categoria e template_id na tabela clientes
ALTER TABLE public.clientes 
ADD COLUMN categoria text,
ADD COLUMN template_id text;

-- Atualizar registros existentes para usar categoria padrão
UPDATE public.clientes 
SET categoria = 'contabilidade', template_id = '1' 
WHERE categoria IS NULL;

-- Tornar os campos obrigatórios após preencher dados existentes
ALTER TABLE public.clientes 
ALTER COLUMN categoria SET NOT NULL,
ALTER COLUMN template_id SET NOT NULL;
