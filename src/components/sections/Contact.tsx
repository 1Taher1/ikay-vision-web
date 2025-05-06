
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with our team to discuss your MEP & HVAC requirements or request a quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-brand-blue-dark">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:ring focus:ring-brand-blue/20 focus:border-brand-blue"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Split AC">Split AC Systems</option>
                      <option value="VRF/VRV">VRF/VRV Systems</option>
                      <option value="Package Units">Package Units</option>
                      <option value="Ducting">Ducting & Cladding</option>
                      <option value="Electrical">Electrical Systems</option>
                      <option value="Plumbing">Plumbing Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements"
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-brand-blue rounded-lg p-6 md:p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Office</h4>
                    <p className="text-gray-100">123 Business Park, Hyderabad 500081, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-gray-100">+91 9876543210</p>
                    <p className="text-gray-100">040-12345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-gray-100">info@ikayengineering.com</p>
                    <p className="text-gray-100">support@ikayengineering.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
            <iframe
              title="Ikay Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698002053!2d78.26795993676882!3d17.41262542505745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1657016582042!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
