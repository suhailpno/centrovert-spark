import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVentures",
      content: "Centrovert transformed our business operations with their AI solutions. The efficiency gains have been remarkable, and their team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, GlobalSoft",
      content: "Working with Centrovert was a game-changer. Their AI agents automated our repetitive tasks, allowing our team to focus on strategic initiatives.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Director of Operations, InnovateHub",
      content: "Professional, innovative, and results-driven. Centrovert delivered beyond our expectations. Their digital marketing solutions doubled our online engagement.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by businesses worldwide for exceptional AI and automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50"
              style={{ 
                animation: `fade-in 0.8s ease-out ${index * 0.2}s both` 
              }}
            >
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
