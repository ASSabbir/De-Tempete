import { FaMoneyBillAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";


const stats = [
  {
    value: 40,
    suffix: "%",
    label: "Operational Efficiency",
    desc: "Improving workflows, reducing manual effort, and streamlining HR operations.",
    icon: <BsGraphUpArrow />,
  },
  {
    value: 35,
    suffix: "%",
    label: "Compliance & Risk Control",
    desc: "Ensuring adherence to labor laws, payroll regulations, and documentation standards.",
    icon: <FaMoneyBillAlt />,
  },
  {
    value: 20,
    suffix: "%",
    label: "Employee Experience",
    desc: "Enhancing transparency, satisfaction, and workforce management systems.",
    icon: <FaUsers />,
  },
  {
    value: 10,
    suffix: "+",
    label: "Strategic HR Support",
    desc: "Aligning HR processes with long-term business growth and scalability.",
    icon: <FaUser />,
  },
];

const bullets = [
  "Attendance & Leave Management",
  "Onboarding & Offboarding",
  "HR Policy Development",
  "Benefits & Compensation Structuring",
  "Performance Support",
  "Regulatory Compliance",
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
      <div className="text-3xl text-light-blue">{stat.icon}</div>

      {/* Number */}
      <div className="text-3xl sm:text-4xl font-extrabold text-white">
        {count}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-light-blue font-semibold text-sl">{stat.label}</div>

      {/* Desc */}
      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{stat.desc}</p>
    </motion.div>
  );
}

export default function HrAdvantage() {
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
                Performance Focus


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
              What We
              <br />
              <span className="font-extrabold">Handle For You</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md"
            >
             We manage the essential HR functions that keep your workforce structured, compliant, and efficient. From employee lifecycle management to policy and performance support, our approach ensures smooth day-to-day operations without adding administrative burden to your business.
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