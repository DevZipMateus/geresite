
import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">
              Secure<span className="text-blue-400">Pro</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-white hover:text-blue-400 transition-colors">Início</a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Depoimentos</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contato</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Orçamento Grátis
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="text-white hover:text-blue-400 transition-colors">Início</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Serviços</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projetos</a>
              <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors">Depoimentos</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contato</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Orçamento Grátis
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
