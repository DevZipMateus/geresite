
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

interface NavigationProps {
  cliente?: {
    nome_empresa: string;
    nome_responsavel: string;
    email: string;
    telefone: string;
    categoria: string;
  };
  logoUrl?: string | null;
}

const Navigation: React.FC<NavigationProps> = ({ cliente, logoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nomeEmpresa = cliente?.nome_empresa || 'Escola de Comunicação';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {logoUrl ? (
              <img src={logoUrl} alt={nomeEmpresa} className="h-8 w-8 object-contain" />
            ) : (
              <MessageCircle className="h-8 w-8 text-blue-400" />
            )}
            <span className="text-xl font-bold text-white">{nomeEmpresa}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Início
            </a>
            <a href="#courses" className="text-gray-300 hover:text-white transition-colors">
              Cursos
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contato
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Inscreva-se
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">
                Início
              </a>
              <a href="#courses" className="block px-3 py-2 text-gray-300 hover:text-white">
                Cursos
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">
                Sobre
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contato
              </a>
              <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors">
                Inscreva-se
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
