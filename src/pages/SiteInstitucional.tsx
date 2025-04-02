
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
          
          // Logo fetch logic
          if (data.logo_url) {
            setLogoLoading(true);
            setLogoError(null);
            
            try {
              console.log("Trying to fetch logo:", data.logo_url);
              
              // Check if logos bucket exists, create if not
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
              
              // Get public URL for the logo
              const { data: fileData } = supabase.storage
                .from('logos')
                .getPublicUrl(data.logo_url);
              
              if (fileData && fileData.publicUrl) {
                console.log("Logo public URL:", fileData.publicUrl);
                
                // Test image loading with a timeout
                const img = new Image();
                img.onload = () => {
                  setLogoUrl(fileData.publicUrl);
                  setLogoLoading(false);
                  toast({
                    title: "Logo carregado",
                    description: "O logo da empresa foi carregado com sucesso.",
                  });
                };
                img.onerror = () => {
                  console.error("Error loading image from URL:", fileData.publicUrl);
                  setLogoError("Não foi possível carregar o logo (URL inválida)");
                  setLogoLoading(false);
                };
                
                // Set a timeout to handle cases where the image might take too long
                const timeoutId = setTimeout(() => {
                  if (logoLoading) {
                    setLogoError("Tempo esgotado ao carregar o logo");
                    setLogoLoading(false);
                  }
                }, 10000);
                
                img.src = fileData.publicUrl;
                
                // Clear timeout when image loads or errors
                img.onload = () => {
                  clearTimeout(timeoutId);
                  setLogoUrl(fileData.publicUrl);
                  setLogoLoading(false);
                };
                
                img.onerror = () => {
                  clearTimeout(timeoutId);
                  setLogoError("Não foi possível carregar o logo (URL inválida)");
                  setLogoLoading(false);
                };
              } else {
                throw new Error("Failed to get public URL");
              }
            } catch (logoError) {
              console.error("Error fetching logo:", logoError);
              setLogoError("Não foi possível carregar o logo (erro interno)");
              setLogoLoading(false);
            }
          } else {
            console.log("No logo URL found in client data");
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

  // Add a debug section for development
  const DevLogoDebug = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-4 rounded max-w-xs text-xs">
      <h3 className="font-bold mb-2">Debug Info:</h3>
      <p>Logo URL: {cliente.logo_url || 'Não definido'}</p>
      <p>Logo carregado: {logoUrl ? 'Sim' : 'Não'}</p>
      <p>Estado: {logoLoading ? 'Carregando...' : logoError ? 'Erro' : logoUrl ? 'Carregado' : 'Não disponível'}</p>
      {logoUrl && (
        <div className="mt-2">
          <p className="mb-1">Preview:</p>
          <div className="bg-white p-2 rounded">
            <img src={logoUrl} alt="Logo preview" className="h-10 w-auto mx-auto" />
          </div>
        </div>
      )}
    </div>
  );

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
      
      {/* Logo Display Test Area */}
      {!logoUrl && (
        <div className="bg-gray-100 py-8 px-4 mt-20 text-center">
          <h2 className="text-xl font-semibold mb-4">Teste de Logo</h2>
          <p className="mb-4 text-gray-600">
            {logoLoading 
              ? "Carregando logo..." 
              : logoError 
              ? `Erro ao carregar logo: ${logoError}` 
              : "Nenhum logo foi configurado para essa empresa."
            }
          </p>
          <div className="flex justify-center">
            <Avatar className="h-24 w-24 border-2 border-primary">
              <AvatarImage 
                src={logoUrl || ''} 
                alt={`Logo ${cliente.nome_empresa}`}
                className="object-contain"
              />
              <AvatarFallback className="bg-primary text-white text-3xl font-bold">
                {cliente.nome_empresa.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
      
      {!isMobile && (
        <div className="fixed top-20 right-4 z-40 md:top-24 md:right-8">
          <ValidityCountdown expirationDate={cliente.expiracao} />
        </div>
      )}
      
      {/* Development only - debug panel */}
      {import.meta.env.DEV && <DevLogoDebug />}

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
