import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom Animated Counter Hook
const AnimatedCounter = ({
  targetValue,
  duration = 1600,
  decimals = 0,
  triggerKey,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(targetValue);
    const steps = 40;
    const stepTime = duration / steps;
    const increment = (end - start) / steps;

    setCount(0);

    const timer = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= end) || (increment <= 0 && start <= end)) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetValue, duration, triggerKey]);

  return (
    <span>
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.round(count).toLocaleString()}
    </span>
  );
};

export const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [triggerKey, setTriggerKey] = useState(0);

  // Automatically re-trigger counter every 12 seconds while visible
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setTriggerKey((prev) => prev + 1);
    }, 12000);

    return () => clearInterval(interval);
  }, [inView]);

  // Neutral, professional metric labels with zero confrontational phrasing
  const stats = [
    {
      target: 31,
      decimals: 0,
      suffix: "+",
      label: "Master Labour Addas Covered",
      desc: "Across Hyderabad & Telangana",
    },
    {
      target: 100,
      decimals: 0,
      suffix: "%",
      label: "Direct EOD UPI Settlement",
      desc: "Instant Evening Transfers",
    },
    {
      target: 0,
      decimals: 0,
      prefix: "₹",
      suffix: "",
      label: "Hidden Deductions",
      desc: "100% Direct Worker Payouts",
    },
    {
      target: 4.8,
      decimals: 1,
      suffix: " ★",
      label: "Platform Trust Rating",
      desc: "Verified Workers & Contractors",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-warm-dark text-white relative overflow-hidden bg-grid-pattern-dark"
    >
      {/* Top Laser Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Live Ticker Header Badge */}
        <div className="flex items-center justify-center gap-2.5 mb-10 text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase bg-white/5 border border-white/10 w-fit mx-auto px-4 py-1.5 rounded-full shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>LIVE ECOSYSTEM METRICS TICKER</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 divide-warm-dark-2">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="pt-6 sm:pt-0 text-center sm:text-left space-y-2"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-gold tracking-tight font-mono">
                {stat.prefix}
                <AnimatedCounter
                  targetValue={stat.target}
                  decimals={stat.decimals}
                  duration={1600}
                  triggerKey={triggerKey}
                />
                {stat.suffix}
              </div>
              <h3 className="text-base font-extrabold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="text-xs text-warm-gray font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
