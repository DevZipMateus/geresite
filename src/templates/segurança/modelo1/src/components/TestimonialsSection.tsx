
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário Residencial',
      location: 'Barra da Tijuca',
      rating: 5,
      text: 'O sistema de segurança instalado superou todas as expectativas. Me sinto muito mais tranquilo sabendo que minha família está protegida 24 horas.',
      avatar: 'CS'
    },
    {
      name: 'Marina Santos',
      role: 'Gerente de Facilities',
      location: 'Centro Empresarial',
      rating: 5,
      text: 'Profissionais extremamente competentes. O sistema de controle de acesso facilitou muito a gestão de segurança do nosso prédio comercial.',
      avatar: 'MS'
    },
    {
      name: 'Roberto Oliveira',
      role: 'Síndico',
      location: 'Condomínio Residencial',
      rating: 5,
      text: 'Desde a instalação, não tivemos mais problemas de segurança. O monitoramento 24h nos dá total tranquilidade. Recomendo para todos.',
      avatar: 'RO'
    },
    {
      name: 'Ana Paula Costa',
      role: 'Empresária',
      location: 'Loja de Varejo',
      rating: 5,
      text: 'O investimento em segurança foi fundamental para meu negócio. As câmeras ajudam na gestão e o alarme me deixa tranquila mesmo à distância.',
      avatar: 'AC'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            O que Nossos <span className="text-blue-600">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 relative hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Junte-se aos nossos clientes satisfeitos!</h3>
            <p className="text-blue-100 mb-6">
              Mais de 500 clientes já confiam na nossa expertise em segurança. 
              Seja o próximo a ter a tranquilidade que você merece.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Solicitar Proposta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
