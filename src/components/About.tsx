import { Globe, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const features = [
    { icon: Shield, title: "Mission-Driven", description: "Empowering businesses with AI-driven solutions that solve real-world problems efficiently.", color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Expert Team", description: "A diverse team of AI specialists, developers, and strategists committed to excellence.", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "Rapid Innovation", description: "Fast-paced development cycles delivering cutting-edge solutions in record time.", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Global Reach", description: "Based in Singapore, serving clients worldwide with 24/7 support and dedication.", color: "from-orange-500 to-red-500" },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">ABOUT US</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            About <span className="text-gradient">Centrovert</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            A Singapore-based AI IT startup revolutionizing how businesses leverage artificial intelligence. We specialize in real-time problem solving, innovative SaaS products, and intelligent automation.
          </p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/80 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center space-y-3 sm:space-y-4 px-4">
                <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 sm:h-9 sm:w-9 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
