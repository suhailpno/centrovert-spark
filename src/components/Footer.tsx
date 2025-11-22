import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", gradient: "from-blue-600 to-blue-400" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", gradient: "from-sky-500 to-blue-400" },
    { icon: Github, href: "https://github.com", label: "GitHub", gradient: "from-gray-700 to-gray-500" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", gradient: "from-pink-600 to-purple-600" },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="border-b border-slate-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-2">
              <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">GET STARTED</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your <span className="text-gradient">Business?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies leveraging AI to accelerate growth. Let's build something extraordinary together.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-heading font-semibold px-8 py-6 sm:py-7 text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Your Project
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
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gradient">Centrovert</h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto sm:mx-0">
              Empowering businesses through AI & Automation with cutting-edge digital solutions. Based in Singapore, serving clients worldwide.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center sm:justify-start pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300`} />
                  {/* Icon container */}
                  <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${social.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                      <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg text-slate-200">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 items-center sm:items-start">
              {["Home", "About", "Services", "FAQ", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm sm:text-base text-slate-400 hover:text-primary transition-colors inline-block w-fit relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-heading font-semibold text-base sm:text-lg text-slate-200">Contact Info</h4>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-start gap-3 max-w-sm">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-left">
                  60 Paya Lebar Road, #01-02<br />
                  Paya Lebar Square<br />
                  Singapore 409051
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@centrovert.com"
                  className="text-xs sm:text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  info@centrovert.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+6588992295"
                  className="text-xs sm:text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  +65 8899 2295
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} Centrovert. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs sm:text-sm">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
