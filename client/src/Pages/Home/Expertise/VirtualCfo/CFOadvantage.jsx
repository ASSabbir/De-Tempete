import { FaMoneyBillAlt } from "react-icons/fa"; 
import { FaUsers } from "react-icons/fa"; 
import { FaUser } from "react-icons/fa"; 

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";


const stats = [
  {
    value: 35,
    suffix: "%",
    label: "Strategic Focus",
    desc: "Average profit increase with proper CFO guidance",
    icon: <BsGraphUpArrow />,
  },
  {
    value: 75,
    suffix: "%",
    label: "Cost-Effective",
    desc: "Savings vs hiring a full-time CFO",
    icon: <FaMoneyBillAlt />,
  },
  {
    value: 10,
    suffix: "%",
    label: "Expert Team",
    desc: "Years of combined financial expertise",
    icon: <FaUsers />,
  },
  {
    value: 500,
    suffix: "+",
    label: "Growth Focus",
    desc: "Businesses scaled successfully",
    icon: <FaUser />,
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
      whileHover={{  }}
      className="group relative rounded-2xl p-6 flex flex-col gap-3 overflow-hidden transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Animated gradient border glow — appears on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.4), transparent 40%, transparent 60%, rgba(34,211,238,0.3))",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Soft cyan bloom in the corner */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/0 group-hover:bg-cyan-400/20 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

      {/* Subtle top sheen sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
        <div
          className="absolute -inset-x-full top-0 h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[250%] transition-transform duration-1000 ease-out"
        />
      </div>

      {/* Icon */}
      <div className="relative z-10 text-3xl text-light-blue transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-0.5 w-fit">
        <div className="absolute inset-0 blur-lg bg-cyan-400/0 group-hover:bg-cyan-400/40 rounded-full transition-all duration-500 -z-10" />
        {stat.icon}
      </div>

      {/* Number */}
      <div className="relative z-10 text-3xl  font-extrabold text-white transition-all duration-500 group-hover:tracking-wide">
        {count}
        {stat.suffix}
      </div>

      {/* Label */}
      <div className="relative z-10 text-light-blue font-semibold text-sl transition-colors duration-500 group-hover:text-cyan-300">
        {stat.label}
      </div>

      {/* Desc */}
      <p className="relative z-10 text-white/50 text-xs sm:text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/70">
        {stat.desc}
      </p>

      {/* Bottom accent line — grows on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-linear-to-r from-cyan-400 via-cyan-300 to-transparent transition-all duration-700 ease-out" />
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
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-[3vw] text-white font-normal leading-tight"
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
              className="text-white/60 text-[1vw] leading-relaxed max-w-md"
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
                <li key={b} className="flex items-center gap-3 text-white/70 text-[1vw]">
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