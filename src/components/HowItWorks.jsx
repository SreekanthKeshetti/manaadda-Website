import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  MapPin,
  ShieldCheck,
  IndianRupee,
  Layers,
  CheckCircle2,
  ArrowRight,
  Building2,
  Smartphone,
  Lock,
} from "lucide-react";

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("workers");

  const workflows = {
    workers: [
      {
        step: "01",
        title: "KYC Verification",
        desc: "Upload Aadhaar, PAN, and live selfie to unlock your verified worker profile.",
      },
      {
        step: "02",
        title: "Select Home Adda",
        desc: "Choose your local Adda (e.g., Jubilee Hills, Gachibowli) to receive instant job broadcasts.",
      },
      {
        step: "03",
        title: "1-Tap Book & GPS Check-In",
        desc: "Accept jobs real-time. Mark morning arrival using 1-tap tamper-proof GPS verification.",
      },
      {
        step: "04",
        title: "Direct EOD UPI Payout",
        desc: "Shift completes, funds release directly from Escrow to your GPay / PhonePe UPI handle.",
      },
    ],
    contractors: [
      {
        step: "01",
        title: "Create Batch Requirement",
        desc: "Define work type, worker count, site location pin, and daily wage in under 60 seconds.",
      },
      {
        step: "02",
        title: "Lock Escrow Protection",
        desc: "Secure batch payment via Razorpay. Funds remain safely locked in Admin Escrow.",
      },
      {
        step: "03",
        title: "Monitor Real-Time Attendance",
        desc: "Track worker check-in times and live site arrival proof directly on your dashboard.",
      },
      {
        step: "04",
        title: "Verify & Settle Shift",
        desc: "Approve attendance at end of day to trigger automated instant worker disbursals.",
      },
    ],
    admin: [
      {
        step: "01",
        title: "Identity Audit HQ",
        desc: "Automated & manual verification of worker KYC files and Aadhaar integrity.",
      },
      {
        step: "02",
        title: "Escrow Vault Custody",
        desc: "Holding batch capital securely until contractor approval or dispute review.",
      },
      {
        step: "03",
        title: "Dispute Resolution Engine",
        desc: "Investigation of any site non-payments or attendance claims within 24 hours.",
      },
      {
        step: "04",
        title: "EOD Settlement Queue",
        desc: "Automated end-of-day batch processing and insurance fund allocations.",
      },
    ],
  };

  return (
    <section id="how-it-works" className="py-24 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">
            TRANSPARENT ARCHITECTURE
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            How Mana Adda Operates.
          </h3>
          <p className="text-base sm:text-lg text-warm-gray font-medium">
            Seamless end-to-end synchronization between contractors, daily wage
            workers, and central administrative escrow.
          </p>
        </div>

        {/* Interactive Role Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-warm-dark text-white shadow-xl">
            <button
              onClick={() => setActiveTab("workers")}
              className={`px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
                activeTab === "workers"
                  ? "bg-brand-orange text-white shadow-md"
                  : "text-warm-gray-light hover:text-white"
              }`}
            >
              For Daily Workers
            </button>
            <button
              onClick={() => setActiveTab("contractors")}
              className={`px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
                activeTab === "contractors"
                  ? "bg-brand-orange text-white shadow-md"
                  : "text-warm-gray-light hover:text-white"
              }`}
            >
              For Contractors
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-6 py-3 rounded-xl font-extrabold text-sm transition-all ${
                activeTab === "admin"
                  ? "bg-brand-orange text-white shadow-md"
                  : "text-warm-gray-light hover:text-white"
              }`}
            >
              Admin Escrow HQ
            </button>
          </div>
        </div>

        {/* Animated Workflow Step Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workflows[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-warm-border shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-3xl font-black text-brand-orange">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-warm-bg2 flex items-center justify-center text-warm-dark font-bold text-xs group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      ✓
                    </div>
                  </div>
                  <h4 className="font-extrabold text-lg text-warm-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-warm-gray font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-warm-border text-[10px] font-extrabold text-warm-gray uppercase tracking-wider">
                  Verified Step
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
