import { Database, Brain, Workflow, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const AIWorkflows = () => {
  const workflows = [
    { 
      number: "01", 
      icon: Database, 
      title: "Data Collection & Analysis", 
      description: "Gather and analyze relevant data from multiple sources to understand your business needs and challenges."
    },
    { 
      number: "02", 
      icon: Brain, 
      title: "AI Model Development", 
      description: "Design and train custom AI models optimized for your specific use case with state-of-the-art algorithms."
    },
    { 
      number: "03", 
      icon: Workflow, 
      title: "Integration & Automation", 
      description: "Seamlessly integrate AI solutions into your existing systems and automate repetitive workflows."
    },
    { 
      number: "04", 
      icon: TrendingUp, 
      title: "Optimization & Scaling", 
      description: "Continuously monitor, optimize performance, and scale your AI solutions as your business grows."
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="workflows" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">AI Workflows</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Our Proven Process</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Our proven four-step process ensures successful AI implementation from concept to deployment.</p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workflows.map((workflow, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/50 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-6xl font-bold text-primary/20 font-heading">{workflow.number}</span>
                </div>
                <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <workflow.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">{workflow.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{workflow.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardContent className="pt-12 pb-12 space-y-6">
              <h3 className="font-heading text-3xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground">Let our AI experts guide you through the journey of digital transformation with cutting-edge solutions.</p>
              <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-6 text-lg rounded-xl">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflows;
