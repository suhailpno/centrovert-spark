import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

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
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding relative z-10">

        {/* Main Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">F.A.Q</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            Everything you need to know about our process, services, and how we work.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Left Column: CTA */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">SUPPORT</span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
              Have Any Questions?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-heading font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              Contact us
            </Button>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-0 border rounded-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`border-b border-border/40 bg-card/30 px-6 last:border-0`}
                >
                  <AccordionTrigger className="text-left font-heading font-medium text-lg hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary group">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <HelpCircle className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
