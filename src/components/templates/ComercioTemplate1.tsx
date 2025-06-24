
import React from 'react';
import { Cliente } from '@/types/database.types';
import ComercioIndex from '@/templates/comercio/modelo1/src/pages/Index';

interface ComercioTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const ComercioTemplate1: React.FC<ComercioTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="comercio-template-1">
      <ComercioIndex cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default ComercioTemplate1;
