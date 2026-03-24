import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_24px_48px_rgba(69,59,237,0.08)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-black tracking-tighter text-slate-900">Digital Architect</div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="font-headline tracking-tight font-semibold text-sm text-primary border-b-2 border-primary pb-1" href="#">Home</a>
          <a className="font-headline tracking-tight font-semibold text-sm text-slate-600 hover:text-primary transition-colors duration-300" href="#about">About</a>
          <a className="font-headline tracking-tight font-semibold text-sm text-slate-600 hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="font-headline tracking-tight font-semibold text-sm text-slate-600 hover:text-primary transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="font-headline tracking-tight font-semibold text-sm text-slate-600 hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="signature-gradient text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm shadow-[0px_24px_48px_rgba(69,59,237,0.08)]"
        >
          Get Started
        </motion.button>
      </nav>
    </header>
  );
}
