
import React from 'react';
import { Calendar, Table, FileText, ArrowRight } from 'lucide-react';

const linksCategories = [
  {
    id: 1,
    title: 'Agenda Tributária',
    description: 'Informações atualizadas sobre obrigações fiscais estaduais, federais e trabalhistas.',
    icon: Calendar,
    links: [
      { name: 'Calendário de Obrigações Federais', url: '#' },
      { name: 'Prazos para Entrega de Declarações', url: '#' },
      { name: 'Vencimentos Mensais - Simples Nacional', url: '#' },
      { name: 'Agenda Trabalhista', url: '#' }
    ],
    delay: '0s'
  },
  {
    id: 2,
    title: 'Tabelas Práticas',
    description: 'Disponibilização de tabelas referentes a recolhimentos em atraso, Simples Nacional, Imposto de Renda e alíquotas.',
    icon: Table,
    links: [
      { name: 'Tabela de IRRF', url: '#' },
      { name: 'Tabela do Simples Nacional', url: '#' },
      { name: 'Índices de Correção', url: '#' },
      { name: 'Tabela de Alíquotas por Atividade', url: '#' }
    ],
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Formulários Diversos',
    description: 'Acesso a termos de rescisão, homologação, quitação de contrato de trabalho, instrução DARF, entre outros.',
    icon: FileText,
    links: [
      { name: 'Termos de Rescisão', url: '#' },
      { name: 'Homologação de Contratos', url: '#' },
      { name: 'Instrução DARF', url: '#' },
      { name: 'Formulários Trabalhistas', url: '#' }
    ],
    delay: '0.2s'
  }
];

const UsefulLinks = () => {
  return (
    <section id="useful-links" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Links Úteis
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Recursos e informações úteis
          </h2>
          <p className="text-gray-600 text-lg">
            Disponibilizamos abaixo uma série de recursos importantes para auxiliar na gestão do seu negócio.
          </p>
        </div>
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linksCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-xl shadow-sm p-8 animate-fade-in"
              style={{ animationDelay: category.delay }}
            >
              {/* Icon */}
              <div className="bg-corporate-blue/10 p-4 rounded-lg inline-block mb-6">
                <category.icon className="text-corporate-blue" size={24} />
              </div>
              
              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              {/* Links */}
              <ul className="space-y-4">
                {category.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="flex items-center text-gray-700 hover:text-corporate-blue transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-corporate-blue rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* View All Link */}
              <a 
                href="#" 
                className="mt-6 inline-flex items-center text-corporate-blue hover:text-corporate-darkBlue font-medium transition-colors duration-300"
              >
                Ver todos os recursos
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
