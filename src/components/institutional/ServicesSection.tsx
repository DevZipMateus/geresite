
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Consultoria",
              description: "Oferecemos consultoria especializada para otimizar seus processos e aumentar sua produtividade."
            },
            {
              title: "Planejamento",
              description: "Desenvolvemos estratégias personalizadas para alcançar seus objetivos de negócio."
            },
            {
              title: "Suporte",
              description: "Suporte técnico contínuo para garantir que suas operações funcionem sem problemas."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
