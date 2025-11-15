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
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">Our Work</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Discover how we've helped businesses transform with AI-powered solutions.</p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/50 hover:-translate-y-2 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary">{project.category}</span>
                </div>
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
