
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Segurança Pro
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Início
            </a>
            <a href="#services" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Serviços
            </a>
            <a href="#about" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Sobre
            </a>
            <a href="#contact" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">
                Início
              </a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">
                Serviços
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">
                Sobre
              </a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
