
import React from 'react';
import { Cliente } from '@/types/database.types';
import GenericoIndex from '@/templates/generico/modelo1/src/pages/Index';

interface GenericoTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const GenericoTemplate1: React.FC<GenericoTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="generico-template-1">
      <GenericoIndex cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default GenericoTemplate1;
