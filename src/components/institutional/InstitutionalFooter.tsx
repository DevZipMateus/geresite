
import React from 'react';
import { Cliente } from '@/types/database.types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface InstitutionalFooterProps {
  cliente: Cliente;
  logoUrl: string | null;
}

const InstitutionalFooter: React.FC<InstitutionalFooterProps> = ({
  cliente,
  logoUrl
}) => {
  const renderLogo = (sizingClass: string = "h-16 w-16") => {
    if (logoUrl) {
      return (
        <div className="flex flex-col items-center">
          <Avatar className={`${sizingClass} brightness-[1.15] border-2 border-white/20 mb-2`}>
            <AvatarImage 
              src={logoUrl} 
              alt={`Logo ${cliente.nome_empresa}`}
              className="object-contain"
            />
            <AvatarFallback className="bg-primary text-white text-xl font-bold">
              {cliente.nome_empresa.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-white/70 mt-1">Logo da empresa</p>
        </div>
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
        <div className="flex flex-col items-center mb-8">
          {renderLogo()}
          <h2 className="text-2xl font-bold mt-4">{cliente.nome_empresa}</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80">
              {cliente.email} • {cliente.telefone}
            </p>
          </div>
          <div>
            <p className="text-white/70">
              © {new Date().getFullYear()} {cliente.nome_empresa}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InstitutionalFooter;
