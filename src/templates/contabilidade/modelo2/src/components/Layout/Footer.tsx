
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>contato@contabilidade.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-amber-400/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} ContaPlus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
