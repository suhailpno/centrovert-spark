import { Brain, Code, Cloud, Bot, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    { icon: Brain, title: "AI Solutions", description: "Custom AI models and machine learning solutions tailored to your business needs", gradient: "from-violet-500 to-purple-500" },
    { icon: Code, title: "Website Development", description: "Modern, responsive websites built with cutting-edge technologies", gradient: "from-blue-500 to-cyan-500" },
    { icon: Cloud, title: "SaaS Products", description: "Scalable software-as-a-service platforms designed for growth", gradient: "from-cyan-500 to-teal-500" },
    { icon: Bot, title: "AI Agent Development", description: "Intelligent automation agents that streamline your workflows", gradient: "from-pink-500 to-rose-500" },
    { icon: TrendingUp, title: "Digital Marketing", description: "Data-driven marketing strategies powered by AI insights", gradient: "from-orange-500 to-amber-500" },
    { icon: HeadphonesIcon, title: "Consulting & Support", description: "Expert guidance and ongoing support for your digital transformation", gradient: "from-emerald-500 to-green-500" },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={servicesBg} alt="Services Background" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">What We Offer</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Our <span className="text-gradient">Services</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Comprehensive AI and automation solutions to elevate your business to the next level</p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/80 hover:-translate-y-3 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
