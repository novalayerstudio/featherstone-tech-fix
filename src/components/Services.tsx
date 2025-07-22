import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Laptop, Tablet, Headphones } from "lucide-react";
import phoneRepairImage from "@/assets/phone-repair.jpg";
import products from "@/assets/products.jpg"
import laptopRepairImage from "@/assets/laptop-repair.jpg";
import tabletRepairImage from "@/assets/tablet-repair.jpg";

const services = [
  {
    icon: Phone,
    title: "Phone Repair",
    description: "Screen replacement, battery issues, water damage, and software problems for all smartphone brands.",
    image: phoneRepairImage,
    features: ["Screen Replacement", "Battery Repair", "Water Damage", "Software Issues"]
  },
  {
    icon: Laptop,
    title: "Laptop Repair", 
    description: "Hardware repairs, screen replacements, keyboard fixes, and performance optimization for all laptop brands.",
    image: laptopRepairImage,
    features: ["Hardware Repair", "Screen Replacement", "Keyboard Fix", "Performance Boost"]
  },
  {
    icon: Tablet,
    title: "Tablet Repair",
    description: "Touch screen repairs, charging port fixes, and software troubleshooting for iPads and Android tablets.",
    image: tabletRepairImage,
    features: ["Touch Screen", "Charging Port", "Software Fix", "Case Replacement"]
  },
  {
    icon: Headphones,
    title: "Products",
    description: "Quality accessories and certified second-hand devices. Cases, chargers, cables, and more.",
    image: products, 
    features: ["Phone Cases", "Chargers", "Second-hand Devices", "Quality Tested"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive repair services and quality accessories for all your tech needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;