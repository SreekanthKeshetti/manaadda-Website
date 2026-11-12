import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  MapPin,
  Volume2,
  VolumeX,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// Individual Reel Card Component with Direct Ref Control
const ReelCard = ({ reel }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay prevented:", err);
        });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-[32px] bg-warm-dark overflow-hidden shadow-2xl border border-white/10 group flex flex-col justify-between aspect-[9/16] cursor-pointer"
      onClick={togglePlay}
    >
      {/* Video Element with strict inline controls (Prevents Picture-in-Picture) */}
      <div className="absolute inset-0 z-0 bg-warm-dark overflow-hidden">
        <video
          ref={videoRef}
          src={reel.src}
          loop
          playsInline
          muted={isMuted}
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onError={(e) => {
            // Fallback preview if video file isn't in public/ yet
            e.target.style.display = "none";
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = "flex";
            }
          }}
        />

        {/* Fallback Graphic */}
        <div className="hidden absolute inset-0 bg-gradient-to-b from-warm-dark-2 via-warm-dark to-black p-6 flex-col justify-center items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center">
            <Play size={28} />
          </div>
          <span className="text-xs font-bold text-warm-gray-light max-w-xs">
            Add video <code className="text-brand-gold">public{reel.src}</code>{" "}
            to watch reel.
          </span>
        </div>
      </div>

      {/* Top Header Overlay */}
      <div className="relative z-10 p-5 flex justify-between items-center bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <span className="px-3 py-1 rounded-full bg-brand-orange text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md">
          {reel.badge}
        </span>

        <div className="flex items-center gap-2">
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-all border border-white/20"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          )}
          <span className="px-2.5 py-1 rounded-full bg-black/60 text-brand-gold font-bold text-[10px] border border-white/10 backdrop-blur-md">
            {reel.rating}
          </span>
        </div>
      </div>

      {/* Center Big Play/Pause Button Indicator */}
      <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-orange/90 text-white flex items-center justify-center shadow-2xl border-2 border-white/30 z-10 transition-transform duration-300 group-hover:scale-110 pointer-events-none">
        {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
      </div>

      {/* Bottom Story Description Overlay */}
      <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent text-white space-y-2 pointer-events-none">
        <h4 className="font-extrabold text-sm text-brand-gold leading-snug">
          "{reel.title}"
        </h4>
        <p className="text-xs text-warm-gray-light leading-relaxed line-clamp-2">
          {reel.quote}
        </p>

        <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold">
          <span className="text-white flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" />
            {reel.name}
          </span>
          <span className="text-warm-gray-light flex items-center gap-1">
            <MapPin size={11} className="text-brand-orange" />{" "}
            {reel.location.split(" ")[0]}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const VideoReels = () => {
  const reels = [
    {
      id: 1,
      src: "/story1.mp4",
      name: "Ramesh Kumar",
      role: "Masonry Contractor",
      location: "Jubilee Hills Check Post Adda",
      title: "How I book 5 masonry workers in 2 minutes",
      quote:
        "No morning street-stand waiting. I lock escrow, workers arrive with GPS proof, and work starts at 9:00 AM sharp.",
      rating: "5.0 ★",
      badge: "CONTRACTOR STORY",
    },
    {
      id: 2,
      src: "/story2.mp4",
      name: "Srinivas Rao",
      role: "Daily Carpenter & Loader",
      location: "Secunderabad Station Adda",
      title: "First time receiving instant EOD UPI in PhonePe",
      quote:
        "0% commission cut. The full daily wage comes directly to my PhonePe at 9:00 PM tonight.",
      rating: "4.9 ★",
      badge: "WORKER STORY",
    },
    {
      id: 3,
      src: "/story3.mp4",
      name: "Lakshmi Narayana",
      role: "Painter Helper",
      location: "Gachibowli X Roads Adda",
      title: "Free accidental insurance gave me peace",
      quote:
        "Every morning GPS check-in activates free insurance. My family is safe while I work.",
      rating: "5.0 ★",
      badge: "SAFETY STORY",
    },
  ];

  return (
    <section
      id="stories"
      className="py-24 bg-warm-bg2 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange-dark text-xs font-black uppercase tracking-widest">
            <span>🎬 REAL STORIES FROM OUR ADDAS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-warm-dark tracking-tight">
            Loved by Contractors & Workers.
          </h2>

          <p className="text-base sm:text-lg text-warm-gray font-medium">
            Tap any video reel below to watch real contractor and worker stories
            across Hyderabad.
          </p>
        </div>

        {/* Vertical Video Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
};
