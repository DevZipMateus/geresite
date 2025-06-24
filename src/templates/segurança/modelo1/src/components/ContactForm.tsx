
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScreenSize, useUltraWide } from '@/hooks/use-mobile';

const ContactForm = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { needsSpecialLayout } = useUltraWide();

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container mx-auto responsive-padding">
        <div className={`text-center mx-auto ultra-wide-spacing ${
          needsSpecialLayout ? 'max-w-5xl mb-16' : 'max-w-3xl mb-12'
        }`}>
          <span className={`inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full font-medium bg-yellow-500 text-construction-900 mb-3 sm:mb-4 ${
            needsSpecialLayout ? 'text-lg py-3 px-6' : 'text-xs sm:text-sm'
          }`}>
            Contato
          </span>
          <h2 className={`font-bold text-construction-800 tracking-tight ultra-wide-spacing ${
            isMobile 
              ? 'text-xl mb-3' 
              : isTablet 
                ? 'text-2xl mb-4'
                : needsSpecialLayout
                  ? 'text-5xl xl:text-6xl mb-8'
                  : 'text-3xl lg:text-4xl mb-6'
          }`}>
            Vamos construir seu projeto juntos
          </h2>
          <p className={`text-construction-600 max-w-3xl px-2 sm:px-0 ${
            isMobile 
              ? 'text-sm' 
              : isTablet 
                ? 'text-base'
                : needsSpecialLayout
                  ? 'text-xl xl:text-2xl'
                  : 'text-base lg:text-lg'
          }`}>
            Entre em contato conosco para solicitar um orçamento gratuito ou tirar suas dúvidas.
            Nossa equipe está pronta para atender você.
          </p>
        </div>

        <div className={needsSpecialLayout ? 'max-w-6xl mx-auto' : 'max-w-4xl mx-auto'}>
          <div className={`glass-card rounded-lg sm:rounded-xl animate-slideInRight ${
            needsSpecialLayout ? 'p-12' : 'p-3 sm:p-4 md:p-6 lg:p-8'
          }`}>
            <h3 className={`font-bold text-construction-900 text-center ultra-wide-spacing ${
              isMobile 
                ? 'text-lg mb-4' 
                : needsSpecialLayout
                  ? 'text-3xl mb-8'
                  : 'text-lg sm:text-xl md:text-2xl mb-6'
            }`}>
              Nossos Canais de Atendimento
            </h3>
            
            <div className={`grid responsive-gap ultra-wide-spacing ${
              isMobile 
                ? 'grid-cols-1' 
                : isTablet 
                  ? 'grid-cols-2' 
                  : needsSpecialLayout
                    ? 'grid-cols-3 gap-12'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              <div className="text-center">
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mx-auto ultra-wide-spacing ${
                  isMobile 
                    ? 'w-10 h-10 mb-2' 
                    : needsSpecialLayout
                      ? 'w-20 h-20 mb-6'
                      : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4'
                }`}>
                  <Phone className={`text-blue-600 ${
                    isMobile 
                      ? 'w-4 h-4' 
                      : needsSpecialLayout
                        ? 'w-10 h-10'
                        : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 ultra-wide-spacing ${
                  isMobile 
                    ? 'text-base mb-1' 
                    : needsSpecialLayout
                      ? 'text-2xl mb-4'
                      : 'text-base sm:text-lg md:text-xl mb-2'
                }`}>
                  Telefone
                </h4>
                <p className={`text-construction-600 ${
                  isMobile 
                    ? 'text-sm' 
                    : needsSpecialLayout
                      ? 'text-lg'
                      : 'text-sm sm:text-base'
                }`}>
                  (11) 99999-9999
                </p>
                <p className={`text-construction-600 ${
                  isMobile 
                    ? 'text-sm' 
                    : needsSpecialLayout
                      ? 'text-lg'
                      : 'text-sm sm:text-base'
                }`}>
                  (11) 3456-7890
                </p>
              </div>
              
              <div className="text-center">
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mx-auto ultra-wide-spacing ${
                  isMobile 
                    ? 'w-10 h-10 mb-2' 
                    : needsSpecialLayout
                      ? 'w-20 h-20 mb-6'
                      : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4'
                }`}>
                  <Mail className={`text-blue-600 ${
                    isMobile 
                      ? 'w-4 h-4' 
                      : needsSpecialLayout
                        ? 'w-10 h-10'
                        : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 ultra-wide-spacing ${
                  isMobile 
                    ? 'text-base mb-1' 
                    : needsSpecialLayout
                      ? 'text-2xl mb-4'
                      : 'text-base sm:text-lg md:text-xl mb-2'
                }`}>
                  E-mail
                </h4>
                <p className={`text-construction-600 break-all ${
                  isMobile 
                    ? 'text-xs' 
                    : needsSpecialLayout
                      ? 'text-base'
                      : 'text-xs sm:text-sm md:text-base'
                }`}>
                  contato@construtorafortebase.com.br
                </p>
                <p className={`text-construction-600 break-all ${
                  isMobile 
                    ? 'text-xs' 
                    : needsSpecialLayout
                      ? 'text-base'
                      : 'text-xs sm:text-sm md:text-base'
                }`}>
                  orcamento@construtorafortebase.com.br
                </p>
              </div>

              <div className={`text-center ${
                isMobile ? '' : isTablet ? 'col-span-2' : 'sm:col-span-2 lg:col-span-1'
              }`}>
                <div className={`rounded-full bg-blue-100 flex items-center justify-center mx-auto ultra-wide-spacing ${
                  isMobile 
                    ? 'w-10 h-10 mb-2' 
                    : needsSpecialLayout
                      ? 'w-20 h-20 mb-6'
                      : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4'
                }`}>
                  <MapPin className={`text-blue-600 ${
                    isMobile 
                      ? 'w-4 h-4' 
                      : needsSpecialLayout
                        ? 'w-10 h-10'
                        : 'w-5 h-5 sm:w-6 sm:h-6'
                  }`} />
                </div>
                <h4 className={`font-semibold text-construction-900 ultra-wide-spacing ${
                  isMobile 
                    ? 'text-base mb-1' 
                    : needsSpecialLayout
                      ? 'text-2xl mb-4'
                      : 'text-base sm:text-lg md:text-xl mb-2'
                }`}>
                  Endereço
                </h4>
                <p className={`text-construction-600 ${
                  isMobile 
                    ? 'text-sm' 
                    : needsSpecialLayout
                      ? 'text-lg'
                      : 'text-sm sm:text-base'
                }`}>
                  Av. Construção, 1000
                </p>
                <p className={`text-construction-600 ${
                  isMobile 
                    ? 'text-sm' 
                    : needsSpecialLayout
                      ? 'text-lg'
                      : 'text-sm sm:text-base'
                }`}>
                  São Paulo - SP
                </p>
              </div>
            </div>
            
            <div className={`text-center border-t border-construction-200 ${
              needsSpecialLayout ? 'pt-12 mt-12' : 'pt-4 sm:pt-6 lg:pt-8 mt-4 sm:mt-6 lg:mt-8'
            }`}>
              <div className={`rounded-full bg-green-500 flex items-center justify-center mx-auto ultra-wide-spacing ${
                isMobile 
                  ? 'w-10 h-10 mb-2' 
                  : needsSpecialLayout
                    ? 'w-20 h-20 mb-6'
                    : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 md:mb-4'
              }`}>
                <img 
                  src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
                  alt="WhatsApp" 
                  className={
                    isMobile 
                      ? 'w-5 h-5' 
                      : needsSpecialLayout
                        ? 'w-10 h-10'
                        : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
                  } 
                />
              </div>
              <h4 className={`font-semibold text-construction-900 ultra-wide-spacing ${
                isMobile 
                  ? 'text-base mb-1' 
                  : needsSpecialLayout
                    ? 'text-2xl mb-4'
                    : 'text-base sm:text-lg md:text-xl mb-2'
              }`}>
                WhatsApp
              </h4>
              <p className={`text-construction-600 ultra-wide-spacing ${
                isMobile 
                  ? 'text-sm mb-1' 
                  : needsSpecialLayout
                    ? 'text-lg mb-4'
                    : 'text-sm sm:text-base mb-2'
              }`}>
                (11) 99999-9999
              </p>
              <p className={`text-construction-600 ultra-wide-spacing ${
                isMobile 
                  ? 'text-xs mb-3' 
                  : needsSpecialLayout
                    ? 'text-base mb-6'
                    : 'text-xs sm:text-sm md:text-base mb-4'
              }`}>
                Atendimento rápido para orçamentos e dúvidas
              </p>
              <a 
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`button-accent inline-flex items-center justify-center ${
                  isMobile 
                    ? 'text-xs px-3 py-2' 
                    : needsSpecialLayout
                      ? 'text-xl px-12 py-6'
                      : 'text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3'
                }`}
              >
                <img 
                  src="/lovable-uploads/db774a34-6e4e-4b59-8c0f-b48860054798.png" 
                  alt="WhatsApp" 
                  className={`mr-1 sm:mr-2 ${
                    isMobile 
                      ? 'w-3 h-3' 
                      : needsSpecialLayout
                        ? 'w-6 h-6'
                        : 'w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5'
                  }`} 
                />
                {isMobile ? 'Orçamento pelo WhatsApp' : 'Solicitar Orçamento pelo WhatsApp'}
              </a>
            </div>
            
            <div className={`bg-construction-50 rounded-lg border border-construction-200 ${
              needsSpecialLayout ? 'mt-12 p-8' : 'mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 md:p-6'
            }`}>
              <h4 className={`font-semibold text-construction-900 text-center ultra-wide-spacing ${
                isMobile 
                  ? 'text-base mb-2' 
                  : needsSpecialLayout
                    ? 'text-2xl mb-6'
                    : 'text-base sm:text-lg md:text-xl mb-3'
              }`}>
                Horário de Atendimento
              </h4>
              <div className={`grid text-center responsive-gap ${
                isMobile 
                  ? 'grid-cols-1' 
                  : needsSpecialLayout
                    ? 'grid-cols-2 gap-8'
                    : 'grid-cols-1 sm:grid-cols-2'
              }`}>
                <div>
                  <p className={`font-medium text-construction-800 ${
                    isMobile 
                      ? 'text-sm' 
                      : needsSpecialLayout
                        ? 'text-xl'
                        : 'text-sm sm:text-base'
                  }`}>
                    Segunda a Sexta
                  </p>
                  <p className={`text-construction-600 ${
                    isMobile 
                      ? 'text-sm' 
                      : needsSpecialLayout
                        ? 'text-lg'
                        : 'text-sm sm:text-base'
                  }`}>
                    08:00 às 18:00
                  </p>
                </div>
                <div>
                  <p className={`font-medium text-construction-800 ${
                    isMobile 
                      ? 'text-sm' 
                      : needsSpecialLayout
                        ? 'text-xl'
                        : 'text-sm sm:text-base'
                  }`}>
                    Sábados
                  </p>
                  <p className={`text-construction-600 ${
                    isMobile 
                      ? 'text-sm' 
                      : needsSpecialLayout
                        ? 'text-lg'
                        : 'text-sm sm:text-base'
                  }`}>
                    08:00 às 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
