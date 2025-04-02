
import React from 'react';
import { Cliente } from '@/types/database.types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface InstitutionalFooterProps {
  cliente: Cliente;
  logoUrl: string | null;
}

const InstitutionalFooter: React.FC<InstitutionalFooterProps> = ({
  cliente,
  logoUrl
}) => {
  const renderLogo = (sizingClass: string = "w-[200px] h-[50px]") => {
    if (logoUrl) {
      return (
        <Avatar className={`${sizingClass} brightness-[1.15] border-2 border-white/20 mb-2`}>
          <AvatarImage 
            src={logoUrl} 
            alt={`Logo ${cliente.nome_empresa}`}
            className="object-contain p-2"
          />
          <AvatarFallback className="bg-primary text-white text-xl font-bold">
            {cliente.nome_empresa.charAt(0)}
          </AvatarFallback>
        </Avatar>
      );
    }
    
    return (
      <Avatar className={`${sizingClass} brightness-[1.15]`}>
        <AvatarFallback className="bg-primary text-white text-xl font-bold">
          {cliente.nome_empresa.charAt(0)}
        </AvatarFallback>
      </Avatar>
    );
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            {renderLogo()}
            <h2 className="text-2xl font-bold mt-4">{cliente.nome_empresa}</h2>
            <p className="text-white/80 mt-2 text-center md:text-left">
              Soluções profissionais para seu negócio
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone size={18} className="text-white/90" />
                <span className="text-white/80">{cliente.telefone}</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail size={18} className="text-white/90" />
                <span className="text-white/80">{cliente.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} {cliente.nome_empresa}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default InstitutionalFooter;
