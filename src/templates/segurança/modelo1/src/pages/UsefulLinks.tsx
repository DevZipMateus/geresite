
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { CalendarDays, FileText, FileSpreadsheet, Download, ExternalLink, Calculator, Link2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface LinkItem {
  title: string;
  url: string;
  description: string;
}

const UsefulLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("agenda");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const agendaLinks: LinkItem[] = [
    {
      title: "Agenda Tributária Federal",
      url: "#",
      description: "Confira o calendário de obrigações tributárias federais para empresas."
    },
    {
      title: "Agenda Tributária Estadual - SP",
      url: "#",
      description: "Calendário de obrigações tributárias estaduais para empresas de São Paulo."
    },
    {
      title: "Agenda Tributária Municipal - São Paulo",
      url: "#",
      description: "Calendário de obrigações tributárias municipais para empresas da cidade de São Paulo."
    },
    {
      title: "Agenda de Obrigações Trabalhistas",
      url: "#",
      description: "Confira as datas importantes relacionadas a obrigações trabalhistas e previdenciárias."
    },
    {
      title: "Agenda de Obrigações Acessórias",
      url: "#",
      description: "Calendário de entrega das principais obrigações acessórias."
    },
    {
      title: "Calendário de Feriados e Pontos Facultativos",
      url: "#",
      description: "Lista de feriados nacionais e pontos facultativos para o ano corrente."
    }
  ];

  const tabelasLinks: LinkItem[] = [
    {
      title: "Tabela do Simples Nacional",
      url: "#",
      description: "Alíquotas e limites do Simples Nacional atualizados."
    },
    {
      title: "Tabela Progressiva do Imposto de Renda",
      url: "#",
      description: "Tabela com as faixas e alíquotas do imposto de renda para pessoa física."
    },
    {
      title: "Tabela de Contribuição Previdenciária",
      url: "#",
      description: "Tabela com as alíquotas de contribuição para o INSS."
    },
    {
      title: "Tabela de Multas e Juros para Recolhimentos em Atraso",
      url: "#",
      description: "Informações sobre multas e juros aplicáveis a tributos pagos com atraso."
    },
    {
      title: "Tabela de Depreciação de Bens",
      url: "#",
      description: "Prazos de vida útil e taxas de depreciação para diversos tipos de bens."
    },
    {
      title: "Tabela de Incidência de ICMS por Estado",
      url: "#",
      description: "Alíquotas de ICMS aplicáveis em operações interestaduais."
    }
  ];

  const formulariosLinks: LinkItem[] = [
    {
      title: "Termo de Rescisão de Contrato de Trabalho",
      url: "#",
      description: "Modelo de termo para formalização de rescisão de contrato de trabalho."
    },
    {
      title: "Termo de Homologação",
      url: "#",
      description: "Modelo de termo para homologação de rescisão contratual junto ao sindicato."
    },
    {
      title: "Termo de Quitação Anual",
      url: "#",
      description: "Modelo de termo para quitação anual de obrigações trabalhistas."
    },
    {
      title: "Instrução para Preenchimento de DARF",
      url: "#",
      description: "Guia passo a passo para o correto preenchimento do Documento de Arrecadação de Receitas Federais."
    },
    {
      title: "Modelo de Contrato Social para MEI",
      url: "#",
      description: "Modelo básico de contrato social para Microempreendedor Individual."
    },
    {
      title: "Modelo de Livro de Registro de Empregados",
      url: "#",
      description: "Modelo para registro de informações sobre os colaboradores da empresa."
    }
  ];

  const calculadorasLinks: LinkItem[] = [
    {
      title: "Calculadora de Rescisão Trabalhista",
      url: "#",
      description: "Ferramenta para cálculo de verbas rescisórias em caso de demissão."
    },
    {
      title: "Calculadora de Férias",
      url: "#",
      description: "Calcule o valor das férias, incluindo 1/3 constitucional e deduções."
    },
    {
      title: "Calculadora de 13º Salário",
      url: "#",
      description: "Ferramenta para cálculo do 13º salário proporcional ou integral."
    },
    {
      title: "Calculadora de Encargos Sociais",
      url: "#",
      description: "Calcule os encargos sociais incidentes sobre a folha de pagamento."
    },
    {
      title: "Calculadora de Imposto de Renda",
      url: "#",
      description: "Ferramenta para simulação do imposto de renda a pagar."
    },
    {
      title: "Calculadora de Juros e Multas",
      url: "#",
      description: "Calcule juros e multas para pagamentos em atraso."
    }
  ];
  
  const sitesUteisLinks: LinkItem[] = [
    {
      title: "Receita Federal do Brasil",
      url: "https://www.gov.br/receitafederal/",
      description: "Site oficial da Receita Federal para consultas e serviços."
    },
    {
      title: "Portal e-CAC",
      url: "https://cav.receita.fazenda.gov.br/",
      description: "Centro Virtual de Atendimento ao Contribuinte."
    },
    {
      title: "Portal do Simples Nacional",
      url: "https://www8.receita.fazenda.gov.br/SimplesNacional/",
      description: "Informações e serviços relacionados ao Simples Nacional."
    },
    {
      title: "Portal do Empreendedor - MEI",
      url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor",
      description: "Site oficial para formalização e gestão de MEI."
    },
    {
      title: "Consulta CNPJ",
      url: "https://servicos.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp",
      description: "Ferramenta para consulta de situação cadastral de CNPJ."
    },
    {
      title: "Ministério do Trabalho e Previdência",
      url: "https://www.gov.br/trabalho-e-previdencia/",
      description: "Informações sobre legislação trabalhista e previdenciária."
    }
  ];

  const getActiveLinks = () => {
    switch (activeTab) {
      case "agenda":
        return agendaLinks;
      case "tabelas":
        return tabelasLinks;
      case "formularios":
        return formulariosLinks;
      case "calculadoras":
        return calculadorasLinks;
      case "sites":
        return sitesUteisLinks;
      default:
        return agendaLinks;
    }
  };

  const getIcon = (tab: string) => {
    switch (tab) {
      case "agenda":
        return <CalendarDays className="w-5 h-5" />;
      case "tabelas":
        return <FileSpreadsheet className="w-5 h-5" />;
      case "formularios":
        return <FileText className="w-5 h-5" />;
      case "calculadoras":
        return <Calculator className="w-5 h-5" />;
      case "sites":
        return <Link2 className="w-5 h-5" />;
      default:
        return <CalendarDays className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-scarlet-100 text-scarlet-600 mb-6 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                Links Úteis
              </span>
              <h1 className={`heading-xl mb-6 opacity-0 ${isVisible ? 'animate-slideDown' : ''}`}>
                Recursos e <span className="text-gradient">ferramentas</span> para seu negócio
              </h1>
              <p className={`subtitle mx-auto mb-10 opacity-0 ${isVisible ? 'animate-slideDown delay-200' : ''}`}>
                Selecionamos os melhores recursos, ferramentas e informações para 
                ajudar você a gerenciar seu negócio de forma mais eficiente.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center mb-10 gap-2">
              <button
                onClick={() => setActiveTab("agenda")}
                className={`flex items-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "agenda" 
                    ? 'bg-scarlet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <CalendarDays className="w-4 h-4 mr-2" />
                Agenda Tributária
              </button>
              
              <button
                onClick={() => setActiveTab("tabelas")}
                className={`flex items-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "tabelas" 
                    ? 'bg-scarlet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Tabelas Práticas
              </button>
              
              <button
                onClick={() => setActiveTab("formularios")}
                className={`flex items-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "formularios" 
                    ? 'bg-scarlet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Formulários
              </button>
              
              <button
                onClick={() => setActiveTab("calculadoras")}
                className={`flex items-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "calculadoras" 
                    ? 'bg-scarlet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculadoras
              </button>
              
              <button
                onClick={() => setActiveTab("sites")}
                className={`flex items-center px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "sites" 
                    ? 'bg-scarlet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Link2 className="w-4 h-4 mr-2" />
                Sites Úteis
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getActiveLinks().map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col hover:border-scarlet-200"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-scarlet-100 flex items-center justify-center mr-4 flex-shrink-0 text-scarlet-600">
                      {getIcon(activeTab)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-scarlet-600 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center text-scarlet-600 text-sm font-medium">
                    {activeTab === "sites" ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Acessar site
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </>
                    )}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default UsefulLinks;
