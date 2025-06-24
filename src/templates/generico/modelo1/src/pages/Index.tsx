
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Genérico <span className="text-blue-400">Modelo 1</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Template versátil que se adapta a qualquer tipo de negócio com design clean e profissional.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-300">
              Este template está sendo desenvolvido com foco na versatilidade,
              sendo adaptável para qualquer segmento de mercado com design moderno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
