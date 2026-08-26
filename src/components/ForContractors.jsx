import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Clock,
} from "lucide-react";

export const ForContractors = () => {
  return (
    <section id="contractors" className="py-24 bg-warm-bg2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">
            ENTERPRISE CONTRACTOR SOLUTIONS
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            Streamline Your Site Workforce.
          </h3>
          <p className="text-base sm:text-lg text-warm-gray font-medium">
            Stop worrying about morning labor shortages. Broadcast your batch
            requirements real-time to verified Adda workforces.
          </p>
        </div>

        {/* 3 Contractor Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-warm-border shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <h4 className="font-extrabold text-xl text-warm-dark">
              Guaranteed Site Workforce
            </h4>
            <p className="text-xs text-warm-gray font-medium leading-relaxed">
              Broadcast batch shifts before 9:00 PM to secure 100% worker quota
              for next-morning site start.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-warm-border shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-extrabold text-xl text-warm-dark">
              Verified & Rated Workers
            </h4>
            <p className="text-xs text-warm-gray font-medium leading-relaxed">
              Access worker Aadhaar KYC status, emergency contacts, and global
              reliability star ratings.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-warm-border shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <FileText size={24} />
            </div>
            <h4 className="font-extrabold text-xl text-warm-dark">
              Digital Audit & Invoicing
            </h4>
            <p className="text-xs text-warm-gray font-medium leading-relaxed">
              Download clean digital GST ledger statements and attendance
              timestamps for full project auditing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
