
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  logo?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Ikay Engineering transformed our hospital's HVAC system, ensuring optimal air quality and temperature control. Their attention to detail and healthcare-specific solutions were impressive.",
    name: "Dr. Rajiv Kumar",
    position: "Facilities Director",
    company: "City General Hospital",
    rating: 5,
    logo: "https://images.unsplash.com/photo-1578991624414-c33767ba67ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team at Ikay provided excellent service throughout our office complex retrofit. Their VRF system design has reduced our energy costs by over 30%.",
    name: "Priya Sharma",
    position: "Operations Manager",
    company: "Tech Park Offices",
    rating: 5,
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Professional, punctual, and precise - Ikay Engineering delivered our industrial cooling solution on time and within budget. Their post-installation support has been exceptional.",
    name: "Arjun Mehta",
    position: "Plant Manager",
    company: "Precision Manufacturing Ltd.",
    rating: 5,
    logo: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "We've worked with many HVAC contractors, but Ikay Engineering stands out for their technical expertise and commitment to quality. They've been our go-to partner for all our projects.",
    name: "Sarah Johnson",
    position: "Project Director",
    company: "Global Construction Co.",
    rating: 5,
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-brand-blue-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle relative inline-block">
            Don't just take our word for it - hear from the businesses we've helped.
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-brand-orange-dark transform -translate-x-1/2"></span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  const slideIndex = api.selectedScrollSnap();
                  setActiveIndex(slideIndex);
                });
              }
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div 
                    className={cn(
                      "bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500",
                      "hover:shadow-xl hover:-translate-y-1"
                    )}
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                    
                    <div className="flex items-center">
                      {testimonial.logo && (
                        <div className="mr-4 w-12 h-12 overflow-hidden rounded-full border-2 border-gray-100">
                          <img 
                            src={testimonial.logo} 
                            alt={`${testimonial.company} logo`} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      activeIndex === index
                        ? "bg-brand-orange-dark scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
