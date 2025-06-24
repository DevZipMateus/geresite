
import React from "react";
import { Cliente } from "@/types/database.types";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Award } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface AgronegocioTemplateProps {
  cliente: Cliente;
  logoUrl?: string | null;
}

const AgronegocioTemplate = ({ cliente, logoUrl }: AgronegocioTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt={`Logo ${cliente.nome_empresa}`}
                  className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                />
              ) : (
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">
                    {cliente.nome_empresa.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold">{cliente.nome_empresa}</h1>
                <p className="text-green-100">Soluções para o Agronegócio</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <span>{cliente.telefone}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Inovação e Tecnologia para o Campo
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Na {cliente.nome_empresa}, oferecemos soluções completas para maximizar 
            a produtividade e sustentabilidade do seu agronegócio.
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-green-200">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-green-200">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-green-200">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Consultoria Agrícola</h4>
              <p className="text-gray-600">
                Análise completa do solo, planejamento de cultivo e otimização de recursos
                para máxima produtividade.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <Star className="h-12 w-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Tecnologia Agrícola</h4>
              <p className="text-gray-600">
                Implementação de sistemas de irrigação inteligente, drones e monitoramento
                por satélite.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-3">Capacitação</h4>
              <p className="text-gray-600">
                Treinamentos especializados para sua equipe sobre as melhores práticas
                do agronegócio moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Sobre a {cliente.nome_empresa}
              </h3>
              <p className="text-gray-600 mb-6">
                Somos uma empresa especializada em soluções inovadoras para o agronegócio,
                combinando tradição e tecnologia para oferecer resultados excepcionais
                aos nossos clientes.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe, liderada por {cliente.nome_responsavel}, possui vasta
                experiência no setor agrícola e está sempre atualizada com as últimas
                tendências e tecnologias do mercado.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-green-500" />
                <span className="text-lg font-semibold text-gray-700">
                  Certificação ISO 9001
                </span>
              </div>
            </div>
            <div className="bg-green-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Nossa Missão</h4>
              <p className="text-gray-600 mb-4">
                Promover a sustentabilidade e produtividade no campo através de
                soluções tecnológicas inovadoras e consultoria especializada.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Nossa Visão</h4>
              <p className="text-gray-600">
                Ser referência nacional em tecnologia agrícola, contribuindo para
                um agronegócio mais eficiente e sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Depoimentos de Clientes
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "A {cliente.nome_empresa} transformou nossa produção. Com as soluções
                implementadas, aumentamos nossa produtividade em 40% no primeiro ano."
              </p>
              <div className="font-semibold text-gray-800">
                João Silva - Fazenda Esperança
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Profissionais extremamente competentes. A consultoria foi fundamental
                para otimizar nossos processos e reduzir custos."
              </p>
              <div className="font-semibold text-gray-800">
                Maria Santos - Agropecuária Santos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
            <p className="text-xl text-green-100">
              Pronto para revolucionar seu agronegócio? Fale conosco!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 mb-4 text-green-200" />
              <h4 className="text-xl font-semibold mb-2">Telefone</h4>
              <p className="text-green-100">{cliente.telefone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 mb-4 text-green-200" />
              <h4 className="text-xl font-semibold mb-2">E-mail</h4>
              <p className="text-green-100">{cliente.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 mb-4 text-green-200" />
              <h4 className="text-xl font-semibold mb-2">Horário</h4>
              <p className="text-green-100">
                Segunda a Sexta<br />
                8:00 às 18:00
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
              <MapPin className="h-5 w-5 mr-2" />
              Atendemos todo o território nacional
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt={`Logo ${cliente.nome_empresa}`}
                className="h-8 w-8 object-contain bg-white rounded p-1"
              />
            ) : (
              <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">
                  {cliente.nome_empresa.charAt(0)}
                </span>
              </div>
            )}
            <span className="text-xl font-bold">{cliente.nome_empresa}</span>
          </div>
          <p className="text-gray-400 mb-4">
            Responsável: {cliente.nome_responsavel}
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 {cliente.nome_empresa}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber={cliente.telefone} />
    </div>
  );
};

export default AgronegocioTemplate;
