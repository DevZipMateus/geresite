
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
import LoadingState from "@/components/institutional/LoadingState";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
});

type FormValues = z.infer<typeof formSchema>;

const BuscaSitesPorEmail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const testConnection = async () => {
    try {
      console.log("Testing Supabase connection...");
      const { error: connectionError } = await supabase.from("clientes").select("id").limit(1);
      
      if (connectionError) {
        console.error("Connection test failed:", connectionError);
        return false;
      }
      
      console.log("Connection test successful");
      return true;
    } catch (error) {
      console.error("Unexpected error during connection test:", error);
      return false;
    }
  };

  const validateClienteData = (cliente: any) => {
    console.log("Validating cliente data:", cliente);
    
    if (!cliente) {
      console.error("Cliente is null or undefined");
      return false;
    }

    if (!cliente.id || !cliente.nome_empresa) {
      console.error("Cliente missing required fields:", { id: cliente.id, nome_empresa: cliente.nome_empresa });
      return false;
    }

    if (!cliente.expiracao) {
      console.error("Cliente missing expiration date");
      return false;
    }

    return true;
  };

  const validateExpirationDate = (expiracao: string) => {
    try {
      console.log("Validating expiration date:", expiracao);
      
      const dataExpiracao = new Date(expiracao);
      const agora = new Date();
      
      if (isNaN(dataExpiracao.getTime())) {
        console.error("Invalid expiration date format:", expiracao);
        return { isValid: false, isExpired: true };
      }
      
      const isExpired = dataExpiracao < agora;
      console.log("Expiration check:", { 
        expiracao: dataExpiracao.toISOString(), 
        now: agora.toISOString(), 
        isExpired 
      });
      
      return { isValid: true, isExpired };
    } catch (error) {
      console.error("Error validating expiration date:", error);
      return { isValid: false, isExpired: true };
    }
  };

  const performSearch = async (email: string, retryCount = 0) => {
    const maxRetries = 2;
    
    try {
      console.log(`Searching for sites with email: ${email} (attempt ${retryCount + 1})`);
      
      // Test connection first
      const connectionOk = await testConnection();
      if (!connectionOk) {
        throw new Error("Falha na conexão com o banco de dados");
      }

      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Timeout: A consulta demorou muito para responder")), 15000)
      );

      // Create the search promise
      const searchPromise = supabase
        .from("clientes")
        .select("id, nome_empresa, expiracao, data_criacao")
        .eq("email", email.trim().toLowerCase())
        .order('data_criacao', { ascending: false });

      // Race between search and timeout
      const { data: clientesData, error } = await Promise.race([searchPromise, timeoutPromise]) as any;

      if (error) {
        console.error("Supabase query error:", error);
        throw new Error(`Erro na consulta: ${error.message}`);
      }

      console.log("Query successful, results:", clientesData);

      if (!clientesData || clientesData.length === 0) {
        console.log("No clients found for email:", email);
        toast({
          variant: "destructive",
          title: "Nenhum site encontrado",
          description: "Não encontramos nenhum site associado a este email. Verifique se o email está correto.",
        });
        return;
      }

      console.log(`Found ${clientesData.length} site(s) for email:`, email);

      // Validate the most recent site data
      const siteAtual = clientesData[0];
      if (!validateClienteData(siteAtual)) {
        throw new Error("Dados do site inválidos ou incompletos");
      }

      // Validate expiration
      const { isValid, isExpired } = validateExpirationDate(siteAtual.expiracao);
      
      if (!isValid) {
        throw new Error("Data de expiração inválida no banco de dados");
      }

      if (isExpired) {
        console.log("Site expired:", siteAtual);
        toast({
          variant: "destructive",
          title: "Site expirado",
          description: `O site da empresa ${siteAtual.nome_empresa} expirou. Os sites são válidos por apenas 3 dias após a criação.`,
        });
        return;
      }

      // Success - navigate to the site
      console.log("Navigating to site:", siteAtual.id);
      navigate(`/site-institucional/${siteAtual.id}`);
      
      toast({
        title: "Site encontrado!",
        description: `Redirecionando para o site da empresa ${siteAtual.nome_empresa}.`,
      });

    } catch (error: any) {
      console.error(`Search attempt ${retryCount + 1} failed:`, error);
      
      // Retry logic for network errors
      if (retryCount < maxRetries && (
        error.message.includes("network") || 
        error.message.includes("fetch") ||
        error.message.includes("Timeout") ||
        error.message.includes("conexão")
      )) {
        console.log(`Retrying search (attempt ${retryCount + 2})...`);
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1))); // Progressive delay
        return performSearch(email, retryCount + 1);
      }

      // Show retry option for persistent errors
      if (retryCount >= maxRetries) {
        setShowRetry(true);
      }

      // User-friendly error messages
      let errorMessage = "Ocorreu um erro ao buscar o site. Tente novamente.";
      
      if (error.message.includes("Timeout")) {
        errorMessage = "A busca está demorando muito. Verifique sua conexão e tente novamente.";
      } else if (error.message.includes("conexão") || error.message.includes("network")) {
        errorMessage = "Problema de conexão. Verifique sua internet e tente novamente.";
      } else if (error.message.includes("Erro na consulta")) {
        errorMessage = "Erro interno no sistema. Tente novamente em alguns momentos.";
      }

      toast({
        variant: "destructive",
        title: "Erro na busca",
        description: errorMessage,
      });
    }
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setShowRetry(false);
    console.log("Form submitted with email:", data.email);
    
    try {
      await performSearch(data.email);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setShowRetry(false);
    const email = form.getValues("email");
    if (email) {
      onSubmit({ email });
    }
  };

  if (loading) {
    return (
      <LoadingState 
        message="Buscando site..."
        submessage="Procurando sites associados ao seu email"
        showRetry={showRetry}
        onRetry={handleRetry}
      />
    );
  }

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
