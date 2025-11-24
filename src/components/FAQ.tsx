import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to bring in a helper?",
      answer: "For transfer helpers currently in Singapore, the process typically takes 1-2 weeks. For new helpers arriving from Indonesia, it usually takes 4-6 weeks, depending on passport processing, medical screenings, and flight availability.",
    },
    {
      question: "What are the costs involved in hiring a helper?",
      answer: "The costs include the agency fee, MOM work permit application/issuance fees, insurance, medical screening, and the helper's placement fee (loan). We provide a transparent breakdown of all costs during our consultation with no hidden fees.",
    },
    {
      question: "What happens if the helper is not a good fit?",
      answer: "We offer a replacement guarantee within the first 6 months of employment. If things don't work out despite counseling and mediation efforts, we will facilitate a replacement helper for you at minimal or no administrative cost, depending on your package.",
    },
    {
      question: "Do you provide training for the helpers?",
      answer: "Yes, all our new helpers undergo comprehensive training in Indonesia and Singapore. This covers general housekeeping, infant care, elderly care, cooking, and English communication. We also offer ongoing upskilling courses.",
    },
    {
      question: "Can I interview the helper before hiring?",
      answer: "Absolutely. For transfer helpers, you can interview them in person at our agency. For new helpers overseas, we arrange video interviews (WhatsApp/Zoom) so you can assess their personality and communication skills.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary/5">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-secondary/30 mb-2 shadow-sm">
              <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary mb-6">
              Common <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hiring a helper involves many regulations and procedures. We've answered the most common questions to help you understand the process better.
            </p>
            <div className="p-6 bg-primary rounded-2xl text-white">
              <h4 className="font-heading font-bold text-xl mb-2">Still have questions?</h4>
              <p className="text-white/80 mb-4">Our team is ready to assist you with any specific queries you may have.</p>
              <Button
                onClick={() => window.open("https://wa.me/6588992295", "_blank")}
                className="bg-[#D4AF37] hover:bg-[#B5952F] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                WhatsApp Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-lg text-primary hover:text-secondary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
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
