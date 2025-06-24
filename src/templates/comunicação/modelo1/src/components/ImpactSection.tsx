
import React from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: '5.000+',
      label: 'Alunos Formados',
      description: 'Profissionais capacitados em comunicação digital'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Taxa de Sucesso',
      description: 'Dos alunos conseguem resultados em 30 dias'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Prêmios',
      description: 'Reconhecimentos em comunicação e educação'
    },
    {
      icon: Target,
      number: '1M+',
      label: 'Alcance Total',
      description: 'Pessoas impactadas pelos nossos projetos'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Marketing Manager',
      company: 'TechCorp',
      text: 'O curso transformou completamente minha abordagem de comunicação digital. Triplicamos nosso engajamento!',
      avatar: 'AS'
    },
    {
      name: 'Carlos Santos',
      role: 'Podcaster',
      company: 'Podcast Inovação',
      text: 'Graças ao curso, meu podcast saiu de 100 para 10.000 ouvintes mensais em apenas 3 meses.',
      avatar: 'CS'
    },
    {
      name: 'Marina Costa',
      role: 'Content Creator',
      company: 'Freelancer',
      text: 'Aprendi técnicas que me permitiram quintuplicar minha renda como criadora de conteúdo.',
      avatar: 'MC'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nosso <span className="text-purple-600">Impacto</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Números que comprovam a eficácia dos nossos métodos de ensino
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-slate-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Histórias de <span className="text-purple-600">Sucesso</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {testimonial.avatar}
                </div>
                
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para Transformar sua Comunicação?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 profissionais que já transformaram suas carreiras 
              com nossos cursos de comunicação digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Começar Agora
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Agendar Conversa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
