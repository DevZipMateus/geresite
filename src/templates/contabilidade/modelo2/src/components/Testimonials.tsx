
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Elina Santos',
    position: 'Diretora da BJT Transportadora',
    content: 'A ContaPlus tem se mostrado extremamente pontual na entrega de documentos e o suporte é sempre atencioso. Recomendo a todos que procuram um serviço contábil confiável.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    id: 2,
    name: 'Joel Gomes',
    position: 'Administrador da Torque Implementos',
    content: 'O comprometimento da equipe da ContaPlus com a satisfação do cliente é notável. Eles sempre atendem às necessidades da nossa empresa com excelência e profissionalismo.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    id: 3,
    name: 'João Meneses',
    position: 'Diretor da Ágil Mecânica',
    content: 'O atendimento da ContaPlus é prestativo, sempre esclarecendo nossas dúvidas. Os serviços prestados são excelentes e nos ajudam a manter nosso negócio em ordem.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça a experiência de quem já utiliza nossos serviços e confia em nossa expertise.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div 
            className="relative bg-white rounded-xl p-8 md:p-10 shadow-sm animate-fade-in"
            key={testimonials[activeIndex].id}
          >
            {/* Quotation Mark */}
            <div className="absolute -top-6 left-8 text-6xl text-corporate-blue/20">"</div>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 text-center">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600 text-center">{testimonials[activeIndex].position}</p>
                
                {/* Rating */}
                <div className="flex justify-center mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="md:w-3/4">
                <p className="text-gray-600 text-lg italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-corporate-blue w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-corporate-blue/10 text-gray-600 hover:text-corporate-blue transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
