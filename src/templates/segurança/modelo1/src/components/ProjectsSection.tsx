
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Residência de Alto Padrão',
      location: 'Barra da Tijuca - RJ',
      description: 'Sistema completo de segurança com CFTV, alarmes e controle de acesso',
      features: ['16 câmeras 4K', 'Central de alarme', 'Fechaduras biométricas', 'App móvel'],
      category: 'Residencial'
    },
    {
      id: 2,
      title: 'Condomínio Empresarial',
      location: 'Centro - RJ',
      description: 'Monitoramento 24h e sistema de controle de acesso para 200 funcionários',
      features: ['Central de monitoramento', 'Catracas biométricas', 'CFTV perimetral', 'Relatórios'],
      category: 'Empresarial'
    },
    {
      id: 3,
      title: 'Shopping Center',
      location: 'Tijuca - RJ',
      description: 'Sistema integrado de segurança para grande centro comercial',
      features: ['150+ câmeras', 'Central 24h', 'Detecção facial', 'Integração bombeiros'],
      category: 'Comercial'
    },
    {
      id: 4,
      title: 'Indústria Farmacêutica',
      location: 'Duque de Caxias - RJ',
      description: 'Segurança industrial com controles rigorosos de acesso',
      features: ['Perímetro blindado', 'Controle duplo', 'Sensores especiais', 'Backup total'],
      category: 'Industrial'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-blue-400">Projetos</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e inovação
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image Placeholder */}
              <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-slate-500 mb-2">📸</div>
                  <p className="text-slate-400">Projeto {projects[currentProject].id}</p>
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
                  {projects[currentProject].category}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-blue-400 mb-4">{projects[currentProject].location}</p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-lg font-semibold text-white">Principais características:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {projects[currentProject].features.map((feature, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <span>Ver Detalhes</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-blue-400' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
