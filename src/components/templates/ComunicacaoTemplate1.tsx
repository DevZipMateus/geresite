
import React from 'react';
import { Cliente } from '@/types/database.types';
import ComunicacaoIndex from '@/templates/comunicação/modelo1/src/pages/Index';

interface ComunicacaoTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const ComunicacaoTemplate1: React.FC<ComunicacaoTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="comunicacao-template-1">
      <ComunicacaoIndex cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default ComunicacaoTemplate1;
