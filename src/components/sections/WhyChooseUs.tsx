
import { 
  Star,
  Shield, 
  Clock, 
  Users, 
  Settings, 
  Heart 
} from 'lucide-react';

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Our certified engineers bring decades of combined experience to every project.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'We adhere to the highest industry standards and use only premium equipment.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Timely Delivery',
    description: 'We understand the importance of deadlines and we deliver projects on schedule.'
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Customized Solutions',
    description: 'Each project is approached with tailored solutions designed for specific needs.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Client-Centric Approach',
    description: 'We prioritize your satisfaction with transparent communication throughout the project.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Post-Installation Support',
    description: 'Our relationship continues with dedicated maintenance and support services.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Discover the advantages of partnering with Ikay Engineering Solutions for your MEP & HVAC needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-brand-blue-dark">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
