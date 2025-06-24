import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const AboutUs = () => {
  return <>
      {/* Light Section - Somos Especialistas */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="container-custom px-4">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Somos Especialistas em EPIs</h2>
              <p className="mb-4 sm:mb-6 text-gray-950 text-sm sm:text-base leading-relaxed">
                Fornecimento de equipamentos de proteção individual e soluções de segurança para diversos setores industriais.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                  Oferecemos uma linha completa de EPIs, incluindo capacetes, óculos de proteção, luvas, 
                  calçados de segurança, cintos de segurança, máscaras e respiradores. Todos os nossos 
                  produtos possuem Certificado de Aprovação (CA) do Ministério do Trabalho e são 
                  testados rigorosamente para garantir máxima proteção aos trabalhadores.
                </p>
                
                <div className="p-4 sm:p-6 rounded-lg border-l-4 border-ds3-gold bg-gray-300">
                  <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                    Atendemos às principais normas regulamentadoras (NRs) do trabalho, especializando-nos 
                    em soluções para trabalhos em altura (NR 35), espaços confinados (NR 33), 
                    soldagem e corte (NR 12), e proteção contra riscos elétricos (NR 10). 
                    Nossa equipe técnica oferece consultoria especializada para identificar 
                    os EPIs mais adequados para cada ambiente de trabalho.
                  </p>
                </div>
              </div>
              
              {/* Key Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Produtos Certificados</h4>
                    <p className="text-zinc-950 text-sm sm:text-base">Todos os EPIs com CA válido e testados conforme normas</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="bg-ds3-gold/10 p-1 rounded-full mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0">
                    <Check className="text-ds3-dark" size={16} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">Consultoria Técnica</h4>
                    <p className="text-zinc-950 text-sm sm:text-base">Assessoria especializada na escolha dos EPIs adequados</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="bg-ds3-gold/20 w-full h-full absolute -left-3 sm:-left-6 -top-3 sm:-top-6 rounded-lg"></div>
                <img alt="Trabalhador com EPIs completos" className="relative z-10 rounded-lg shadow-lg w-full object-cover h-64 sm:h-80 lg:h-96" src="/lovable-uploads/fc1a51fc-819d-4256-80d4-f9905e0f4f9c.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dark Section - Nossa Qualidade */}
      <section id="technology" className="py-12 sm:py-16 lg:py-20 text-white bg-transparent">
        <div className="container-custom px-4">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Qualidade e Certificação</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <img alt="Equipamentos de proteção individual certificados" className="rounded-lg w-full object-cover h-64 sm:h-80 lg:h-96" src="/lovable-uploads/a7843544-f0fb-403c-a7e1-040baedbbb2e.jpg" />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="lg:w-1/2 space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                Todos os nossos EPIs são rigorosamente testados em laboratórios credenciados pelo 
                INMETRO e possuem Certificado de Aprovação (CA) válido, garantindo total conformidade 
                com as exigências das Normas Regulamentadoras do Ministério do Trabalho.
              </p>
              
              <Card className="bg-ds3-dark border border-gray-700">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-ds3-gold font-medium mb-2 text-sm sm:text-base">CA - Certificado de Aprovação</p>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    O CA é obrigatório para todos os EPIs comercializados no Brasil, garantindo que 
                    o equipamento atende aos requisitos mínimos de segurança e qualidade.
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                Mantemos parcerias com os principais fabricantes nacionais e internacionais, 
                oferecendo sempre produtos de última geração com tecnologia avançada para 
                máxima proteção e conforto do usuário.
              </p>
              
              <div className="bg-ds3-gold/10 p-4 sm:p-6 rounded-lg border-l-4 border-ds3-gold">
                <p className="text-zinc-950 text-sm sm:text-base leading-relaxed">
                  <strong>Compromisso com a segurança:</strong> A escolha do EPI correto pode salvar vidas. 
                  Por isso, oferecemos treinamentos e orientações para o uso adequado de cada equipamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default AboutUs;