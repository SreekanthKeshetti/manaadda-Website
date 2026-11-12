import React from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Problem = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="problem" ref={ref} className="py-24 bg-warm-bg2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">
            THE UNORGANIZED SECTOR REINVENTED
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            Why Traditional Labour Addas Are Broken.
          </h3>
          <p className="text-base sm:text-lg text-warm-gray font-medium">
            For decades, millions of informal daily wage workers suffered from
            exploitation, payment uncertainties, and zero safety nets. Mana Adda
            changes everything.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: The Old Way (Red / Dark Theme) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-warm-dark text-white space-y-6 flex flex-col justify-between shadow-xl border border-warm-dark-2 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-extrabold uppercase tracking-wider">
                <AlertTriangle size={14} /> Traditional Labour Addas
              </div>

              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                The Exploitative Street Stand
              </h4>

              <ul className="space-y-4 text-sm font-medium text-warm-gray-light">
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">
                      5:00 AM Street Stand Waiting:
                    </strong>{" "}
                    Standing in extreme heat/rain with zero guarantee of finding
                    work.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Wage Exploitation:</strong>{" "}
                    Middlemen cut 20% to 30% from the worker's hard-earned daily
                    wage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">
                      Cash Disputes & Non-Payment:
                    </strong>{" "}
                    Contractors refusing evening payment with no legal or
                    digital recourse.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">
                      Zero Accidental Cover:
                    </strong>{" "}
                    On-site injuries leave daily wage families completely
                    bankrupt.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-warm-dark-2 text-xs font-bold text-red-400">
              ❌ High Vulnerability • No Verification • Financial Risk
            </div>
          </motion.div>

          {/* Card 2: The Mana Adda Way (White / Orange Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-orange/30 text-warm-dark space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange-dark text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck size={14} /> The Mana Adda Digital Safety Net
              </div>

              <h4 className="font-display text-2xl sm:text-3xl font-bold text-warm-dark">
                Protected, Verified & Direct
              </h4>

              <ul className="space-y-4 text-sm font-medium text-warm-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-warm-dark">
                      Book Shifts From Home:
                    </strong>{" "}
                    Accept jobs real-time with verified wages before leaving
                    your house.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-warm-dark">
                      0% Middleman Exploitation:
                    </strong>{" "}
                    Direct contractor-to-worker connection with complete
                    transparent ledger.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-warm-dark">
                      Razorpay Escrow Vault:
                    </strong>{" "}
                    Contractor funds locked before shift starts; direct EOD UPI
                    payout.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-warm-dark">
                      Free Accidental Shift Insurance:
                    </strong>{" "}
                    Insurance coverage on every active GPS check-in.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-warm-border text-xs font-extrabold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 size={16} /> 100% Digital Security • Direct UPI
              Payments • Verified Identity
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
