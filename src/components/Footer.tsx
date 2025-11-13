import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-16 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-gradient">Centrovert</h3>
            <p className="text-muted-foreground leading-relaxed">Empowering businesses through AI & Automation with cutting-edge digital solutions.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors inline-block w-fit relative group">
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">60 Paya Lebar Road, #01-02<br />Paya Lebar Square<br />Singapore 409051</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@centrovert.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@centrovert.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+6588992295" className="text-sm text-muted-foreground hover:text-primary transition-colors">+65 8899 2295</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Centrovert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
