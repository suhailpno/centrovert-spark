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
    <section id="workflows" className="section-padding bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">AI WORKFLOWS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Our Proven Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Our proven four-step process ensures successful AI implementation from concept to deployment.
          </p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {workflows.map((workflow, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/80 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="flex items-start gap-2 sm:gap-4">
                  <span className="text-5xl sm:text-6xl font-bold text-primary/20 font-heading leading-none">
                    {workflow.number}
                  </span>
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <workflow.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {workflow.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {workflow.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          className={`text-center transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
          style={{ transitionDelay: "400ms" }}
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/30 shadow-xl">
            <CardContent className="pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6">
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready to Transform Your Business?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Let our AI experts guide you through the journey of digital transformation with cutting-edge solutions.
              </p>
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-heading font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
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
