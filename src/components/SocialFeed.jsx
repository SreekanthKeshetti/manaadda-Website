import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";

// Official Verified Badge SVG Component
const VerifiedBadge = () => (
  <svg
    className="w-4 h-4 text-sky-500 fill-current shrink-0"
    viewBox="0 0 24 24"
  >
    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.475 9.55.6 10.92.6 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.05 1.273 2.42 2.148 4 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.05 2.148-2.42 2.148-4zm-12.8 4.2l-3.5-3.5 1.4-1.4 2.1 2.1 6.3-6.3 1.4 1.4-7.7 7.7z" />
  </svg>
);

export const SocialFeed = () => {
  return (
    <section
      id="community"
      className="py-24 bg-warm-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-dark text-xs font-black uppercase tracking-widest">
            <span>📢 OFFICIAL SOCIAL CHANNELS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            Join the Mana Adda Community.
          </h2>

          <p className="text-base sm:text-lg text-warm-gray font-medium">
            Stay updated with daily job broadcasts, worker stories, and platform
            news across our official social channels.
          </p>
        </div>

        {/* 3 Modern Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Official Instagram Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-[32px] bg-white border border-warm-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                {/* Official Instagram Gradient Logo SVG */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold text-[#dc2743] bg-rose-50 px-3 py-1 rounded-full border border-rose-200 uppercase tracking-wider">
                  @manaadda.official
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-xl text-warm-dark flex items-center gap-1.5">
                  <span>Instagram Handles</span>
                  <VerifiedBadge />
                </h4>
                <p className="text-xs text-warm-gray font-medium mt-1">
                  Daily reels, site broadcasts, and worker payment celebrations.
                </p>
              </div>

              {/* Sample Instagram Reel Highlight Card */}
              <div className="p-4 rounded-2xl bg-warm-bg2 border border-warm-border text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-warm-dark">
                  <span className="text-warm-dark font-extrabold">
                    📱 Trending Reel
                  </span>
                  <span className="text-[#dc2743] font-bold flex items-center gap-1">
                    <Heart size={12} className="fill-[#dc2743]" /> 2.4k
                  </span>
                </div>
                <p className="text-[11px] text-warm-gray leading-relaxed font-medium">
                  "Watch how Ramesh booked 5 masonry workers in Jubilee Hills in
                  under 2 minutes!"
                </p>
              </div>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Follow on Instagram</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Official YouTube Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-[32px] bg-white border border-warm-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                {/* Official YouTube Red Logo SVG */}
                <div className="w-12 h-12 rounded-2xl bg-[#FF0000] text-white flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold text-[#FF0000] bg-red-50 px-3 py-1 rounded-full border border-red-200 uppercase tracking-wider">
                  YOUTUBE
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-xl text-warm-dark flex items-center gap-1.5">
                  <span>Mana Adda Official</span>
                  <VerifiedBadge />
                </h4>
                <p className="text-xs text-warm-gray font-medium mt-1">
                  App tutorials, contractor guides, and full-length worker
                  stories.
                </p>
              </div>

              {/* Sample YouTube Video Highlight Card */}
              <div className="p-4 rounded-2xl bg-warm-bg2 border border-warm-border text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-warm-dark">
                  <span className="text-warm-dark font-extrabold">
                    🎬 Featured Video
                  </span>
                  <span className="text-[#FF0000] font-bold">1080p HD</span>
                </div>
                <p className="text-[11px] text-warm-gray leading-relaxed font-medium">
                  "Complete Guide: How to Lock Escrow & Pay Daily Wages via UPI
                  Safely."
                </p>
              </div>
            </div>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#FF0000] hover:bg-red-700 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Official LinkedIn Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-[32px] bg-white border border-warm-border shadow-lg hover:shadow-2xl transition-all space-y-6 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                {/* Official LinkedIn Blue Logo SVG */}
                <div className="w-12 h-12 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-4 1.239-4 4v14c0 2.761 1.239 4 4 4h14c2.762 0 4-1.239 4-4v-14c0-2.761-1.238-4-4-4zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span className="text-[10px] font-extrabold text-[#0A66C2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                  LINKEDIN
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-xl text-warm-dark flex items-center gap-1.5">
                  <span>NextMetaForce LLP</span>
                  <VerifiedBadge />
                </h4>
                <p className="text-xs text-warm-gray font-medium mt-1">
                  Corporate announcements, technology news, and partnership
                  updates.
                </p>
              </div>

              {/* Sample LinkedIn Post Highlight Card */}
              <div className="p-4 rounded-2xl bg-warm-bg2 border border-warm-border text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-warm-dark">
                  <span className="text-warm-dark font-extrabold">
                    📰 Press Release
                  </span>
                  <span className="text-[#0A66C2] font-bold">Hyderabad HQ</span>
                </div>
                <p className="text-[11px] text-warm-gray leading-relaxed font-medium">
                  "Mana Adda expands coverage to 31 Master Addas across
                  Telangana."
                </p>
              </div>
            </div>

            <a
              href="https://nextmetaforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#0A66C2] hover:bg-blue-800 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
