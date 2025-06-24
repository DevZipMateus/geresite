
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Clientes Protegidos' },
    { number: '24/7', label: 'Monitoramento' },
    { number: '100%', label: 'Satisfação' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometidos com a qualidade superior em todos os nossos serviços'
    },
    {
      icon: Users,
      title: 'Confiança',
      description: 'Construímos relacionamentos duradouros baseados na confiança mútua'
    },
    {
      icon: Clock,
      title: 'Disponibilidade',
      description: 'Suporte e monitoramento 24 horas para sua total tranquilidade'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Tecnologia de ponta para a máxima proteção do seu patrimônio'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sobre <span className="text-blue-600">Nossa Empresa</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Há mais de 15 anos protegendo famílias e empresas com soluções inovadoras em segurança
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Nossos Valores e Compromissos
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Nossa missão é proporcionar paz de espírito através de soluções de segurança 
              confiáveis e inovadoras. Combinamos tecnologia avançada com atendimento 
              personalizado para oferecer a melhor proteção possível.
            </p>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{value.title}</h4>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-slate-800 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Por que nos escolher?</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-3" />
                <span>Tecnologia de última geração</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-3" />
                <span>Equipe altamente qualificada</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-3" />
                <span>Suporte técnico especializado</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-3" />
                <span>Monitoramento 24/7</span>
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-3" />
                <span>Preços competitivos</span>
              </li>
            </ul>
            
            <button className="mt-6 w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
