import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Centrovert specialize in?",
      answer: "Centrovert specializes in AI Solutions, Website Development, SaaS Products, AI Agent Development, Digital Marketing, and Consulting & Support. We provide end-to-end solutions tailored to your business needs."
    },
    {
      question: "How long does a typical AI project take?",
      answer: "Project timelines vary depending on complexity and scope. A typical AI implementation can take 2-6 months, from initial consultation through deployment. We follow an agile approach with regular milestones and updates."
    },
    {
      question: "Do you work with startups or only established companies?",
      answer: "We work with businesses of all sizes - from early-stage startups to established enterprises. Our flexible engagement models and scalable solutions are designed to fit various budgets and requirements."
    },
    {
      question: "What makes Centrovert different from other AI companies?",
      answer: "We combine rapid innovation with proven expertise. Our Singapore-based team delivers cutting-edge AI solutions with 24/7 support, flexible pricing, and a track record of 100+ successful projects. We focus on real-world problem solving, not just technology."
    },
    {
      question: "Can you integrate AI into our existing systems?",
      answer: "Absolutely! We specialize in seamless integration of AI solutions into your existing tech stack. Our team ensures minimal disruption to your operations while maximizing the benefits of AI automation."
    },
    {
      question: "What kind of support do you provide after project completion?",
      answer: "We offer comprehensive post-launch support including 24/7 technical assistance, performance monitoring, optimization, training workshops, and ongoing maintenance to ensure your AI solutions continue to deliver value."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "Data security is our top priority. We implement industry-standard encryption, secure cloud infrastructure, regular security audits, and comply with international data protection regulations including GDPR and PDPA."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible engagement models including project-based pricing, retainer agreements, and custom packages. Contact us for a free consultation and detailed quote based on your specific requirements."
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={headerRef} 
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">FAQ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Got questions? We've got answers. Find everything you need to know about working with Centrovert.
          </p>
        </div>

        <div 
          ref={contentRef} 
          className={`max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border/50 rounded-2xl px-4 sm:px-6 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-colors shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-base sm:text-lg hover:text-primary transition-colors py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div 
          className={`text-center transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} 
          style={{ transitionDelay: "200ms" }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/30 shadow-xl">
            <CardContent className="pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 space-y-4 sm:space-y-5 px-4 sm:px-6">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto">
                Our team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-heading font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
