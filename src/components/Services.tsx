import { useState } from 'react';
import { Code, Layout, Smartphone, X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Code size={48} />,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and engaging user interfaces with a focus on user experience. Crafting designs that are both beautiful and functional to enhance user satisfaction.',
      more: 'I specialize in Figma and full design systems for responsive web and mobile apps.'
    },
    {
      icon: <Layout size={48} />,
      title: 'Web Development',
      description:
        'Building responsive and performant websites using modern technologies. From simple landing pages to complex web applications with seamless functionality.',
      more: 'Expert in React, Node.js, JavaScript and CSS. I focus on writing clean, maintainable code and creating fast, scalable web applications.'
    },
    {
      icon: <Smartphone size={48} />,
      title: 'App Design',
      description:
        'Designing mobile applications that provide excellent user experiences across all devices. Creating interfaces that are intuitive, accessible, and visually appealing.',
      more: 'I design native and cross-platform mobile apps using Flutter and React Native, ensuring consistent UX and performance across devices.'
    },
  ];

  return (
    <section id="services" className="min-h-screen flex items-center py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-emerald-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 hover:border-emerald-400 transition-all duration-400 transform hover:scale-105 hover:shadow-xl shadow-gray-900/50"
            >
              <div className="text-emerald-400 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-6 py-3 bg-emerald-400 text-gray-900 rounded-full font-semibold hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-emerald-400"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold text-emerald-400 mb-4">{selectedService.title}</h3>
              <p className="text-gray-300 mb-4">{selectedService.description}</p>
              <p className="text-gray-200">{selectedService.more}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
