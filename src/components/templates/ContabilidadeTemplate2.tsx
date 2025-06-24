
import React from 'react';
import { Cliente } from '@/types/database.types';
import ContabilidadeIndex from '@/templates/contabilidade/modelo2/src/pages/Index';

interface ContabilidadeTemplate2Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const ContabilidadeTemplate2: React.FC<ContabilidadeTemplate2Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="contabilidade-template-2">
      <ContabilidadeIndex />
    </div>
  );
};

export default ContabilidadeTemplate2;
