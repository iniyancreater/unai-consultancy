import { Globe, Share2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="text-xl font-bold text-slate-900 mb-4 block">Digital Architect</span>
          <p className="text-slate-500 font-body text-sm leading-relaxed max-w-xs">
            Crafting premium digital infrastructures with precision and strategic fluidity.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Services</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Cloud Architecture</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Software Design</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Data Strategy</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Cyber Defense</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Company</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">About Us</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Our Process</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Portfolio</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-6">Connect</h5>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <Globe className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 font-body text-sm leading-relaxed">© 2024 Digital Architect. Precision Fluidity in Tech.</p>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-primary text-sm" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-primary text-sm" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-primary text-sm" href="#">Cookie Policy</a>
          <a className="text-slate-500 hover:text-primary text-sm" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
