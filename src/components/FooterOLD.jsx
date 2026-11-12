import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-warm-dark text-white pt-16 pb-12 border-t border-warm-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info & Logo Image */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/pwa-192x192.png"
                alt="Mana Adda Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 border border-warm-dark-2 shadow-md"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="w-10 h-10 rounded-xl bg-brand-orange text-white font-black text-xl hidden items-center justify-center">
                M
              </div>
              <span className="font-display text-2xl font-extrabold">
                ManaAdda
              </span>
            </div>
            <p className="text-xs text-warm-gray-light leading-relaxed">
              Mana Pani. Mana Bhadratha. Mana Paisa. Digitizing daily wage labor
              infrastructure across India.
            </p>

            {/* Clickable NextMetaForce Parent Company Branding */}
            <div className="pt-2">
              <p className="text-xs text-warm-gray-light font-medium">
                Powered By
              </p>
              <a
                href="https://nextmetaforce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-gold hover:text-brand-gold-light hover:underline transition-colors mt-0.5"
              >
                <span>NextMetaForce Consulting LLP</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-warm-gray-light">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-warm-gray-light font-medium">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Safety Features
                </a>
              </li>
              <li>
                <a
                  href="#dual-role"
                  className="hover:text-white transition-colors"
                >
                  Dual-Role Context
                </a>
              </li>
              <li>
                <a href="#addas" className="hover:text-white transition-colors">
                  Hyderabad Addas
                </a>
              </li>
            </ul>
          </div>

          {/* Apps Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-warm-gray-light">
              Apps & Portals
            </h4>
            <ul className="space-y-2 text-xs text-warm-gray-light font-medium">
              <li>
                <a
                  href="https://labouradda-monorepo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Web App <ExternalLink size={10} />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.manaadda.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Play Store
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/app/mana-adda/id6788304417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Apple App Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-warm-gray-light">
              Support & HQ
            </h4>
            <div className="space-y-2 text-xs text-warm-gray-light font-medium">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-brand-orange" />
                <span>manaadda018@gmail.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="text-brand-orange shrink-0 mt-0.5"
                />
                <span>
                  NextMetaForce, Gowra Palladium, HITEC City, Hyderabad,
                  Telangana 500081
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copy */}
        <div className="pt-8 border-t border-warm-dark-2 flex flex-col sm:flex-row justify-between items-center text-xs text-warm-gray-light font-medium gap-4">
          <p>
            © 2026 NextMetaForce Consulting LLP. All rights reserved. Made in
            Hyderabad 🇮🇳
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy.html"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
