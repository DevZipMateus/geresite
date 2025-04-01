import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Cliente } from "@/types/database.types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SiteInstitucional = () => {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [expirado, setExpirado] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
        
        if (data) {
          const dataExpiracao = new Date(data.expiracao);
          if (dataExpiracao < new Date()) {
            setExpirado(true);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar os dados da empresa.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();
  }, [id, toast]);

  const handleVoltar = () => {
    navigate("/");
  };

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
          <h1 className="text-2xl font-bold text-red-600 mb-4">Site Expirado</h1>
          <p className="text-lg text-gray-700 mb-6">
            Este site expirou. O período de validade era de 3 dias a partir da data de criação.
          </p>
          <Button onClick={handleVoltar} variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
            Voltar para a página inicial
          </Button>
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{cliente.nome_empresa}</h1>
          <Button 
            variant="outline" 
            onClick={handleVoltar}
            className="text-white border-white hover:bg-white hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/90 to-primary/70 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bem-vindo à {cliente.nome_empresa}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Somos especialistas em soluções para o seu negócio. Nossa equipe está pronta para atender todas as suas necessidades.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            <Phone className="h-5 w-5" />
            {cliente.telefone}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoria",
                description: "Oferecemos consultoria especializada para otimizar seus processos e aumentar sua produtividade."
              },
              {
                title: "Planejamento",
                description: "Desenvolvemos estratégias personalizadas para alcançar seus objetivos de negócio."
              },
              {
                title: "Suporte",
                description: "Suporte técnico contínuo para garantir que suas operações funcionem sem problemas."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
              <p className="text-gray-600 mb-4">
                A {cliente.nome_empresa} é uma empresa comprometida com a excelência e inovação. 
                Nosso objetivo é oferecer soluções eficientes e personalizadas para cada cliente.
              </p>
              <p className="text-gray-600 mb-4">
                Fundada com a missão de transformar o mercado, temos orgulho de nossa equipe 
                altamente qualificada e dedicada a superar expectativas.
              </p>
              <div className="flex items-center mt-6">
                <User className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700 font-medium">{cliente.nome_responsavel}</span>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-primary/30 font-bold">{cliente.nome_empresa.charAt(0)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para saber mais sobre nossos serviços.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{cliente.telefone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{cliente.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{cliente.nome_empresa}</h2>
              <p className="text-white/70 mt-2">Soluções para o seu negócio</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-white/70">
                © {new Date().getFullYear()} {cliente.nome_empresa}. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteInstitucional;
