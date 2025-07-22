import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Expert Technicians",
      description: "Certified professionals with years of experience in device repair"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most repairs completed within 24-48 hours"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All repairs come with our comprehensive warranty"
    },
    {
      icon: Users,
      title: "Local Service",
      description: "Proudly serving the Featherstone community since our establishment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              About Repairtex
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in the heart of Featherstone, Repairtex is your trusted local technology repair specialist. 
              We're passionate about bringing your devices back to life with professional expertise and genuine care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality service, fair pricing, and quick turnaround times has made us the 
              go-to choice for phone, laptop, and tablet repairs in the area. Whether it's a cracked screen, 
              battery issue, or software problem, we've got you covered.
            </p>
            
            <div className="bg-card p-6 rounded-lg border border-border shadow-card">
              <h3 className="font-semibold text-foreground mb-2">Our Promise</h3>
              <p className="text-muted-foreground">
                "We treat every device as if it were our own, ensuring the highest quality repairs 
                with genuine parts and professional service you can trust."
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;