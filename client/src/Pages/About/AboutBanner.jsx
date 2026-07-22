import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import img from '../../asstes/img_temp/de-tempete.webp'
const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};
const stats = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#1a9fd4" strokeWidth="2">
                <rect x="8" y="6" width="32" height="36" rx="3" strokeLinejoin="round" />
                <path d="M16 6V4M32 6V4" strokeLinecap="round" />
                <path d="M8 16h32" />
                <path d="M17 26l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        value: 9,
        suffix: "+",
        label: "Years of Experience",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#1a9fd4" strokeWidth="2">
                <circle cx="24" cy="24" r="18" />
                <ellipse cx="24" cy="24" rx="8" ry="18" />
                <path d="M6 24h36M24 6a28 10 0 0 1 0 36M24 6a28 10 0 0 0 0 36" strokeLinejoin="round" />
            </svg>
        ),
        value: 20,
        suffix: "+",
        label: "Countries Covered",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#1a9fd4" strokeWidth="2">
                <path d="M14 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 3-1.5 6-4 8l-6 8-6-8c-2.5-2-4-5-4-8z" strokeLinejoin="round" />
                <circle cx="24" cy="20" r="3" />
                <path d="M10 42c0-4 6.268-7 14-7s14 3 14 7" strokeLinecap="round" />
            </svg>
        ),
        value: 30000,
        suffix: "+",
        label: "Clients Served",
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="#1a9fd4" strokeWidth="2">
                <path d="M24 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" strokeLinejoin="round" />
                <path d="M14 34l-6 8M34 34l6 8" strokeLinecap="round" />
                <path d="M10 42h28" strokeLinecap="round" />
            </svg>
        ),
        value: 120,
        suffix: "+",
        label: "Awards Received",
    },
];

function useCountUp(target, duration = 1800, start = false) {
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

function StatItem({ icon, value, suffix, label, start }) {
    const count = useCountUp(value, 1800, start);
    const display = value >= 1000
        ? (count >= 1000 ? `${Math.floor(count / 1000) * 1000}` : count).toLocaleString()
        : count;

    return (
        <div className="flex items-center gap-3 sm:gap-4">
            <div className="shrink-0 opacity-80">{icon}</div>
            <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0d1e4a] leading-none">
                    {display}{suffix}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">{label}</div>
            </div>
        </div>
    );
}


const AboutBanner = ({ text }) => {
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
        <div ref={sectionRef}>
            <section className="relative w-full overflow-hidden md:h-[80vh]" >

                {/* BG Image — swap div for img when ready */}
                {/* <img src={cfoBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" /> */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${img}')`,
                    }}
                />

                {/* Dark overlay — stronger on left, fades right */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(10,24,60,0.92) 0%, rgba(10,24,60,0.75) 45%, rgba(10,24,60,0.35) 100%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:h-[80vh]" >
                    <div className="w-full border-l-3 pl-5 border-gray-500 lg:w-3/4  flex flex-col gap-5">

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.15}
                            className="text-[#1a9fd4] font-semibold text-base sm:text-lg leading-snug"
                        >
                          // About Us
                        </motion.p>
                        {/* Title */}
                        <motion.h1
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white t"
                        >
                             Your Trusted Partner in Accounting, Compliance & Business Growth
                        </motion.h1>



                        {/* Description */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                            className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md"
                        >
                            A finance and accounting outsourcing service provider to meet the growing demand for specialized and professional accounting services
                        </motion.p>



                    </div>
                </div>
            </section>
            {/* ── Stats Bar ── */}
            <div className="border-b border-gray-100 bg-[#f8f9fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 sm:gap-0">
                        {/* Why Choose Us label */}
                        <div className="sm:pr-8 sm:border-r border-gray-200 shrink-0">
                            <h2 className="text-lg font-bold text-[#0d1e4a] whitespace-nowrap">Why Choose Us?</h2>
                        </div>
                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 sm:gap-0 sm:flex-1">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`flex-1 min-w-[140px] sm:px-8 ${i < stats.length - 1 ? "sm:border-r border-gray-200" : ""}`}
                                >
                                    <StatItem {...s} start={started} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;