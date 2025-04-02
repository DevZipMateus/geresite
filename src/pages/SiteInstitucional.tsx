
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

          console.log("Cliente data:", data);
          
          if (data.logo_url) {
            setLogoLoading(true);
            setLogoError(null);
            
            try {
              console.log("Trying to fetch logo:", data.logo_url);
              
              const { data: bucketData, error: bucketError } = await supabase
                .storage
                .getBucket('logos');
                
              if (bucketError) {
                console.error("Bucket not found:", bucketError);
                await supabase.storage.createBucket('logos', {
                  public: true
                });
                console.log("Created logos bucket");
              }
              
              const { data: fileData } = supabase.storage
                .from('logos')
                .getPublicUrl(data.logo_url);
              
              if (fileData && fileData.publicUrl) {
                console.log("Logo public URL:", fileData.publicUrl);
                
                const img = new Image();
                img.onload = () => {
                  setLogoUrl(fileData.publicUrl);
                  setLogoLoading(false);
                };
                img.onerror = () => {
                  console.error("Error loading image from URL:", fileData.publicUrl);
                  setLogoError("Não foi possível carregar o logo");
                  setLogoLoading(false);
                };
                img.src = fileData.publicUrl;
              } else {
                throw new Error("Failed to get public URL");
              }
            } catch (logoError) {
              console.error("Error fetching logo:", logoError);
              setLogoError("Não foi possível carregar o logo");
              setLogoLoading(false);
            }
          } else {
            setLogoLoading(false);
          }
        }
      } catch (error) {
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
    return <LoadingState />;
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
      
      {!isMobile && (
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
