
import React from 'react';
import Header from '@/components/Header';
import FormularioContato from '@/components/FormularioContato';
import BuscaSitesPorEmail from '@/components/BuscaSitesPorEmail';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Cadastro de Cliente
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Preencha o formulário abaixo para gerar seu template personalizado.
            Após o envio, você será redirecionado para uma página com seus dados.
          </p>
          <FormularioContato />
          
          <div className="my-10 flex items-center">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="mx-4 text-gray-500 font-medium">OU</p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          
          <BuscaSitesPorEmail />
        </div>
      </main>
    </div>
  );
};

export default Index;
