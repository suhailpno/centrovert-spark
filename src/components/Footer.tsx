import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 sm:py-16 md:py-20 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gradient">Centrovert</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto sm:mx-0">
              Empowering businesses through AI & Automation with cutting-edge digital solutions.
            </p>
          </div>
          
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2 items-center sm:items-start">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block w-fit relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-base sm:text-lg">Contact Info</h4>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-start gap-3 max-w-sm">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-left">
                  60 Paya Lebar Road, #01-02<br />
                  Paya Lebar Square<br />
                  Singapore 409051
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@centrovert.com" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@centrovert.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+6588992295" 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +65 8899 2295
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Centrovert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
