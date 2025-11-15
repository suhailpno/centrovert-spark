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
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">Contact Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Get in <span className="text-gradient">Touch</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Ready to transform your business with AI? Let's start a conversation about your project.</p>
        </div>
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className={`border-border/50 backdrop-blur-sm bg-card/80 shadow-xl transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="mt-2 h-12 bg-background/50" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" className="mt-2 h-12 bg-background/50" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your Company" className="mt-2 h-12 bg-background/50" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project and requirements..." rows={6} className="mt-2 bg-background/50 resize-none" required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-lg py-6 rounded-xl">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className={`space-y-8 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:info@centrovert.com" className="text-muted-foreground hover:text-primary transition-colors">info@centrovert.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+6588992295" className="text-muted-foreground hover:text-primary transition-colors">+65 8899 2295</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">Office</h3>
                  <p className="text-muted-foreground">Singapore, Singapore</p>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="pt-6 pb-6">
                <h3 className="font-heading text-xl font-bold mb-4">Why Choose Centrovert?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Fast response time - within 24 hours</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Free initial consultation and project assessment</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Flexible engagement models to fit your budget</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span><span>Proven track record with 100+ successful projects</span></li>
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
