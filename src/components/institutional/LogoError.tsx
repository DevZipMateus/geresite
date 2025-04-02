
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface LogoErrorProps {
  error: string;
  logoUrl?: string;
}

const LogoError: React.FC<LogoErrorProps> = ({ error, logoUrl }) => {
  return (
    <div className="fixed top-24 left-4 z-50 bg-red-100 p-4 border border-red-300 rounded shadow-md max-w-md">
      <div className="flex items-start gap-2">
        <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-red-700">Logo Error: {error}</p>
          {logoUrl && <p className="text-sm mt-1 break-all">Logo URL in DB: {logoUrl}</p>}
          <p className="text-sm mt-2 text-gray-700">
            Se este erro persistir, verifique se o logo foi carregado corretamente e se o URL está salvo no banco de dados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoError;
