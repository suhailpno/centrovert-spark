import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Chen", role: "CEO, TechVentures", content: "Centrovert transformed our business operations with their AI solutions. The efficiency gains have been remarkable, and their team's expertise is unmatched.", rating: 5, avatar: "SC", gradient: "from-blue-500 to-cyan-500" },
    { name: "Michael Rodriguez", role: "CTO, GlobalSoft", content: "Working with Centrovert was a game-changer. Their AI agents automated our repetitive tasks, allowing our team to focus on strategic initiatives.", rating: 5, avatar: "MR", gradient: "from-purple-500 to-pink-500" },
    { name: "Emily Thompson", role: "Director of Operations, InnovateHub", content: "Professional, innovative, and results-driven. Centrovert delivered beyond our expectations. Their digital marketing solutions doubled our online engagement.", rating: 5, avatar: "ET", gradient: "from-orange-500 to-amber-500" },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-xl transition-all duration-700 border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/90 hover:-translate-y-2 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 sm:top-6 right-4 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 space-y-4 sm:space-y-6 relative z-10 px-4 sm:px-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary group-hover:scale-110 transition-transform" 
                      style={{ transitionDelay: `${i * 50}ms` }} 
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/50">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold font-heading shadow-lg group-hover:scale-110 transition-transform text-sm sm:text-base`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm sm:text-base text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
