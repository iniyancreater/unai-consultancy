import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "CTO, Vertex Global",
      text: "UNAI Consultancy transformed our legacy platform into a modern powerhouse. Their attention to detail in technical architecture is unparalleled and has set a new standard for our internal engineering teams. The speed of deployment was genuinely impressive.",
      image: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Sarah Jenkins",
      role: "Product Head, PayStream",
      text: "The fluidity of their strategy combined with exact technical precision is exactly what we needed to scale our fintech startup quickly. They act as a true strategic partner, not just a vendor executing tasks.",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Miller",
      role: "CEO, CloudNine Logistics",
      text: "They don't just solve immediate problems; they anticipate structural bottlenecks before they happen. Their vision for digital transformation has saved us significant overhead while catapulting our operational velocity by 40%.",
      image: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        <div className="text-center mb-16 px-6 md:px-0">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block italic">Client Reviews</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-navy mb-4">Voice of the <span className="text-primary">Partners</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-8 md:pb-0 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-8 md:p-10 relative group hover:-translate-y-2 transition-all duration-500 min-w-[85vw] md:min-w-0 snap-center shrink-0 flex flex-col h-full bg-white border border-slate-100 shadow-xl shadow-navy/5"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-50 group-hover:text-primary/5 transition-colors" />
              
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              <p className="text-navy text-lg leading-relaxed mb-8 italic font-medium relative z-10 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden ring-2 ring-indigo-50 shadow-md shrink-0">
                  <img 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                    src={testimonial.image}
                  />
                </div>
                <div>
                  <p className="font-black text-navy text-sm tracking-wide">{testimonial.name}</p>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
