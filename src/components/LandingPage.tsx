import React, { useState, useRef } from 'react';
import { Menu, X, Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown  } from 'lucide-react';
const StickyCallPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePopup}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <Phone className="w-10 h-10" />
      </button>

      {isPopupVisible && (
        <div className="mt-2 bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-800">Call us at:</p>
          <p className="font-bold text-lg">(226) 756-0103</p>
          <a
            href="tel:(226) 756-0103"
            className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Call Now
          </a>
          <button
            onClick={togglePopup}
            className="mt-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);


  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const expertiseRef = useRef(null);

  const scrollToSection = (sectionRef, event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (sectionRef.current) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      // Smooth scroll to section
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without reload
      window.history.pushState({}, '', `#${sectionRef.current.id}`);
    }
  };

  const accordionContent = [
    {
      title: "24/7 EMERGENCY PLUMBER IN KITCHENER",
      content: "Imagine waking up to the sound of drip on a Saturday morning that is fading away your weekend plans? That is why our same-day plumber in Kitchener is always on guard for your comfort, available with 24/7 emergency services only at Delta Plumbers."
    },
    {
      title: "CONVENIENCE COMMERCIAL PLUMBING SERVICES IN KITCHENER",
      content: "In a private residence, it's simple to monitor plumbing usage, but in institutions, it's difficult to determine how many people are utilizing it. To ensure the profitability of your establishment, you should fix the breakdown as soon as possible ensuring the customer experiences are not getting hampered. Call us today at Delta Plumbers in Kitchener, we provide 24/7 emergency services with our expert plumbers in your area."
    },
    {
      title: "QUICK PLUMBING INSTALLATIONS IN KITCHENER",
      content: "It’s hard to imagine a modern Canadian family without a water heater. If you’re thinking about buying a new hot water tank, get in touch with us today to have one of our experts visit your home to evaluate your warming framework. We’ll help you decide the type and size of appliance to suit your specific necessities and give the most effective products to set aside your money. Also, we specialize in repairing such heaters, so feel free to contact our specialists for help only at Delta Plumbers today in Kitchener Today!"
    },
    {
      title: "EFFICIENT DRAIN AND SEWER FIXING IN KITCHENER",
      content: "Probably there are no people in our country who have not encountered blockages in the sewer line. Unfortunately, we do not always adhere to the rules for the operation of plumbing equipment. If you are experiencing a severe blockage in your sewerage system or leaking pipes, don’t hesitate to get in touch with our local plumbers right now in your area, Kitchener. Call us today at Delta Plumbers for same day expert services!"
    },
    {
      title: "RELIABLE HOT WATER APPLIANCE WORKS IN KITCHENER",
      content: "Who knows severe frost better than Canadians? Luckily, staying warm is easier than it’s ever been. The key is ensuring everything is in working order. If you’re looking to repair or install a boiler ,water heater or anything related to plumbing, don’t hesitate to reach out at Delta Plumber of Kitchener. We’re committed to helping you maintain the warmth and comfort of your home everyday!"
    },
    {
      title: "QUALITY WATER PURIFICATION SYSTEMS INSTALLATION AND MAINTENANCE IN KITCHENER",
      content: "Many have already become the happy owners of special water filters and various other water purification systems in Canada. If you are still wondering whether to buy this device, we confidently answer you what it is. This thing will help you forget about ordering bottled water and give you a clean tap one. Our local plumbers in Kitchener will be happy to assist you with the installation only at Delta Plumbers."
    }
  ];


  const services = [
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for any urgent repairs or maintenance needs.",
      icon: "🚰"
    },
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to keep your pipes flowing smoothly.",
      icon: "🚿"
    },
    {
      title: "Water Heater Repair",
      description: "Expert water heater installation, maintenance, and repair services.",
      icon: "🔧"
    }
  ];

  const testimonials = [
    {
      text: "Delta Plumbers saved the day! They responded quickly to our emergency and fixed the issue professionally.",
      name: "John Smith",
      role: "Homeowner"
    },
    {
      text: "Excellent service at a fair price. The team was knowledgeable and courteous. Highly recommended!",
      name: "Sarah Johnson",
      role: "Business Owner"
    },
    {
      text: "Very professional and thorough. They explained everything clearly and got the job done right.",
      name: "Mike Williams",
      role: "Property Manager"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const ExpertiseSection = () => (
    <section id="expertise" className="py-20 bg-white" ref={expertiseRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
        <div className="max-w-4xl mx-auto">
          {accordionContent.map((item, index) => (
            <div key={index} className="mb-4 border rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    activeAccordion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  maxHeight: activeAccordion === index ? '1000px' : '0px',
                  opacity: activeAccordion === index ? 1 : 0,
                  padding: activeAccordion === index ? '0 1.5rem 1.5rem' : '0 1.5rem'
                }}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
          <div className="h-12 w-auto"> 
  <img
    src="/assets/logo.png" // Ensure this path is correct
    alt="Delta Plumbers"
    className="h-full w-auto" // Make the image fill the container height and adjust width automatically
  />
</div>
          
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
            <a
    href="#home"
    onClick={(e) => scrollToSection(homeRef, e)}
    className="hover:text-blue-600"
  >
    Home
  </a>
  <a
    href="#services"
    onClick={(e) => scrollToSection(servicesRef, e)}
    className="hover:text-blue-600"
  >
    Services
  </a>
  <a
    href="#testimonials"
    onClick={(e) => scrollToSection(testimonialsRef, e)}
    className="hover:text-blue-600"
  >
    Testimonials
  </a>
  <a
    href="#contact"
    onClick={(e) => scrollToSection(contactRef, e)}
    className="hover:text-blue-600"
  >
    Contact
  </a>
  <a
  href="#expertise"
  onClick={(e) => scrollToSection(expertiseRef, e)}
  className="hover:text-blue-600"
>
  Our Expertise
</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
  <div className="md:hidden py-4">
    <div className="flex flex-col space-y-4">
      <a
        href="#home"
        onClick={(e) => scrollToSection(homeRef, e)}
        className="hover:text-blue-600"
      >
        Home
      </a>
      <a
        href="#services"
        onClick={(e) => scrollToSection(servicesRef, e)}
        className="hover:text-blue-600"
      >
        Services
      </a>
      <a
        href="#testimonials"
        onClick={(e) => scrollToSection(testimonialsRef, e)}
        className="hover:text-blue-600"
      >
        Reviews
      </a>
      <a
        href="#contact"
        onClick={(e) => scrollToSection(contactRef, e)}
        className="hover:text-blue-600"
      >
        Contact
      </a>
      <a
  href="#expertise"
  onClick={(e) => scrollToSection(expertiseRef, e)}
  className="hover:text-blue-600"
>
  Our Expertise
</a>
    </div>
  </div>
)}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16" ref={homeRef}>
      
  <div className="relative h-screen min-h-[600px]">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 opacity-75"></div>
    <img src="/assets/bg.jpg" alt="Plumber at work" className="w-full h-full object-cover"/>
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        THE BEST PLUMBER NEAR ME
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
          Delta Plumbers offers fast, affordable, and professional plumbing solutions for your home and business.
        </p>
        <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300 animate-fade-in delay-200">
          Request a Free Quote
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      <ExpertiseSection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20" ref={testimonialsRef}>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full mr-4"/>
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500">{testimonial.role}</div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50" ref={contactRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="4"></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>(226) 756-0103</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>info@deltaplumbersinc.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>809 Victoria St N, Kitchener, ON N2B 3C3</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg">
                <img src="/assets/Screenshot 2025-02-03 003950.png" alt="Map" className="w-full h-full object-cover rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Delta Plumbers</h3>
              <p className="text-gray-400">Done Right With Delta.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <StickyCallPopup />

    </div>
  );
};

export default LandingPage;
