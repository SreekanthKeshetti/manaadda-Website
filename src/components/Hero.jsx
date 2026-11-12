import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  Play,
  X,
  Zap,
} from "lucide-react";

export const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* --- ELEGANT 1px AMBIENT SHIMMER LINES --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"
        />
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-0 left-[22%] w-[1px] h-full bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent"
        />
      </div>

      {/* Background Ambient Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/8 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-gold/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Live Store Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-warm-border shadow-sm backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-extrabold text-warm-dark tracking-wide uppercase">
                {/* Now Live on Google Play & App Store */}
                Now Live on App Store
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-warm-dark tracking-tight leading-[1.1]">
              India's Daily Labour, <br className="hidden sm:inline" />
              <span className="text-gradient-orange italic">Organized.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-warm-gray font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Transforming informal daily wage employment with{" "}
              <strong className="text-warm-dark font-bold">
                1-tap attendance
              </strong>
              {/* ,{" "}
              <strong className="text-warm-dark font-bold">
                Razorpay escrow safety
              </strong> */}
              , and direct{" "}
              <strong className="text-warm-dark font-bold">
                End-of-Day (EOD) UPI payouts
              </strong>{" "}
              to GPay & PhonePe.
            </p>

            {/* Telugu Core Tagline Callout (Positive, Solution-Focused) */}
            <div className="p-4 rounded-2xl bg-warm-bg2/80 border border-warm-border/80 inline-block text-left shadow-sm">
              <p className="text-sm font-bold text-brand-orange-dark flex items-center gap-2">
                <span>🔥</span> "మన పని. మన భద్రత. మన పైసా."
              </p>
              <p className="text-xs font-semibold text-warm-gray mt-0.5">
                (Our Work. Our Safety. Our Money.) — Direct Connections. 100%
                Transparent Pay.
              </p>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.manaadda.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-warm-dark text-white font-extrabold text-base hover:bg-black shadow-xl transition-all active:scale-95 group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.44 2.44 0 0 1-.61-1.686V3.5a2.44 2.44 0 0 1 .609-1.686zM15.206 13.414l2.583 2.583-11.411 6.544 8.828-9.127zM17.789 10.829l3.22 1.84a1.22 1.22 0 0 1 0 2.146l-3.22 1.84-2.28-2.28 2.28-2.286zM6.378 1.459l11.411 6.544-2.583 2.583-8.828-9.127z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-bold text-warm-gray-light">
                    Get it on
                  </div>
                  <div className="text-sm font-extrabold">Google Play</div>
                </div>
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white border-2 border-brand-orange text-brand-orange-dark font-extrabold text-sm hover:bg-brand-orange hover:text-white shadow-md transition-all active:scale-95 group"
              >
                <div className="w-7 h-7 rounded-full bg-brand-orange text-white group-hover:bg-white group-hover:text-brand-orange flex items-center justify-center transition-colors">
                  <Play size={14} fill="currentColor" />
                </div>
                <span>Watch 1-Min Demo</span>
              </button>

              <a
                href="https://labouradda-monorepo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange-dark font-bold text-sm transition-all"
              >
                <span>Launch Web App</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Elevated Pill-Shaped Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-warm-border/80 text-left">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-warm-border/60 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-warm-dark">
                  KYC Verified
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-warm-border/60 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-warm-dark">
                  One-tap Attendance
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-warm-border/60 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-warm-dark">
                  Direct EOD Pay
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-warm-border/60 shadow-xs">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-warm-dark">
                  Free Shift Insurance
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D App Live Interface Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center pt-8 lg:pt-0"
          >
            {/* Pure CSS Mobile Frame Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18.5] bg-warm-dark rounded-[44px] p-3 shadow-[0_25px_60px_-15px_rgba(28,25,23,0.4)] border-4 border-warm-dark/80">
              {/* Device Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-warm-dark rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-warm-dark-2 rounded-full" />
              </div>

              {/* Mobile Screen Output Viewport */}
              <div className="w-full h-full bg-warm-bg rounded-[36px] overflow-hidden flex flex-col pt-6 relative font-sans">
                {/* App Screen Header */}
                <div className="px-4 py-3 bg-white border-b border-warm-border flex items-center justify-between z-20 relative">
                  <div className="flex items-center gap-2">
                    <img
                      src="/pwa-192x192.png"
                      alt="Logo"
                      className="w-7 h-7 rounded-lg object-contain bg-white border border-warm-border p-0.5 shadow-sm"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-7 h-7 rounded-lg bg-brand-orange hidden items-center justify-center text-white font-bold text-xs shadow-sm">
                      M
                    </div>
                    <span className="font-display font-extrabold text-sm text-warm-dark">
                      ManaAdda
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
                    LIVE
                  </span>
                </div>

                {/* Simulated Screen Content Body */}
                <div className="p-4 space-y-3 flex-1 overflow-hidden bg-warm-bg">
                  {/* Worker Batch Card: Synchronized to ₹1,000/day */}
                  <div className="p-3.5 rounded-2xl bg-white border border-warm-border shadow-sm space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2 py-0.5 rounded bg-brand-orange/10 text-brand-orange font-extrabold text-[9px] uppercase">
                          BATCH #260826
                        </span>
                        <h4 className="font-extrabold text-xs text-warm-dark mt-1">
                          Masonry & Slab Work
                        </h4>
                      </div>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        ₹1,000/day
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-warm-gray">
                      <MapPin size={11} className="text-brand-orange" />
                      <span>Road No. 36, Jubilee Hills Adda</span>
                    </div>

                    <div className="pt-2 border-t border-warm-border flex justify-between items-center text-[10px] font-extrabold">
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 size={12} /> 5 / 5 Workers GPS Verified
                      </span>
                      <span className="text-warm-dark">9:00 AM</span>
                    </div>
                  </div>

                  {/* Escrow Status Card: Synchronized to ₹5,000 (5 Workers × ₹1,000) */}
                  <div className="p-3.5 rounded-2xl bg-warm-dark text-white space-y-2 shadow-md">
                    <div className="flex justify-between items-center text-[10px] text-warm-gray-light font-bold">
                      {/* <span>RAZORPAY ESCROW VAULT</span> */}
                      <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>{" "}
                        SECURED
                      </span>
                    </div>
                    <div className="text-lg font-black tracking-tight text-white flex items-center justify-between">
                      <span>₹5,000 Locked (5 Workers)</span>
                      <ShieldCheck size={18} className="text-emerald-400" />
                    </div>
                    <p className="text-[9px] text-warm-gray-light leading-tight">
                      Pre-funded shift wages released directly to worker UPI IDs
                      at 9:00 PM tonight.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Dynamic Badge: Synchronized to ₹1,000 Credited */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-16 sm:-left-28 md:-left-32 glass-panel p-3 sm:p-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 border border-white/90 z-30 whitespace-nowrap"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                  <IndianRupee size={16} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                    Direct UPI Payout
                  </div>
                  <div className="text-xs font-black text-warm-dark">
                    ₹1,000 Credited to GPay
                  </div>
                </div>
              </motion.div>

              {/* Floating Dynamic Badge 2: Free Insurance */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 -right-8 sm:-right-14 glass-panel p-3 sm:p-3.5 rounded-2xl shadow-2xl flex items-center gap-2.5 sm:gap-3 border border-white/90 z-30 whitespace-nowrap"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 font-bold shadow-md">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-extrabold text-brand-orange-dark uppercase tracking-wider">
                    Free Shift Protection
                  </div>
                  <div className="text-xs font-black text-warm-dark">
                    ₹2,00,000 Insurance Cover
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- POPUP VIDEO MODAL PLAYER --- */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-dark/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-warm-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors border border-white/20"
              >
                <X size={20} />
              </button>

              {/* Video Element Player with Fallback Preview */}
              <div className="aspect-video w-full bg-black flex items-center justify-center relative">
                <video
                  src="/demo.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "flex";
                    }
                  }}
                />
                <div className="hidden flex-col items-center justify-center p-8 text-center text-white space-y-3">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                    <Play size={32} />
                  </div>
                  <h3 className="font-display font-bold text-2xl">
                    Mana Adda App Demo
                  </h3>
                  <p className="text-xs text-warm-gray-light max-w-md">
                    Place your marketing video file at{" "}
                    <code className="text-brand-gold">public/demo.mp4</code> to
                    watch the live walkthrough!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
