
import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nomeEmpresa = cliente?.nome_empresa || 'URBNSZN';
  const telefone = cliente?.telefone || '5511999999999';

  const handleWhatsAppContact = () => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Gostaria de entrar em contato com a ${nomeEmpresa}.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="relative z-50 bg-urban-black/95 backdrop-blur-sm border-b border-urban-neon/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            ) : (
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-urban-neon"></div>
            )}
            <span className="text-white font-orbitron font-black text-lg sm:text-xl md:text-2xl tracking-wider">
              {nomeEmpresa}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#collection" className="text-white hover:text-urban-neon transition-colors font-medium">
              COLEÇÃO
            </a>
            <a href="#lookbook" className="text-white hover:text-urban-neon transition-colors font-medium">
              LOOKBOOK
            </a>
            <a href="#about" className="text-white hover:text-urban-neon transition-colors font-medium">
              SOBRE
            </a>
            <button 
              onClick={handleWhatsAppContact}
              className="bg-urban-neon text-urban-black px-4 lg:px-6 py-2 font-bold hover:bg-urban-flame transition-colors"
            >
              CONTATO
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-urban-neon transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-urban-black/95 backdrop-blur-sm border-t border-urban-neon/20">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <a 
                href="#collection" 
                className="text-white hover:text-urban-neon transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                COLEÇÃO
              </a>
              <a 
                href="#lookbook" 
                className="text-white hover:text-urban-neon transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LOOKBOOK
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-urban-neon transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SOBRE
              </a>
              <button 
                onClick={() => {
                  handleWhatsAppContact();
                  setIsMenuOpen(false);
                }}
                className="bg-urban-neon text-urban-black px-6 py-2 font-bold hover:bg-urban-flame transition-colors self-start"
              >
                CONTATO
              </button>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-urban-neon/20">
                <Instagram className="text-urban-neon h-5 w-5" />
                <Facebook className="text-urban-neon h-5 w-5" />
                <Twitter className="text-urban-neon h-5 w-5" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
