import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 35,
    suffix: "%",
    label: "Strategic Focus",
    desc: "Average profit increase with proper CFO guidance",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#1a9fd4" strokeWidth="1.8">
        <rect x="4" y="24" width="6" height="12" rx="1" fill="#1a9fd4" opacity="0.3" />
        <rect x="14" y="16" width="6" height="20" rx="1" fill="#1a9fd4" opacity="0.3" />
        <rect x="24" y="8" width="6" height="28" rx="1" fill="#1a9fd4" opacity="0.3" />
        <polyline points="4,22 17,14 27,6 36,10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#1a9fd4" />
        <circle cx="36" cy="10" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    value: 75,
    suffix: "%",
    label: "Cost-Effective",
    desc: "Savings vs hiring a full-time CFO",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#1a9fd4" strokeWidth="1.8">
        <rect x="4" y="12" width="32" height="20" rx="3" fill="#1a9fd4" opacity="0.15" stroke="#1a9fd4" strokeWidth="1.5" />
        <rect x="8" y="16" width="10" height="6" rx="1" fill="#1a9fd4" opacity="0.4" />
        <circle cx="28" cy="22" r="3" fill="#1a9fd4" opacity="0.6" />
        <line x1="4" y1="18" x2="36" y2="18" stroke="#1a9fd4" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: "%",
    label: "Expert Team",
    desc: "Years of combined financial expertise",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#1a9fd4" strokeWidth="1.8">
        <circle cx="15" cy="14" r="5" fill="#1a9fd4" opacity="0.2" stroke="#1a9fd4" strokeWidth="1.5" />
        <circle cx="25" cy="14" r="5" fill="#1a9fd4" opacity="0.2" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M6 34c0-5 4-9 9-9" strokeLinecap="round" />
        <path d="M25 25c5 0 9 4 9 9" strokeLinecap="round" />
        <path d="M15 25c2.761 0 5 1.343 5 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: "Growth Focus",
    desc: "Businesses scaled successfully",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" stroke="#1a9fd4" strokeWidth="1.8">
        <circle cx="20" cy="16" r="6" fill="#1a9fd4" opacity="0.2" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
        <path d="M28 10 L32 6 M32 6 L36 10 M32 6 L32 12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const bullets = [
  "Optimize cash flow and manage financial risks",
  "Enhance profitability with data-driven decisions",
  "Collaborate closely with your leadership team",
];

function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index, start }) {
  const count = useCountUp(stat.value, 1600, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 flex flex-col gap-3"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Icon */}
      <div>{stat.icon}</div>

      {/* Number */}
      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-[#1a9fd4] font-semibold text-sm">{stat.label}</div>

      {/* Desc */}
      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{stat.desc}</p>
    </motion.div>
  );
}

export default function CFOAdvantage() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 lg:py-24"
      style={{ background: "#0a1840" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white/80"
                style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)" }}
              >
                The Virtual CFO Advantage
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight"
            >
              A Virtual CFO<br />
              Bridges <span className="font-extrabold">That Gap</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md"
            >
              Get strategic financial management on a flexible, part-time, or project basis.
              You get the same executive-level expertise at a fraction of the cost.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 shrink-0 text-[#1a9fd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {b}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} start={started} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}