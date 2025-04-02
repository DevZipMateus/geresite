import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Cliente } from "@/types/database.types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, User, MapPin, Building, Calendar, Clock, Palette, Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ValidityCountdown from "@/components/ValityCountdown";
import Map from "@/components/Map";
import WhatsAppButton from "@/components/WhatsAppButton";
import ColorPaletteSelector from "@/components/ColorPaletteSelector";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const SiteInstitucional = () => {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [expirado, setExpirado] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoError, setLogoError] = useState<string | null>(null);
  const [activeColorPalette, setActiveColorPalette] = useState("default");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const renderLogo = (sizingClass: string = "h-10", brightnessClass: string = "") => {
    if (logoLoading) {
      return <div className={`${sizingClass} w-10 rounded-full bg-primary/20 animate-pulse`}></div>;
    }
    
    if (logoUrl) {
      return (
        <img 
          src={logoUrl} 
          alt={`Logo ${cliente?.nome_empresa}`}
          className={`${sizingClass} object-contain ${brightnessClass}`}
          onError={(e) => {
            console.error("Logo failed to load at render time");
            setLogoUrl(null);
            setLogoError(`Failed to load image at render time: ${Date.now()}`);
          }}
        />
      );
    }
    
    return (
      <div className={`w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl`}>
        {cliente?.nome_empresa.charAt(0)}
      </div>
    );
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTemplates = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault();
    if (sectionId) {
      scrollToSection(sectionId);
    }
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
    <div className={`min-h-screen flex flex-col theme-${activeColorPalette} overflow-x-hidden`}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent text-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {renderLogo(
              "h-10", 
              isScrolled ? 'brightness-100' : 'brightness-[1.15]'
            )}
            
            {!logoUrl && (
              <h1 className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                {cliente.nome_empresa}
              </h1>
            )}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {!isMobile && (
              <ColorPaletteSelector 
                value={activeColorPalette}
                onChange={handleColorPaletteChange}
                size={isScrolled ? 'default' : 'sm'}
                className={isScrolled ? '' : 'bg-white/10 backdrop-blur-sm rounded-md px-2 py-1'}
              />
            )}
            
            <div className={`hidden md:flex items-center gap-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <a href="#servicos" className="hover:text-primary/80 transition-colors">Serviços</a>
              <a href="#sobre" className="hover:text-primary/80 transition-colors">Sobre</a>
              <a href="#depoimentos" className="hover:text-primary/80 transition-colors">Depoimentos</a>
              <a href="#localizacao" className="hover:text-primary/80 transition-colors">Localização</a>
              <a href="#contato" className="hover:text-primary/80 transition-colors">Contato</a>
            </div>
            
            {isMobile && (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={isScrolled ? "text-primary" : "text-white"}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="pt-12">
                  <SheetHeader>
                    <div className="flex justify-center mb-2">
                      {renderLogo("h-12 w-auto")}
                    </div>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-sm font-medium text-muted-foreground">Navegação</h3>
                      <div className="flex flex-col space-y-3">
                        <button onClick={() => scrollToSection('servicos')} className="flex items-center gap-2 text-left">
                          <span className="text-primary">Serviços</span>
                        </button>
                        <button onClick={() => scrollToSection('sobre')} className="flex items-center gap-2 text-left">
                          <span className="text-primary">Sobre</span>
                        </button>
                        <button onClick={() => scrollToSection('depoimentos')} className="flex items-center gap-2 text-left">
                          <span className="text-primary">Depoimentos</span>
                        </button>
                        <button onClick={() => scrollToSection('localizacao')} className="flex items-center gap-2 text-left">
                          <span className="text-primary">Localização</span>
                        </button>
                        <button onClick={() => scrollToSection('contato')} className="flex items-center gap-2 text-left">
                          <span className="text-primary">Contato</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">Configurações</h3>
                      <div className="space-y-4">
                        <ColorPaletteSelector 
                          value={activeColorPalette}
                          onChange={handleColorPaletteChange}
                          className="w-full"
                        />
                        
                        <div className="pt-4">
                          <ValidityCountdown expirationDate={cliente.expiracao} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t">
                      <Button onClick={handleVoltar} variant="outline" className="w-full">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para a página inicial
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            
            <Button 
              variant={isScrolled ? "outline" : "secondary"} 
              onClick={handleVoltar}
              className={`${isScrolled ? "border-primary text-primary hover:bg-primary/10" : "text-primary hover:bg-white/90"} hidden md:flex`}
              size="sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </div>
        </div>
      </header>
      
      {logoError && (
        <div className="fixed top-24 left-4 z-50 bg-red-100 p-2 text-xs border border-red-300 rounded">
          <p>Logo Error: {logoError}</p>
          {cliente.logo_url && <p>Logo URL in DB: {cliente.logo_url}</p>}
        </div>
      )}
      
      {!isMobile && (
        <div className="fixed top-20 right-4 z-40 md:top-24 md:right-8">
          <ValidityCountdown expirationDate={cliente.expiracao} />
        </div>
      )}

      <WhatsAppButton phoneNumber={cliente.telefone} />

      <HeroSection scrollToTemplates={scrollToTemplates} />

      <section id="servicos" className="py-16 bg-gray-50">
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

      <AboutUs />

      <section id="depoimentos" className="py-16 bg-gray-50">
        <Testimonials />
      </section>

      <section id="localizacao" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Localização</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary">Endereço</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-gray-700">R. do Acampamento, 380</p>
                    <p className="text-gray-700">Centro, Santa Maria - RS</p>
                    <p className="text-gray-700">CEP: 97050-001</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-2">Horário de Funcionamento</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-gray-700">Segunda a Sexta: 9h - 18h</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-gray-700">Sábado: 9h - 13h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <Map />
              <div className="mt-4 text-center text-sm text-gray-500">
                <a 
                  href="https://maps.app.goo.gl/vsFTxh19pfP6YTGe9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center justify-center gap-1"
                >
                  <MapPin className="h-4 w-4" />
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco para saber mais sobre nossos serviços.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 bg-primary/10 p-4 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{cliente.telefone}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 p-4 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{cliente.email}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              {renderLogo("h-8", "brightness-[1.15]")}
              <h2 className="text-xl font-bold">{cliente.nome_empresa}</h2>
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
