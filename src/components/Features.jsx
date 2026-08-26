import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, IndianRupee, Lock } from "lucide-react";

export const Features = () => {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // Tracks cursor position relative to the section for the spotlight effect
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className="py-24 bg-warm-dark text-white relative overflow-hidden bg-grid-pattern-dark cursor-default"
    >
      {/* --- INTERACTIVE MOUSE SPOTLIGHT (Linear/Vercel Aesthetic) --- */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(230, 81, 0, 0.15), rgba(249, 168, 37, 0.05) 40%, transparent 80%)`,
        }}
      />

      {/* --- ORGANIC AMBIENT BREATHING GRID PATCHES (When Stationary) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Breathing Tile 1 */}
        <motion.div
          animate={{ opacity: [0.05, 0.25, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[25%] w-72 h-72 rounded-full bg-brand-orange/15 blur-3xl"
        />
        {/* Soft Breathing Tile 2 */}
        <motion.div
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[20%] right-[25%] w-80 h-80 rounded-full bg-brand-gold/15 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-black text-brand-gold uppercase tracking-widest">
            ENGINEERED FOR SCALE
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Real-World Reliability.
          </h3>
          <p className="text-base sm:text-lg text-warm-gray-light font-medium">
            From low-bandwidth offline optimization to multi-channel socket
            notifications, Mana Adda is standard-setting fintech for blue-collar
            India.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: GPS Proof (Large 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl glass-panel-dark border border-white/10 hover:border-brand-orange/40 transition-colors space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange-light flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                1-Tap GPS Proof of Attendance
              </h4>
              <p className="text-sm text-warm-gray-light leading-relaxed max-w-xl">
                Eliminates attendance proxy and non-arrival disputes. Workers
                check in on arrival using high-accuracy native GPS location tags
                cross-referenced with the site address pin.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">
                LAT: 17.4325 | LNG: 78.4111
              </span>
              <span className="text-warm-gray-light">TIMESTAMP VERIFIED</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Razorpay Escrow Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl glass-panel-dark border border-white/10 hover:border-emerald-500/40 transition-colors space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Lock size={24} />
              </div>
              <h4 className="font-display text-xl font-bold text-white">
                Razorpay Escrow Vault
              </h4>
              <p className="text-xs text-warm-gray-light leading-relaxed">
                Contractors prepay batch wages into secure escrow before work
                begins, ensuring guaranteed end-of-day compensation.
              </p>
            </div>
            <div className="text-xs font-extrabold text-emerald-400">
              100% Guaranteed Disbursal
            </div>
          </motion.div>

          {/* Bento Card 3: Direct EOD UPI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl glass-panel-dark border border-white/10 hover:border-brand-gold/40 transition-colors space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <IndianRupee size={24} />
              </div>
              <h4 className="font-display text-xl font-bold text-white">
                Direct EOD UPI Payouts
              </h4>
              <p className="text-xs text-warm-gray-light leading-relaxed">
                Automated daily wage transfers straight to GPay, PhonePe, or
                Paytm UPI accounts with zero cash handling friction.
              </p>
            </div>
            <div className="text-xs font-extrabold text-brand-gold">
              Instant Evening Disbursal
            </div>
          </motion.div>

          {/* Bento Card 4: Free Shift Insurance (Large 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 sm:p-10 rounded-3xl glass-panel-dark border border-white/10 hover:border-blue-500/40 transition-colors space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Free Accidental Shift Insurance
              </h4>
              <p className="text-sm text-warm-gray-light leading-relaxed max-w-xl">
                Every verified morning check-in automatically activates full
                ₹2,00,000 accidental cover (Acko / Digit Partnership),
                safeguarding daily wage families against workplace hazards.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-blue-400">
              <span>✓ ₹2,00,000 Accidental Protection</span>
              <span>✓ Absorbed By Platform</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
