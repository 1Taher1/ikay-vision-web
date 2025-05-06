
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled?: boolean;
}

const Navbar = ({ scrolled: externalScrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // If scrolled prop is not provided, listen to scroll events
    if (externalScrolled === undefined) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [externalScrolled]);

  // Use the external scrolled prop if provided, otherwise use the internal state
  const isScrolled = externalScrolled !== undefined ? externalScrolled : scrolled;

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c56ab0dd-28a8-4278-bfcf-b89f1d72b61b.png" 
            alt="Ikay Engineering Solutions Logo" 
            className="h-12 mr-3" 
          />
          <span className={`font-montserrat font-bold text-lg md:text-xl ${scrolled ? 'text-brand-blue-dark' : 'text-brand-blue-dark'}`}>
            Ikay<span className="text-brand-orange-dark">Engineering</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Industries', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-montserrat font-medium hover:text-brand-blue transition-colors ${
                scrolled ? 'text-brand-blue-dark' : 'text-brand-blue-dark'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">Get a Quote</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-blue-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Industries', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat font-medium text-brand-blue-dark hover:text-brand-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
