
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
  logoUrl?: string | null;
}

const Footer: React.FC<FooterProps> = ({ cliente, logoUrl }) => {
  const nomeEmpresa = cliente?.nome_empresa || 'URBNSZN';
  const telefone = cliente?.telefone || '5511999999999';
  const email = cliente?.email || 'contato@urbnszn.com';

  const handleWhatsAppContact = () => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Gostaria de entrar em contato com a ${nomeEmpresa}.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-urban-black border-t border-urban-neon/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              {logoUrl ? (
                <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-urban-neon"></div>
              )}
              <span className="text-white font-orbitron font-black text-xl sm:text-2xl tracking-wider">
                {nomeEmpresa}
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md">
              Streetwear autêntico que nasce das ruas e fala a linguagem da cidade. 
              Vista sua atitude, expresse sua individualidade.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-urban-neon hover:text-urban-flame transition-colors cursor-pointer" />
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-urban-neon hover:text-urban-flame transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-urban-neon hover:text-urban-flame transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-urban-neon hover:text-urban-flame transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">NAVEGAÇÃO</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li><a href="#collection" className="hover:text-urban-neon transition-colors">Coleção</a></li>
              <li><a href="#lookbook" className="hover:text-urban-neon transition-colors">Lookbook</a></li>
              <li><a href="#about" className="hover:text-urban-neon transition-colors">Sobre</a></li>
              <li><button onClick={handleWhatsAppContact} className="hover:text-urban-neon transition-colors">Contato</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">CONTATO</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li>
                <button onClick={handleWhatsAppContact} className="hover:text-urban-neon transition-colors">
                  {telefone}
                </button>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-urban-neon transition-colors">
                  {email}
                </a>
              </li>
              <li className="text-gray-500">
                Atendimento via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-urban-neon/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2024 {nomeEmpresa}. Todos os direitos reservados.</p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-urban-neon transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-urban-neon transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
