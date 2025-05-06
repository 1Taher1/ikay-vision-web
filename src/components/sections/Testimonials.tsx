
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    name: 'Raj Mehta',
    position: 'Facility Manager',
    company: 'Hyderabad Office Park',
    content: 'Ikay Engineering provided an exceptional VRF system installation for our 10-floor office complex. Their team worked efficiently and the system has significantly reduced our energy costs while improving comfort for our tenants.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 2,
    name: 'Dr. Priya Singh',
    position: 'Medical Director',
    company: 'City Care Hospital',
    content: 'The specialized ventilation systems installed by Ikay Engineering have been crucial for maintaining our hospital's stringent air quality requirements. Their team understood our specific needs and delivered a solution that exceeds healthcare standards.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    position: 'Operations Head',
    company: 'PrecisionTech Manufacturing',
    content: 'We partnered with Ikay for our factory's complete MEP installation. Their attention to detail and technical expertise ensured that our production facility maintains optimal conditions for sensitive manufacturing processes.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80'
  },
  {
    id: 4,
    name: 'Aarav Patel',
    position: 'Property Developer',
    company: 'Horizon Homes',
    content: 'The climate control systems installed by Ikay Engineering in our luxury residential complex have been a significant selling point for our properties. Their solutions combine efficiency with aesthetic integration.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from businesses and organizations that have experienced the quality of our MEP & HVAC solutions.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="h-full">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="mb-4">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className="text-accent">
                          {i < testimonial.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-blue-dark">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
