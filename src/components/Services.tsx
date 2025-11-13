import { Brain, Code, Cloud, Bot, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Custom AI models and machine learning solutions tailored to your business needs",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
    },
    {
      icon: Cloud,
      title: "SaaS Products",
      description: "Scalable software-as-a-service platforms designed for growth",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Intelligent automation agents that streamline your workflows",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies powered by AI insights",
    },
    {
      icon: HeadphonesIcon,
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support for your digital transformation",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI and automation solutions to elevate your business to the next level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:-translate-y-2"
              style={{ 
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both` 
              }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
