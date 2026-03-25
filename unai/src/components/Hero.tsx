import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Activity, Cpu, Zap, BarChart3 } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  // Particle configuration
  const particles = Array.from({ length: 20 });

  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-navy">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0D123D] to-[#111850] -z-10"></div>
      
      {/* Subtle AI Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.3, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Next-Gen Consulting
          </motion.span>
          
          <h1 className="font-headline text-4xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05]">
            Empowering Businesses with <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">Next-Gen Solutions.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
            At UNAI Consultancy Services, we help startups, enterprises, and individuals accelerate growth through technology, strategy, and innovation.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
              className="bg-white/5 text-white border border-white/10 px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Book Free Consultation
            </motion.button>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex gap-4">
              {[Cpu, Zap, BarChart3].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent/60">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Accelerating growth through <span className="text-white font-bold">Innovation</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative lg:block hidden"
        >
          <div className="relative z-10 p-4">
            {/* The generated AI illustration */}
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              alt="AI Consulting Illustration" 
              className="w-full max-w-2xl mx-auto filter drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)]" 
              src="/ai_consulting_illustration_1774434282295.png"
            />
            
            {/* Floating Mini Status Card */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-2xl z-20 border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">AI Growth Index</p>
                  <p className="text-xl font-black text-white">+142% Velocity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
