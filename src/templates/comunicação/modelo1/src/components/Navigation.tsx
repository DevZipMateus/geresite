import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleEnrollClick = () => {
    openWhatsApp("Olá! Gostaria de me inscrever nos workshops da Impulso Empreendedor.");
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-6 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between my-0 py-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Impulso<span className="text-cyan-300">Empreendedor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-cyan-300 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-white/80 hover:text-cyan-300 transition-colors">
              Cursos
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-white/80 hover:text-cyan-300 transition-colors">
              Nossos Impactos
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-cyan-300 transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-cyan-300 transition-colors">
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleEnrollClick} className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold border-0">
              Inscreva-se Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/20 backdrop-blur-md rounded-lg border border-white/20 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-cyan-300 transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-white/80 hover:text-cyan-300 transition-colors text-left">
                Cursos
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-white/80 hover:text-cyan-300 transition-colors text-left">
                Nossos Impactos
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-cyan-300 transition-colors text-left">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-cyan-300 transition-colors text-left">
                Contato
              </button>
              <Button onClick={handleEnrollClick} className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold border-0 mt-4">
                Inscreva-se Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
