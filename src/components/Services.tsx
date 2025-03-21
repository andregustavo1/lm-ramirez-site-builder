
import { Shield, Wrench, Settings, Container } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "Tanques de Armazenamento de Etanol",
    description: "Instalação, manutenção e reforma de tanques de armazenamento para etanol com alta segurança e qualidade."
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-600" />,
    title: "Destilarias e Usinas",
    description: "Serviços especializados para destilarias e usinas de açúcar e etanol, garantindo eficiência e produtividade."
  },
  {
    icon: <Container className="w-8 h-8 text-blue-600" />,
    title: "Distribuidoras de Combustíveis",
    description: "Soluções completas para distribuidoras e armazenadoras de combustíveis, atendendo às normas técnicas e de segurança."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Consultoria Técnica",
    description: "Avaliação técnica e consultoria para otimização de processos industriais e solução de problemas complexos."
  }
];

const Services = () => {
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
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gray-50 scroll-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas para sua Indústria
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Oferecemos um conjunto abrangente de serviços industriais com foco em qualidade, 
            confiabilidade e eficiência para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 neomorphic hover-lift ${
                isVisible ? `animate-fade-in animate-delay-${index * 100}` : 'opacity-0'
              }`}
            >
              <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
          <a 
            href="https://wa.me/5567999484969" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
