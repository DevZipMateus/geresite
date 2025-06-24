
import React from 'react';
import { Mic, Video, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 mb-8">
            <Mic className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Comunicação & Mídia Digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Amplifique Sua <span className="text-purple-400">Voz</span>
            <br />
            Digital
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Estratégias de comunicação que conectam, engajam e transformam sua presença digital em resultados reais
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
              <Video className="h-5 w-5" />
              <span>Iniciar Projeto</span>
            </button>
            
            <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Ver Portfolio
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Mic, title: 'Podcast', desc: 'Produção completa' },
              { icon: Video, title: 'Vídeo', desc: 'Conteúdo visual' },
              { icon: Users, title: 'Social', desc: 'Gestão de redes' },
              { icon: Zap, title: 'Digital', desc: 'Marketing online' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <item.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
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
