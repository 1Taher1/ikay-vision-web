
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Ikay Engineering transformed our hospital's HVAC system, ensuring optimal air quality and temperature control. Their attention to detail and healthcare-specific solutions were impressive.",
    name: "Dr. Rajiv Kumar",
    position: "Facilities Director",
    company: "City General Hospital",
    rating: 5
  },
  {
    quote: "The team at Ikay provided excellent service throughout our office complex retrofit. Their VRF system design has reduced our energy costs by over 30%.",
    name: "Priya Sharma",
    position: "Operations Manager",
    company: "Tech Park Offices",
    rating: 5
  },
  {
    quote: "Professional, punctual, and precise - Ikay Engineering delivered our industrial cooling solution on time and within budget. Their post-installation support has been exceptional.",
    name: "Arjun Mehta",
    position: "Plant Manager",
    company: "Precision Manufacturing Ltd.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-brand-blue-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from the businesses we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="ml-0">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
