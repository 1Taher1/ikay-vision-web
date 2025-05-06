
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Add smooth scroll with easing
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Handle scroll effect for header
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add metadata and schema markup for SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ikay Engineering Solutions",
      "url": "https://ikayengineering.com",
      "logo": "/lovable-uploads/c56ab0dd-28a8-4278-bfcf-b89f1d72b61b.png",
      "description": "Premium MEP & HVAC solutions including design, supply, installation & maintenance for commercial and industrial facilities.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Park",
        "addressLocality": "Hyderabad",
        "postalCode": "500081",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service"
      }
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Ikay Engineering - Premium MEP & HVAC Solutions</title>
        <meta name="description" content="Ikay Engineering Solutions provides premium MEP & HVAC solutions including design, supply, installation & maintenance of Split AC, VRF/VRV systems, Package Units, Ducting & Cladding, Ventilation, Electrical & Plumbing services." />
        <meta name="keywords" content="MEP solutions Hyderabad, Commercial HVAC installation, VRF System Experts, HVAC contractors, air conditioning services, ducting and ventilation, industrial HVAC, hospital HVAC systems, electrical services, plumbing solutions" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ikayengineering.com/" />
        <meta property="og:title" content="Ikay Engineering - Premium MEP & HVAC Solutions" />
        <meta property="og:description" content="Professional design, supply, installation & maintenance of HVAC systems, electrical services & plumbing solutions for commercial and industrial facilities." />
        <meta property="og:image" content="/lovable-uploads/c56ab0dd-28a8-4278-bfcf-b89f1d72b61b.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ikayengineering.com/" />
        <meta property="twitter:title" content="Ikay Engineering - Premium MEP & HVAC Solutions" />
        <meta property="twitter:description" content="Professional design, supply, installation & maintenance of HVAC systems, electrical services & plumbing solutions for commercial and industrial facilities." />
        <meta property="twitter:image" content="/lovable-uploads/c56ab0dd-28a8-4278-bfcf-b89f1d72b61b.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ikayengineering.com/" />
        
        {/* Add structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ikay Engineering Solutions",
            "url": "https://ikayengineering.com",
            "logo": "/lovable-uploads/c56ab0dd-28a8-4278-bfcf-b89f1d72b61b.png",
            "description": "Premium MEP & HVAC solutions including design, supply, installation & maintenance for commercial and industrial facilities.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Business Park",
              "addressLocality": "Hyderabad",
              "postalCode": "500081",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      <Navbar scrolled={scrolled} />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
