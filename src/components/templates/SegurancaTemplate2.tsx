
import React from 'react';
import { Cliente } from '@/types/database.types';
import SegurancaIndex from '@/templates/segurança/modelo2/src/pages/Index';

interface SegurancaTemplate2Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const SegurancaTemplate2: React.FC<SegurancaTemplate2Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="seguranca-template-2">
      <SegurancaIndex />
    </div>
  );
};

export default SegurancaTemplate2;
