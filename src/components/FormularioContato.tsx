import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const formSchema = z.object({
  nome_empresa: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
  nome_responsavel: z.string().min(2, "Nome do responsável deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(8, "Telefone deve ter pelo menos 8 caracteres"),
  logo: z
    .instanceof(FileList)
    .optional()
    .refine((files) => !files || files.length === 0 || files.length === 1, "Apenas um arquivo é permitido")
    .refine(
      (files) => 
        !files || 
        files.length === 0 || 
        ACCEPTED_IMAGE_TYPES.includes(files[0].type),
      "Apenas arquivos .jpg, .jpeg e .png são aceitos"
    )
    .refine(
      (files) => 
        !files || 
        files.length === 0 || 
        files[0].size <= MAX_FILE_SIZE,
      `Tamanho máximo do arquivo é 5MB`
    ),
});

type FormValues = z.infer<typeof formSchema>;

const FormularioContato = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome_empresa: "",
      nome_responsavel: "",
      email: "",
      telefone: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedFileName(fileList[0].name);
    } else {
      setSelectedFileName(null);
    }
    form.setValue("logo", fileList as FileList, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Log submission for debugging
      console.log("Submitting form with data:", JSON.stringify(data, null, 2));
      
      // Primeiro, inserimos os dados do cliente
      const { data: insertData, error } = await supabase
        .from("clientes")
        .insert([{
          nome_empresa: data.nome_empresa,
          nome_responsavel: data.nome_responsavel,
          email: data.email,
          telefone: data.telefone,
        }])
        .select();

      if (error) {
        throw error;
      }

      console.log("Cliente inserted:", insertData);

      // Se há um arquivo de logo e temos um ID de cliente
      if (data.logo && data.logo.length > 0 && insertData && insertData.length > 0) {
        const clienteId = insertData[0].id;
        const file = data.logo[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${clienteId}/logo.${fileExt}`;
        
        console.log("Uploading logo:", fileName);
        
        // Upload do arquivo para o storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('logos')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: true
          });
        
        if (uploadError) {
          console.error("Erro ao fazer upload do logo:", uploadError);
          toast({
            variant: "destructive",
            title: "Aviso",
            description: "Seus dados foram salvos, mas houve um problema ao enviar o logo.",
          });
        } else {
          console.log("Logo uploaded successfully:", uploadData);
          
          // Atualizamos o registro do cliente com o caminho do logo
          const { data: updateData, error: updateError } = await supabase
            .from("clientes")
            .update({ logo_url: fileName })
            .eq('id', clienteId)
            .select();
          
          if (updateError) {
            console.error("Erro ao atualizar caminho do logo:", updateError);
          } else {
            console.log("Cliente updated with logo_url:", updateData);
          }
        }
      }

      toast({
        title: "Sucesso!",
        description: "Seus dados foram salvos com sucesso!",
      });

      // Redireciona para a página do site institucional com o ID do cliente
      if (insertData && insertData.length > 0) {
        navigate(`/site-institucional/${insertData[0].id}`);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Houve um erro ao salvar seus dados. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Formulário de Contato</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome_empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da empresa" {...field} />
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
                <FormLabel>Nome do Responsável</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do responsável" {...field} />
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Digite o e-mail" {...field} />
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
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o telefone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="logo"
            render={() => (
              <FormItem>
                <FormLabel>Logo da Empresa (opcional)</FormLabel>
                <FormControl>
                  <div className="flex flex-col space-y-2">
                    <label className="flex flex-col items-center px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <Upload className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {selectedFileName || "Selecione um arquivo .jpg ou .png"}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {selectedFileName && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <ImageIcon className="h-4 w-4" />
                        <span>{selectedFileName}</span>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormularioContato;
