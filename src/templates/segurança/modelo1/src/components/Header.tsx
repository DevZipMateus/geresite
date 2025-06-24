
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isMobile = useMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['hero', 'services', 'about', 'team', 'projects', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const sectionToNavMap = {
    'hero': '/',
    'services': '/services',
    'about': '/about',
    'contact': '/contact'
  };
  
  const getLinkColor = (path) => {
    if (location.pathname !== '/') {
      return location.pathname === path ? 'text-yellow-500' : `${isScrolled ? 'text-construction-700' : 'text-white'} hover:text-yellow-400`;
    }
    
    const currentSection = Object.entries(sectionToNavMap).find(([_, navPath]) => navPath === path)?.[0];
    
    if (currentSection === activeSection) {
      if (activeSection === 'services') return 'text-yellow-500';
      if (activeSection === 'about') return 'text-yellow-500';
      if (activeSection === 'contact') return 'text-yellow-500';
      return 'text-yellow-500';
    }
    
    return `${isScrolled ? 'text-construction-700' : 'text-white'} hover:text-yellow-400`;
  };
  
  const getMenuButtonColor = () => {
    return isScrolled ? 'text-construction-700' : 'text-white';
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-construction-900 font-bold text-lg">FB</span>
            </div>
            <div>
              <span className="text-xl font-bold text-yellow-500">Construtora</span>
              <span className={`text-xl font-bold ml-1 ${isScrolled ? 'text-construction-800' : 'text-yellow-400'}`}>ForteBase</span>
            </div>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={`text-sm font-medium ${getLinkColor('/')} transition-colors duration-300`}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-sm font-medium ${getLinkColor('/about')} transition-colors duration-300`}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-sm font-medium ${getLinkColor('/services')} transition-colors duration-300`}>
                  Serviços
                </Link>
              </li>
              <li>
                <a href="#projects" className={`text-sm font-medium ${isScrolled ? 'text-construction-700' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#testimonials" className={`text-sm font-medium ${isScrolled ? 'text-construction-700' : 'text-white'} hover:text-yellow-400 transition-colors duration-300`}>
                  Depoimentos
                </a>
              </li>
              <li>
                <Link to="/contact" className={`text-sm font-medium ${getLinkColor('/contact')} transition-colors duration-300`}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          
          <button 
            className={`block md:hidden ${getMenuButtonColor()} hover:text-yellow-400 transition-colors`} 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 pt-20">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <a href="#projects" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-lg font-medium text-construction-700 hover:text-yellow-500 block py-2 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h3 className="text-sm font-semibold text-construction-600 mb-4">Contato</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contato@construtorafortebase.com.br" className="flex items-center text-construction-700 hover:text-yellow-500 transition-colors">
                  <Mail className="w-4 h-4 mr-2 text-yellow-500" />
                  contato@construtorafortebase.com.br
                </a>
                <a href="tel:+5511999999999" className="flex items-center text-construction-700 hover:text-yellow-500 transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-yellow-500" />
                  (11) 99999-9999
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-construction-600 mb-4">Siga-nos</h3>
              <div className="flex space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 p-2 rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
