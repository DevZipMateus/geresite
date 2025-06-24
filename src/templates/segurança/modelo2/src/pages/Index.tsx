
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-800 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Segurança <span className="text-red-400">Modelo 2</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Proteção avançada com design militar e soluções táticas para máxima segurança.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">🛡️ Em Desenvolvimento</h2>
            <p className="text-gray-200">
              Este template está sendo desenvolvido com foco em segurança de alto nível,
              empresas militares e corporações que necessitam de proteção máxima.
            </p>
            <div className="mt-6 space-y-2 text-left">
              <div className="flex items-center text-red-400">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Design tático e profissional
              </div>
              <div className="flex items-center text-red-400">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Soluções de segurança avançada
              </div>
              <div className="flex items-center text-red-400">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Interface militar e robusta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
