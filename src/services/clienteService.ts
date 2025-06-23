
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
    console.log("Starting cliente creation process...");
    
    // Validate required fields
    if (!data.nome_empresa || !data.nome_responsavel || !data.email || !data.telefone) {
      return { cliente: null, error: new Error("Todos os campos obrigatórios devem ser preenchidos") };
    }

    // Test database connection first
    const { error: connectionError } = await supabase.from("clientes").select("id").limit(1);
    if (connectionError) {
      console.error("Database connection failed:", connectionError);
      return { cliente: null, error: new Error("Erro de conexão com o banco de dados. Tente novamente.") };
    }

    // Insert cliente data
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
      return { cliente: null, error: new Error("Erro ao salvar dados do cliente. Verifique os dados e tente novamente.") };
    }

    if (!insertData || insertData.length === 0) {
      return { cliente: null, error: new Error("Falha ao criar cliente - nenhum dado retornado") };
    }

    const clienteId = insertData[0].id;
    console.log("Cliente created with ID:", clienteId);
    
    // Handle logo upload with better error handling
    let logoUrl = null;
    const baseLogoUrl = `https://svenmlcxebqafsxlayez.supabase.co/storage/v1/object/public/logos/${clienteId}/logo`;
    
    if (data.logo && data.logo.length > 0) {
      const file = data.logo[0];
      
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        console.warn("Invalid file type for logo:", file.type);
        // Continue without logo rather than failing completely
        logoUrl = `${baseLogoUrl}.png`;
      } else {
        const fileExt = file.name.split('.').pop() || 'png';
        const fileName = `${clienteId}/logo.${fileExt}`;
        logoUrl = `${baseLogoUrl}.${fileExt}`;
        
        console.log("Attempting logo upload:", fileName);
        
        try {
          // Ensure logos bucket exists
          const { error: bucketError } = await supabase.storage.getBucket('logos');
          
          if (bucketError && bucketError.message.includes('not found')) {
            console.log("Creating logos bucket...");
            const { error: createBucketError } = await supabase.storage.createBucket('logos', {
              public: true
            });
            
            if (createBucketError) {
              console.error("Failed to create logos bucket:", createBucketError);
            }
          }

          // Upload file
          const { error: uploadError } = await supabase.storage
            .from('logos')
            .upload(fileName, file, {
              cacheControl: '3600',
              upsert: true
            });
          
          if (uploadError) {
            console.error("Logo upload failed:", uploadError);
            // Don't fail the entire operation, just use default logo URL
            logoUrl = `${baseLogoUrl}.png`;
          } else {
            console.log("Logo uploaded successfully");
          }
        } catch (uploadError) {
          console.error("Logo upload exception:", uploadError);
          logoUrl = `${baseLogoUrl}.png`;
        }
      }
    } else {
      logoUrl = `${baseLogoUrl}.png`;
    }
    
    // Update cliente with logo URL
    const { data: updateData, error: updateError } = await supabase
      .from("clientes")
      .update({ logo_url: logoUrl })
      .eq('id', clienteId)
      .select();
    
    if (updateError) {
      console.error("Failed to update logo URL:", updateError);
      // Return the cliente even if logo update failed
      return { cliente: insertData[0], error: null };
    }
    
    const finalCliente = updateData && updateData.length > 0 ? updateData[0] : insertData[0];
    console.log("Cliente creation completed successfully:", finalCliente.id);
    
    return { cliente: finalCliente, error: null };
    
  } catch (error) {
    console.error("Unexpected error in createCliente:", error);
    return { 
      cliente: null, 
      error: new Error("Erro inesperado. Verifique sua conexão e tente novamente.") 
    };
  }
};

export const getClienteById = async (id: string): Promise<{ cliente: Cliente | null; error: any; logoUrl: string | null }> => {
  try {
    // Validate ID format
    const numericId = parseInt(id);
    if (isNaN(numericId) || numericId <= 0) {
      return { cliente: null, error: new Error("ID de cliente inválido"), logoUrl: null };
    }

    console.log("Fetching cliente with ID:", id);
    
    const { data, error } = await supabase
      .from("clientes")
      .select("*")
      .eq("id", id)
      .single();
    
    if (error) {
      console.error("Error fetching cliente:", error);
      
      if (error.code === 'PGRST116') {
        return { cliente: null, error: new Error("Cliente não encontrado"), logoUrl: null };
      }
      
      return { cliente: null, error: new Error("Erro ao buscar dados do cliente"), logoUrl: null };
    }
    
    if (!data) {
      return { cliente: null, error: new Error("Cliente não encontrado"), logoUrl: null };
    }
    
    // Handle logo URL
    let logoUrl = data.logo_url;
    if (!logoUrl) {
      logoUrl = `https://svenmlcxebqafsxlayez.supabase.co/storage/v1/object/public/logos/${data.id}/logo.png`;
    }
    
    console.log("Cliente fetched successfully:", data.id);
    return { cliente: data, error: null, logoUrl };
    
  } catch (error) {
    console.error("Unexpected error in getClienteById:", error);
    return { 
      cliente: null, 
      error: new Error("Erro inesperado ao buscar cliente"), 
      logoUrl: null 
    };
  }
};
