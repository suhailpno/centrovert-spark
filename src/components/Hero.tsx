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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="AI Technology Background" className="w-full h-full object-cover scale-110 animate-[scale-in_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="absolute inset-0 mesh-gradient" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-effect border border-primary/30 animate-fade-in shadow-md hover:shadow-lg transition-shadow">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">Singapore's Leading AI Innovation Hub</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-tight animate-fade-up px-4">
            Transform Your Business<br className="hidden sm:block" />
            <span className="text-gradient block mt-2">with AI Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up px-4 sm:px-6" style={{ animationDelay: "0.2s" }}>
            Centrovert delivers cutting-edge AI technology, intelligent workflows, and innovative digital solutions to propel your business into the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6 animate-fade-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="w-full sm:w-auto group bg-gradient-primary hover:opacity-90 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl shadow-xl hover:shadow-glow transition-all hover:scale-105 font-heading font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} 
              variant="outline" 
              className="w-full sm:w-auto group border-2 border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/5 text-foreground text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl transition-all hover:scale-105 font-heading font-semibold shadow-md"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
