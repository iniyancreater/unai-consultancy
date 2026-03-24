import { motion } from "motion/react";
import { Cloud, Terminal, Shield, BarChart3, Smartphone } from "lucide-react";

const services = [
  {
    title: "Cloud Infrastructure",
    description: "High-availability architectures designed for global reach and zero-downtime scalability.",
    icon: Cloud,
    tags: ["AWS", "Azure"],
    colSpan: "md:col-span-3",
    gradient: true
  },
  {
    title: "Custom Software",
    description: "Bespoke enterprise applications tailored to your specific operational workflows and needs.",
    icon: Terminal,
    tags: ["Fullstack", "API First"],
    colSpan: "md:col-span-3",
    tertiary: true
  },
  {
    title: "Cyber Security",
    description: "Fortifying your perimeter with modern zero-trust protocols and monitoring.",
    icon: Shield,
    colSpan: "md:col-span-2"
  },
  {
    title: "Data Intelligence",
    description: "Converting raw metrics into actionable growth strategies through AI and ML.",
    icon: BarChart3,
    colSpan: "md:col-span-2"
  },
  {
    title: "Mobile First",
    description: "Native and cross-platform mobile experiences that users actually love.",
    icon: Smartphone,
    colSpan: "md:col-span-2"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Core Competencies</h2>
          <p className="text-on-surface-variant">Specialized services designed to scale with precision and fluidity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`${service.colSpan} bg-surface-container-lowest p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-lg ${
                service.gradient ? 'signature-gradient text-on-primary' : 
                service.tertiary ? 'bg-tertiary-fixed text-on-tertiary-container' : 
                'bg-primary-container/20 text-primary'
              }`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-6">{service.description}</p>
              {service.tags && (
                <div className="flex gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-tertiary-container text-[10px] font-bold uppercase rounded-full text-on-tertiary-container">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
