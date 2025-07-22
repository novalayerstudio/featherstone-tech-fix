import { Phone, Mail, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">Repairtex</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 9AM-4PM | Sat: 9AM-1PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Sales@repairtex.co.uk</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;