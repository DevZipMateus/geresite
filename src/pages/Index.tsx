
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TemplateCard from '@/components/TemplateCard';
import TestimonialCard from '@/components/TestimonialCard';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Mock data for templates
const templates = [
  {
    id: '1',
    title: 'Contador Profissional',
    description: 'Template ideal para contadores e escritórios de contabilidade que buscam uma presença online profissional.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  },
  {
    id: '2',
    title: 'Consultoria Fiscal',
    description: 'Design moderno para empresas de consultoria fiscal e tributária que desejam transmitir confiança.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  },
  {
    id: '3',
    title: 'Contabilidade Digital',
    description: 'Template com foco em contabilidade digital e serviços online com design clean e intuitivo.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  },
  {
    id: '4',
    title: 'Auditoria Empresarial',
    description: 'Layout profissional para empresas de auditoria, com seções para serviços especializados.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  },
  {
    id: '5',
    title: 'Contabilidade Corporativa',
    description: 'Design sofisticado para contadores que atendem grandes empresas e corporações.',
    imageUrl: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  },
  {
    id: '6',
    title: 'Assessoria Contábil',
    description: 'Template completo para escritórios de assessoria contábil com foco em atendimento personalizado.',
    imageUrl: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80',
    formUrl: 'https://forms.google.com'
  }
];

// Mock data for testimonials
const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Contador, CS Contabilidade',
    content: 'O template que adquiri superou todas as minhas expectativas. Meus clientes comentam sobre o profissionalismo do site e isso tem me ajudado a conquistar novos contratos.',
    rating: 5
  },
  {
    name: 'Ana Oliveira',
    role: 'Consultora Tributária',
    content: 'Extremamente satisfeita com a qualidade e facilidade de personalização. Em poucos dias já estava com meu site no ar, sem complicações.',
    rating: 5
  },
  {
    name: 'Roberto Almeida',
    role: 'Escritório Contábil Almeida',
    content: 'Excelente custo-benefício. O design é moderno e transmite exatamente a confiabilidade que buscamos para nossa marca.',
    rating: 4
  }
];

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTemplates = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector('#templates');
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4ecfb 100%)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <FadeIn direction="left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  Lançamento de Templates Profissionais
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Crie Seu Site Institucional com Nossos Templates
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Templates profissionais, personalizáveis e com design moderno para elevar o seu negócio. Implantação rápida e suporte especializado.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="rounded-full btn-hover-effect text-lg"
                    asChild
                  >
                    <a href="#templates">Escolher Template</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full text-lg"
                    asChild
                  >
                    <a href="#depoimentos">Ver Depoimentos</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <div className="flex-1">
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="Template Preview" 
                    className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto z-10 border border-white"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <a 
              href="#templates" 
              onClick={scrollToTemplates}
              className="animate-float flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="mb-2">Role para ver os templates</span>
              <ChevronDown />
            </a>
          </div>
        </div>
      </section>
      
      {/* Templates Section */}
      <section id="templates" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Templates para Contabilidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha entre nossos templates premium, desenvolvidos especificamente para profissionais da área contábil e financeira.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {templates.map((template, index) => (
              <FadeIn key={template.id} delay={index * 100}>
                <TemplateCard {...template} />
              </FadeIn>
            ))}
          </div>
          
          <FadeIn className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Não encontrou o que precisava? Temos outras opções para seu negócio.
            </p>
            <Button 
              variant="outline" 
              className="rounded-full"
              asChild
            >
              <a href="#">Ver mais templates</a>
            </Button>
          </FadeIn>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher nossos templates?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para sua presença online. Confira os diferenciais dos nossos templates.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FadeIn className="text-center">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design Responsivo</h3>
              <p className="text-muted-foreground">
                Todos os templates se adaptam perfeitamente a qualquer dispositivo - desktop, tablet ou smartphone.
              </p>
            </FadeIn>
            
            <FadeIn className="text-center" delay={100}>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                  <path d="M12 2H2v10h10V2Z" />
                  <path d="M22 12h-4v4h4v-4Z" />
                  <path d="M12 8h4v4" />
                  <path d="M8 12h4v4" />
                  <path d="M22 22H12v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalização Fácil</h3>
              <p className="text-muted-foreground">
                Altere cores, imagens e textos sem precisar de conhecimentos técnicos ou contratação de programadores.
              </p>
            </FadeIn>
            
            <FadeIn className="text-center" delay={200}>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                  <path d="M6 20h4" />
                  <path d="M14 20h4" />
                  <path d="M12 16v4" />
                  <path d="M12 3v4" />
                  <path d="M17 7 7 17" />
                  <path d="M14.5 9.5 17 7 14.5 4.5" />
                  <path d="M9.5 14.5 7 17l2.5 2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Otimizado para SEO</h3>
              <p className="text-muted-foreground">
                Todos os templates são desenvolvidos com as melhores práticas para serem bem posicionados nos buscadores.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira a experiência de quem já está utilizando nossos templates para impulsionar seus negócios.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </FadeIn>
            ))}
          </div>
          
          <FadeIn className="mt-16 text-center">
            <Button 
              className="rounded-full btn-hover-effect"
              asChild
            >
              <a href="#templates">Escolher meu template</a>
            </Button>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass rounded-3xl p-10 md:p-16 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para transformar sua presença online?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Escolha um de nossos templates profissionais e tenha seu site no ar em poucos minutos. Sem complicações, sem programação.
                </p>
                <Button 
                  size="lg" 
                  className="rounded-full btn-hover-effect text-lg"
                  asChild
                >
                  <a href="#templates">Começar agora</a>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
