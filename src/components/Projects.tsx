import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, ShoppingCart, MessageSquare, BarChart, FileText, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "AI Customer Support Agent",
      description: "Automated customer support system handling 10,000+ queries daily with 95% accuracy",
      category: "AI Agent",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Full-stack SaaS solution with AI-powered recommendations increasing sales by 40%",
      category: "SaaS Product",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbot",
      description: "Multi-lingual chatbot for global enterprise serving 50+ countries",
      category: "AI Solution",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Real-time business intelligence platform with predictive analytics",
      category: "Web Development",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Document Processing AI",
      description: "Automated document extraction and classification system processing 100K+ documents monthly",
      category: "AI Solution",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Marketing Automation Suite",
      description: "AI-driven marketing platform increasing ROI by 200% for SMEs",
      category: "Digital Marketing",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">OUR WORK</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Discover how we've helped businesses transform with AI-powered solutions.
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/80 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${project.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <project.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-bold text-primary tracking-wide">{project.category}</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
