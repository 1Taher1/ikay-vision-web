
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3346&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue-dark leading-tight">
              Your Vision, <br />
              <span className="text-brand-orange-dark">Our Expertise</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-lg">
              Premier MEP & HVAC solutions for commercial and industrial facilities. 
              Engineering excellence tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                Get a Quote <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center gap-2">
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] hidden md:block">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern HVAC installation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
