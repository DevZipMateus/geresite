
import React from 'react';
import { Cliente } from '@/types/database.types';
import TecnologiaIndex from '@/templates/tecnologia/modelo1/src/pages/Index';

interface TecnologiaTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const TecnologiaTemplate1: React.FC<TecnologiaTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="tecnologia-template-1">
      <TecnologiaIndex />
    </div>
  );
};

export default TecnologiaTemplate1;
