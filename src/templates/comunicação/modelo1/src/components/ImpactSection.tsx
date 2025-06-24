
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";

export default function ImpactSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Doceria da Maria",
      text: "Depois do workshop de Marketing Digital, meu Instagram cresceu 300% e as vendas dobraram!",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "João Santos",
      business: "Santos Eletrônicos",
      text: "O curso de Gestão Financeira me ajudou a organizar as contas e planejar o crescimento da loja.",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Ana Costa",
      business: "Ateliê Ana Costa",
      text: "Formalizei meu MEI e aprendi técnicas de vendas que aumentaram meu faturamento em 150%.",
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Empreendedores Capacitados",
      icon: Users
    },
    {
      number: "85%",
      label: "Aumento Médio nas Vendas",
      icon: TrendingUp
    },
    {
      number: "50+",
      label: "Workshops Realizados",
      icon: Award
    }
  ];

  return (
    <section id="impact" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <Star className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Nossos Resultados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Histórias de
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Sucesso Real
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Veja como nossos workshops transformaram negócios e vidas em Santa Maria
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
              <stat.icon className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6 hover:bg-white/15 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=64&h=64`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-300">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
