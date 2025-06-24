
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tecnologia <span className="text-cyan-400">Modelo 1</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Soluções tecnológicas inovadoras para impulsionar o seu negócio para o futuro digital.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-300">
              Este template está sendo desenvolvido. Em breve você terá acesso a uma solução completa
              para empresas de tecnologia com design futurista e funcionalidades avançadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
