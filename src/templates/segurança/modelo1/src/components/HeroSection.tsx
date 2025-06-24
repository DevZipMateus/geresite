
import React from 'react';
import { Shield, Camera, Lock, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 mb-8">
            <Shield className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Segurança & Proteção Residencial</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Proteja Sua <span className="text-blue-400">Família</span>
            <br />
            e Seu <span className="text-green-400">Patrimônio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em segurança residencial e empresarial com tecnologia de ponta e monitoramento 24 horas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <Shield className="h-5 w-5" />
              <span>Solicitar Orçamento</span>
            </button>
            
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Conhecer Serviços
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Camera, title: 'CFTV', desc: 'Monitoramento' },
              { icon: Shield, title: 'Alarmes', desc: 'Proteção Total' },
              { icon: Lock, title: 'Controle', desc: 'Acesso Seguro' },
              { icon: AlertTriangle, title: 'Emergência', desc: 'Resposta Rápida' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <item.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
