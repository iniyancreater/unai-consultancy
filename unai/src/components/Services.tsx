import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code, Monitor, TrendingUp, Globe, GraduationCap, 
  BarChart3, Users, PiggyBank, Briefcase, Cpu,
  ChevronDown, CheckCircle2
} from "lucide-react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const services = [
    {
      title: "Software Development",
      description: "Custom, scalable engineering solutions for modern enterprises.",
      icon: Code,
      premium: false,
      bullets: ["Custom Web & Mobile Apps", "Cloud-Native Architecture", "API Development & Integration", "Legacy System Modernization"]
    },
    {
      title: "IT Consulting & Digital Transformation",
      description: "Guiding your transition into the digital-first economy with robust strategy.",
      icon: Monitor,
      premium: false,
      bullets: ["Technology Roadmapping", "Cloud Migration Strategy", "IT Infrastructure Optimization", "Cybersecurity Posture Assessment"]
    },
    {
      title: "Business Strategy Consulting",
      description: "Actionable insights to scale operations and capture market share globally.",
      icon: TrendingUp,
      premium: false,
      bullets: ["Market Analysis & Entry Strategy", "Operating Model Design", "Mergers & Acquisitions IT Due Diligence", "Executive Advisory"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that maximize ROI and elevate brand visibility.",
      icon: Globe,
      premium: false,
      bullets: ["SEO & Content Strategy", "Performance Marketing (PPC)", "Social Media Engineering", "Conversion Rate Optimization (CRO)"]
    },
    {
      title: "Interview Training",
      description: "High-stakes tech interview coaching for elite software professionals.",
      icon: GraduationCap,
      premium: false,
      bullets: ["1-on-1 Mock Interviews", "Systems Design Coaching", "Algorithmic Problem Solving", "Behavioral Assessment Prep"]
    },
    {
      title: "Data Analytics & BI",
      description: "Transforming raw data into a strategic business asset for informed decision making.",
      icon: BarChart3,
      premium: false,
      bullets: ["Predictive Analytics", "Enterprise Data Warehousing", "Interactive Dashboards (Tableau/PowerBI)", "Data Governance"]
    },
    {
      title: "HR & Recruitment Consulting",
      description: "Building high-performance technical teams for rapid growth startups and enterprises.",
      icon: Users,
      premium: false,
      bullets: ["Tech Talent Sourcing", "Employer Branding", "Compensation Benchmarking", "Organizational Design"]
    },
    {
      title: "Financial & Risk Consulting",
      description: "Safeguarding assets, ensuring compliance, and optimizing capital allocation.",
      icon: PiggyBank,
      premium: false,
      bullets: ["Financial Modeling & Forecasting", "Enterprise Risk Management", "Regulatory Compliance", "Cost Reduction Strategies"]
    },
    {
      title: "Operations Consulting",
      description: "Streamlining processes and workflows for maximum operational efficiency.",
      icon: Briefcase,
      premium: false,
      bullets: ["Supply Chain Optimization", "Lean Six Sigma Implementations", "Process Automation", "Performance Management Systems"]
    },
    {
      title: "AI & Innovation Consulting",
      description: "Next-generation artificial intelligence solutions building the companies of tomorrow.",
      icon: Cpu,
      premium: true,
      bullets: ["Custom LLM Deployment & Integration", "Machine Learning Pipeline Creation", "Autonomous Agent Workflows", "AI Governance & Ethics Strategy"]
    }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Services Hero */}
      <section className="py-24 relative overflow-hidden bg-navy text-white text-center">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-bold text-xs tracking-widest uppercase mb-4 block italic">Our Expertise</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black mb-8 leading-tight">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Capabilities.</span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From foundational software engineering to cutting-edge artificial intelligence, we deliver solutions that define market leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    service.premium 
                      ? isOpen ? 'border-indigo-200 bg-white shadow-lg' : 'border-indigo-200 bg-white hover:border-primary'
                      : isOpen ? 'border-indigo-200 bg-white shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-slate-50 text-primary group-hover:bg-indigo-50'
                      }`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        {service.premium && (
                          <span className={`${isOpen ? 'text-accent' : 'text-primary'} font-bold text-[10px] tracking-widest uppercase mb-1 block`}>Premium Service</span>
                        )}
                        <h3 className={`font-headline text-xl md:text-2xl font-black transition-colors text-navy`}>
                          {service.title}
                        </h3>
                        {/* Show description preview when closed on larger screens if not premium, or just keep it simple */}
                        {!isOpen && (
                          <p className={`text-sm mt-1 line-clamp-1 hidden sm:block ${service.premium ? 'text-text-muted' : 'text-text-muted'}`}>
                            {service.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-slate-100' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                      <ChevronDown className="w-5 h-5 text-navy" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className={`p-6 md:p-8 pt-0 border-t border-slate-100 ml-[5rem] md:ml-[5.5rem]`}>
                          <p className="text-base md:text-lg mb-8 font-medium text-text-muted">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                            {service.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                                <span className="text-navy">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
