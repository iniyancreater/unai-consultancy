import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square bg-surface-container-highest rounded-[3rem] overflow-hidden">
              <img 
                alt="Team Collaboration" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZeJyYdzaQ3_ROcDkXDMEw_UbnbEifFb8t_jIW3qqB5MzDmbyaL8R81f3a4LogQAq9t7C-54AWiBlQIq4SSVKjfLg5IhMPOLyNIuoI-JYeVLnfuufHTYMrfPjtn_O3HW-uXeGlto5M65v2UwpAW7Ab2lHPsGPbQAQ-c9Sh4-T38BCglVmg9YeYT76Y0WNfpGsPeTps9ptb-YI3_6Hw288DeWwSpD6Z7m84bJrJKnM6e4qn0FgKWXaFLfVcX0tFKx-YaszjleWWg"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-primary font-headline text-4xl font-bold mb-1">12+</p>
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Years of Precision</p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">Architecting the <span className="text-primary">Next Era</span> of Tech.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              At Digital Architect, we don't just write code. We design ecosystems. Our approach combines rigorous engineering principles with an editorial eye for user experience, ensuring your business stands out in a crowded digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-headline text-2xl font-bold text-on-background">500+</h4>
                <p className="text-sm text-on-surface-variant">Global Projects Delivered</p>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-on-background">98%</h4>
                <p className="text-sm text-on-surface-variant">Client Retention Rate</p>
              </div>
            </div>
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-primary font-bold flex items-center gap-2 group"
            >
              Learn more about our mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
