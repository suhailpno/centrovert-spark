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
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">About Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">About <span className="text-gradient">Centrovert</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">A Singapore-based AI IT startup revolutionizing how businesses leverage artificial intelligence. We specialize in real-time problem solving, innovative SaaS products, and intelligent automation.</p>
        </div>
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/50 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-9 w-9 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
