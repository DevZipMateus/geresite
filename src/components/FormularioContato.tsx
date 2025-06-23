
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import LogoUpload, { logoSchema } from "./LogoUpload";
import { createCliente } from "@/services/clienteService";
import { ArrowUpRight, Loader2 } from "lucide-react";

const formSchema = z.object({
  nome_empresa: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  nome_responsavel: z.string().min(2, "Nome do responsável deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(100, "Email muito longo"),
  telefone: z.string().min(8, "Telefone deve ter pelo menos 8 caracteres").max(20, "Telefone muito longo"),
  logo: logoSchema,
});

type FormValues = z.infer<typeof formSchema>;

interface FormularioContatoProps {
  submitButtonText?: string;
  showArrowIcon?: boolean;
}

const FormularioContato = ({ 
  submitButtonText = "Enviar", 
  showArrowIcon = false 
}: FormularioContatoProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome_empresa: "",
      nome_responsavel: "",
      email: "",
      telefone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setSubmitAttempts(prev => prev + 1);
      
      console.log("Form submission attempt:", submitAttempts + 1);
      console.log("Form data:", {
        nome_empresa: data.nome_empresa,
        nome_responsavel: data.nome_responsavel,
        email: data.email,
        telefone: data.telefone,
        hasLogo: data.logo && data.logo.length > 0
      });
      
      // Show loading toast for better UX
      const loadingToast = toast({
        title: "Criando seu site...",
        description: "Por favor, aguarde enquanto processamos seus dados.",
      });
      
      const clienteData = {
        nome_empresa: data.nome_empresa.trim(),
        nome_responsavel: data.nome_responsavel.trim(),
        email: data.email.trim().toLowerCase(),
        telefone: data.telefone.trim(),
        logo: data.logo
      };
      
      const { cliente, error } = await createCliente(clienteData);

      if (error) {
        console.error("Cliente creation failed:", error);
        
        // Provide specific error messages
        let errorMessage = "Houve um erro ao salvar seus dados.";
        
        if (error.message.includes("conexão")) {
          errorMessage = "Problema de conexão. Verifique sua internet e tente novamente.";
        } else if (error.message.includes("campos obrigatórios")) {
          errorMessage = "Por favor, preencha todos os campos obrigatórios.";
        } else if (error.message.includes("inválido")) {
          errorMessage = "Dados inválidos. Verifique os campos e tente novamente.";
        }
        
        toast({
          variant: "destructive",
          title: "Erro!",
          description: errorMessage,
        });
        
        // Suggest retry after multiple attempts
        if (submitAttempts >= 2) {
          toast({
            title: "Dica",
            description: "Se o problema persistir, tente atualizar a página e tentar novamente.",
          });
        }
        
        return;
      }

      if (cliente) {
        console.log("Cliente created successfully:", cliente.id);
        
        toast({
          title: "Sucesso!",
          description: "Seus dados foram salvos com sucesso! Redirecionando...",
        });

        // Small delay to show success message
        setTimeout(() => {
          navigate(`/site-institucional/${cliente.id}`);
        }, 1000);
      } else {
        throw new Error("Cliente não foi criado");
      }
    } catch (error) {
      console.error("Unexpected form submission error:", error);
      
      toast({
        variant: "destructive",
        title: "Erro Inesperado",
        description: "Algo deu errado. Por favor, tente novamente em alguns instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset attempts after successful validation
  const handleFormChange = () => {
    if (submitAttempts > 0 && !isSubmitting) {
      setSubmitAttempts(0);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Formulário de Contato</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} onChange={handleFormChange} className="space-y-4">
          <FormField
            control={form.control}
            name="nome_empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome da empresa" 
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nome_responsavel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Responsável *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o nome do responsável" 
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail *</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Digite o e-mail" 
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o telefone" 
                    disabled={isSubmitting}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LogoUpload name="logo" disabled={isSubmitting} />

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Criando...
              </>
            ) : (
              <>
                {submitButtonText}
                {showArrowIcon && <ArrowUpRight className="h-4 w-4 ml-1" />}
              </>
            )}
          </Button>
          
          {submitAttempts > 0 && !isSubmitting && (
            <p className="text-sm text-gray-500 text-center">
              Tentativa {submitAttempts} de envio
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default FormularioContato;
