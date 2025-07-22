import { MapPin, Clock, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary">Repairtex</h3>
            </div>
            <p className="text-muted-foreground">
              Your trusted local technology repair specialist in Featherstone.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Phone Repair</li>
              <li>Laptop Repair</li>
              <li>Tablet Repair</li>
              <li>Accessories & Sales</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">23 Station Lane, Featherstone, WF7 5JW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Sales@repairtex.co.uk</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Opening Hours</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div>Monday - Friday: 9:00 AM - 4:00 PM</div>
              <div>Saturday: 9:00 AM - 1:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Repairtex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;