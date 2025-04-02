
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  scrollToTemplates: (e: React.MouseEvent) => void;
}

const TEMPLATE_IMAGES = [
  "/imagens/contabilidade-harmonica.png", 
  "/imagens/contabilidade-template.png", 
  "/imagens/easy-financial-solutions.png", 
  "/imagens/conta-connection-hub.png", 
  "/imagens/contador-simplicity.png", 
  "/imagens/contabilify-modern-site.png"
];

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToTemplates
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % TEMPLATE_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 px-8 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} 
            style={{ animationDelay: '0.1s' }}
          >
            Soluções contábeis inteligentes para empresas de todos os portes
          </h1>
          
          <p 
            className="text-lg text-primary-200 mb-10 animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
          >
            Entre em contato conosco e solicite um orçamento para começar a usar hoje mesmo nossa contabilidade digital e eficiente.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg" 
              className="rounded-md btn-hover-effect text-lg bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-500 hover:to-primary transition-all duration-300 px-8 py-6 flex items-center gap-2"
              asChild
            >
              <a href="#templates">Escolher Template</a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-md text-white border-white hover:bg-white/20 hover:text-white flex items-center gap-2"
              asChild
            >
              <a href="#templates">Nossos serviços</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
