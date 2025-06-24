
import React from 'react';
import { Play, Clock, Users, Star } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Comunicação Digital Avançada',
      description: 'Domine as técnicas mais eficazes de comunicação digital',
      duration: '8 semanas',
      students: '150+',
      rating: 4.9,
      price: 'R$ 497',
      image: '🎯',
      features: ['Marketing Digital', 'Copywriting', 'Redes Sociais', 'Analytics']
    },
    {
      title: 'Produção de Podcast Profissional',
      description: 'Aprenda a criar, produzir e monetizar seu podcast',
      duration: '6 semanas',
      students: '89+',
      rating: 4.8,
      price: 'R$ 397',
      image: '🎙️',
      features: ['Equipamentos', 'Edição', 'Distribuição', 'Monetização']
    },
    {
      title: 'Criação de Conteúdo Viral',
      description: 'Estratégias para criar conteúdo que engaja e viraliza',
      duration: '4 semanas',
      students: '200+',
      rating: 4.9,
      price: 'R$ 297',
      image: '🚀',
      features: ['Storytelling', 'Trends', 'Algoritmos', 'Engajamento']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nossos <span className="text-purple-600">Cursos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvemos profissionais de comunicação com cursos práticos e atualizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Course Image */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="text-6xl">{course.image}</div>
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                    ))}
                    <span className="text-slate-600 text-sm ml-1">({course.rating})</span>
                  </div>
                  <span className="text-purple-600 font-bold text-lg">{course.price}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} alunos
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-slate-900">O que você vai aprender:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.features.map((feature, i) => (
                      <div key={i} className="text-slate-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Começar Agora</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Ver Todos os Cursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
