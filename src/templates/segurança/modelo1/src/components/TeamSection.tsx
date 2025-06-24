import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScreenSize, useUltraWide } from '@/hooks/use-mobile';

const teamMembers = [
  {
    name: "Eng. Carlos Silva",
    position: "Diretor Técnico",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    email: "carlos@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 0
  },
  {
    name: "Arq. Marina Santos",
    position: "Arquiteta Chefe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    email: "marina@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 200
  },
  {
    name: "Eng. Roberto Lima",
    position: "Gerente de Obras",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    email: "roberto@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 400
  },
  {
    name: "Ana Paula Costa",
    position: "Coordenadora de Projetos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=922&q=80",
    email: "ana@construtorafortebase.com.br",
    linkedin: "https://linkedin.com",
    delay: 600
  }
];

const TeamSection = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { needsSpecialLayout } = useUltraWide();

  return (
    <section className="section-padding bg-white w-full" id="team">
      <div className="container">
        <div className="container-content">
          <div className={`text-center mx-auto ultra-wide-spacing ${
            needsSpecialLayout ? 'max-w-5xl mb-16' : 'max-w-3xl mb-12'
          }`}>
            <span className={`inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full font-semibold bg-construction-100 text-construction-600 mb-3 sm:mb-4 ${
              needsSpecialLayout ? 'text-lg py-3 px-6' : 'text-xs sm:text-sm'
            }`}>
              Nossa Equipe
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
              Profissionais experientes e <span className="text-gradient">qualificados</span>
            </h2>
            <p className={`text-construction-600 leading-relaxed px-2 sm:px-0 ${
              isMobile 
                ? 'text-sm' 
                : isTablet 
                  ? 'text-base'
                  : needsSpecialLayout
                    ? 'text-xl xl:text-2xl'
                    : 'text-base lg:text-lg'
            }`}>
              Nossa equipe é formada por engenheiros, arquitetos e técnicos especializados,
              comprometidos em entregar projetos de excelência.
            </p>
          </div>

          <div className={`grid responsive-gap ${
            isMobile 
              ? 'grid-cols-1' 
              : isTablet 
                ? 'grid-cols-2' 
                : needsSpecialLayout
                  ? 'grid-cols-2 xl:grid-cols-4 gap-8'
                  : 'grid-cols-2 lg:grid-cols-4'
          }`}>
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="border-construction-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className={`relative overflow-hidden w-full ${
                    needsSpecialLayout ? 'aspect-[3/4]' : 'aspect-[3/4]'
                  }`}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-construction-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                      <div className={`flex p-2 sm:p-3 md:p-4 mb-1 sm:mb-2 ${
                        needsSpecialLayout ? 'gap-4 p-6' : 'gap-2 sm:gap-3'
                      }`}>
                        <a 
                          href={`mailto:${member.email}`} 
                          className={`bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors ${
                            isMobile 
                              ? 'w-6 h-6' 
                              : needsSpecialLayout
                                ? 'w-12 h-12'
                                : 'w-7 h-7 sm:w-8 sm:h-8'
                          }`}
                        >
                          <Mail className={
                            isMobile 
                              ? 'w-3 h-3' 
                              : needsSpecialLayout
                                ? 'w-6 h-6'
                                : 'w-3 h-3 sm:w-4 sm:h-4'
                          } />
                        </a>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors ${
                            isMobile 
                              ? 'w-6 h-6' 
                              : needsSpecialLayout
                                ? 'w-12 h-12'
                                : 'w-7 h-7 sm:w-8 sm:h-8'
                          }`}
                        >
                          <Linkedin className={
                            isMobile 
                              ? 'w-3 h-3' 
                              : needsSpecialLayout
                                ? 'w-6 h-6'
                                : 'w-3 h-3 sm:w-4 sm:h-4'
                          } />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`text-center bg-construction-50 ${
                    needsSpecialLayout ? 'p-6' : 'p-2 sm:p-3 md:p-4'
                  }`}>
                    <h3 className={`font-bold text-construction-800 ${
                      isMobile 
                        ? 'text-base' 
                        : needsSpecialLayout
                          ? 'text-2xl mb-2'
                          : 'text-base sm:text-lg md:text-xl'
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`text-blue-600 font-medium ${
                      isMobile 
                        ? 'text-xs' 
                        : needsSpecialLayout
                          ? 'text-lg'
                          : 'text-xs sm:text-sm md:text-base'
                    }`}>
                      {member.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
