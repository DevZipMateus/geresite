
import React from 'react';
import { Cliente } from '@/types/database.types';
import TecnologiaIndex from '@/templates/tecnologia/modelo2/src/pages/Index';

interface TecnologiaTemplate2Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const TecnologiaTemplate2: React.FC<TecnologiaTemplate2Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="tecnologia-template-2">
      <TecnologiaIndex />
    </div>
  );
};

export default TecnologiaTemplate2;
