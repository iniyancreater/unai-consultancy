import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/5 shadow-premium">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link to="/" className="flex items-center">
          <img src="/unai-logo.png" alt="Unai Consultancy" className="h-9 w-auto object-contain brightness-0 invert" />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path} 
              className={({ isActive }) => 
                `font-headline tracking-wide font-medium text-xs uppercase transition-all duration-300 ${isActive ? 'text-accent border-b border-accent pb-1' : 'text-white/70 hover:text-white'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>



        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-navy border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6 p-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `font-headline tracking-wide font-bold text-xl uppercase transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white/70'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
