
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    image: "/src/images/image2.png",
    title: "Montagem de Estrutura Metálica",
    description: "Projeto de montagem de galpão industrial com estrutura metálica completa."
  },
  {
    image: "./src/images/image1.png",
    title: "Manutenção de Equipamentos",
    description: "Serviço de manutenção preventiva em maquinário industrial de alta performance."
  },
  {
    image: "./src/images/image3.png",
    title: "Implementação de Tubulação Industrial",
    description: "Projeto e instalação de sistemas de tubulação para transporte de fluidos industriais."
  },
  {
    image: "./src/images/image.png",
    title: "Modernização de Planta",
    description: "Atualização tecnológica e estrutural de planta industrial para aumento de produtividade."
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const maxSlides = Math.ceil(projects.length / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-white scroll-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Nossos Projetos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Realizações que nos Orgulham
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Conheça alguns dos projetos que realizamos com excelência, demonstrando nossa 
            capacidade técnica e comprometimento com a qualidade.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4 ${
                    isVisible ? `animate-fade-in animate-delay-${index * 100}` : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full hover-lift">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxSlides)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
