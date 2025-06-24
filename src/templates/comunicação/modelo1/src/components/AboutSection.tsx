
import { Card } from "@/components/ui/card";
import { Users, Heart, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30 mb-6">
            <Heart className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Sobre Nós</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformando
            <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              Sonhos em Negócios
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por empreendedorismo e desenvolvimento local, 
            dedicada a capacitar microempreendedores de Santa Maria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <Target className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
              <p className="text-white/80">
                Capacitar microempreendedores com conhecimento prático e ferramentas 
                necessárias para fazer seus negócios prosperarem no mercado local.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
              <Users className="w-8 h-8 text-green-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Nossa Visão</h3>
              <p className="text-white/80">
                Ser referência em capacitação empreendedora em Santa Maria, 
                contribuindo para o desenvolvimento econômico e social da região.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Por que escolher a Impulso Empreendedor?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-300 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold">Experiência Local</h4>
                  <p className="text-white/70">Conhecemos as especificidades do mercado de Santa Maria</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold">Metodologia Prática</h4>
                  <p className="text-white/70">Workshops hands-on com aplicação imediata</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-300 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold">Acompanhamento Contínuo</h4>
                  <p className="text-white/70">Suporte mesmo após o término dos cursos</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
