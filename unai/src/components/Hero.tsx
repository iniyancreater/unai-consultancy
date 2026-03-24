import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-tertiary-container text-on-tertiary-container rounded-full">Future Ready IT</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background mb-8 leading-[0.95]">
            Innovative <span className="text-primary italic">Digital</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            We build high-performance digital architectures that balance technical authority with innovative fluidity. Scaling your vision into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="signature-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-base shadow-[0px_24px_48px_rgba(69,59,237,0.15)] transition-transform duration-300"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-container-highest transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary-fixed/30 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 glass-card rounded-[2rem] p-4 shadow-2xl">
            <img 
              alt="Tech Architecture" 
              className="rounded-[1.5rem] w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW8VWrKVD1dTjBlRYRi-AeMOl3oFihPk93U5VSwb2i_kZH026i_5MhJ20zK_TBl3rLoLtmaUnyO5Z1E8tJRONkBmf795fPwGdNt1ti35yXv55FETSpfXP6YCxzcNchuUTZja0MzYy7MnxTBXY4W_6LB3AqsbkxFzhN9KWcm3pUycHBamefH0f8UXhgiLbzeBA05Bv5iGwB8AHQbeRwuQ2AgR274h53K_G7fpatXiQ-Z-ueMldGYMN7p2yayiuxOOlcFy1sLaL5Wg"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
