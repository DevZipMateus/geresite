
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Alimentícia <span className="text-yellow-300">Modelo 1</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Desperte o apetite dos seus clientes com um site que valoriza sua marca gastronômica.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-100">
              Este template está sendo desenvolvido especialmente para restaurantes, lanchonetes
              e empresas do setor alimentício com foco na experiência gastronômica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
