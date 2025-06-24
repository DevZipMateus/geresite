
import React from 'react';
import { Cliente } from '@/types/database.types';
import ModaIndex from '@/templates/moda/src/pages/Index';

interface ModaTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const ModaTemplate1: React.FC<ModaTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="moda-template-1">
      <ModaIndex cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default ModaTemplate1;
