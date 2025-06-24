
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { id: 1, title: 'Sala Automatizada', description: 'Controle total de iluminação e entretenimento' },
    { id: 2, title: 'Cozinha Inteligente', description: 'Automação completa para sua cozinha' },
    { id: 3, title: 'Sistema de Segurança', description: 'Monitoramento 24/7 com câmeras HD' },
    { id: 4, title: 'Quarto Smart', description: 'Conforto e tecnologia para seu descanso' }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-green-400">Projetos</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformamos
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <div className="h-64 bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-slate-400">Imagem do Projeto {images[currentImage].id}</p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              {images[currentImage].title}
            </h3>
            <p className="text-slate-300 mb-6">
              {images[currentImage].description}
            </p>
            
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-green-400' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
