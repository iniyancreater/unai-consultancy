import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Nexus Bank UI",
    description: "Modernizing global banking with a fluid micro-frontend architecture.",
    tag: "Fintech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_FQAgVog0gXYM7S8aesCwDdZwQ4ss8D_AhJj7QfyOWcx65Mw6kGeCUzC-YHe0PBfPJKI-WPkd_E_6nXimHDyMdP3wQKbJN6Fynmxfo_W2vcy7FHQUECWzo3jbYjo_Y7a-znoTQUfWxfiz5FPVyOMZs5zWHm89l1QuxYcZ8F5rIeP_VLQMGBk-kHHnGHepMyj-MjTDtU7MEXhOdA1c8EEj8BhvuUOInJ6nMdybmaEyniELqne6JRXFVy-wN5QhFB1WEJGlIPyQ8Q",
    mt: ""
  },
  {
    title: "Insight Engine",
    description: "Real-time predictive analytics platform for supply chain optimization.",
    tag: "Data Science",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vMtduUG1hMeMuujaS8wpufJeUtPLoU78S1v_aUEsXtsc8tuY84vRfLJ4bb1UfBFlYAVG-fb_jAT7oX5_tGu4DS1UVXiU4O66CVaHAaU87r2qGhvtRAJkjp8v7RyYop3bW7qkgFaqbbjcAUV0-T4EqzLx_Pr0zAmXOaDOMRtoagGhFWX-YXeI43sT6R3tIhJh1RPBrrZIAQumFTGLWn4X7vlrRxkTwv-fe3JTjnDnNl2EbeozSQASPunCwpFDfmYsOChUrMb_sQ",
    mt: "lg:mt-12"
  },
  {
    title: "Veloce Retail",
    description: "Omni-channel shopping experience with headless commerce integration.",
    tag: "E-Commerce",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVy9Im6gtHWutnx8zS8YqKCtXhjBn0NEGMTjVSN4u7nVKTF3lSOH0kHXNmv-yMBGEmBM7EwuGVwO2z5gr4sGkVQRgEQrewta5WEr1CnxT73Rd32XDS5feoQWhHVG7dzMJhBHpeGpabJY0YTr9hcPAcASJT4q8_iN0QP7G9rtrR7y-WtSDqxl_NueHGzkWsK9d_ZXdAlLADAq5tR8e3EvlPuwDwKFOS0uF_rdRlKioQ8-9fIeNsFVBMGXAZiUGh9frXNCrIon0UPg",
    mt: ""
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-surface-container" id="portfolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Precision Portfolios</h2>
            <p className="text-on-surface-variant">A curated selection of digital architectures we've brought to life for industry leaders.</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="font-bold text-primary flex items-center gap-2 group pb-2 border-b-2 border-primary/20 hover:border-primary transition-all"
          >
            View all projects
            <TrendingUp className="w-5 h-5" />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-surface-container-lowest ${project.mt}`}
            >
              <img 
                alt={project.title} 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" 
                src={project.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-on-tertiary-container bg-tertiary-container w-fit px-3 py-1 rounded-full mb-3">{project.tag}</span>
                <h4 className="text-2xl font-headline font-bold text-white mb-2">{project.title}</h4>
                <p className="text-white/80 text-sm mb-6">{project.description}</p>
                <button className="bg-white text-primary px-6 py-2.5 rounded-xl text-sm font-bold w-fit">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
