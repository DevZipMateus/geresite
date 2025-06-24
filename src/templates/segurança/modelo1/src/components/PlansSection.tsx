
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, Users, Building } from 'lucide-react';

const PlansSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 299",
      period: "/mês",
      icon: Shield,
      features: [
        "Consultoria inicial",
        "Relatórios mensais",
        "Suporte por email",
        "Análise básica de riscos"
      ],
      highlighted: false
    },
    {
      name: "Profissional",
      price: "R$ 599",
      period: "/mês",
      icon: Users,
      features: [
        "Tudo do plano Básico",
        "Consultoria contínua",
        "Suporte prioritário",
        "Análise avançada de riscos",
        "Treinamento da equipe"
      ],
      highlighted: true
    },
    {
      name: "Empresarial",
      price: "R$ 999",
      period: "/mês",
      icon: Building,
      features: [
        "Tudo do plano Profissional",
        "Consultoria 24/7",
        "Gerente dedicado",
        "Auditorias regulares",
        "Plano de contingência personalizado"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Planos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades de segurança e proteção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${
              plan.highlighted ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-6 text-center">
                <plan.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
