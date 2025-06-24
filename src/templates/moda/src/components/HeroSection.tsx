
import React from 'react';

interface HeroSectionProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ cliente }) => {
  const nomeEmpresa = cliente?.nome_empresa || 'URBNSZN';
  const telefone = cliente?.telefone || '5511999999999';

  const handleWhatsAppShop = () => {
    const cleanPhone = telefone.replace(/\D/g, '');
    const whatsappPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    const message = `Olá! Gostaria de conhecer os produtos da ${nomeEmpresa}.`;
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-urban-black">
      {/* Video Background Simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-urban-black/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-urban-neon opacity-60"></div>
        <div className="floating-element absolute top-1/2 right-1/3 w-3 h-3 bg-urban-flame opacity-40 animation-delay-1000"></div>
        <div className="floating-element absolute bottom-1/3 left-1/2 w-5 h-5 bg-urban-electric opacity-30 animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-orbitron font-black text-white mb-6 sm:mb-8 leading-tight">
          <span className="block">STREETWEAR</span>
          <span className="hero-text animate-glow block">{nomeEmpresa}</span>
          <span className="text-urban-flame block">AUTÊNTICO</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl lg:max-w-3xl mx-auto px-4">
          Onde o estilo urbano encontra a autenticidade. Cada peça conta uma história, cada look define uma atitude.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto mb-12 sm:mb-16">
          <button 
            onClick={handleWhatsAppShop}
            className="group relative overflow-hidden bg-urban-neon text-urban-black px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-urban-neon/50 w-full sm:w-auto"
          >
            <span className="relative z-10">COMPRAR AGORA</span>
            <div className="absolute inset-0 bg-urban-flame transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button 
            onClick={handleWhatsAppShop}
            className="group border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-6 font-bold text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 hover:bg-white hover:text-urban-black hover:scale-105 w-full sm:w-auto"
          >
            VER COLEÇÃO
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
