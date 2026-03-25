import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Target, Award } from "lucide-react";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Software", "Marketing", "AI", "Strategy"];

  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      category: "Software",
      challenge: "Legacy on-premise infrastructure causing 30% downtime and severe scaling bottlenecks.",
      solution: "Architected a highly-resilient microservices AWS environment with automated CI/CD pipelines.",
      result: "Achieved 99.99% uptime and reduced IT operational overhead by 40%."
    },
    {
      id: 2,
      title: "Autonomous Support Agent",
      category: "AI",
      challenge: "Support team overwhelmed by repetitive queries, leading to 24-hour response delays.",
      solution: "Deployed a custom LLM-based autonomous agent to handle semantic tier-1 support tickets securely.",
      result: "Instant resolution for 70% of tickets; human response time dropped to under 1 hour."
    },
    {
      id: 3,
      title: "Global Brand Elevation",
      category: "Marketing",
      challenge: "Stagnant organic growth and high customer acquisition cost in a saturated SaaS market.",
      solution: "Engineered a data-driven SEO strategy paired with agile performance marketing sprints.",
      result: "250% increase in qualified inbound leads and a 35% drop in CAC over 6 months."
    },
    {
      id: 4,
      title: "EMEA Market Entry",
      category: "Strategy",
      challenge: "Unclear product-market fit and regulatory hurdles stalling European expansion.",
      solution: "Conducted deep market analysis, redesigned the pricing model, and formulated a localization roadmap.",
      result: "Successful launch in 3 new countries, capturing 15% regional market share within year one."
    },
    {
      id: 5,
      title: "Next-Gen Fintech App",
      category: "Software",
      challenge: "Outdated mobile banking experience causing significant user churn to neo-bank competitors.",
      solution: "Built a scalable React Native application featuring biometric security and real-time ledger processing.",
      result: "App Store rating surged from 2.8 to 4.9, increasing user retention by 60%."
    },
    {
      id: 6,
      title: "Predictive Supply Chain",
      category: "AI",
      challenge: "Inefficient inventory management leading to routine stockouts and massive overstock waste.",
      solution: "Developed an AI-powered forecasting algorithm integrating real-time geopolitical and market data.",
      result: "Stockouts reduced by 85%, saving the enterprise $2.4M annually in warehousing costs."
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-surface-container-low border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Our Portfolio</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-navy mb-4">
              Proven <span className="text-accent underline decoration-indigo-200 underline-offset-8">Results.</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Explore how we've helped leading enterprises overcome complex challenges with precision engineering and strategic insight.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-navy text-white shadow-lg shadow-navy/20" 
                    : "bg-white text-text-muted hover:bg-slate-50 hover:text-navy border border-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Filterable Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="premium-card bg-white p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-500 cursor-pointer border border-slate-100 h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-primary text-xs font-black uppercase tracking-widest rounded-md">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-headline text-2xl font-bold text-navy mb-8 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-6 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-slate-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Challenge</h4>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{project.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-accent">Solution</h4>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-navy leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
