import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // easeOutQuart easing function for a smooth deceleration
        const ease = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(ease * value));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="font-headline font-black text-5xl md:text-7xl text-white tracking-tight mb-2">
      {count}
      <span className="text-accent">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Industries Served" },
    { value: 95, suffix: "%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Dark background embellishments */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
