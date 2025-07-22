import { Button } from "@/components/ui/button";
import { Phone, Laptop, Tablet } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-subtle min-h-screen flex items-center py-16 md:py-20 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left"> {/* Added text alignment for better mobile presentation */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Expert Device
              <span className="text-primary block">Repair Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0"> {/* Added mx-auto for centering on small screens */}
              Professional repair services for phones, laptops, and tablets in Featherstone.
              Fast, reliable, and affordable solutions for all your tech needs.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4"> {/* Centered buttons on small screens */}
              <Button
                variant="hero"
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
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4"> {/* Centered icons on small screens */}
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Phone Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <Laptop className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Laptop Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tablet className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Tablet Repair</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end"> {/* Centered image on small screens */}
            {/* The inset-0 on the absolute div will ensure it scales with its parent `relative` div */}
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3"></div>
            <img
              src={logo}
              alt="Professional tech repair workspace"
              // Adjusted height for better full-page display, consider max-h-96 for smaller screens
              className="relative rounded-3xl shadow-elegant w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] object-cover max-w-lg lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;