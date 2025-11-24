import { UserCheck, Globe, FileText, Briefcase, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "New Helper Placement",
      description: "We source fresh and experienced helpers directly from Indonesia, carefully screened for attitude and aptitude.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Transfer Helpers",
      description: "Experienced helpers currently in Singapore, available for immediate face-to-face interviews and transfer.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Work Permit Processing",
      description: "Hassle-free application, renewal, and cancellation services. We handle all MOM documentation for you.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "Direct Hire Services",
      description: "Found your own helper? We handle all the paperwork, insurance, and logistics to bring them in legally.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: "Training & Counselling",
      description: "We train our helpers with care and heart, teaching real skills that make life easier at home. They also learn to adapt to Singapore’s culture and handle real-life situations with confidence.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: HeartHandshake,
      title: "Elderly & Child Care",
      description: "Specialized matching for families needing dedicated care for infants, children, or elderly family members.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 md:space-y-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-secondary/30 mb-2 sm:mb-4 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 text-primary">
            Reliable Services, <span className="text-secondary">Tailored to You</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
            From seamless work permit processing to free home service, we handle everything so you can focus on your family.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[2rem] bg-white border border-border/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                {service.title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-sm font-bold text-primary group-hover:text-secondary transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}

          {/* For Helpers Card */}
          <div
            className={`group relative p-8 rounded-[2rem] bg-gradient-to-br from-primary to-[#1e2a8a] border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 p-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg backdrop-blur-sm">
              <div className="w-full h-full bg-transparent rounded-2xl flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold mb-4 text-white">
              Looking for a Job?
            </h3>

            <p className="text-lg text-white/80 leading-relaxed mb-4">
              We’d love to help you find an employer who suits you best. No agency fees, and our friendly team is here to support you.
            </p>

            <div className="mt-6 pt-6 border-t border-white/20">
              <span className="text-sm font-bold text-white group-hover:text-secondary transition-colors flex items-center gap-2 cursor-pointer" onClick={() => window.open("https://wa.me/6588992295", "_blank")}>
                Register with Us <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Gentle Reminder Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center animate-fade-up">
          <h4 className="font-heading text-xl font-bold text-amber-900 mb-3">A Gentle Reminder for Families</h4>
          <p className="text-amber-800 leading-relaxed">
            Please ensure your helper’s <strong>Medical Check-Up</strong> and <strong>levy payments</strong> are done on time. Missing these may lead to the cancellation of the work permit — and we’d like to help you avoid that hassle!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
