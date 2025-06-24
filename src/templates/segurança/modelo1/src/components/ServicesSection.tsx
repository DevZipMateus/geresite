import { useEffect, useRef } from 'react';
import { Home, Wrench, Building2, Clipboard, Hammer, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [{
  title: "Construção Residencial",
  description: "Construção de casas e apartamentos com qualidade superior, seguindo todas as normas técnicas e de segurança.",
  icon: Home,
  delay: 0
}, {
  title: "Reformas e Renovações",
  description: "Reformas completas ou parciais, modernizando seus espaços com eficiência e cuidado.",
  icon: Wrench,
  delay: 100
}, {
  title: "Obras Comerciais",
  description: "Construção de edifícios comerciais, escritórios e espaços industriais com tecnologia avançada.",
  icon: Building2,
  delay: 200
}, {
  title: "Gerenciamento de Obras",
  description: "Acompanhamento completo do projeto, desde o planejamento até a entrega final da obra.",
  icon: Clipboard,
  delay: 300
}, {
  title: "Acabamentos",
  description: "Serviços especializados em acabamentos internos e externos com materiais de primeira qualidade.",
  icon: Hammer,
  delay: 400
}, {
  title: "Infraestrutura",
  description: "Obras de infraestrutura urbana, saneamento e obras públicas com experiência comprovada.",
  icon: Truck,
  delay: 500
}];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-fadeIn');
            card.classList.remove('opacity-0');
          }, index * 100);
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
  return <section className="py-16 construction-gradient w-full" id="services">
      <div className="container mx-auto" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-yellow-500 text-construction-900 mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-lg mb-4">
            Soluções completas em <span className="text-gradient">construção civil</span>
          </h2>
          <p className="subtitle">
            Oferecemos serviços especializados em construção e reforma para projetos residenciais,
            comerciais e industriais com qualidade garantida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => <div key={index} className={cn("service-card p-6 rounded-xl transition-all duration-300 opacity-0", "bg-white border border-construction-200 hover:border-blue-300", "hover:shadow-lg hover:-translate-y-1 flex flex-col items-start")}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-construction-900 mb-3">{service.title}</h3>
              <p className="text-construction-600 mb-4 flex-grow">{service.description}</p>
              <Link to="/services" className="mt-auto">
                <Button variant="link" className="p-0 h-auto text-blue-700 hover:text-blue-800">
                  Saiba mais
                </Button>
              </Link>
            </div>)}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" size="lg" className="rounded-full border-blue-600 text-white bg-blue-600 hover:bg-blue-700">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default ServicesSection;
