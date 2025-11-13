import { useState } from "react";
import { MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business? Let's start the conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      60 Paya Lebar Road, #01-02<br />
                      Paya Lebar Square<br />
                      Singapore 409051
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <a 
                      href="mailto:info@centrovert.com" 
                      className="text-primary hover:text-accent transition-colors"
                    >
                      info@centrovert.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-border/50 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7663824890487!2d103.89152831475396!3d1.3174509990364758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da183b21cd3f73%3A0x4ab8e451b6a9a45f!2s60%20Paya%20Lebar%20Rd%2C%20Singapore%20409051!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centrovert Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[200px] resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
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
