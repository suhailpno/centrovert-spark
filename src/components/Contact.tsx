import { useState } from "react";
import { MapPin, Mail, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for contacting us. We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">CONTACT US</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Ready to transform your business with AI? Let's start a conversation about your project.
          </p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <Card className={`border-border/50 backdrop-blur-sm bg-card/80 shadow-xl transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      placeholder="John Doe" 
                      className="mt-2 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      placeholder="john@company.com" 
                      className="mt-2 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm sm:text-base">Company Name</Label>
                  <Input 
                    id="company" 
                    value={formData.company} 
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                    placeholder="Your Company" 
                    className="mt-2 h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary transition-colors" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    placeholder="Tell us about your project and requirements..." 
                    rows={6} 
                    className="mt-2 bg-background/50 resize-none border-border/50 focus:border-primary transition-colors" 
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-heading font-semibold text-base sm:text-lg py-5 sm:py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Send Message <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold mb-1 sm:mb-2">Email</h3>
                  <a href="mailto:info@centrovert.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    info@centrovert.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold mb-1 sm:mb-2">Phone</h3>
                  <a href="tel:+6588992295" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    +65 8899 2295
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold mb-1 sm:mb-2">Office</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Singapore, Singapore</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/30 shadow-lg">
              <CardContent className="pt-5 sm:pt-6 pb-5 sm:pb-6 px-5 sm:px-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose Centrovert?</h3>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-base">•</span>
                    <span>Fast response time - within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-base">•</span>
                    <span>Free initial consultation and project assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-base">•</span>
                    <span>Flexible engagement models to fit your budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-base">•</span>
                    <span>Proven track record with 100+ successful projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
