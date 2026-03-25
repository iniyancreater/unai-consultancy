import { motion } from "motion/react";

export default function AboutSummary() {
  return (
    <section className="py-24 bg-background border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-6 block italic">Our Identity</span>
          <h2 className="font-headline text-2xl md:text-4xl font-black text-navy leading-relaxed mb-8">
            UNAI Consultancy Services, a division of <span className="text-primary underline decoration-indigo-200 underline-offset-8">UNAI TECH</span>, is a modern consulting firm delivering cutting-edge solutions in technology, business strategy, and digital transformation.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
