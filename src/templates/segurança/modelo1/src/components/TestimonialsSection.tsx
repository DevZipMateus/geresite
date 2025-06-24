import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useScreenSize } from '@/hooks/use-mobile';

const testimonials = [
  {
    id: 1,
    name: "João Mendes",
    position: "Proprietário - Casa Residencial",
    quote: "A ForteBase construiu nossa casa dos sonhos! A qualidade dos materiais e o profissionalismo da equipe superaram nossas expectativas. Recomendo sem hesitar!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Empresária - Reforma Comercial",
    quote: "Reforma do nosso escritório foi feita com muito cuidado e dentro do prazo. A equipe é pontual, organizada e sempre mantém o cliente informado sobre o progresso.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Ricardo Oliveira",
    position: "Diretor - Galpão Industrial",
    quote: "Construíram nosso galpão industrial com excelência técnica. O projeto foi executado conforme especificado e a obra entregue no prazo combinado. Parceria de confiança!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name: "Ana Paula Costa",
    position: "Administradora - Condomínio Residencial",
    quote: "A ForteBase fez toda a revitalização das áreas comuns do nosso condomínio. Trabalho impecável, desde o planejamento até a execução. Os moradores ficaram muito satisfeitos!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 5,
    name: "Fernando Silva",
    position: "Gerente - Restaurante",
    quote: "Precisávamos reformar nosso restaurante rapidamente para não perder a temporada. A ForteBase trabalhou em tempo recorde sem comprometer a qualidade. Resultado fantástico!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet } = useScreenSize();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding construction-gradient w-full" id="testimonials">
      <div className="container" ref={sectionRef}>
        <div className="container-content">
          <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`}>
            <span className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-700 mb-3 sm:mb-4">
              Depoimentos
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-construction-800 tracking-tight mb-3 sm:mb-4 lg:mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-construction-600 max-w-3xl px-2 sm:px-0">
              A satisfação dos nossos clientes é nosso maior patrimônio.
              Veja o que eles falam sobre nossos serviços.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl ${
              isMobile ? 'min-h-[280px]' : isTablet ? 'min-h-[320px]' : 'min-h-[400px]'
            }`}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 flex ${
                    isMobile ? 'flex-col' : 'flex-col lg:flex-row'
                  } gap-4 sm:gap-6 lg:gap-8 items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 glass-card transition-all duration-700 ease-in-out ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 z-10' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full z-0' 
                        : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <div className={`flex-shrink-0 ${isMobile ? 'order-1' : 'order-1 lg:order-none'}`}>
                    <div className={`${
                      isMobile ? 'w-12 h-12' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20'
                    } rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-md mx-auto`}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={`text-center ${isMobile ? 'order-2' : 'lg:text-left order-2 lg:order-none'}`}>
                    <Quote className={`text-blue-300 mb-2 mx-auto ${isMobile ? 'lg:mx-0' : 'lg:mx-0'} ${
                      isMobile ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10'
                    }`} />
                    <p className={`text-construction-700 italic mb-2 sm:mb-3 md:mb-4 leading-relaxed ${
                      isMobile ? 'text-sm' : 'text-sm sm:text-base lg:text-lg'
                    }`}>
                      {testimonial.quote}
                    </p>
                    <h4 className={`font-bold text-construction-900 ${
                      isMobile ? 'text-base' : 'text-base sm:text-lg md:text-xl'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-blue-600 ${
                      isMobile ? 'text-xs' : 'text-xs sm:text-sm md:text-base'
                    }`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full mx-1 transition-all duration-300 hover:scale-110 ${
                    isMobile 
                      ? 'w-2 h-2' 
                      : 'w-2 h-2 sm:w-3 sm:h-3'
                  } ${
                    index === activeIndex 
                      ? `bg-blue-500 ${isMobile ? 'w-4' : 'w-5 sm:w-6 md:w-8'}` 
                      : 'bg-construction-300 hover:bg-construction-400'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
