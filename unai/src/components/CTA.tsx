import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-indigo-700 to-navy relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Let's build something <br className="hidden md:block" />
            <span className="text-accent italic underline decoration-white/20 underline-offset-8">extraordinary</span> together.
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Schedule a free 30-minute consultation with our experts today.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-white text-navy px-10 py-5 rounded-xl font-black text-base uppercase tracking-widest shadow-2xl shadow-navy/50 hover:shadow-navy/70 transition-all inline-flex items-center gap-3 group"
          >
            Schedule Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
