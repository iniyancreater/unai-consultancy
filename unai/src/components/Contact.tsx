import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-16"
          >
            <h2 className="font-headline text-4xl font-bold mb-4">Start Your <span className="text-primary italic">Build</span></h2>
            <p className="text-on-surface-variant mb-10">Have a project in mind? Our architects are ready to help you blueprint your future.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Name</label>
                  <input 
                    className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
                  <input 
                    className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                    placeholder="john@company.com" 
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Message</label>
                <textarea 
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:bg-surface-container-highest focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                  placeholder="Describe your project vision..." 
                  rows={4}
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full signature-gradient text-on-primary py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-slate-900 overflow-hidden min-h-[400px]"
          >
            <div className="absolute inset-0 opacity-50">
              <img 
                alt="Office Location" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX2KS4dpKe9ThWJA0hyXiHI0YTFOM_pGVxHxiUY54P5ryfVnvldC0iXW5k314H-C5QspaMHrstCQn0LanrYmAf2KpXQjfLYoJNm_G0zRLECsofUbFKNRnYzyH1arw-F8BuInJ95UNy-G1mYhc71KrvbuJ2NP3u_ScLr3kCADuggYg-YiZUKFWIcWxJ4_aYFDpb9ET2HsBToxTwMWV_hM8ZSIsPXUUSGqEjlVF5gR7_dHloKyQni_JD-55iTOCrz06CtqYZaAouag"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
            <div className="relative z-10 p-12 md:p-16 h-full flex flex-col justify-end text-white">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Headquarters</h4>
                <p className="text-white/70">101 Architecture Way<br/>San Francisco, CA 94105</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-tertiary-fixed" />
                  <span>hello@digitalarchitect.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-tertiary-fixed" />
                  <span>+1 (555) 012-3456</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
