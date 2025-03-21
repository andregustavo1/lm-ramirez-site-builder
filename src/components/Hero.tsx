
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden scroll-section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-center bg-cover blur-load ${isLoaded ? 'loaded' : ''}`}
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=2400&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 bg-blue-500 bg-opacity-20 border border-blue-500 text-blue-200 text-sm font-medium rounded-full animate-fade-in">
            Montagem e Manutenção Industrial
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in animate-delay-100">
            <span className="block">LM Ramirez</span>
            <span className="block mt-3 text-blue-400">Excelência Industrial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Soluções completas em montagem e manutenção industrial 
            com expertise e comprometimento com a qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <a 
              href="https://wa.me/5567999484969" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Fale Conosco
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-15 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Conheça-nos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
