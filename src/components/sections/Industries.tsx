
const industries = [
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80',
    description: 'Specialized HVAC systems for hospitals, clinics, and medical facilities with strict air quality requirements.'
  },
  {
    name: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Efficient climate control solutions for offices, retail spaces, and commercial buildings.'
  },
  {
    name: 'Industrial',
    image: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    description: 'Robust HVAC and MEP systems designed for factories, warehouses, and industrial facilities.'
  },
  {
    name: 'Residential',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Premium climate solutions for luxury homes, apartments, and residential complexes.'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Our expertise spans across various sectors, delivering tailored MEP & HVAC solutions for diverse environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-md h-[300px] card-hover"
            >
              <div className="absolute inset-0">
                <img 
                  src={industry.image} 
                  alt={`${industry.name} industry`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
