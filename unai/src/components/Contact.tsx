import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, Clock, Building } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. Our team will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 bg-surface min-h-screen">

      {/* Contact Hero */}
      <section className="py-20 bg-navy text-white text-center px-6 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto relative z-10">
          <span className="text-accent font-bold text-xs tracking-widest uppercase mb-4 block italic">Get in Touch</span>
          <h1 className="font-headline text-5xl md:text-7xl font-black mb-6 leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Connect.</span>
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl leading-relaxed">
            Ready to scale your enterprise? Contact our strategic team today to discuss tailored consulting solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Content Area */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Contact Intelligence & Map */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-headline text-3xl font-black text-navy mb-8">Contact Information</h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Email Us</h4>
                  <p className="text-text-muted mb-1">For general inquiries and partnerships.</p>
                  <a href="mailto:contact@unaiconsultancy.com" className="text-primary font-bold hover:underline">contact@unaiconsultancy.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Call Us</h4>
                  <p className="text-text-muted mb-1">Mon-Fri from 9am to 6pm IST.</p>
                  <a href="tel:+914400000000" className="text-primary font-bold hover:underline">+91 9043900697</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Global Headquarters</h4>
                  <p className="text-text-muted leading-relaxed">
                    UNAI Tech Tower<br />
                    OMR IT Expressway, Taramani<br />
                    Chennai, Tamil Nadu 600113<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="premium-card bg-slate-100 p-2 overflow-hidden h-72 border border-slate-200">
              <iframe
                title="UNAI Consultancy Chennai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.419080536449!2d80.24355591529061!3d12.981882890850734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526786a3b2cb6b%3A0x8660eecafebc5e62!2sTaramani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625225028442!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="premium-card bg-white p-8 md:p-12 border border-slate-100 shadow-xl shadow-navy/5">
              <h3 className="font-headline text-2xl font-black text-navy mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Full Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-navy"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Email Address</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-navy"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-navy"
                      placeholder="+91 0000 000000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Service of Interest</label>
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-navy appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="software">Software Development</option>
                      <option value="ai">AI & Innovation Consulting</option>
                      <option value="strategy">Business Strategy</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="hr">HR & Recruitment</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy">Your Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-navy"
                    placeholder="How can we help your business accelerate?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-navy text-white font-bold rounded-xl px-4 py-4 hover:bg-primary transition-colors flex justify-center items-center gap-2 shadow-xl shadow-navy/20"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
