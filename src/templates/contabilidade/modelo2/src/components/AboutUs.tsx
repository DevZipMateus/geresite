
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-corporate-blue/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipe de contabilidade trabalhando" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-blue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 2010</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-corporate-lightBlue rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">+500 clientes</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">13</div>
                <div className="text-sm text-gray-600">Anos de experiência em contabilidade</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Excelência em serviços contábeis para o seu negócio
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Desde 2010, nosso escritório se dedica ao auxílio administrativo de empresas de diversos portes e segmentos, 
              utilizando técnicas contábeis e administrativas modernas para oferecer o melhor serviço aos nossos clientes.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nossa equipe técnica está em constante capacitação para oferecer soluções inovadoras na área contábil, 
              garantindo tranquilidade e segurança para que você possa focar no crescimento do seu negócio.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Qualificada</h4>
                  <p className="text-gray-600">Profissionais especializados e em constante atualização</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada cliente recebe atenção individualizada para suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-corporate-blue/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-corporate-blue" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Utilizamos as mais modernas ferramentas do mercado</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-black hover:bg-neutral-800 text-amber-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Conheça Nossos Diferenciais</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
