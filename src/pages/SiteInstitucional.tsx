
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
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [activeColorPalette, setActiveColorPalette] = useState("default");
  const { scrollToSection, handleSectionClick } = useScrollToSection();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) {
          setLoadingError("ID do cliente não fornecido");
          setLoading(false);
          return;
        }

        console.log("Fetching cliente with ID:", id);
        setLogoLoading(true);
        setLoadingError(null);
        
        const { cliente, error, logoUrl: fetchedLogoUrl } = await getClienteById(id);

        if (error) {
          console.error("Error fetching cliente:", error);
          setLoadingError(error.message || "Erro ao carregar dados da empresa");
          
          toast({
            variant: "destructive",
            title: "Erro",
            description: error.message || "Não foi possível carregar os dados da empresa.",
          });
          
          setLoading(false);
          setLogoLoading(false);
          return;
        }

        if (!cliente) {
          setLoadingError("Empresa não encontrada");
          setLoading(false);
          setLogoLoading(false);
          return;
        }

        console.log("Cliente data loaded:", cliente);
        setCliente(cliente);
        
        // Check expiration
        const dataExpiracao = new Date(cliente.expiracao);
        const now = new Date();
        
        if (dataExpiracao < now) {
          console.log("Cliente expired:", dataExpiracao, "vs", now);
          setExpirado(true);
        }
        
        // Handle logo loading
        if (fetchedLogoUrl) {
          console.log("Loading logo from URL:", fetchedLogoUrl);
          
          // Test if logo actually exists
          const img = new Image();
          img.onload = () => {
            console.log("Logo loaded successfully");
            setLogoUrl(fetchedLogoUrl);
            setLogoLoading(false);
          };
          
          img.onerror = () => {
            console.warn("Logo failed to load from URL:", fetchedLogoUrl);
            setLogoUrl(null); // Will show company name instead
            setLogoLoading(false);
          };
          
          // Set timeout for logo loading
          setTimeout(() => {
            if (logoLoading) {
              console.warn("Logo loading timeout");
              setLogoUrl(null);
              setLogoLoading(false);
            }
          }, 5000);
          
          img.src = fetchedLogoUrl;
        } else {
          console.log("No logo URL available");
          setLogoLoading(false);
        }
      } catch (error: any) {
        console.error("Unexpected error fetching cliente:", error);
        setLoadingError("Erro inesperado ao carregar dados");
        
        toast({
          variant: "destructive",
          title: "Erro Inesperado",
          description: "Algo deu errado. Tente atualizar a página.",
        });
        
        setLogoLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();

    // Handle URL hash navigation
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      console.log("URL has hash, will scroll to:", targetId);
      
      // Delay scroll to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(targetId);
      }, 1500);
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

  // Loading state
  if (loading) {
    return (
      <LoadingState 
        message="Carregando dados..." 
        submessage="Aguarde enquanto carregamos as informações da empresa" 
      />
    );
  }

  // Error state
  if (loadingError) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="max-w-md w-full bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erro</h1>
          <p className="text-lg text-gray-700 mb-6">{loadingError}</p>
          <button 
            onClick={handleVoltar}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Voltar à página inicial
          </button>
        </div>
      </div>
    );
  }

  // Expired state
  if (expirado) {
    return <ExpiredNotice handleVoltar={handleVoltar} />;
  }

  // Cliente not found
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
