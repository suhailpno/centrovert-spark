import { Phone, Video, FileCheck, Plane, Home } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: Phone,
            title: "Consultation",
            description: "We discuss your specific needs (caregiving, cooking, pets) to understand your family dynamics.",
        },
        {
            icon: Video,
            title: "Selection",
            description: "Browse curated profiles and interview shortlisted candidates via video call or in person.",
        },
        {
            icon: FileCheck,
            title: "Processing",
            description: "We handle all MOM documentation, insurance, medical screenings, and contracts.",
        },
        {
            icon: Plane,
            title: "Arrival & Training",
            description: "Your helper arrives and receives final briefing and training on Singapore standards.",
        },
        {
            icon: Home,
            title: "Handover",
            description: "We facilitate a smooth integration into your home with a structured handover process.",
        },
    ];

    return (
        <section id="process" className="section-padding bg-secondary/5">
            <div className="container mx-auto container-padding">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                        Simple & <span className="text-secondary">Worry-Free</span> Process
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We make it simple and worry-free — from matching your family with the right helper, handling all paperwork and training, to ongoing support after arrival.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
