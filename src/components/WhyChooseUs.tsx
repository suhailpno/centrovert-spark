import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyChooseUs = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

    return (
        <section id="about" className="section-padding bg-secondary/5">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Our Philosophy & Trust */}
                    <div ref={headerRef} className={`space-y-8 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-secondary/30 mb-4 shadow-sm">
                                <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">OUR PROMISE</span>
                            </div>
                            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary mb-6">
                                Built on <span className="text-secondary">Trust & Harmony</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our success truly comes from your trust and recommendations. We’re proud of our helpers—they’re honest, committed, and hardworking.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We know there are many great agencies in Singapore, and we encourage you to take your time to find the right match. What matters most is that both the family and the helper connect well and work in harmony together.
                            </p>
                        </div>

                        {/* The Heart of Our Helpers Story */}
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-secondary/20 relative overflow-hidden group hover:shadow-xl transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="w-6 h-6 text-secondary fill-secondary animate-pulse" />
                                <h3 className="font-heading text-2xl font-bold text-primary">The Heart of Our Helpers</h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Our Indonesian helpers are real-life superheroes! Many come from small villages, working on farms to support their families. Life can be tough, but they never give up.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Even after a long day, they go home to cook, care for kids, and look after elderly parents. Some even volunteer to help other children—now that’s pure heart.
                            </p>
                            <p className="text-muted-foreground leading-relaxed font-medium text-primary">
                                We take time to choose and train each helper so they feel ready for life in Singapore. More than skills, we look for passion—people who love helping and take pride in their work.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Additional Points */}
                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        {/* Image Card */}
                        <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
                            <img
                                src="/natural-home.png"
                                alt="Peaceful Singapore Home"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <p className="font-heading text-2xl font-bold mb-2">Making Families Smile</p>
                                <p className="text-white/90 text-sm leading-relaxed max-w-md">
                                    At the end of the day, it’s all about bringing smiles and making families feel cared for.
                                </p>
                            </div>
                        </div>

                        {/* Training & Support Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 hover:border-secondary/50 transition-colors">
                                <Sparkles className="w-8 h-8 text-secondary mb-3" />
                                <h4 className="font-bold text-primary mb-2">Training with Care</h4>
                                <p className="text-sm text-muted-foreground">
                                    We train our helpers with care and heart, teaching real skills that make life easier at home and helping them adapt to Singapore’s culture.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 hover:border-secondary/50 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-secondary mb-3" />
                                <h4 className="font-bold text-primary mb-2">Simple & Worry-Free</h4>
                                <p className="text-sm text-muted-foreground">
                                    From matching your family with the right helper to handling all paperwork, we make the process simple and worry-free.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
