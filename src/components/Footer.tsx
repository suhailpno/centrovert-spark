import { Mail, MapPin, Phone, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      {/* CTA Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Ready to find the perfect <span className="text-secondary">Helper?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation. We are here to support your family's needs.
            </p>
            <Button
              onClick={() => window.open("https://wa.me/6588992295", "_blank")}
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#B5952F] text-white font-heading font-bold px-8 py-6 sm:py-7 text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              WhatsApp Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">

          {/* Brand & Social */}
          <div className="space-y-5 text-center sm:text-left lg:col-span-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Amin Employment Agency</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-md mx-auto sm:mx-0">
              Your trusted partner for professional domestic helper placement in Singapore. MOM Licensed.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center sm:justify-start pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg text-secondary">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 items-center sm:items-start">
              {["Home", "About", "Services", "How It Works"].map((link) => (
                <a
                  key={link}
                  href={link === "How It Works" ? "#process" : `#${link.toLowerCase()}`}
                  className="text-sm sm:text-base text-white/70 hover:text-secondary transition-colors inline-block w-fit"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg text-secondary">Contact Info</h4>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-start gap-3 max-w-sm">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed text-left">
                  123 Bukit Timah Road<br />
                  Singapore 589632
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:hello@aminemployment.com"
                  className="text-xs sm:text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  hello@aminemployment.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+6512345678"
                  className="text-xs sm:text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  +65 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left">
              © {new Date().getFullYear()} Amin Employment Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs sm:text-sm">
              <a href="#" className="text-white/50 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
