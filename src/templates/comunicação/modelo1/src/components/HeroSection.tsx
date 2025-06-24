
import { useState, useEffect } from "react";
import { ChevronRight, MessageCircle, Users, Award } from "lucide-react";

interface HeroSectionProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ cliente }) => {
  const [isVisible, setIsVisible] = useState(false);
  const nomeEmpresa = cliente?.nome_empresa || 'Escola de Comunicação';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme sua
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Comunicação
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Na <strong>{nomeEmpresa}</strong>, oferecemos cursos práticos e modernos para você dominar a arte da comunicação eficaz
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Começar Agora</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Alunos Formados</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Cursos Disponíveis</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <Award className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
