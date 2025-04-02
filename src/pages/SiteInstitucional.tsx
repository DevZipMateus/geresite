import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Cliente } from "@/types/database.types";
import { useToast } from "@/hooks/use-toast";
import ValidityCountdown from "@/components/ValityCountdown";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";
import { useIsMobile } from "@/hooks/use-mobile";
import InstitutionalHeader from "@/components/institutional/InstitutionalHeader";
import ServicesSection from "@/components/institutional/ServicesSection";
import LocationSection from "@/components/institutional/LocationSection";
import ContactSection from "@/components/institutional/ContactSection";
import InstitutionalFooter from "@/components/institutional/InstitutionalFooter";
import ExpiredNotice from "@/components/institutional/ExpiredNotice";
import LoadingState from "@/components/institutional/LoadingState";
import LogoError from "@/components/institutional/LogoError";

const SiteInstitucional = () => {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [expirado, setExpirado] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoError, setLogoError] = useState<string | null>(null);
  const [activeColorPalette, setActiveColorPalette] = useState("default");
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) return;

        console.log("Buscando cliente com ID:", id);
        
        const { data, error } = await supabase
          .from("clientes")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        console.log("Dados do cliente recebidos:", data);
        setCliente(data);
        
        if (data) {
          const dataExpiracao = new Date(data.expiracao);
          if (dataExpiracao < new Date()) {
            setExpirado(true);
          }
          
          // Logo fetch logic
          if (data.logo_url) {
            console.log("Logo URL encontrado:", data.logo_url);
            setLogoLoading(true);
            setLogoError(null);
            
            try {
              // Caso especial para o ID 7 (usando URL direto do bucket)
              if (id === "7") {
                const directUrl = "https://svenmlcxebqafsxlayez.supabase.co/storage/v1/object/public/logos/7/logo.png";
                console.log("Usando URL direto para ID 7:", directUrl);
                
                // Testar o carregamento da imagem
                const img = new Image();
                img.onload = () => {
                  console.log("Logo carregado com sucesso (URL direto)");
                  setLogoUrl(directUrl);
                  setLogoLoading(false);
                  toast({
                    title: "Logo carregado",
                    description: "O logo da empresa foi carregado com sucesso.",
                  });
                };
                
                img.onerror = () => {
                  console.error("Erro ao carregar a imagem da URL direta:", directUrl);
                  setLogoError("Não foi possível carregar o logo (URL direta inválida)");
                  setLogoLoading(false);
                };
                
                img.src = directUrl;
              } else {
                // Para outros IDs, usar o padrão de storage do Supabase
                if (data.logo_url) {
                  // Construir a URL pública para a imagem
                  const { data: fileData } = supabase.storage
                    .from('logos')
                    .getPublicUrl(data.logo_url);
                  
                  if (fileData && fileData.publicUrl) {
                    console.log("URL pública do logo:", fileData.publicUrl);
                    
                    // Testar o carregamento da imagem
                    const img = new Image();
                    img.onload = () => {
                      console.log("Logo carregado com sucesso");
                      setLogoUrl(fileData.publicUrl);
                      setLogoLoading(false);
                      toast({
                        title: "Logo carregado",
                        description: "O logo da empresa foi carregado com sucesso.",
                      });
                    };
                    
                    img.onerror = () => {
                      console.error("Erro ao carregar a imagem da URL:", fileData.publicUrl);
                      setLogoError("Não foi possível carregar o logo (URL inválida)");
                      setLogoLoading(false);
                    };
                    
                    img.src = fileData.publicUrl;
                  } else {
                    throw new Error("Falha ao obter URL pública");
                  }
                } else {
                  setLogoLoading(false);
                }
              }
            } catch (logoError: any) {
              console.error("Erro ao buscar logo:", logoError);
              setLogoError(`Não foi possível carregar o logo: ${logoError.message || 'erro interno'}`);
              setLogoLoading(false);
            }
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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
      
      {logoError && <LogoError error={logoError} logoUrl={cliente.logo_url} />}
      
      {/* Remove ValidityCountdown from the web version while keeping it in mobile */}
      {isMobile && (
        <div className="fixed top-20 right-4 z-40 md:top-24 md:right-8">
          <ValidityCountdown expirationDate={cliente.expiracao} />
        </div>
      )}
      
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

      <ContactSection cliente={cliente} />

      <InstitutionalFooter cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default SiteInstitucional;
