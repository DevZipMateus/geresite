
import React from 'react';
import { Cliente } from '@/types/database.types';
import TransportesIndex from '@/templates/transportes/modelo1/src/pages/Index';

interface TransportesTemplate1Props {
  cliente: Cliente;
  logoUrl?: string | null;
}

const TransportesTemplate1: React.FC<TransportesTemplate1Props> = ({ cliente, logoUrl }) => {
  return (
    <div className="transportes-template-1">
      <TransportesIndex cliente={cliente} logoUrl={logoUrl} />
    </div>
  );
};

export default TransportesTemplate1;
