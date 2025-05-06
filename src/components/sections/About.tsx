
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Ikay Engineering Solutions delivers premium MEP & HVAC solutions with precision, 
            reliability, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional HVAC engineers at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-64 h-64 rounded-xl border-8 border-white bg-brand-blue/10 -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-blue-dark">
              Engineering Excellence Since 2010
            </h3>
            <p className="mb-6">
              At Ikay Engineering Solutions, we pride ourselves on delivering comprehensive 
              MEP & HVAC solutions that meet the highest standards of quality and efficiency. 
              With over a decade of industry experience, our team of certified professionals 
              is committed to excellence in every project we undertake.
            </p>
            <p className="mb-8">
              We understand that each client has unique requirements, which is why we offer 
              tailored engineering solutions that address specific needs while optimizing 
              energy efficiency and performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Certified Professionals', 
                'Custom Solutions', 
                'Energy Efficiency', 
                'Quality Assurance',
                'Timely Delivery',
                'Post-Installation Support'
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="mt-1 bg-brand-blue rounded-full p-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
