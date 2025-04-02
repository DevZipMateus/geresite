
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Card } from '@/components/ui/card';
import { ArrowRight, BarChart, Shield, Users, FileText, Briefcase, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-300 h-full">
      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-5">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-primary hover:underline group"
      >
        Saiba mais
        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Consultoria Empresarial",
      description: "Oferecemos consultoria estratégica personalizada para ajudar sua empresa a crescer e prosperar no mercado.",
      icon: BarChart
    },
    {
      title: "Proteção Jurídica",
      description: "Serviços jurídicos especializados para proteger seu negócio e garantir conformidade legal em todas as operações.",
      icon: Shield
    },
    {
      title: "Gestão de Recursos Humanos",
      description: "Soluções completas de RH para atrair, desenvolver e reter os melhores talentos para sua empresa.",
      icon: Users
    },
    {
      title: "Documentação Empresarial",
      description: "Elaboração e gestão de documentos empresariais com segurança jurídica e eficiência administrativa.",
      icon: FileText
    },
    {
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de planos estratégicos alinhados aos objetivos do seu negócio e às tendências do mercado.",
      icon: Briefcase
    }
  ];

  return (
    <section id="services" className="py-20 px-8 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium">NOSSOS SERVIÇOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">Soluções Completas para Seu Negócio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços profissionais para ajudar sua empresa a atingir todo seu potencial.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
