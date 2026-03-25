import { motion } from "motion/react";
import { ShieldCheck, Lightbulb, Trophy, Users, Linkedin, Target, Eye, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    { title: "Integrity", description: "Doing the right thing, always, even when no one is watching. Transparency is our default.", icon: ShieldCheck },
    { title: "Innovation", description: "Continuously pushing the boundaries of technology to build next-generation solutions.", icon: Lightbulb },
    { title: "Excellence", description: "Delivering uncompromising quality and architectural superiority in every project.", icon: Trophy },
    { title: "Client Success", description: "We measure our success entirely by the growth and success of the partners we serve.", icon: Users }
  ];

  const team = [
    { name: "Alex Mercer", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", linkedin: "#" },
    { name: "Sarah Chen", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", linkedin: "#" },
    { name: "David Reynolds", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", linkedin: "#" },
    { name: "Emily Watson", role: "Lead Architect", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", linkedin: "#" }
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* 1. Who We Are / Hero */}
      <section className="py-24 relative overflow-hidden bg-navy text-white text-center">
        <div className="absolute top-0 left-1/2 w-full h-full max-w-4xl bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-bold text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black mb-8 leading-tight">
              Architects of the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Digital Future.</span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              UNAI Consultancy Services is a premier technology consulting firm specializing in scalable digital transformation, AI integration, and enterprise-grade software architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-headline text-4xl font-black text-navy mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Founded with a rebellious spirit and a lofty objective, UNAI Consultancy Services began as a small division of UNAI TECH. Our goal was simple: to offer mid-market and enterprise businesses the high-caliber engineering and strategic consulting usually reserved for Fortune 500 companies.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Today, we have grown into a global collective of engineers, designers, and strategists. We've replaced legacy systems with modern cloud infrastructures, automated complex workflows with AI, and helped countless startups scale elegantly. Our story is continuously written by the success of our partners.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="premium-card p-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Collaboration" className="rounded-xl w-full h-[400px] object-cover grayscale-[0.2]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Vision and Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="premium-card p-12 bg-white flex flex-col items-start group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-3xl font-black text-navy mb-4">Our Vision</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                To be the global standard in technology consulting, where visionary business strategy and flawless engineering converge to solve the world's most complex challenges.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="premium-card p-12 bg-navy text-white flex flex-col items-start group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-indigo-100 text-lg leading-relaxed">
                To empower organizations with robust, scalable, and intelligent digital foundations that accelerate their growth and secure their competitive advantage in a rapidly evolving market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-black text-navy mb-4">Core Values</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">The unshakeable principles that guide every line of code we write and every strategy we formulate.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="font-headline font-bold text-xl text-navy mb-3">{val.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface-container-low border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Leadership</span>
              <h2 className="font-headline text-4xl font-black text-navy mb-4">Meet Our Team</h2>
              <p className="text-text-muted text-lg">The brilliant minds driving innovation, engineering excellence, and client success at UNAI.</p>
            </div>
            <a href="/careers" className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 mt-6 md:mt-0 hover:text-navy transition-colors">
              Join the team <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="premium-card p-3 mb-6 relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover rounded-xl filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <a href={member.linkedin} className="absolute bottom-6 right-6 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-white" aria-label={`LinkedIn for ${member.name}`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-navy">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
