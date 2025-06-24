
import React from 'react';
import { Target, ThumbsUp, Users, Award, ShieldCheck, UserCheck } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Nossa Missão */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ds3-dark mb-4 sm:mb-6 text-shadow-md">Nossa Missão</h2>
            <p className="text-base sm:text-lg mb-4 text-shadow text-zinc-950 leading-relaxed">
              Nossa missão é proteger vidas através do fornecimento de equipamentos de proteção individual 
              de alta qualidade, desenvolvidos com tecnologia avançada e atendimento personalizado às 
              necessidades de cada cliente.
            </p>
            <p className="text-base sm:text-lg text-shadow text-zinc-950 leading-relaxed">
              A Safeguard EPIs traz inovação em segurança do trabalho, sempre garantindo conforto e 
              máxima proteção em conformidade com as normas regulamentadoras, para trabalhadores da 
              indústria, construção civil, petróleo e gás, entre outros setores.
            </p>
          </div>
          
          {/* Nossos Valores */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <ThumbsUp className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 bg-transparent" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ds3-dark mb-6 sm:mb-8 text-shadow-md text-center lg:text-left">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Segurança */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Segurança</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Priorizar sempre a proteção e segurança dos trabalhadores.</p>
                </div>
              </div>
              
              {/* Qualidade */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Qualidade</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Produtos certificados e testados rigorosamente.</p>
                </div>
              </div>
              
              {/* Atendimento */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Atendimento</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Suporte técnico personalizado e especializado.</p>
                </div>
              </div>
              
              {/* Confiança */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Confiança</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Relacionamento duradouro baseado na confiança.</p>
                </div>
              </div>
              
              {/* Inovação */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:col-span-2 sm:max-w-xs sm:mx-auto lg:mx-0">
                <div className="bg-ds3-gold/40 p-3 sm:p-4 mb-3 sm:mb-0 sm:mr-4 flex items-center justify-center rounded-md flex-shrink-0">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-ds3-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-shadow-sm">Inovação</h3>
                  <p className="text-shadow-sm text-zinc-950 text-sm sm:text-base">Tecnologia avançada para máxima proteção.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
