
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-blue-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transportes <span className="text-green-400">Modelo 1</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Conecte destinos e transporte seus clientes com confiança e eficiência.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-200">
              Este template está sendo desenvolvido para empresas de transporte
              e logística com design robusto e funcionalidades específicas do setor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
