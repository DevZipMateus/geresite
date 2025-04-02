
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
      <div className="text-xl font-medium text-gray-700">Carregando...</div>
      <p className="text-sm text-gray-500 mt-2">Buscando informações do site</p>
    </div>
  );
};

export default LoadingState;
