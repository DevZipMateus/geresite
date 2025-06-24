
import React from 'react';
import { Camera, Shield, Lock, Monitor, AlertTriangle, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: 'CFTV e Monitoramento',
      description: 'Sistemas de câmeras de alta definição com monitoramento 24h',
      features: ['Câmeras HD/4K', 'Visão noturna', 'Acesso remoto', 'Gravação em nuvem']
    },
    {
      icon: Shield,
      title: 'Sistemas de Alarme',
      description: 'Alarmes inteligentes com sensores e notificações instantâneas',
      features: ['Sensores de movimento', 'Detectores de abertura', 'Central de alarme', 'App móvel']
    },
    {
      icon: Lock,
      title: 'Controle de Acesso',
      description: 'Fechaduras eletrônicas e sistemas biométricos',
      features: ['Fechaduras digitais', 'Biometria', 'Cartões de acesso', 'Portões automáticos']
    },
    {
      icon: Monitor,
      title: 'Central de Monitoramento',
      description: 'Monitoramento profissional 24 horas por dia',
      features: ['Equipe especializada', 'Resposta rápida', 'Acionamento de emergência', 'Relatórios detalhados']
    },
    {
      icon: AlertTriangle,
      title: 'Sistemas de Emergência',
      description: 'Detectores de incêndio, gás e botões de pânico',
      features: ['Detectores de fumaça', 'Sensores de gás', 'Botão de pânico', 'Sirenes de emergência']
    },
    {
      icon: Users,
      title: 'Segurança Patrimonial',
      description: 'Serviços de segurança física e patrimonial',
      features: ['Vigilantes treinados', 'Rondas programadas', 'Relatórios de ocorrência', 'Suporte 24h']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em segurança para proteger o que mais importa para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-slate-700 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
