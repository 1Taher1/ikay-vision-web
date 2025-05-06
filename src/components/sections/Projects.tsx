
import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-intersection-observer';

const projectCategories = ['All', 'Commercial', 'Healthcare', 'Industrial', 'Residential'];

const projects = [
  {
    id: 1,
    title: 'Corporate Office HVAC Upgrade',
    category: 'Commercial',
    description: 'Complete redesign and installation of energy-efficient VRF system for a 15-floor corporate headquarters.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location: 'Hyderabad, India'
  },
  {
    id: 2,
    title: 'Hospital Ventilation System',
    category: 'Healthcare',
    description: 'Design and implementation of specialized ventilation system with HEPA filtration for a 200-bed hospital.',
    image: 'https://images.unsplash.com/photo-1578991624414-c33767ba67ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    location: 'Chennai, India'
  },
  {
    id: 3,
    title: 'Manufacturing Plant MEP Installation',
    category: 'Industrial',
    description: 'Comprehensive MEP services for a new manufacturing facility including industrial-grade HVAC systems.',
    image: 'https://images.unsplash.com/photo-1565105336789-d284da5064b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location: 'Pune, India'
  },
  {
    id: 4,
    title: 'Luxury Villa Climate Control',
    category: 'Residential',
    description: 'Installation of integrated climate control systems for a premium residential complex.',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location: 'Bangalore, India'
  },
  {
    id: 5,
    title: 'Retail Mall HVAC System',
    category: 'Commercial',
    description: 'Design and implementation of central HVAC system for a 500,000 sq ft shopping mall.',
    image: 'https://images.unsplash.com/photo-1519693360395-4861f7540588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location: 'Mumbai, India'
  },
  {
    id: 6,
    title: 'Diagnostic Center MEP Services',
    category: 'Healthcare',
    description: 'Specialized MEP installations for a state-of-the-art diagnostic center with precision temperature control.',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    location: 'Delhi, India'
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Using our custom useInView hook
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue-light/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-orange-light/10 rounded-tr-full"></div>
      
      <div className="container-custom relative z-10">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle relative inline-block">
            Browse through our portfolio of successful MEP & HVAC installations across various sectors.
            <span className="absolute -bottom-2 left-1/2 w-24 h-1 bg-brand-orange-dark transform -translate-x-1/2"></span>
          </p>
        </div>

        <div className={cn(
          "transition-all duration-700 delay-300 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Tabs defaultValue="All" onValueChange={setSelectedCategory}>
            <TabsList className="flex flex-wrap justify-center space-x-1 sm:space-x-2 mb-12">
              {projectCategories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className={cn(
                    'px-4 py-2 rounded-md font-medium transition-all',
                    'focus:outline-none',
                    selectedCategory === category
                      ? 'bg-brand-blue text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => openProjectDetails(project)}
                    className={cn(
                      "overflow-hidden rounded-lg shadow-md cursor-pointer group",
                      "transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
                      "opacity-0"
                    )}
                    style={{
                      animationName: 'fade-in',
                      animationDuration: '0.5s',
                      animationDelay: `${index * 0.1 + 0.3}s`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 bg-white">
                      <span className="text-xs font-medium text-brand-blue rounded-full px-2 py-1 bg-brand-blue/10">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold mt-2 text-brand-blue-dark">{project.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{project.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {selectedProject && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-lg">
              <div>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-blue-dark mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-xs font-medium text-brand-blue rounded-full px-2 py-1 bg-brand-blue/10 mr-2">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-gray-600">
                    {selectedProject.location}
                  </span>
                </div>
                <p className="text-gray-700">
                  {selectedProject.description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Projects;
