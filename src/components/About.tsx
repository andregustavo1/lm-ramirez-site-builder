
import { useEffect, useRef, useState } from 'react';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white scroll-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/image copy 8.png" 
                alt="Equipe LM Ramirez trabalhando"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                Sobre Nós
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Tradição e excelência em <span className="text-blue-700">montagem e manutenção industrial</span>
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              <p className="text-lg text-gray-700">
                A LM Ramirez é uma empresa especializada em soluções abrangentes para montagem e manutenção industrial. 
                Com sede em Naviraí, MS, atuamos em todo Brasil oferecendo serviços de alta qualidade que garantem a 
                eficiência e produtividade das operações industriais de nossos clientes.
              </p>
              <p className="text-lg text-gray-700">
                Nossa equipe altamente capacitada e experiente está pronta para enfrentar os mais diversos desafios, 
                oferecendo soluções customizadas que se alinham às necessidades específicas de cada cliente, sempre com 
                foco na segurança, qualidade e confiabilidade.
              </p>
              <div className="pt-4">
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-700">10+</span>
                    <span className="text-gray-600">Anos de Experiência</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-700">250+</span>
                    <span className="text-gray-600">Projetos Concluídos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-blue-700">100%</span>
                    <span className="text-gray-600">Satisfação do Cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
