import React from "react";
import { motion } from "framer-motion";
import { Repeat, UserCheck, Briefcase, Zap, CheckCircle2 } from "lucide-react";

export const DualRole = () => {
  return (
    <section id="dual-role" className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange-dark text-xs font-extrabold uppercase tracking-wider">
              <Repeat size={14} /> Dual-Context Architecture
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
              One Worker. <br />
              <span className="text-gradient-orange italic">Two Hats.</span>
            </h2>

            <p className="text-base sm:text-lg text-warm-gray font-medium leading-relaxed">
              In India's daily construction industry, senior masons frequently
              hire helper crews for large sites. Mana Adda empowers workers to
              switch instantly between{" "}
              <strong className="text-warm-dark">Working Mode</strong> and{" "}
              <strong className="text-warm-dark">Hiring Mode</strong> in 1 tap
              without logging out.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-warm-border shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-warm-dark">
                    Working Mode (Laborer)
                  </h4>
                  <p className="text-[11px] text-warm-gray font-medium">
                    Browse nearby Adda jobs, accept shifts & collect EOD UPI
                    pay.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-warm-border shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-warm-dark">
                    Hiring Mode (Contractor)
                  </h4>
                  <p className="text-[11px] text-warm-gray font-medium">
                    Post worker batch requests, manage roster & lock escrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Graphical Switcher Representation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-warm-dark text-white space-y-6 shadow-2xl relative overflow-hidden border border-warm-dark-2">
              <div className="flex justify-between items-center border-b border-warm-dark-2 pb-4">
                <span className="text-xs font-extrabold text-warm-gray-light uppercase">
                  Active Profile Mode
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-orange text-white font-extrabold text-xs flex items-center gap-1">
                  <Zap size={12} /> 1-Tap Active
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between text-xs font-bold text-warm-gray-light">
                  <span>Current Mode:</span>
                  <span className="text-emerald-400 font-extrabold">
                    CONTRACTOR / HIRER
                  </span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange w-3/4 rounded-full" />
                </div>
              </div>

              <p className="text-xs text-warm-gray-light leading-relaxed">
                Single unified wallet balance and global star rating preserved
                seamlessly across both contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
