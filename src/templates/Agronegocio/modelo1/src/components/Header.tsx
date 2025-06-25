
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface HeaderProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
  logoUrl?: string | null;
}

const Header: React.FC<HeaderProps> = ({ cliente, logoUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const telefone = cliente?.telefone || '5567987654321';
    const nomeEmpresa = cliente?.nome_empresa || 'AgroTech Implementos';
    window.open(`https://wa.me/${telefone}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20implementos%20agrícolas%20da%20${encodeURIComponent(nomeEmpresa)}.`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/95 backdrop-blur-md shadow-nav' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="relative z-20 cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
              <span className="text-primary">{cliente?.nome_empresa?.split(' ')[0] || 'AgroTech'}</span> {cliente?.nome_empresa?.split(' ').slice(1).join(' ') || 'Implementos'}
            </h1>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks scrollToSection={scrollToSection} />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile scrollToSection={scrollToSection} />
                  <SheetClose asChild>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                    >
                      Solicitar Orçamento
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  scrollToSection: (sectionId: string) => void;
}

const NavLinks = ({ mobile, scrollToSection }: NavLinksProps) => {
  const links = [
    { name: 'Início', sectionId: 'hero' },
    { name: 'Categorias', sectionId: 'categories' },
    { name: 'Produtos', sectionId: 'products' },
    { name: 'Marcas', sectionId: 'brands' },
    { name: 'Sobre Nós', sectionId: 'about' },
    { name: 'Contato', sectionId: 'contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <button
          key={link.name}
          onClick={() => scrollToSection(link.sectionId)}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' 
              : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
            }`}
        >
          {link.name}
        </button>
      ))}
    </>
  );
};

export default Header;
