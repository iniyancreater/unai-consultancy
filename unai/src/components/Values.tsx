import { motion } from "motion/react";
import { Building2, Cpu, BarChart3, Globe2, Lightbulb } from "lucide-react";

const values = [
  {
    title: "Startup to Enterprise Solutions",
    description: "Scalable architectures tailored for every stage of your business growth.",
    icon: Building2
  },
  {
    title: "AI-Powered Approach",
    description: "Integrating intelligent automation and machine learning into core operations.",
    icon: Cpu
  },
  {
    title: "Data-Driven Strategies",
    description: "Making informed decisions backed by robust analytics and insight generation.",
    icon: BarChart3
  },
  {
    title: "Global Standards Execution",
    description: "Delivering world-class code quality, security, and compliance.",
    icon: Globe2
  },
  {
    title: "Innovation First Mindset",
    description: "Constantly pushing the boundaries of what's technically possible.",
    icon: Lightbulb
  }
];

export default function Values() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-50/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Our Approach</span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-navy mb-6">
            Built for <span className="text-accent">Tomorrow.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 max-w-sm group"
            >
              <div className="shrink-0 w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200 transition-all duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
