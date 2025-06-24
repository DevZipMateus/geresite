
import { Card } from "@/components/ui/card";
import { Users, Award, TrendingUp, Target } from "lucide-react";

export default function ImpactSection() {
  const impacts = [
    {
      icon: Users,
      number: "500+",
      label: "Empreendedores Capacitados",
      description: "Pessoas que já passaram pelos nossos workshops"
    },
    {
      icon: Award,
      number: "150+",
      label: "Negócios Formalizados",
      description: "MEIs criados com nossa orientação"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Taxa de Sucesso",
      description: "Dos participantes aumentaram suas vendas"
    },
    {
      icon: Target,
      number: "3 anos",
      label: "De Experiência",
      description: "Atuando em Santa Maria e região"
    }
  ];

  return (
    <section id="impact" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <TrendingUp className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Nosso Impacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Falam por Si
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Números que comprovam o sucesso dos nossos workshops e o crescimento dos negócios locais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
              <impact.icon className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{impact.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{impact.label}</h3>
              <p className="text-white/70 text-sm">{impact.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
