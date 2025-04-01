
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
});

type FormValues = z.infer<typeof formSchema>;

const BuscaSitesPorEmail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const { data: clientesData, error } = await supabase
        .from("clientes")
        .select("id, nome_empresa, expiracao")
        .eq("email", data.email)
        .order('data_criacao', { ascending: false });

      if (error) {
        throw error;
      }

      if (!clientesData || clientesData.length === 0) {
        toast({
          variant: "destructive",
          title: "Nenhum site encontrado",
          description: "Não encontramos nenhum site associado a este email.",
        });
        return;
      }

      // Verificar se o site mais recente ainda é válido
      const siteAtual = clientesData[0];
      const dataExpiracao = new Date(siteAtual.expiracao);
      
      if (dataExpiracao < new Date()) {
        toast({
          variant: "destructive",
          title: "Site expirado",
          description: `O site da empresa ${siteAtual.nome_empresa} expirou. Os sites são válidos por apenas 3 dias após a criação.`,
        });
        return;
      }

      // Redirecionar para o site institucional
      navigate(`/site-institucional/${siteAtual.id}`);
      
      toast({
        title: "Site encontrado!",
        description: `Redirecionando para o site da empresa ${siteAtual.nome_empresa}.`,
      });
    } catch (error) {
      console.error("Erro ao buscar site:", error);
      toast({
        variant: "destructive",
        title: "Erro na busca",
        description: "Ocorreu um erro ao buscar o site. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Buscar Site Existente</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail cadastrado</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Digite o email utilizado no cadastro" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? "Buscando..." : "Buscar Site"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BuscaSitesPorEmail;
