
import React from 'react';
import { Cliente } from '@/types/database.types';
import SegurancaIndex from '@/templates/segurança/modelo1/src/pages/Index';

interface SegurancaTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const SegurancaTemplate1: React.FC<SegurancaTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="seguranca-template-1">
      <SegurancaIndex />
    </div>
  );
};

export default SegurancaTemplate1;
