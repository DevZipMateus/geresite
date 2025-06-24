
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comércio <span className="text-yellow-400">Modelo 1</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Soluções comerciais modernas para impulsionar suas vendas e conquistar mais clientes.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-200">
              Este template está sendo desenvolvido. Em breve você terá acesso a uma solução completa
              para comércios com design atrativo e funcionalidades voltadas para vendas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
