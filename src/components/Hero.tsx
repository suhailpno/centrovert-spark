import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, BrainCircuit, Zap } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { TextScramble } from "@/components/ui/TextScramble";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useRef, useState } from "react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <AuroraBackground className="min-h-screen">
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left space-y-8 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 animate-fade-in shadow-glow hover:scale-105 transition-transform duration-300 cursor-default">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Next-Gen AI Innovation
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight animate-fade-up">
                <span className="block text-foreground">Think</span>
                <span className="text-gradient block mt-2">
                  <TextScramble text="Beyond Limits." />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                We build intelligent digital ecosystems that adapt, learn, and evolve. Experience the future of automation today.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <MagneticButton>
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-glow transition-all hover:scale-105 font-heading font-bold"
                  >
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>

                <MagneticButton strength={0.3}>
                  <Button
                    size="lg"
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    variant="outline"
                    className="group border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/10 text-foreground text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-heading font-semibold"
                  >
                    View Solutions
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Visuals & Floating Elements */}
            <div
              className="relative h-[500px] lg:h-[700px] w-full hidden lg:block perspective-1000"
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              {/* AI Core Dashboard Composition */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* Main Core Glow */}
                <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] animate-pulse-slow" />
                <div className="absolute w-[200px] h-[200px] bg-accent/20 rounded-full blur-[60px] animate-pulse-slow delay-75" />

                {/* Central Interface Ring */}
                <div className="relative w-[380px] h-[380px] border border-white/10 rounded-full animate-spin-slow flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-white/5 border-dashed" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-glow" />
                </div>

                {/* Inner Rings */}
                <div className="absolute w-[280px] h-[280px] border border-primary/20 rounded-full animate-reverse-spin flex items-center justify-center">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-glow" />
                </div>

                {/* Central Data Sphere */}
                <div className="absolute w-[140px] h-[140px] glass-effect rounded-full flex items-center justify-center overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
                  <BrainCircuit className="w-12 h-12 text-white/80 relative z-10 animate-float" />

                  {/* Scanning Line */}
                  <div className="absolute inset-0 w-full h-[2px] bg-primary/50 shadow-[0_0_10px_rgba(229,9,20,0.5)] animate-scan" />
                </div>

                {/* Orbiting Satellite Cards */}
                <FloatingCard depth={2} className="absolute top-[15%] right-[10%] z-20">
                  <div className="p-4 rounded-2xl glass-effect border border-white/10 shadow-2xl bg-card/40 backdrop-blur-xl transform transition-transform hover:scale-110 duration-300 w-48">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xs font-mono text-primary/80">SYSTEM_ACTIVE</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-primary rounded-full animate-shimmer" />
                      </div>
                      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                        <span>CPU</span>
                        <span>84%</span>
                      </div>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard depth={1.5} className="absolute bottom-[20%] left-[5%] z-30">
                  <div className="p-4 rounded-2xl glass-effect border border-white/10 shadow-2xl bg-card/40 backdrop-blur-xl transform transition-transform hover:scale-110 duration-300 w-40">
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-[10px] font-mono text-green-400">OPTIMIZED</span>
                    </div>
                    <div className="text-2xl font-bold font-heading text-foreground">99.9%</div>
                    <div className="text-[10px] text-muted-foreground">Uptime Guarantee</div>
                  </div>
                </FloatingCard>

                <FloatingCard depth={1} className="absolute top-[30%] left-[0%] z-10">
                  <div className="p-3 rounded-xl glass-effect border border-white/5 shadow-xl bg-card/20 backdrop-blur-md">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                      <div className="w-1 h-6 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                      <div className="w-1 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1 h-5 bg-primary/80 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="w-1 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </FloatingCard>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
                  <circle cx="300" cy="300" r="190" fill="none" stroke="url(#orbit-gradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-20 animate-spin-slow" />
                  <defs>
                    <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(229, 9, 20, 0)" />
                      <stop offset="50%" stopColor="rgba(229, 9, 20, 0.3)" />
                      <stop offset="100%" stopColor="rgba(229, 9, 20, 0)" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;


