import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Users, BookOpen } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function CoursesSection() {
  const courses = [
    {
      title: "Marketing Digital para MEI",
      description: "Aprenda a divulgar seu negócio nas redes sociais e atrair mais clientes",
      duration: "8 horas",
      format: "Presencial",
      price: "R$ 150",
      topics: ["Instagram Business", "Facebook Ads", "WhatsApp Business", "Google Meu Negócio"]
    },
    {
      title: "Gestão Financeira Essencial",
      description: "Organize as finanças do seu negócio e tome decisões mais assertivas",
      duration: "6 horas",
      format: "Online",
      price: "R$ 120",
      topics: ["Fluxo de Caixa", "Controle de Estoque", "Precificação", "Planejamento Financeiro"]
    },
    {
      title: "Vendas que Convertem",
      description: "Técnicas de vendas comprovadas para aumentar seu faturamento",
      duration: "4 horas",
      format: "Híbrido",
      price: "R$ 100",
      topics: ["Atendimento ao Cliente", "Técnicas de Persuasão", "Pós-venda", "Fidelização"]
    },
    {
      title: "Formalização e Legalização",
      description: "Tudo sobre MEI, impostos e obrigações legais do seu negócio",
      duration: "3 horas",
      format: "Presencial",
      price: "R$ 80",
      topics: ["Abertura de MEI", "Declaração Anual", "Emissão de Notas", "Direitos e Deveres"]
    }
  ];

  const handleEnrollClick = (courseTitle: string) => {
    openWhatsApp(`Olá! Gostaria de me inscrever no curso "${courseTitle}" da Impulso Empreendedor. Poderia me dar mais informações?`);
  };

  const handleCalendarClick = () => {
    openWhatsApp("Olá! Gostaria de ver o calendário completo de workshops da Impulso Empreendedor.");
  };

  return (
    <section id="courses" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <BookOpen className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Nossos Workshops</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Capacitação que
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Transforma Negócios
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Workshops práticos e focados no resultado, desenvolvidos especialmente para microempreendedores de Santa Maria
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="text-white/70">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-cyan-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.format}
                  </div>
                  <div className="font-semibold text-green-300">
                    {course.price}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">O que você vai aprender:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="text-xs bg-cyan-300/20 text-cyan-300 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Button onClick={() => handleEnrollClick(course.title)} className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold">
                  Inscrever-se
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Calendar Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-8 text-center">
          <Calendar className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Próximas Turmas</h3>
          <p className="text-white/80 mb-6">
            Confira o calendário completo de workshops e garante sua vaga!
          </p>
          <Button onClick={handleCalendarClick} className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold">
            Ver Calendário Completo
          </Button>
        </Card>
      </div>
    </section>
  );
}
