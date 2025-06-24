
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Target, Users } from "lucide-react";
import { openWhatsApp } from "@/utils/whatsapp";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleCoursesClick = () => {
    openWhatsApp("Olá! Gostaria de conhecer os cursos disponíveis na Impulso Empreendedor.");
  };

  const handleLearnMoreClick = () => {
    openWhatsApp("Olá! Gostaria de saber mais sobre a Impulso Empreendedor e seus workshops.");
  };

  return (
    <div id="home" className="relative z-10 min-h-screen flex items-center justify-center px-[8px] py-[57px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Static decorative icons - no animations */}
        <div className="absolute inset-0 pointer-events-none">
          <TrendingUp className="absolute top-20 left-10 w-6 h-6 text-cyan-300/40" />
          <Target className="absolute top-32 right-20 w-8 h-8 text-green-300/40" />
          <Users className="absolute bottom-40 left-20 w-7 h-7 text-cyan-300/40" />
          <TrendingUp className="absolute bottom-20 right-10 w-5 h-5 text-green-300/40" />
        </div>

        {/* Main content - no animations */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-300/30">
            <TrendingUp className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium text-white/90">Workshops Práticos em Santa Maria</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Seu Negócio no
            <span className="block bg-gradient-to-r from-cyan-300 via-green-300 to-cyan-300 bg-clip-text text-transparent">
              Próximo Nível
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transforme sua ideia em realidade com nossos workshops práticos em Marketing Digital, Gestão, Vendas e Formalização para microempreendedores.
          </p>
        </div>

        {/* Action buttons - no hover animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleCoursesClick} 
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-semibold"
          >
            Conheça Nossos Cursos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleLearnMoreClick} 
            className="border-cyan-300/30 backdrop-blur-sm text-cyan-100 bg-transparent"
          >
            Saiba Mais
          </Button>
        </div>

        {/* Feature cards - no hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
            <Target className="w-8 h-8 text-cyan-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Foco no MEI</h3>
            <p className="text-white/70">Conteúdo específico para microempreendedores individuais e pequenos negócios</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
            <TrendingUp className="w-8 h-8 text-green-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Crescimento Real</h3>
            <p className="text-white/70">Estratégias comprovadas que geram resultados práticos para seu negócio</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-300/20 p-6">
            <Users className="w-8 h-8 text-cyan-300 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Comunidade Local</h3>
            <p className="text-white/70">Conecte-se com outros empreendedores de Santa Maria e região</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
