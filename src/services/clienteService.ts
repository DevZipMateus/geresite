
import { supabase } from "@/integrations/supabase/client";
import { Cliente } from "@/types/database.types";

// Updated interface to match the data structure coming from the form
export interface ClienteFormData {
  nome_empresa: string;
  nome_responsavel: string;
  email: string;
  telefone: string;
  logo?: FileList;
}

export const createCliente = async (data: ClienteFormData): Promise<{ cliente: Cliente | null; error: any }> => {
  try {
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
      console.error("Erro ao inserir cliente:", error);
      return { cliente: null, error };
    }

    console.log("Cliente inserted:", insertData);

    // Se temos um ID de cliente
    if (insertData && insertData.length > 0) {
      const clienteId = insertData[0].id;
      let logoUrl = null;
      
      // Se há um arquivo de logo
      if (data.logo && data.logo.length > 0) {
        const file = data.logo[0];
        const fileExt = file.name.split('.').pop();
        // Definindo nome do arquivo no formato "id/logo.extensão"
        const fileName = `${clienteId}/logo.${fileExt}`;
        logoUrl = fileName; // Definir logo_url para encontrar o arquivo depois
        
        console.log("Uploading logo with path:", fileName);
        console.log("Logo URL to be saved:", logoUrl);
        
        // Criar o bucket logos se ele não existir
        const { data: bucketData, error: bucketError } = await supabase
          .storage
          .getBucket('logos');
          
        if (bucketError && bucketError.message.includes('not found')) {
          // Bucket não existe, vamos criar
          await supabase.storage.createBucket('logos', {
            public: true
          });
          console.log("Created logos bucket");
        }

        // Upload do arquivo para o storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('logos')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: true
          });
        
        if (uploadError) {
          console.error("Erro ao fazer upload do logo:", uploadError);
          return { cliente: insertData[0], error: uploadError };
        } else {
          console.log("Logo uploaded successfully:", uploadData);
        }
      }
      
      // Sempre atualizamos o registro do cliente com o caminho do logo, mesmo que seja null
      const { data: updateData, error: updateError } = await supabase
        .from("clientes")
        .update({ logo_url: logoUrl })
        .eq('id', clienteId)
        .select();
      
      if (updateError) {
        console.error("Erro ao atualizar caminho do logo:", updateError);
        return { cliente: insertData[0], error: updateError };
      } else {
        console.log("Cliente updated with logo_url:", updateData);
        return { cliente: updateData[0], error: null };
      }
    }
    
    return { cliente: null, error: new Error("Falha ao criar cliente") };
  } catch (error) {
    console.error("Erro ao processar cliente:", error);
    return { cliente: null, error };
  }
};

export const getClienteById = async (id: string): Promise<{ cliente: Cliente | null; error: any; logoUrl: string | null }> => {
  try {
    const { data, error } = await supabase
      .from("clientes")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) {
      return { cliente: null, error, logoUrl: null };
    }
    
    let logoUrl = null;
    
    if (data && data.logo_url) {
      const { data: fileData } = supabase.storage
        .from('logos')
        .getPublicUrl(data.logo_url);
        
      if (fileData && fileData.publicUrl) {
        logoUrl = fileData.publicUrl;
      }
    }
    
    return { cliente: data, error: null, logoUrl };
  } catch (error) {
    return { cliente: null, error, logoUrl: null };
  }
};
