
import React, { useState, useEffect } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cliente } from "@/types/database.types";
import ColorPaletteSelector from "@/components/ColorPaletteSelector";

interface InstitutionalHeaderProps {
  cliente: Cliente;
  logoUrl: string | null;
  logoLoading: boolean;
  handleVoltar: () => void;
  activeColorPalette: string;
  handleColorPaletteChange: (palette: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const InstitutionalHeader: React.FC<InstitutionalHeaderProps> = ({
  cliente,
  logoUrl,
  logoLoading,
  handleVoltar,
  activeColorPalette,
  handleColorPaletteChange,
  scrollToSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLogo = (sizingClass: string = "w-[200px] h-[50px]") => {
    if (logoLoading) {
      return <div className={`${sizingClass} rounded-lg bg-primary/20 animate-pulse`}></div>;
    }
    if (logoUrl) {
      return <Avatar className={`${sizingClass} border border-white/20`}>
          <AvatarImage src={logoUrl} alt={`Logo ${cliente?.nome_empresa}`} className="object-contain p-2" />
          <AvatarFallback className="bg-primary text-white font-bold text-2xl">
            {cliente?.nome_empresa.charAt(0)}
          </AvatarFallback>
        </Avatar>;
    }
    return <Avatar className={`${sizingClass}`}>
        <AvatarFallback className="bg-primary text-white font-bold text-2xl">
          {cliente?.nome_empresa.charAt(0)}
        </AvatarFallback>
      </Avatar>;
  };

  const scrollToTemplates = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault();
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {renderLogo(isScrolled ? "w-[180px] h-[45px]" : "w-[200px] h-[50px]")}
          
          {!logoUrl && <h1 className="text-xl md:text-2xl font-bold text-primary">
              {cliente.nome_empresa}
            </h1>}
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {!isMobile && <ColorPaletteSelector value={activeColorPalette} onChange={handleColorPaletteChange} size={isScrolled ? 'default' : 'sm'} />}
          
          <div className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#servicos" className="hover:text-primary/80 transition-colors" onClick={e => scrollToTemplates(e, 'servicos')}>Serviços</a>
            <a href="#sobre" className="hover:text-primary/80 transition-colors" onClick={e => scrollToTemplates(e, 'sobre')}>Sobre</a>
            <a href="#depoimentos" className="hover:text-primary/80 transition-colors" onClick={e => scrollToTemplates(e, 'depoimentos')}>Depoimentos</a>
            <a href="#localizacao" className="hover:text-primary/80 transition-colors" onClick={e => scrollToTemplates(e, 'localizacao')}>Localização</a>
            <a href="#contato" className="hover:text-primary/80 transition-colors" onClick={e => scrollToTemplates(e, 'contato')}>Contato</a>
          </div>
          
          {isMobile && <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-12">
                <SheetHeader>
                  <div className="flex justify-center mb-6">
                    {renderLogo("w-[220px] h-[55px]")}
                  </div>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-muted-foreground">Navegação</h3>
                    <div className="flex flex-col space-y-4">
                      <button onClick={() => scrollToSection('servicos')} className="flex items-center gap-2 text-left py-2 hover:text-primary transition-colors">
                        <span>Serviços</span>
                      </button>
                      <button onClick={() => scrollToSection('sobre')} className="flex items-center gap-2 text-left py-2 hover:text-primary transition-colors">
                        <span>Sobre</span>
                      </button>
                      <button onClick={() => scrollToSection('depoimentos')} className="flex items-center gap-2 text-left py-2 hover:text-primary transition-colors">
                        <span>Depoimentos</span>
                      </button>
                      <button onClick={() => scrollToSection('localizacao')} className="flex items-center gap-2 text-left py-2 hover:text-primary transition-colors">
                        <span>Localização</span>
                      </button>
                      <button onClick={() => scrollToSection('contato')} className="flex items-center gap-2 text-left py-2 hover:text-primary transition-colors">
                        <span>Contato</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Configurações</h3>
                    <div className="space-y-4">
                      <ColorPaletteSelector value={activeColorPalette} onChange={handleColorPaletteChange} className="w-full" />
                      
                      {/* Removed ValidityCountdown component */}
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
            </Sheet>}
          
          <Button variant="outline" onClick={handleVoltar} className="border-primary text-primary hover:bg-primary/10 hidden md:flex" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>
    </header>;
};

export default InstitutionalHeader;
