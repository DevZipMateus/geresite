
import React from 'react';
import { Cliente } from '@/types/database.types';
import AlimenticiaIndex from '@/templates/alimenticia/modelo1/src/pages/Index';

interface AlimenticiaTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const AlimenticiaTemplate1: React.FC<AlimenticiaTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="alimenticia-template-1">
      <AlimenticiaIndex />
    </div>
  );
};

export default AlimenticiaTemplate1;
