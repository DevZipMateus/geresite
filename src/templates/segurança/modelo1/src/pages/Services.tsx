
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import { 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Calculator, 
  Briefcase, 
  Building2, 
  FileCheck, 
  Coins, 
  LineChart 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Workaround for missing ScaleIcon
const Scale = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 3-6 8h4v10h8V11h4l-6-8Z" />
    <path d="M12 3v18" />
  </svg>
);

const serviceDetails = [
  {
    id: 1,
    title: "Contabilidade Completa",
    description: "Nossos serviços contábeis são adaptados às necessidades específicas da sua empresa, garantindo conformidade legal, precisão e transparência.",
    icon: Calculator,
    features: [
      "Lançamentos e conciliações contábeis",
      "Elaboração de balancetes mensais",
      "Demonstrações contábeis anuais",
      "Balanço patrimonial",
      "Demonstração de resultado do exercício",
      "Análise de demonstrações financeiras",
      "Controle de ativos e depreciações",
      "Gestão de contas a pagar e receber"
    ]
  },
  {
    id: 2,
    title: "Serviços Fiscais",
    description: "Nossa equipe fiscal mantém sua empresa em conformidade com as obrigações tributárias, evitando penalidades e identificando oportunidades de economia.",
    icon: FileText,
    features: [
      "Apuração e declaração de impostos",
      "Emissão e gestão de notas fiscais",
      "Obrigações acessórias (DCTF, SPED, etc.)",
      "Planejamento tributário",
      "Parcelamento de débitos fiscais",
      "Consultoria em regimes tributários",
      "Representação junto a órgãos fiscais",
      "Orientação em fiscalizações"
    ]
  },
  {
    id: 3,
    title: "Abertura de Empresas",
    description: "Simplificamos o processo de abertura da sua empresa, cuidando de toda a burocracia e orientando sobre a melhor estrutura para seu negócio.",
    icon: Briefcase,
    features: [
      "Elaboração de contrato social",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrições municipais e estaduais",
      "Alvarás e licenças de funcionamento",
      "Cadastros em órgãos reguladores",
      "Orientação sobre regime tributário",
      "Planejamento societário e sucessório"
    ]
  },
  {
    id: 4,
    title: "Departamento Societário",
    description: "Cuidamos de todos os aspectos legais relacionados à estrutura societária da sua empresa, garantindo segurança jurídica e conformidade.",
    icon: Building2,
    features: [
      "Alterações contratuais",
      "Atas de assembleias e reuniões",
      "Registro de filiais",
      "Transformação de tipos societários",
      "Incorporações e fusões",
      "Cisões e reorganizações societárias",
      "Encerramento de empresas",
      "Consultoria em governança corporativa"
    ]
  },
  {
    id: 5,
    title: "Departamento Pessoal",
    description: "Nossa equipe de departamento pessoal cuida de todos os processos relacionados aos seus colaboradores, garantindo conformidade trabalhista e previdenciária.",
    icon: FileCheck,
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "Férias e 13º salário",
      "Obrigações acessórias (CAGED, RAIS, etc.)",
      "Gestão de benefícios",
      "Cálculo de encargos sociais",
      "Homologações sindicais",
      "Consultoria em legislação trabalhista"
    ]
  },
  {
    id: 6,
    title: "Consultoria Tributária",
    description: "Oferecemos orientação estratégica para otimizar a carga tributária da sua empresa de forma legal e segura, identificando oportunidades de economia.",
    icon: Scale,
    features: [
      "Análise de regimes tributários",
      "Identificação de benefícios fiscais",
      "Recuperação de créditos tributários",
      "Planejamento para reorganizações",
      "Revisão fiscal preventiva",
      "Orientação em processos administrativos",
      "Análise de impactos de novas legislações",
      "Simulações de carga tributária"
    ]
  },
  {
    id: 7,
    title: "Gestão Financeira",
    description: "Auxiliamos na organização e controle das finanças da sua empresa, oferecendo insights valiosos para decisões estratégicas e crescimento sustentável.",
    icon: Coins,
    features: [
      "Controle de fluxo de caixa",
      "Análise de viabilidade de investimentos",
      "Orçamento empresarial",
      "Gestão de custos",
      "Indicadores financeiros",
      "Projeções financeiras",
      "Relatórios gerenciais",
      "Consultoria para captação de recursos"
    ]
  },
  {
    id: 8,
    title: "Contabilidade Consultiva",
    description: "Vamos além dos números, oferecendo análises e insights estratégicos que ajudam a impulsionar o crescimento e o sucesso do seu negócio.",
    icon: LineChart,
    features: [
      "Análise de desempenho financeiro",
      "Identificação de tendências e oportunidades",
      "Apoio na tomada de decisões estratégicas",
      "Avaliação de investimentos",
      "Análise de viabilidade de novos negócios",
      "Estudos de precificação",
      "Gestão de resultados",
      "Consultoria para expansão e crescimento"
    ]
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate service cards sequentially
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCards(prev => {
          if (prev.length >= serviceDetails.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-20 pb-8 md:pt-28 md:pb-12 bg-gradient-to-b from-scarlet-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={cn(
                "inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-700 mb-4 opacity-0",
                isVisible && "animate-fadeIn"
              )}>
                Nossos Serviços
              </span>
              <h1 className={cn(
                "heading-xl mb-4 opacity-0",
                isVisible && "animate-slideDown"
              )}>
                Soluções contábeis <span className="text-gradient">inteligentes</span> para cada necessidade
              </h1>
              <p className={cn(
                "subtitle mx-auto mb-6 opacity-0",
                isVisible && "animate-slideDown delay-200"
              )}>
                Oferecemos serviços contábeis completos, personalizados para atender às necessidades 
                específicas do seu negócio, desde a abertura da empresa até a contabilidade consultiva.
              </p>
              <div className={cn("opacity-0", isVisible && "animate-slideDown delay-400")}>
                <Link to="/contact">
                  <Button variant="default" size="lg" className="rounded-full">
                    Solicitar orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="heading-lg text-center mb-8">Conheça nossos serviços em detalhes</h2>
            
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {serviceDetails.map((service, index) => (
                <div 
                  key={service.id} 
                  className={cn(
                    "bg-gradient-to-br from-white to-scarlet-50 rounded-xl p-4 md:p-6 shadow-sm border border-scarlet-100",
                    "hover:shadow-md transition-all duration-300 hover:-translate-y-1",
                    "opacity-0 transform translate-y-4",
                    visibleCards.includes(index) && "opacity-100 translate-y-0 transition-all duration-500"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start mb-4 md:mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-scarlet-100 to-scarlet-200 flex items-center justify-center mb-3 md:mb-0 md:mr-4">
                      <service.icon className="w-6 h-6 text-scarlet-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 md:pl-14">O que incluímos:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:pl-14">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-scarlet-600 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button variant="default" size="lg" className="rounded-full">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <div className="py-2">
          <PlansSection />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Services;
