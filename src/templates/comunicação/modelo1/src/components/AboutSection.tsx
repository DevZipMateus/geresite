
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Nossos workshops são práticos e focados em gerar resultados reais para seu negócio"
    },
    {
      icon: Heart,
      title: "Comprometimento",
      description: "Estamos comprometidos com o sucesso de cada microempreendedor de Santa Maria"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Criamos uma rede de apoio entre empreendedores locais para crescermos juntos"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Oferecemos conteúdo de alta qualidade com instrutores experientes e qualificados"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <Heart className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Nossa História</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Impulso Empreendedor
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              A <strong className="text-cyan-300">Impulso Empreendedor</strong> nasceu da paixão por desenvolver o ecossistema empreendedor de Santa Maria. Sabemos que o microempreendedor brasileiro enfrenta desafios únicos e precisa de soluções práticas.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Nossa missão é <strong className="text-green-300">democratizar o conhecimento empresarial</strong>, oferecendo workshops de alta qualidade com preços acessíveis, focados na realidade do pequeno negócio local.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Já capacitamos mais de 500 empreendedores e vemos diariamente negócios se transformando, crescendo e gerando mais empregos em nossa região.
            </p>
          </div>

          {/* Mission Image */}
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-8 text-center">
            <Users className="w-16 h-16 text-cyan-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
            <p className="text-white/80">
              Capacitar microempreendedores com conhecimento prático e acessível, 
              impulsionando o desenvolvimento econômico local de Santa Maria.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <value.icon className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-white/70 text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
