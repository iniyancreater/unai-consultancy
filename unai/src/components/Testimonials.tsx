import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CTO, Vertex Global",
    text: "Digital Architect transformed our legacy platform into a modern powerhouse. Their attention to detail in the architecture is unparalleled.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5HjWN4Ivv9CRLNUfOPaBmv2Lvy8E4ak4B68rATf8zMRcee-QmQ4CSCsBZJX7QFQ1nc76ghpj5I5z1hXMiKosPzHGKubip4ysmCa6Kt0r-fbfcWcDfEGTo_p_rHuZNS7hGE0qRLQ2L7RltVIGQj33xkCRUiQA8X-ZzBoOM8n63mdgKpI-vwEFr-ihJeknoKXezbYZ2FsM0pt_hyve76ZuEW0jZGbFrbt6Fbad3oohQ1HNkhxS6zqVenLON0Z0isxnKfaxj8j1RmQ"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Head, PayStream",
    text: "The fluidity of their process combined with technical precision is exactly what we needed to scale our fintech startup.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZiDH3Pucf6FY08L5uPfmau4vb890L0NbiuLfcsffs73Jad0xVH1Fb-P7rIJEmUzSk_Og_HbfCrirn3kkdTe7NX8UyK7poYI68fuzcXM_y3zQhrdZBtVMpxWZflCHbKRAdFVlSxKFCjxfrRJzKYHnizDGb8rxlyLhMKyjK8S78rbXwp-gE9Qz0HU_GXHO-VY71Vh57Qs8VF0aUSfDHEGVPBt9xv1hN_WTtQwq2KR-bvUSL610aS83UhsVhyljO2e_xf0rfR8t4Xg"
  },
  {
    name: "David Miller",
    role: "CEO, CloudNine Logistics",
    text: "They don't just solve problems; they anticipate them. Their cloud infrastructure has saved us thousands in overhead.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS0MCNBmf41jMleoV1VdLVdOupiJSXr-u5dv_P0RDYYTYv1dDriVREkH9AWU0yi9OBdmk3qnmMW0qeY0lp3vt-PpCV0O_hkja0usJDQq3nA4qQCUnp4igSx5ev5Bhg7qDKWPmMgbrlp82wRHpzOmBZyQ54O8wagiD36kcOUDbosNyTZrtXUdxpjAhTsAPXD4FJGWl_rJRZSW3cAbymOqAyOgY8oQZghdKfo7EZkeE22GIM0ITD08IKAOIJ0v5Vi--P-QHkZUMKLA"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Voice of the Partners</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary" />
                ))}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                    src={testimonial.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-on-surface-variant">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
