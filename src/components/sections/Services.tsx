
import { 
  Zap, 
  Thermometer, 
  Projector, 
  Building, 
  AirVent, 
  Wrench 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Thermometer size={32} />,
    title: 'Split AC Systems',
    description: 'Design, supply, and installation of high-efficiency split air conditioning systems for residential and commercial spaces.',
    link: '#contact'
  },
  {
    icon: <Building size={32} />,
    title: 'VRF/VRV Systems',
    description: 'Advanced Variable Refrigerant Flow systems offering superior climate control and zoning capabilities for large buildings.',
    link: '#contact'
  },
  {
    icon: <AirVent size={32} />,
    title: 'Package Units',
    description: 'Complete packaged HVAC solutions for commercial applications requiring centralized climate control systems.',
    link: '#contact'
  },
  {
    icon: <Projector size={32} />,
    title: 'Ducting & Cladding',
    description: 'Professional ducting design and installation with high-quality cladding for optimal thermal insulation.',
    link: '#contact'
  },
  {
    icon: <Zap size={32} />,
    title: 'Electrical Systems',
    description: 'Comprehensive electrical services including design, installation, and maintenance for commercial and industrial facilities.',
    link: '#contact'
  },
  {
    icon: <Wrench size={32} />,
    title: 'Plumbing Solutions',
    description: 'Expert plumbing services from design to installation, ensuring reliable water systems for all property types.',
    link: '#contact'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of MEP & HVAC solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a 
                  href={service.link} 
                  className="text-brand-blue font-medium hover:text-brand-blue-dark transition-colors"
                >
                  Learn More →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
