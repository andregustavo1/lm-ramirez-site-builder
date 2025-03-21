
import { Phone, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gray-900 text-white scroll-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-left' : 'opacity-0'}>
            <div className="max-w-lg">
              <div className="inline-block px-3 py-1 bg-blue-800 text-blue-200 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Entre em Contato
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar sua <span className="text-blue-400">produção industrial</span>?
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-lg text-gray-300 mb-10">
                Estamos à disposição para atender às necessidades da sua empresa com soluções 
                personalizadas e de alta qualidade. Entre em contato agora mesmo para uma consulta.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <a href="tel:+5567999484969" className="text-xl font-semibold hover:text-blue-400 transition-colors">
                      (67) 99948-4969
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <a 
                      href="https://instagram.com/lmramirezindustrial" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-semibold hover:text-blue-400 transition-colors"
                    >
                      @lmramirezindustrial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map or Image */}
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://navirai.ms.gov.br/wp-content/uploads/2024/11/111124-navirai-comemora-61-anos-de-emancipacao-e-se-consolida-como-cidade-polo-da-regiao-sul-do-ms-4-768x432.jpg" 
                alt="LM Ramirez Instalações"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold text-white mb-2">Naviraí, MS</h3>
                <p className="text-gray-300">Atuação em todo o Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          <a 
            href="https://wa.me/5567999484969" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
