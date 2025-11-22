import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#workflows", label: "AI Workflows" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-effect shadow-xl py-2 sm:py-3 border-b border-border/50" : "bg-transparent py-4 sm:py-5"}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo("#home")} className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gradient hover:scale-105 transition-transform">
            Centrovert
          </button>
          
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollTo(link.href)} 
                className="px-3 xl:px-4 py-2 text-sm xl:text-base text-foreground/80 hover:text-primary transition-all font-medium rounded-lg hover:bg-primary/5 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button 
                onClick={() => scrollTo("#contact")} 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-5 xl:px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Started
              </Button>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors border border-border/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 mt-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button 
                  key={link.href} 
                  onClick={() => scrollTo(link.href)} 
                  className="text-left text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-medium py-3 px-4 rounded-xl border border-transparent hover:border-primary/20"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollTo("#contact")} 
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold mt-4 rounded-xl shadow-lg py-3"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
