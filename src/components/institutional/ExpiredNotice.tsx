
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ExpiredNoticeProps {
  handleVoltar: () => void;
}

const ExpiredNotice: React.FC<ExpiredNoticeProps> = ({ handleVoltar }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Site Expirado</h1>
        <p className="text-lg text-gray-700 mb-4">
          Este site expirou. Os sites são válidos por apenas 24 horas a partir da data de criação.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Sites expirados são automaticamente removidos do sistema para manter o banco de dados otimizado.
        </p>
        <Button onClick={handleVoltar} variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Button>
      </div>
    </div>
  );
};

export default ExpiredNotice;
