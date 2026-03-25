import { motion } from "motion/react";
import { Rocket, HeartPulse, Landmark, ShoppingCart, BookOpen, Building, Factory, Server } from "lucide-react";

const industries = [
  {
    title: "Startups",
    description: "Accelerating growth with scalable MVPs and agile architecture.",
    icon: Rocket
  },
  {
    title: "Healthcare",
    description: "Secure, compliant digital health and patient management solutions.",
    icon: HeartPulse
  },
  {
    title: "Finance",
    description: "Robust fintech platforms with enterprise-grade security.",
    icon: Landmark
  },
  {
    title: "E-commerce",
    description: "High-conversion storefronts and automated supply chains.",
    icon: ShoppingCart
  },
  {
    title: "Education",
    description: "Interactive learning management systems and edtech platforms.",
    icon: BookOpen
  },
  {
    title: "Real Estate",
    description: "Proptech solutions for property management and virtual tours.",
    icon: Building
  },
  {
    title: "Manufacturing",
    description: "Industry 4.0 automation and predictive maintenance.",
    icon: Factory
  },
  {
    title: "IT & SaaS",
    description: "Cloud-native infrastructures and multi-tenant architectures.",
    icon: Server
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Industries Served</span>
          <h2 className="font-headline text-3xl md:text-5xl font-black text-navy mb-6">
            Transforming <span className="text-accent underline decoration-indigo-200 underline-offset-8">Every Sector.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            We deliver domain-specific technical expertise tailored to the unique regulatory, operational, and market challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group premium-card p-8 bg-white hover:bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-200 transition-colors duration-300">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
