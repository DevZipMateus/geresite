
import { Calculator, BarChart3, FileText, Users, PieChart, Building } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade',
      description: 'Serviços completos de contabilidade para empresas de todos os portes, com demonstrativos claros e precisos.'
    },
    {
      icon: BarChart3,
      title: 'Fiscal',
      description: 'Gerenciamento de obrigações fiscais, apuração de impostos e planejamento tributário para otimizar a carga fiscal.'
    },
    {
      icon: FileText,
      title: 'Departamento Pessoal',
      description: 'Gestão completa da folha de pagamento, admissões, demissões e todas as rotinas trabalhistas.'
    },
    {
      icon: Building,
      title: 'Abertura de Empresa',
      description: 'Auxílio completo na abertura, alteração ou encerramento de empresas, com agilidade e segurança.'
    },
    {
      icon: PieChart,
      title: 'Consultoria Empresarial',
      description: 'Análise financeira, planejamento estratégico e apoio na tomada de decisões para o crescimento do seu negócio.'
    },
    {
      icon: Users,
      title: 'Societário',
      description: 'Elaboração e alteração de contratos sociais, atas e documentos societários conforme a legislação vigente.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para atender todas as necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a href="#contato" className="btn-primary inline-block">
            Solicite um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
