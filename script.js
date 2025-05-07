
/**
 * Ikay Engineering Solutions
 * Main JavaScript File
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50,
    delay: 100
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Navigation functionality
  initNavigation();
  
  // Parallax effect for hero section
  initParallax();
  
  // Initialize tabs in Projects section
  initProjectTabs();
  
  // Initialize testimonial slider
  initTestimonialSlider();
  
  // Initialize project modals
  initProjectModals();
  
  // Initialize form submission
  initContactForm();
});

/**
 * Initialize header and navigation functionality
 */
function initNavigation() {
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Fixed header on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Toggle icon between bars and X
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
  
  // Close mobile menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  
  // Smooth scrolling for all navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get header height for proper offset
        const headerHeight = header.offsetHeight;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize parallax effect on hero section
 */
function initParallax() {
  const heroBackground = document.querySelector('.hero-bg');
  
  if (heroBackground) {
    window.addEventListener('scroll', function() {
      const scrollY = window.pageYOffset;
      const scale = 1 + scrollY * 0.0005;
      const translateY = scrollY * 0.15;
      
      heroBackground.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    });
  }
}

/**
 * Initialize project tabs filtering
 */
function initProjectTabs() {
  const tabs = document.querySelectorAll('.project-tab');
  const projectCards = document.querySelectorAll('.project-card');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get selected category
      const selectedCategory = this.getAttribute('data-category');
      
      // Show/hide projects based on category
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Apply fade in animation to visible cards
        if (selectedCategory === 'All' || selectedCategory === cardCategory) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Fade in projects on load with staggered delay
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.animation = 'fadeIn 0.5s forwards';
    }, index * 100 + 300);
  });
}

/**
 * Initialize testimonial slider
 */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dot');
  
  if (!track || slides.length === 0) return;
  
  let currentSlide = 0;
  const slideWidth = 100; // 100% width for each slide
  let autoplayInterval;
  
  // Set initial position
  updateSliderPosition();
  
  // Previous button click
  prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSliderPosition();
    resetAutoplay();
  });
  
  // Next button click
  nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSliderPosition();
    resetAutoplay();
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentSlide = index;
      updateSliderPosition();
      resetAutoplay();
    });
  });
  
  // Start autoplay
  startAutoplay();
  
  // Update slider position based on currentSlide
  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }
  
  // Autoplay functions
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      updateSliderPosition();
    }, 6000);
  }
  
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
  
  // Pause autoplay when mouse enters slider
  track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  
  // Resume autoplay when mouse leaves slider
  track.addEventListener('mouseleave', startAutoplay);
  
  // Handle touch events for swipe functionality
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    // Detect swipe direction
    if (touchEndX < touchStartX - 50) {
      // Swipe left - go to next slide
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - go to previous slide
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    }
    
    updateSliderPosition();
    resetAutoplay();
  }
}

/**
 * Initialize project modals
 */
function initProjectModals() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalLocation = document.getElementById('modal-location');
  const modalDescription = document.getElementById('modal-description');
  
  // Project details data
  const projectDetails = [
    {
      title: 'Corporate Office HVAC Upgrade',
      category: 'Commercial',
      description: 'Complete redesign and installation of energy-efficient VRF system for a 15-floor corporate headquarters. The project involved replacing the outdated system while maintaining operations in the fully occupied building, resulting in a 40% reduction in energy consumption and improved comfort for over 2,000 employees.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Hyderabad, India'
    },
    {
      title: 'Hospital Ventilation System',
      category: 'Healthcare',
      description: 'Design and implementation of specialized ventilation system with HEPA filtration for a 200-bed hospital. This state-of-the-art solution ensures optimal air quality in operating theaters, ICUs, and isolation rooms, meeting the strictest healthcare air quality standards and infection control protocols.',
      image: 'https://plus.unsplash.com/premium_photo-1661698763470-aaebec669df8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80',
      location: 'Chennai, India'
    },
    {
      title: 'Manufacturing Plant MEP Installation',
      category: 'Industrial',
      description: 'Comprehensive MEP services for a new manufacturing facility including industrial-grade HVAC systems. The project included advanced ventilation systems for process areas, precise temperature control for product storage, and energy-efficient solutions throughout the 50,000 sq ft facility.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
      location: 'Pune, India'
    },
    {
      title: 'Luxury Villa Climate Control',
      category: 'Residential',
      description: 'Installation of integrated climate control systems for a premium residential complex. This project featured smart home integration, multi-zone climate control, and energy-efficient VRF systems across 12 luxury villas, providing precise temperature and humidity control while maintaining architectural aesthetics.',
      image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Bangalore, India'
    },
    {
      title: 'Retail Mall HVAC System',
      category: 'Commercial',
      description: 'Design and implementation of central HVAC system for a 500,000 sq ft shopping mall. This high-capacity solution efficiently manages climate control across diverse retail environments, food courts, and common areas, balancing comfort with energy efficiency in this massive commercial space.',
      image: 'https://images.unsplash.com/photo-1533653638083-702db8cdd3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
      location: 'Mumbai, India'
    },
    {
      title: 'Diagnostic Center MEP Services',
      category: 'Healthcare',
      description: 'Specialized MEP installations for a state-of-the-art diagnostic center with precision temperature control. This project included dedicated systems for MRI, CT scanning, and laboratory areas, with redundant backup systems ensuring uninterrupted operation for critical diagnostic equipment.',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      location: 'Delhi, India'
    }
  ];
  
  projectCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      const project = projectDetails[index];
      
      // Populate modal with project data
      modalImage.src = project.image;
      modalImage.alt = project.title;
      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category;
      modalLocation.textContent = project.location;
      modalDescription.textContent = project.description;
      
      // Show modal with fade-in effect
      modal.style.display = 'block';
      setTimeout(() => {
        modal.style.opacity = '1';
      }, 10);
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal when clicking X button
  closeModal.addEventListener('click', function() {
    closeProjectModal();
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeProjectModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeProjectModal();
    }
  });
  
  function closeProjectModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

/**
 * Initialize contact form submission
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.querySelector('.toast-message');
  const toastClose = document.querySelector('.toast-close');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !phone || !service || !message) {
        showToast('Please fill in all fields', 'error');
        return;
      }
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate form submission (would be replaced with actual AJAX request)
      const formData = {
        name,
        email,
        phone,
        service,
        message
      };
      
      console.log('Form submitted with data:', formData);
      
      // Show success message
      showToast('Form submitted successfully! We\'ll get back to you shortly.', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Show toast notification
  function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    
    // Set toast color based on type
    if (type === 'error') {
      toast.style.borderLeft = '4px solid #e53e3e';
      toast.querySelector('.toast-icon i').className = 'fas fa-times-circle';
    } else {
      toast.style.borderLeft = '4px solid #2563eb';
      toast.querySelector('.toast-icon i').className = 'fas fa-check-circle';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  }
  
  // Hide toast notification
  function hideToast() {
    toast.classList.remove('show');
  }
  
  // Close toast on button click
  if (toastClose) {
    toastClose.addEventListener('click', hideToast);
  }
}
