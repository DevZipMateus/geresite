
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos no mercado de automação residencial'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e treinados constantemente'
    },
    {
      icon: CheckCircle,
      title: 'Garantia Total',
      description: 'Garantia de 2 anos em todos os equipamentos e serviços'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Atendimento técnico disponível a qualquer momento'
    }
  ];

  return (
    <section className="relative py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que nos <span className="text-green-400">escolher?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Somos referência em automação e segurança residencial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <reason.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
