
import React from 'react';
import { Cliente } from '@/types/database.types';
import ContabilidadeIndex from '@/templates/contabilidade/modelo1/src/pages/Index';

interface ContabilidadeTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const ContabilidadeTemplate1: React.FC<ContabilidadeTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="contabilidade-template-1">
      <ContabilidadeIndex />
    </div>
  );
};

export default ContabilidadeTemplate1;
