
import { useState, useEffect, useRef } from 'react';
import { Eye, Filter, X } from 'lucide-react';

const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'residential', name: 'Residencial' },
  { id: 'commercial', name: 'Comercial' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'renovation', name: 'Reformas' }
];

const projects = [
  {
    id: 1,
    title: "Residencial Villa dos Sonhos",
    category: "residential",
    image: "https://blog.escolainternacional.com.br/hs-fs/hubfs/Blog/melhor-regiao-economica.jpg?width=1200&name=melhor-regiao-economica.jpg",
    description: "Casa moderna de 3 quartos com arquitetura contemporânea"
  },
  {
    id: 2,
    title: "Edifício Comercial Central",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complexo comercial de 15 andares no centro da cidade"
  },
  {
    id: 3,
    title: "Galpão Industrial Tech",
    category: "industrial",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Galpão industrial de 5.000m² para indústria tecnológica"
  },
  {
    id: 4,
    title: "Reforma Apartamento Luxury",
    category: "renovation",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Reforma completa de apartamento de 200m²"
  },
  {
    id: 5,
    title: "Condomínio Residencial Verde",
    category: "residential",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Condomínio com 50 unidades habitacionais"
  },
  {
    id: 6,
    title: "Shopping Center Norte",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Centro comercial com 120 lojas e praça de alimentação"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});
  const [expandedImage, setExpandedImage] = useState<{id: number, src: string, title: string} | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log('ProjectsSection is now visible');
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageLoad = (projectId: number) => {
    console.log(`Image loaded for project ${projectId}`);
    setImageLoadStates(prev => ({ ...prev, [projectId]: true }));
  };

  const handleImageError = (projectId: number, imageUrl: string) => {
    console.error(`Failed to load image for project ${projectId}:`, imageUrl);
  };

  const handleImageExpand = (project: {id: number, image: string, title: string}) => {
    console.log(`Expanding image for project ${project.id}`);
    setExpandedImage({id: project.id, src: project.image, title: project.title});
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  return (
    <>
      <section className="py-16 bg-white" id="projects">
        <div className="container mx-auto px-4" ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
              Nossos Projetos
            </span>
            <h2 className="heading-lg mb-4">
              Galeria de <span className="text-gradient">projetos realizados</span>
            </h2>
            <p className="subtitle">
              Conheça alguns dos nossos principais projetos já concluídos em diferentes segmentos
              da construção civil.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-construction-100 text-construction-700 hover:bg-blue-50'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-construction-200 ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="relative h-64 overflow-hidden bg-construction-100">
                  {!imageLoadStates[project.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-construction-100">
                      <div className="animate-pulse text-construction-500">Carregando...</div>
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                      imageLoadStates[project.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(project.id)}
                    onError={() => handleImageError(project.id, project.image)}
                    onClick={() => handleImageExpand(project)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageExpand(project);
                        }}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-construction-900 mb-2">{project.title}</h3>
                  <p className="text-construction-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-construction-500">Nenhum projeto encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            <button
              onClick={handleCloseExpanded}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-center">
              <h3 className="text-white text-sm sm:text-xl font-bold bg-black bg-opacity-50 rounded-lg py-1 px-2 sm:py-2 sm:px-4 inline-block">
                {expandedImage.title}
              </h3>
            </div>
          </div>
          <div 
            className="absolute inset-0 -z-10"
            onClick={handleCloseExpanded}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
