
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const SmartHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Smart<span className="text-green-400">Home</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-green-400 transition-colors">Início</a>
            <a href="#services" className="text-white hover:text-green-400 transition-colors">Serviços</a>
            <a href="#how-it-works" className="text-white hover:text-green-400 transition-colors">Como Funciona</a>
            <a href="#gallery" className="text-white hover:text-green-400 transition-colors">Galeria</a>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contato</a>
          </nav>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-green-400 transition-colors">Início</a>
              <a href="#services" className="text-white hover:text-green-400 transition-colors">Serviços</a>
              <a href="#how-it-works" className="text-white hover:text-green-400 transition-colors">Como Funciona</a>
              <a href="#gallery" className="text-white hover:text-green-400 transition-colors">Galeria</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SmartHeader;
