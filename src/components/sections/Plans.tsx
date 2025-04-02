
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  period?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  period = "/mês"
}) => {
  return (
    <div className={`
      rounded-xl overflow-hidden border transition-all duration-300
      ${highlighted 
        ? 'border-primary shadow-lg scale-105 z-10 bg-white' 
        : 'border-gray-200 bg-white/50 hover:shadow-md'
      }
    `}>
      {highlighted && (
        <div className="bg-primary text-white py-2 font-medium text-center text-sm">
          Mais Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">{period}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <>
                  <span className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-3 w-3 text-green-600" />
                  </span>
                  <span className="text-gray-700">{feature.text}</span>
                </>
              ) : (
                <>
                  <span className="bg-gray-100 rounded-full p-1 mr-3 mt-1">
                    <X className="h-3 w-3 text-gray-400" />
                  </span>
                  <span className="text-gray-400">{feature.text}</span>
                </>
              )}
            </li>
          ))}
        </ul>
        
        <Button 
          variant={highlighted ? "default" : "outline"} 
          size="lg" 
          className="w-full rounded-full"
        >
          Contratar Plano
        </Button>
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$497",
      description: "Ideal para pequenos negócios",
      features: [
        { text: "Consultoria Básica", included: true },
        { text: "Suporte por E-mail", included: true },
        { text: "Revisão Mensal", included: true },
        { text: "Consultoria Especializada", included: false },
        { text: "Acesso Prioritário", included: false },
      ]
    },
    {
      name: "Profissional",
      price: "R$997",
      description: "Perfeito para empresas em crescimento",
      highlighted: true,
      features: [
        { text: "Consultoria Básica", included: true },
        { text: "Suporte por E-mail e Telefone", included: true },
        { text: "Revisão Semanal", included: true },
        { text: "Consultoria Especializada", included: true },
        { text: "Acesso Prioritário", included: false },
      ]
    },
    {
      name: "Empresarial",
      price: "R$1997",
      description: "Solução completa para grandes empresas",
      features: [
        { text: "Consultoria Básica", included: true },
        { text: "Suporte 24/7", included: true },
        { text: "Revisão Diária", included: true },
        { text: "Consultoria Especializada", included: true },
        { text: "Acesso Prioritário", included: true },
      ]
    }
  ];

  return (
    <section id="plans" className="py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium">NOSSOS PLANOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">Escolha o Plano Ideal para Seu Negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos opções flexíveis para atender às necessidades específicas da sua empresa, independente do tamanho ou setor.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 100}>
              <PricingPlan {...plan} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
