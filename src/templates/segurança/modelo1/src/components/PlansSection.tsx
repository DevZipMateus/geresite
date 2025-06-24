
import { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    title: "Para Microempresas",
    price: "99,99",
    features: [
      "Emissão de até 10 notas fiscais mensais",
      "Declaração mensal de impostos",
      "Suporte contábil por e-mail",
      "Relatório financeiro básico mensal",
      "Acompanhamento básico de tributos"
    ],
    recommended: false,
    delay: 0
  },
  {
    title: "Para Pequenas Empresas",
    price: "269,99",
    features: [
      "Emissão de até 20 notas fiscais mensais",
      "Declaração mensal de impostos e encargos trabalhistas",
      "Suporte contábil por e-mail e telefone",
      "Relatório financeiro detalhado mensal",
      "Acompanhamento mensal de tributos e otimização fiscal",
      "Consultoria contábil trimestral"
    ],
    recommended: true,
    delay: 200
  },
  {
    title: "Para Empresas em Crescimento",
    price: "699,99",
    features: [
      "Emissão ilimitada de notas fiscais",
      "Declaração mensal de impostos, encargos trabalhistas e obrigações acessórias",
      "Suporte contábil ilimitado por e-mail, telefone e chat",
      "Relatórios financeiros completos mensais e trimestrais",
      "Acompanhamento estratégico de tributos com foco em economia fiscal",
      "Consultoria contábil mensal e planejamento financeiro",
      "Atendimento personalizado e assessoria em questões complexas"
    ],
    recommended: false,
    delay: 400
  }
];

const PlansSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="plans">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fadeIn">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-3">
            Nossos Planos
          </span>
          <h2 className="heading-lg mb-4">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="subtitle">
            Oferecemos diferentes planos para atender às necessidades específicas de cada empresa,
            com preços acessíveis e serviços de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card p-6 border-2 ${plan.recommended ? 'border-scarlet-500' : 'border-gray-100'} relative opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}
              style={{ animationDelay: `${plan.delay}ms` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-scarlet-500 text-white py-1 px-4 rounded-full text-sm font-medium">
                  Recomendado
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">R${plan.price}</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-scarlet-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 w-full ${
                  plan.recommended 
                    ? 'bg-scarlet-500 text-white hover:bg-scarlet-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Escolher plano
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
