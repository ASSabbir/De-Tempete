import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiAward, FiGlobe, FiUsers, FiCheckCircle, FiGrid } from "react-icons/fi";

const stats = [
    {
        icon: <FiGrid />,
        value: 24,
        suffix: "+",
        label: "Industries Served",
    },
    {
        icon: <FiAward />,
        value: 9,
        suffix: "+",
        label: "Years of Legacy",
    },
    {
        icon: <FiGlobe />,
        value: 50,
        suffix: "+",
        label: "Countries Covered",
    },
    {
        icon: <FiUsers />,
        value: 700,
        suffix: "+",
        label: "Clients Served",
    },
    {
        icon: <FiCheckCircle />,
        value: 3000,
        suffix: "+",
        label: "Projects Completed",
    },
    
];

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};


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
        <div className="flex items-center   h-full gap-3 sm:gap-4">
            {/* <div className="shrink-0 text-c opacity-80">{icon}</div> */}
            <h1 className='text-3xl text-light-blue'>{icon}</h1>
            <div>
                <div className="text-xl md:text-2xl 2xl:text-3xl font-extrabold text-[#0d1e4a] leading-none">
                    {display}{suffix}
                </div>
                <div className="text-xs md:text-base  text-gray-500 mt-0.5 font-medium">{label}</div>
            </div>
        </div>
    );
}

const SecondSection = () => {
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
        <div ref={sectionRef} className="border-b border-gray-100 bg-[#f8f9fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`flex-1  ${i < stats.length - 1 ? "sm:border-r border-gray-200" : ""}`}
                                >
                                    <StatItem {...s} start={started} />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
    );
};

export default SecondSection;