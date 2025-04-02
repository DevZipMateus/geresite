
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  submessage?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Carregando...",
  submessage = "Buscando informações do site"
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
      <div className="text-xl font-medium text-gray-700">{message}</div>
      <p className="text-sm text-gray-500 mt-2">{submessage}</p>
    </div>
  );
};

export default LoadingState;
