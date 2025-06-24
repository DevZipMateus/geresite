
import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const advantages = [
  "Mais de 15 anos de experiência",
  "Equipe técnica qualificada", 
  "Materiais de primeira qualidade",
  "Cumprimento de prazos",
  "Projetos personalizados",
  "Suporte pós-obra"
];

const stats = [
  { icon: Award, number: "200+", label: "Projetos Concluídos" },
  { icon: Users, number: "50+", label: "Profissionais" },
  { icon: Clock, number: "15+", label: "Anos de Experiência" }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.animate-element');
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fadeIn');
          }, i * 200);
        });
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding construction-gradient" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="opacity-0 animate-element">
              <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-yellow-500 text-construction-900 mb-4">
                Sobre Nós
              </span>
              <h2 className="heading-lg mb-4">
                Construindo o futuro com <span className="text-gradient">qualidade e confiança</span>
              </h2>
              <p className="text-construction-600 mb-6 text-base sm:text-lg leading-relaxed">
                A Construtora ForteBase é uma empresa especializada em construção civil com mais de 15 anos
                de experiência no mercado. Realizamos projetos residenciais, comerciais e industriais
                com excelência e comprometimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start opacity-0 animate-element">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-2 sm:ml-3 text-sm sm:text-base text-construction-700">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 opacity-0 animate-element">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-construction-800">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-construction-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -left-2 -top-2 sm:-left-4 sm:-top-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-200 rounded-lg opacity-50"></div>
              <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe de construção" 
                  className="w-full h-auto object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
