
import React from 'react';

interface AboutBrandProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
}

const AboutBrand: React.FC<AboutBrandProps> = ({ cliente }) => {
  const nomeEmpresa = cliente?.nome_empresa || 'URBNSZN';

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-urban-concrete">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-urban-neon text-urban-black text-sm font-bold mb-6 animate-slide-up">
              NOSSA HISTÓRIA
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white mb-6 sm:mb-8 leading-tight animate-slide-up animation-delay-200">
              {nomeEmpresa}<br />
              <span className="text-urban-flame">NASCE DAS RUAS</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="animate-slide-up animation-delay-400">
                A {nomeEmpresa} surge do pulso da cidade, capturando a essência crua e autêntica do streetwear brasileiro. 
                Cada peça é pensada para quem não tem medo de se expressar.
              </p>
              
              <p className="animate-slide-up animation-delay-600">
                Nossa missão é democratizar o estilo urbano, criando roupas que falam a linguagem das ruas, 
                mas com a qualidade e o design que você merece.
              </p>
              
              <p className="animate-slide-up animation-delay-800">
                Acreditamos que moda é atitude. É sobre criar sua própria narrativa e vestir suas convicções. 
                Por isso, cada coleção da {nomeEmpresa} é um manifesto de individualidade e autenticidade.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
              {[
                { number: '500+', label: 'PEÇAS ÚNICAS' },
                { number: '50+', label: 'CITIES ATENDIDAS' },
                { number: '1000+', label: 'CLIENTES SATISFEITOS' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${1000 + index * 200}ms` }}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-black text-urban-neon mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative animate-slide-up animation-delay-400">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                alt="Streetwear Design Process"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-urban-neon/20 to-urban-flame/20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-urban-black/90 backdrop-blur-sm border border-urban-neon/30 rounded-lg p-4 sm:p-6 max-w-xs">
              <h3 className="font-orbitron font-bold text-white text-sm sm:text-base mb-2">
                DESIGN AUTÊNTICO
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Cada peça é desenvolvida com foco na qualidade e originalidade que define o streetwear de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
