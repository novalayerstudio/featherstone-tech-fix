import { Button } from "@/components/ui/button";
import { Phone, Laptop, Tablet } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Expert Device
              <span className="text-primary block">Repair Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Professional repair services for phones, laptops, and tablets in Featherstone. 
              Fast, reliable, and affordable solutions for all your tech needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get Quote Today
              </Button>
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
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
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Professional tech repair workspace" 
              className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;