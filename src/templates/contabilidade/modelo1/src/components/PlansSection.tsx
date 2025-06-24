
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [{
    title: "MEI",
    price: "R$199",
    description: "Ideal para Microempreendedores Individuais",
    features: ["Declaração Anual (DASN-SIMEI)", "Emissão de guias (DAS)", "Suporte básico por e-mail", "Orientação fiscal"],
    isPopular: false
  }, {
    title: "Essencial",
    price: "R$399",
    description: "Perfeito para pequenas empresas",
    features: ["Contabilidade completa", "Apuração de impostos", "Folha de pagamento (até 5 funcionários)", "Suporte por telefone e e-mail", "Relatórios trimestrais"],
    isPopular: true
  }, {
    title: "Empresarial",
    price: "R$799",
    description: "Para empresas em crescimento",
    features: ["Contabilidade completa", "Planejamento tributário", "Folha de pagamento (até 15 funcionários)", "Consultoria mensal", "Relatórios gerenciais mensais", "Atendimento prioritário"],
    isPopular: false
  }];

  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha o plano que melhor se adapta às necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de um plano personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos planos personalizados para empresas com necessidades específicas. 
            Entre em contato conosco para uma proposta sob medida.
          </p>
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Plano Personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
