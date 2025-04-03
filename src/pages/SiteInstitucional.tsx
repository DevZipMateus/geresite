
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Cliente } from "@/types/database.types";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";
import { useIsMobile } from "@/hooks/use-mobile";
import InstitutionalHeader from "@/components/institutional/InstitutionalHeader";
import ServicesSection from "@/components/institutional/ServicesSection";
import LocationSection from "@/components/institutional/LocationSection";
import InstitutionalFooter from "@/components/institutional/InstitutionalFooter";
import ExpiredNotice from "@/components/institutional/ExpiredNotice";
import LoadingState from "@/components/institutional/LoadingState";
import { getClienteById } from "@/services/clienteService";

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
  const isMobile = useIsMobile();

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
  }, [id, toast]);

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

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    console.log("Available sections:", Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    
    // Add a delay to ensure DOM is fully rendered
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (!section) {
        console.error(`Section with ID "${sectionId}" not found`);
        return;
      }
      
      // Get header height to offset scroll position
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      console.log("Header height:", headerHeight);
      
      // Calculate position accounting for header
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionTop - headerHeight - 20;
      
      console.log("Section position:", sectionTop);
      console.log("Scrolling to position:", offsetPosition);
      
      // Perform scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 300); // Increased delay for better reliability
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
      
      <WhatsAppButton phoneNumber={cliente.telefone} />

      <HeroSection scrollToTemplates={(e, sectionId) => {
        e.preventDefault();
        if (sectionId) scrollToSection(sectionId);
      }} />

      <ServicesSection />

      <AboutUs />

      <section id="depoimentos" className="py-16 bg-gray-50">
        <Testimonials />
      </section>

      <LocationSection />

      <InstitutionalFooter cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default SiteInstitucional;
