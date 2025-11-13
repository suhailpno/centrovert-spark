import { useState } from "react";
import { MapPin, Mail, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for contacting us. We'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Our Office", content: "60 Paya Lebar Road, #01-02\nPaya Lebar Square\nSingapore 409051", gradient: "from-blue-500 to-cyan-500" },
    { icon: Mail, title: "Email Us", content: "info@centrovert.com", link: "mailto:info@centrovert.com", gradient: "from-purple-500 to-pink-500" },
    { icon: Phone, title: "Call Us", content: "+65 8899 2295", link: "tel:+6588992295", gradient: "from-emerald-500 to-green-500" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">Contact Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">Get in <span className="text-gradient">Touch</span></h2>
        </div>
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`space-y-6 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            {contactInfo.map((info, index) => (
              <Card key={index} className="group border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl backdrop-blur-sm bg-card/90 hover:-translate-y-1" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                      {info.link ? <a href={info.link} className="text-primary hover:text-accent transition-colors font-medium">{info.content}</a> : <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{info.content}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="rounded-2xl overflow-hidden border-2 border-border/50 h-64 shadow-xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7663824890487!2d103.89152831475396!3d1.3174509990364758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da183b21cd3f73%3A0x4ab8e451b6a9a45f!2s60%20Paya%20Lebar%20Rd%2C%20Singapore%20409051!5e0!3m2!1sen!2s!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Centrovert Office Location" />
            </div>
          </div>
          <Card className={`border-border/50 backdrop-blur-sm bg-card/90 shadow-xl transition-all duration-1000 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Email</label>
                  <Input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-12 bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Message</label>
                  <Textarea placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="min-h-[200px] bg-background/50" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-heading font-semibold text-lg py-6 rounded-xl shadow-xl hover:scale-[1.02] transition-all">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
