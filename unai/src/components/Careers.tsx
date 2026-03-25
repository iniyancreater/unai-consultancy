import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, DollarSign, X, Heart, Laptop, Coffee, BookOpen, Send, Clock } from "lucide-react";

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJob]);

  const benefits = [
    { title: "Remote-First Culture", description: "Work from anywhere in the world. We care about output, not office hours.", icon: Laptop },
    { title: "Comprehensive Health", description: "Top-tier medical, dental, and vision cover for you and your dependents.", icon: Heart },
    { title: "Learning Budget", description: "$2,000 annual stipend for courses, conferences, and books.", icon: BookOpen },
    { title: "Wellness Perks", description: "Subsidized gym memberships and mandatory mental health days.", icon: Coffee }
  ];

  const jobs: Job[] = [
    { id: 1, title: "Senior Full-Stack Developer", department: "Engineering", location: "Remote", type: "Full-time", salary: "$120k - $160k" },
    { id: 2, title: "AI & Machine Learning Engineer", department: "Data & AI", location: "New York / Remote", type: "Full-time", salary: "$140k - $180k" },
    { id: 3, title: "Growth Marketing Manager", department: "Marketing", location: "London / Remote", type: "Full-time", salary: "$90k - $120k" },
    { id: 4, title: "HR Business Partner", department: "People & Culture", location: "Remote", type: "Full-time", salary: "$85k - $110k" },
  ];

  return (
    <div className="pt-24 bg-surface min-h-screen">
      
      {/* Careers Hero */}
      <section className="py-20 bg-navy text-white text-center px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto relative z-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase mb-4 block italic">Careers at UNAI</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-6 leading-tight">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Future.</span>
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl leading-relaxed">
            Join a collective of elite engineers, strategists, and innovators to solve the world's most complex technical challenges.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-navy mb-6">World-Class <span className="text-primary italic">Benefits</span></h2>
            <p className="text-text-muted text-lg leading-relaxed">
              We invest heavily in our team. When you do your best work, you deserve the best support structure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                className="premium-card p-8 bg-slate-50 border border-slate-100 group hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-surface-container-low border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-navy mb-4">Open <span className="text-primary italic">Positions</span></h2>
              <p className="text-text-muted text-lg">Find your next defining career move.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 bg-indigo-50 text-primary font-bold text-sm rounded-full">All Roles</span>
              <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 font-medium text-sm rounded-full hover:border-primary hover:text-primary transition-colors cursor-pointer">Engineering</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                className="premium-card bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-md">{job.department}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-wider"><Clock className="w-3 h-3" /> {job.type}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-navy mb-4">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-text-muted font-medium">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-slate-400" /> {job.salary}</span>
                    <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-slate-400" /> Remote OK</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedJob(job)}
                  className="w-full md:w-auto mt-4 md:mt-0 px-8 py-3 bg-navy text-white font-bold rounded-xl hover:bg-primary transition-colors shadow-lg shadow-navy/10 flex-shrink-0"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Application Form</span>
                  <h3 className="font-headline text-2xl font-black text-navy">{selectedJob.title}</h3>
                  <p className="text-sm text-text-muted mt-2">{selectedJob.location} • {selectedJob.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable if needed) */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Application submitted!"); setSelectedJob(null); }}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">First Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Last Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Email Address</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">LinkedIn Profile</label>
                    <input type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="https://linkedin.com/in/janedoe" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Portfolio / GitHub</label>
                    <input type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="https://github.com/janedoe" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Cover Letter (Optional)</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us why you are a great fit for this role..."></textarea>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex justify-end gap-4">
                    <button type="button" onClick={() => setSelectedJob(null)} className="px-6 py-3 font-bold text-slate-500 hover:text-navy transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-navy transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
