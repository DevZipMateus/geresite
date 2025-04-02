
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
  const renderLogo = (sizingClass: string = "h-8 w-8") => {
    if (logoUrl) {
      return (
        <Avatar className={`${sizingClass} brightness-[1.15]`}>
          <AvatarImage 
            src={logoUrl} 
            alt={`Logo ${cliente.nome_empresa}`}
            className="object-contain"
          />
          <AvatarFallback className="bg-primary text-white font-bold">
            {cliente.nome_empresa.charAt(0)}
          </AvatarFallback>
        </Avatar>
      );
    }
    
    return (
      <Avatar className={`${sizingClass} brightness-[1.15]`}>
        <AvatarFallback className="bg-primary text-white font-bold">
          {cliente.nome_empresa.charAt(0)}
        </AvatarFallback>
      </Avatar>
    );
  };

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            {renderLogo()}
            <h2 className="text-xl font-bold">{cliente.nome_empresa}</h2>
          </div>
          <div className="mt-4 md:mt-0">
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
