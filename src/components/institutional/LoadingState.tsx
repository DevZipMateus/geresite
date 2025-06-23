
import React from 'react';
import { Loader2, Wifi, AlertCircle } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  submessage?: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Carregando...",
  submessage = "Buscando informações do site",
  showRetry = false,
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center space-y-4 max-w-md">
        <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto" />
        
        <div className="space-y-2">
          <div className="text-xl font-medium text-gray-700">{message}</div>
          <p className="text-sm text-gray-500">{submessage}</p>
        </div>
        
        {showRetry && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-2 text-amber-600">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">Carregamento está demorando mais que o esperado</span>
            </div>
            
            <button 
              onClick={onRetry}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Tentar novamente
            </button>
            
            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
              <Wifi className="h-4 w-4" />
              <span>Verifique sua conexão com a internet</span>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-xs text-gray-400">
          Se o problema persistir, tente atualizar a página
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
