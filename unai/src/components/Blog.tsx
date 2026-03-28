import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, ChevronRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "The Future of AI in Enterprise Architecture: Moving Beyond the Hype",
    excerpt: "As generative models mature, the true value of AI lies not in standalone chatbots, but in deep structural integration with core enterprise systems. Discover how autonomous agents are reshaping middleware.",
    category: "Artificial Intelligence",
    date: "Mar 25, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
  };

  const standardPosts = [
    {
      title: "5 Strategies for Seamless Cloud Migration",
      excerpt: "Migrating to a cloud-native architecture doesn't have to disrupt operations. Here are five battle-tested strategies to ensure a zero-downtime transition.",
      category: "Cloud Computing",
      date: "Mar 22, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Maximizing ROI with Performance Marketing",
      excerpt: "In a saturated market, data-driven PPC and advanced attribution models are the only reliable way to scale customer acquisition cost-effectively.",
      category: "Marketing",
      date: "Mar 18, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "The Rise of Autonomous Customer Support",
      excerpt: "How Custom LLMs are reducing tier-1 support burdens and allowing human agents to focus on high-value, empathetic problem resolution.",
      category: "AI & Automation",
      date: "Mar 15, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Building Resilience: Cybersecurity in 2026",
      excerpt: "With cyber threats evolving rapidly, zero-trust architecture is no longer an option—it is a baseline requirement for enterprise survival.",
      category: "Security",
      date: "Mar 10, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Data Governance: The Analytics Foundation",
      excerpt: "You can't build predictive models on dirty data. Learn how to implement a robust data governance pipeline before scaling your BI efforts.",
      category: "Data Strategy",
      date: "Mar 05, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Revamping Legacy Systems: A CTO's Guide",
      excerpt: "The technical debt of monolithic applications is a silent killer. This guide outlines the Strangler Fig pattern for safe modernization.",
      category: "Software Engineering",
      date: "Feb 28, 2026",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const categories = ["Artificial Intelligence", "Cloud Computing", "Software Engineering", "Marketing", "Data Strategy", "Leadership"];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-navy text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-6">Our <span className="text-accent italic">Insights.</span></h1>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Expert perspectives on software engineering, artificial intelligence, and digital strategy shaping the future of business.
          </p>
        </motion.div>
      </section>

      {/* Featured Post (Top) */}
      <section className="py-16 px-6 md:px-8 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row min-h-[500px] border border-slate-100 cursor-pointer"
        >
          <div className="lg:w-3/5 relative overflow-hidden">
            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent lg:hidden"></div>
          </div>
          
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative bg-white lg:bg-transparent">
            {/* Absolute gradient overlay for desktop to blend image into text box if desired, but a solid split is cleaner */}
            <div className="mb-4 flex items-center gap-3 text-sm font-bold">
              <span className="text-accent uppercase tracking-widest bg-navy px-3 py-1 rounded-full">{featuredPost.category}</span>
            </div>
            
            <h2 className="font-headline text-3xl lg:text-4xl font-black text-navy mb-6 group-hover:text-primary transition-colors leading-tight">
              {featuredPost.title}
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-primary font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
              Read Article <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content: Post Grid & Sidebar */}
      <section className="pb-24 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Post Grid (3 Columns internally on large screens, spanning 3 macro columns) */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardPosts.map((post, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card bg-white flex flex-col group cursor-pointer border border-slate-100 h-full overflow-hidden hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-headline text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-6 border-t border-slate-100 mt-auto">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination / Load More */}
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 rounded-full bg-slate-100 text-navy font-bold hover:bg-slate-200 transition-colors border border-slate-200">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1 space-y-12">
            
            {/* Newsletter Signup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="premium-card bg-gradient-to-br from-navy to-indigo-950 p-8 text-white relative overflow-hidden shadow-2xl shadow-navy/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
              <Mail className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-headline text-2xl font-black mb-3">Stay Updated</h3>
              <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest insights in deep tech, software architecture, and AI.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors" />
                <button type="submit" className="w-full bg-accent text-navy font-bold rounded-lg px-4 py-3 text-sm hover:bg-white transition-colors">
                  Subscribe
                </button>
              </form>
            </motion.div>

            {/* Categories */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="font-headline text-xl font-black text-navy mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary block"></span> Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <a href="#" className="flex items-center justify-between group py-2 border-b border-slate-100 hover:border-primary transition-colors">
                      <span className="text-text-muted font-medium transition-colors group-hover:text-primary">{category}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent Posts */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="font-headline text-xl font-black text-navy mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent block"></span> Recent Posts
              </h3>
              <div className="space-y-6">
                {[standardPosts[0], standardPosts[1], standardPosts[2]].map((post, i) => (
                  <a href="#" key={i} className="flex gap-4 group">
                    <img src={post.image} alt={post.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div>
                      <h4 className="text-navy font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-slate-400 flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </aside>
        </div>
      </section>

    </div>
  );
}
