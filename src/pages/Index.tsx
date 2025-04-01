
import React from 'react';
import Header from '@/components/Header';
import FormularioContato from '@/components/FormularioContato';

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
        </div>
      </main>
    </div>
  );
};

export default Index;
