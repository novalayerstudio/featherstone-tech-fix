import { Button } from "@/components/ui/button";
import { Phone, Laptop, Tablet, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (event) => {
      // Update mouse position relative to the section
      const section = event.currentTarget; // 'currentTarget' is the element the event listener is attached to
      const rect = section.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left, // X position relative to the section
        y: event.clientY - rect.top,  // Y position relative to the section
      });
    };

    // Attach mousemove listener to the section itself
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Added an ID to the section to easily target it for the mousemove event listener
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 text-gray-900 py-20" // Lighter background
    >
      {/* Background Circuit Pattern Overlay - Light color, static base */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none" // High opacity for base visibility on lighter background
        style={{
          // Using a light gray fill for the circuit pattern, visible on a light background
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuitPattern' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0h1v10h-1zm5 0h1v10h-1zm-5 5h10v1H0zm0-5h10v1H0z' fill='%23E0E0E0'/%3E%3Ccircle cx='0' cy='0' r='1.5' fill='%23E0E0E0'/%3E%3Ccircle cx='10' cy='0' r='1.5' fill='%23E0E0E0'/%3E%3Ccircle cx='0' cy='10' r='1.5' fill='%23E0E0E0'/%3E%3Ccircle cx='10' cy='10' r='1.5' fill='%23E0E0E0'/%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%' height='100%' fill='url(%23circuitPattern)' /%3E%3C/svg%3E")`,
          backgroundSize: '90px 90px', // Adjust size for desired density
          backgroundPosition: 'center center',
        }}
      ></div>

      {/* Dynamic Hover Glow Effect (Localized "lighting up") */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          // Radial gradient centered at mouse position, creating a glowing spotlight effect
          // Reduced the 'transparent' stop from 40% to 25% for a smaller radius
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25) 0%, transparent 10%)`, // Smaller blue glow
          opacity: isVisible ? 1 : 0, // Ensure it's visible after component mounts
        }}
      ></div>

      {/* Subtle General Radial Gradient Overlay - Adds depth (optional, can be removed if too much) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content (Text and Buttons) */}
          <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 relative z-10"> {/* Text color adjusted for light background */}
              Expert Device
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block"> {/* Gradient adjusted */}
                Repair Services
              </span>
            </h1>

            <p className="text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed"> {/* Text color adjusted */}
              Professional repair services for phones, laptops, and tablets in Featherstone.
              <span className="text-blue-600 font-semibold"> Fast, reliable, and affordable</span> solutions for all your tech needs.
            </p>

            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Quote Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-full bg-white/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300" // Adjusted for light background
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>

            {/* Service Icons */}
            <div className={`flex items-center justify-center lg:justify-start space-x-6 pt-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { icon: Phone, label: "Phone Repair", color: "text-blue-500" },
                { icon: Laptop, label: "Laptop Repair", color: "text-purple-500" },
                { icon: Tablet, label: "Tablet Repair", color: "text-pink-500" }
              ].map((service, index) => (
                <div
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                  key={service.label}
                  className="flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform duration-300"
                >
                  <div className="p-3 bg-gray-200 rounded-full mb-2 border border-gray-300 group-hover:bg-gray-300 transition-colors"> {/* Adjusted for light background */}
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors"> {/* Adjusted for light background */}
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section (Original structure, adapted for light background) */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main image container with 3D effect */}
            <div className="relative group">
              {/* 3D shadow layers - adjusted for light background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 rounded-3xl transform rotate-3 scale-105 opacity-40 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl transform -rotate-2 scale-95 opacity-20 group-hover:-rotate-4 transition-transform duration-500"></div>

              {/* Tech circuit pattern overlay (inside the card) - adapted for light background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50"></div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                ></div>
              </div>

              {/* Main image (card content) */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 group-hover:scale-105 transition-all duration-500"> {/* Reverted to original light background */}
                <div className="flex flex-col items-center space-y-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center relative">
                    <img src={logo} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tech Repair Pro</h3>
                  <p className="text-gray-600 text-sm max-w-xs">Professional workspace equipped with the latest tools and technology for precise device repairs</p>

                  {/* Animated tech elements */}
                  <div className="flex space-x-4 pt-4">
                    {[Phone, Laptop, Tablet].map((Icon, index) => (
                      <div
                       onClick={() => {
                          const element = document.getElementById('services');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        key={index}
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      >
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;