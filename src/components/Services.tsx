import { Brain, Code, Cloud, Bot, TrendingUp, HeadphonesIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Custom AI models and machine learning solutions tailored to solve your unique business challenges.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive, and high-performance websites built with the latest technologies.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "SaaS Products",
      description: "End-to-end SaaS product development from concept to launch, with scalable architecture.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Intelligent AI agents that automate tasks, enhance customer experience, and streamline operations.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies powered by AI to maximize ROI and accelerate growth.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: HeadphonesIcon,
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support to help you navigate the AI landscape.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">SERVICES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            We provide the essential tools and expertise to build your digital future. Simple, powerful, and effective.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border border-border/40 bg-card/20 hover:bg-card/40 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
