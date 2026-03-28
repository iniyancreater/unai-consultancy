import { motion } from "motion/react";
import { CheckCircle2, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Quantum Accuracy",
    description: "We adhere to the highest architectural standards, ensuring long-term technical debt reduction and maintainability.",
    icon: CheckCircle2
  },
  {
    title: "Precision Fluidity",
    description: "Our unique approach allows enterprises to pivot rapidly without compromising on security or core integrity.",
    icon: Zap
  },
  {
    title: "Strategic Architecture",
    description: "Acting as an extension of your leadership, we architect roadmaps that translate vision into resilient technology.",
    icon: Users
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Our Advantage</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-navy mb-10 leading-tight">
              Why Global Leaders Trust Our <span className="text-primary italic underline decoration-indigo-200 underline-offset-8">Strategy</span>.
            </h2>
            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">{feature.title}</h5>
                    <p className="text-text-muted text-base leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative lg:block hidden"
          >
            <div className="premium-card p-4 overflow-hidden group">
              <img 
                alt="Engineering Excellence" 
                className="rounded-xl w-full h-[600px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-2xl border-white/10">
                <p className="text-black font-bold text-lg mb-2">Architectural Excellence</p>
                <p className="text-black text-sm italic">"Delivering solutions that don't just solve problems, but define new benchmarks."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
