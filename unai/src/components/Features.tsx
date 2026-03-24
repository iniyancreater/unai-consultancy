import { motion } from "motion/react";
import { CheckCircle2, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Quality Without Compromise",
    description: "We adhere to the highest coding standards and architectural patterns, ensuring long-term maintainability.",
    icon: CheckCircle2
  },
  {
    title: "Agile & Fluid Delivery",
    description: "Our \"Precision Fluidity\" approach allows us to pivot rapidly without losing architectural integrity.",
    icon: Zap
  },
  {
    title: "Strategic Partnership",
    description: "We act as an extension of your CTO office, providing strategic roadmap guidance at every step.",
    icon: Users
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-4xl font-bold mb-8">Why the Industry Trusts Our <span className="text-primary italic">Architecture</span>.</h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
                    <p className="text-on-surface-variant text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-surface-container-low rounded-[3rem] p-12"
          >
            <div className="absolute inset-0 signature-gradient opacity-5 rounded-[3rem]"></div>
            <img 
              alt="Quality Work" 
              className="rounded-2xl shadow-2xl relative z-10 w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXJKVTbyiA_ig2ufZkECGNuouyWH8fyUdvDQpB7UuTX5z2k6UoiSkf26M03xOfDdwfyVBuJlfRoSxIhgvssgyfx9B_Nhd-EFmRq1zaVr0XvQwpmCyvyg1OmuaOqdmQsO-hqbNpyaWmN9OzLRtxvwmCZ49dgC3ej8McYg2Kh9yya4C5bBIhBba_d5z5MicME_PBXl8a4Fiu6lWOBwK5ojfbzK4Y5PJ_a_Eik90s1TjwszvICu_5z7RYTDa9k4gm0jkgShELSQLqGw"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
