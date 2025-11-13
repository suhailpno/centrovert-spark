import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI Technology Background" className="w-full h-full object-cover scale-105 animate-[scale-in_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 mesh-gradient" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Digital Transformation</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-up">
            Empowering Businesses Through <span className="text-gradient">AI & Automation</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Innovating the future with intelligent digital transformation
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient font-heading">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient font-heading">95%</div>
              <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient font-heading">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support Available</div>
            </div>
          </div>

          <div className="pt-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" onClick={scrollToContact} className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-glow transition-all hover:scale-105 font-heading font-semibold">
              Let's Innovate Together
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
