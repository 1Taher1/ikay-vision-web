
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set visibility after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  // Calculate parallax effect
  const bgTransform = `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.15}px)`;

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Ken Burns effect on background image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=3346&q=80')] bg-cover bg-center opacity-10 transition-transform duration-300 ease-out"
          style={{ transform: bgTransform }}
        ></div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 right-40 w-64 h-64 bg-brand-blue/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-brand-orange/5 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-brand-blue-dark leading-tight">
              Your Vision, <br />
              <span className="text-brand-orange-dark relative inline-block">
                Our Expertise
                <span className="absolute -bottom-2 left-0 w-3/4 h-1 bg-brand-orange-dark"></span>
              </span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
              Premier MEP & HVAC solutions for commercial and industrial facilities. 
              Engineering excellence tailored to your unique requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary group flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Get a Quote</span>
                <ArrowRight 
                  size={16} 
                  className="relative z-10 transform group-hover:translate-x-1 transition-transform"
                />
                <span className="absolute inset-0 bg-brand-blue-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </a>
              
              <a 
                href="#services" 
                className="btn-secondary group flex items-center justify-center gap-2 transition-all hover:border-brand-blue-dark hover:text-brand-blue-dark"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          <div className={cn(
            "relative h-[450px] hidden md:block transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 transition-transform hover:rotate-1 hover:scale-[1.02] duration-500">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern HVAC installation" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full"></div>
            
            {/* Floating badge */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white py-3 px-6 rounded-xl shadow-lg rotate-3">
              <div className="text-sm font-semibold text-brand-blue-dark">Trusted by</div>
              <div className="text-lg font-bold">200+ Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
