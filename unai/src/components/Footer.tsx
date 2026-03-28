import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Ambient glowing background accent */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/unai-logo.png" alt="Unai Consultancy" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-indigo-100/80 text-sm leading-relaxed mb-8 pr-4">
              Architects of the Digital Future. Delivering scalable engineering and strategic consulting solutions to global enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/unai-tech-2177072a0" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/UnaiTech74505" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/unai.tech?igsh=MXZycG91ZzMzeGw0ZQ==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-indigo-100/80">
              <li><Link to="/" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Services</Link></li>
              <li><Link to="/careers" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white tracking-wide">Our Expertise</h4>
            <ul className="space-y-4 text-sm font-medium text-indigo-100/80">
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">AI & Innovation</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Business Strategy</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Data & Analytics</Link></li>
              <li><Link to="/services" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">HR Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white tracking-wide">Contact Intelligence</h4>
            <ul className="space-y-5 text-sm font-medium text-indigo-100/80">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:contact@unaiconsultancy.com" className="hover:text-white transition-colors">contact@unaiconsultancy.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:+919043900697" className="hover:text-white transition-colors">+91 90439 00697</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  UNAI Tech Tower<br />
                  Taramani, Chennai<br />
                  Tamil Nadu 600113, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-indigo-100/50 font-medium">
          <p>&copy; {currentYear} UNAI Consultancy Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
