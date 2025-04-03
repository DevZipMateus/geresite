
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Cliente } from "@/types/database.types";
import { useToast } from "@/hooks/use-toast";
import InstitutionalHeader from "@/components/institutional/InstitutionalHeader";
import ExpiredNotice from "@/components/institutional/ExpiredNotice";
import LoadingState from "@/components/institutional/LoadingState";
import MainContent from "@/components/institutional/MainContent";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { getClienteById } from "@/services/clienteService";
import ContactSection from "@/components/institutional/ContactSection";

const SiteInstitucional = () => {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [expirado, setExpirado] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [activeColorPalette, setActiveColorPalette] = useState("default");
  const { scrollToSection, handleSectionClick } = useScrollToSection();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) return;

        console.log("Buscando cliente com ID:", id);
        setLogoLoading(true);
        
        const { cliente, error, logoUrl: fetchedLogoUrl } = await getClienteById(id);

        if (error) {
          throw error;
        }

        console.log("Dados do cliente recebidos:", cliente);
        setCliente(cliente);
        
        if (cliente) {
          const dataExpiracao = new Date(cliente.expiracao);
          if (dataExpiracao < new Date()) {
            setExpirado(true);
          }
          
          if (fetchedLogoUrl) {
            console.log("URL do logo:", fetchedLogoUrl);
            
            const img = new Image();
            img.onload = () => {
              console.log("Logo carregado com sucesso");
              setLogoUrl(fetchedLogoUrl);
              setLogoLoading(false);
            };
            
            img.onerror = () => {
              console.error("Erro ao carregar a imagem da URL:", fetchedLogoUrl);
              setLogoLoading(false);
            };
            
            img.src = fetchedLogoUrl;
          } else {
            console.log("Nenhum logo_url encontrado para o cliente");
            setLogoLoading(false);
          }
        }
      } catch (error: any) {
        console.error("Erro ao buscar cliente:", error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar os dados da empresa.",
        });
        setLogoLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();

    // Check if there's a hash in the URL on initial load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      // Use a timeout to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToSection(targetId);
      }, 1000);
    }
  }, [id, toast, scrollToSection]);

  const handleVoltar = () => {
    navigate("/");
  };

  const handleColorPaletteChange = (palette: string) => {
    setActiveColorPalette(palette);
    
    document.documentElement.classList.remove(
      "theme-default", 
      "theme-green", 
      "theme-purple", 
      "theme-orange"
    );
    
    document.documentElement.classList.add(`theme-${palette}`);
    
    toast({
      title: "Tema alterado",
      description: `O tema foi alterado para ${palette}.`,
    });
  };

  if (loading) {
    return <LoadingState message="Carregando dados..." submessage="Aguarde enquanto carregamos as informações da empresa" />;
  }

  if (expirado) {
    return <ExpiredNotice handleVoltar={handleVoltar} />;
  }

  if (!cliente) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Cliente não encontrado</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col theme-${activeColorPalette} overflow-x-hidden`}>
      <InstitutionalHeader 
        cliente={cliente}
        logoUrl={logoUrl}
        logoLoading={logoLoading}
        handleVoltar={handleVoltar}
        activeColorPalette={activeColorPalette}
        handleColorPaletteChange={handleColorPaletteChange}
        scrollToSection={scrollToSection}
      />
      
      <MainContent 
        cliente={cliente}
        logoUrl={logoUrl}
        handleSectionClick={handleSectionClick}
      />
      
      <ContactSection cliente={cliente} />
    </div>
  );
};

export default SiteInstitucional;
