import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const Hero = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 lg:pt-40 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left space-y-8 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-secondary/30 animate-fade-in shadow-glow hover:scale-105 transition-transform duration-300 cursor-default">
                <Star className="w-4 h-4 text-secondary animate-pulse" />
                <span className="text-sm font-semibold tracking-wide text-primary">
                  MOM Licensed Agency
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight animate-fade-up">
                <span className="block text-primary">Connecting</span>
                <span className="text-gradient-gold block mt-2">
                  Families
                </span>
                <span className="block text-primary mt-2">with Trusted Care.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                At our agency, we keep things simple and stress-free. Our all-inclusive package helps lift the burden off families, and we cater to different needs and budgets. We’re here to make both sides happy and smiling.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/6588992295", "_blank")}
                  className="group bg-secondary hover:bg-secondary/90 text-primary text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-glow transition-all hover:scale-105 font-heading font-bold"
                >
                  WhatsApp Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="group border-primary/20 bg-white/50 backdrop-blur-md hover:bg-primary/5 text-primary text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-heading font-semibold"
                >
                  Our Services
                </Button>
              </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="relative h-[500px] lg:h-[700px] w-full hidden lg:block animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Organic Shape Blob Background */}
                <div className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] animate-pulse-slow" />

                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/hero-family.png"
                    alt="Happy Family with Helper"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating "Happy Family" Card */}
                <div className="absolute bottom-10 -left-10 p-5 rounded-2xl glass-effect border border-white/60 shadow-2xl animate-float bg-white/80 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-primary">
                          {i === 3 ? '+' : ''}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-primary text-lg">Happy Families</div>
                      <div className="text-xs text-muted-foreground">Connecting since 2010</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;
