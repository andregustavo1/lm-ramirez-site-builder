import { useEffect, useRef, useState } from 'react';

const Fleet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      id="fleet" 
      ref={sectionRef}
      className="py-24 bg-gray-100 scroll-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Nossa Frota
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nossa Frota
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Veja como nossa frota está preparada para atender às suas necessidades com eficiência e qualidade.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <video 
              src="/images/frota.mp4" 
              controls 
              className="w-auto h-[750px] m-auto rounded-xl shadow-lg"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;