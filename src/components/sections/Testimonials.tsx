
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "CEO, Empresa Inovadora",
      content: "Os serviços prestados superaram todas as nossas expectativas. A equipe é extremamente profissional e atenciosa, sempre pronta para atender às nossas necessidades.",
      rating: 5
    },
    {
      name: "João Oliveira",
      role: "Diretor, StartUp Tech",
      content: "Desde que começamos a trabalhar juntos, nossa empresa experimentou um crescimento significativo. O suporte e a orientação fornecidos foram inestimáveis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente, Comércio Varejista",
      content: "A consultoria nos ajudou a identificar áreas de melhoria e implementar mudanças que tiveram um impacto positivo imediato em nossos resultados.",
      rating: 4
    },
    {
      name: "Ricardo Silva",
      role: "Proprietário, Indústria Local",
      content: "Excelente atendimento e resultados reais. Recomendo fortemente para qualquer empresa que busca crescer de forma sustentável no mercado.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-8 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-medium">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de clientes que transformaram seus negócios com nossas soluções empresariais.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100}>
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
