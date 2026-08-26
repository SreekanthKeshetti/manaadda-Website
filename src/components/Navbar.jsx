import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Download } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Dual-Role System", href: "#dual-role" },
    { name: "For Contractors", href: "#contractors" },
    { name: "Hyderabad Addas", href: "#addas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-bg/90 backdrop-blur-xl border-b border-warm-border shadow-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Image Icon */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/pwa-192x192.png"
            alt="Mana Adda Logo"
            className="w-10 h-10 rounded-xl object-contain shadow-lg shadow-brand-orange/20 group-hover:scale-105 transition-transform bg-white p-0.5 border border-warm-border"
            onError={(e) => {
              // Fallback to initial icon if image is missing
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark hidden items-center justify-center text-white font-black text-xl shadow-lg shadow-brand-orange/30">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tight text-warm-dark flex items-center gap-1">
              Mana <span className="text-brand-orange">Adda</span>
            </span>
            <span className="text-[10px] font-bold text-warm-gray tracking-wider uppercase -mt-1">
              మన పని. మన భద్రత. మన పైసా.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-warm-dark/80 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://labouradda-monorepo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-warm-dark bg-warm-bg2 border border-warm-border hover:border-brand-orange/40 transition-all shadow-sm hover:shadow"
          >
            <span>Open Web App</span>
            <ExternalLink size={14} className="text-brand-orange" />
          </a>

          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-dark hover:from-brand-orange-dark hover:to-brand-orange shadow-md shadow-brand-orange/25 hover:shadow-lg transition-all active:scale-95"
          >
            <Download size={16} />
            <span>Download App</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-warm-bg2 border border-warm-border text-warm-dark hover:bg-warm-border/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-warm-bg/95 backdrop-blur-2xl border-b border-warm-border px-4 pt-4 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-warm-dark hover:text-brand-orange transition-colors py-2 border-b border-warm-border/50"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="https://labouradda-monorepo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-warm-dark bg-warm-bg2 border border-warm-border"
                >
                  <span>Open Web App</span>
                  <ExternalLink size={16} className="text-brand-orange" />
                </a>

                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-brand-orange to-brand-orange-dark shadow-md shadow-brand-orange/20"
                >
                  <Download size={18} />
                  <span>Download Mana Adda Mobile App</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
