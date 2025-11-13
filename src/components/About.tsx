import { Globe, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Singapore-based, serving businesses worldwide with cutting-edge solutions",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging the latest AI technologies to transform your business operations",
    },
    {
      icon: Shield,
      title: "Reliable Partner",
      description: "Trusted by companies globally for consistent, quality deliverables",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Tailored solutions that align with your unique business objectives",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Centrovert</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a Singapore-based AI & Automation partner dedicated to transforming businesses 
            through intelligent digital solutions. Our mission is to make advanced technology 
            accessible, practical, and impactful for organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
              style={{ 
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both` 
              }}
            >
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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

export default About;
