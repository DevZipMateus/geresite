
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Cliente } from "@/types/database.types";

const Template = () => {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [expirado, setExpirado] = useState(false);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) return;

        const { data, error } = await supabase
          .from("clientes")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        setCliente(data);
        
        // Verificar se o template expirou
        if (data) {
          const dataExpiracao = new Date(data.expiracao);
          if (dataExpiracao < new Date()) {
            setExpirado(true);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Carregando...</div>
      </div>
    );
  }

  if (expirado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Template Expirado</h1>
          <p className="text-lg text-gray-700">
            Este template expirou. O período de validade era de 3 dias a partir da data de criação.
          </p>
        </div>
      </div>
    );
  }

  if (!cliente) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Cliente não encontrado</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-2xl w-full bg-white border rounded-lg p-8">
        <h1 id="nome_empresa" className="text-3xl font-bold text-center mb-6">
          {cliente.nome_empresa}
        </h1>
        
        <div className="space-y-4 my-8">
          <div className="border-b pb-2">
            <strong>Responsável:</strong>
            <p id="responsavel" className="text-gray-700">{cliente.nome_responsavel}</p>
          </div>
          
          <div className="border-b pb-2">
            <strong>E-mail:</strong>
            <p id="email" className="text-gray-700">{cliente.email}</p>
          </div>
          
          <div className="border-b pb-2">
            <strong>Telefone:</strong>
            <p id="telefone" className="text-gray-700">{cliente.telefone}</p>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>
            Template válido até:{" "}
            {format(new Date(cliente.expiracao), "dd/MM/yyyy 'às' HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template;
