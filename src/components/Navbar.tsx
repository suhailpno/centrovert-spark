import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-effect shadow-xl py-3 border-b border-border/50" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-heading text-2xl md:text-3xl font-bold text-gradient hover:scale-105 transition-transform">Centrovert</a>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.href)} className="px-4 py-2 text-foreground/80 hover:text-primary transition-all font-medium rounded-lg hover:bg-primary/5 relative group">
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => scrollToSection(link.href)} className="block w-full text-left text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-medium py-3 px-4 rounded-lg">{link.name}</button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
