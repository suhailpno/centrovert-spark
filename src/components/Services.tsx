import { Brain, Code, Cloud, Bot, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    { 
      icon: Brain, 
      title: "AI Solutions", 
      description: "Custom AI models and machine learning solutions tailored to solve your unique business challenges with cutting-edge technology.", 
      gradient: "from-blue-500 to-cyan-500",
      features: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    { 
      icon: Code, 
      title: "Website Development", 
      description: "Modern, responsive, and high-performance websites built with the latest technologies to establish your digital presence.", 
      gradient: "from-purple-500 to-pink-500",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"]
    },
    { 
      icon: Cloud, 
      title: "SaaS Products", 
      description: "End-to-end SaaS product development from concept to launch, with scalable architecture and robust features.", 
      gradient: "from-cyan-500 to-teal-500",
      features: ["Cloud Architecture", "API Development", "User Authentication", "Payment Integration"]
    },
    { 
      icon: Bot, 
      title: "AI Agent Development", 
      description: "Intelligent AI agents that automate tasks, enhance customer experience, and streamline business operations.", 
      gradient: "from-pink-500 to-rose-500",
      features: ["Chatbots", "Virtual Assistants", "Process Automation", "Smart Workflows"]
    },
    { 
      icon: TrendingUp, 
      title: "Digital Marketing", 
      description: "Data-driven marketing strategies powered by AI to maximize ROI and accelerate your business growth.", 
      gradient: "from-orange-500 to-amber-500",
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics & Insights"]
    },
    { 
      icon: HeadphonesIcon, 
      title: "Consulting & Support", 
      description: "Expert guidance and ongoing support to help you navigate the AI landscape and achieve your business goals.", 
      gradient: "from-emerald-500 to-green-500",
      features: ["Strategy Planning", "Technical Consulting", "24/7 Support", "Training & Workshops"]
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={servicesBg} alt="Services Background" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-30 z-0" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">WHAT WE OFFER</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Comprehensive AI and technology solutions designed to transform your business and drive innovation.
          </p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/80 hover:-translate-y-3 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardContent className="pt-8 sm:pt-10 pb-8 sm:pb-10 space-y-4 sm:space-y-6 relative z-10 px-5 sm:px-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2 sm:pt-3">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
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
