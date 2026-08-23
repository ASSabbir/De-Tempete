import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  FileCheck2,
  MapPin,
  UserCheck,
  Receipt,
  Ship,
  Wallet,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * EstoniaBusinessServices
 *
 * Single combined section covering Estonia company-formation services for
 * foreign founders. Pass your two brand colors in via the `colors` prop —
 * everything below reads from these two values only, so swapping the
 * palette doesn't mean hunting through class names.
 *
 * <EstoniaBusinessServices colors={{ light: "#3C9FC2", dark: "#0e2a47" }} />
 */
import { motion } from "framer-motion";
const services = [
  {
    icon: Building2,
    title: "Company Formation & Registration",
    description:
      "Complete support for establishing your Estonian company with the right structure, documentation, and registration requirements.",
  },
  {
    icon: FileCheck2,
    title: "Corporate Documentation Support",
    description:
      "Preparation and coordination of essential company documents, registrations, and statutory records.",
  },
  {
    icon: MapPin,
    title: "Registered Office Services",
    description:
      "Professional registered office solutions that help your company maintain a compliant presence in Estonia.",
  },
  {
    icon: UserCheck,
    title: "Management & UBO Compliance",
    description:
      "Support with management board requirements, beneficial ownership declarations, and related corporate compliance matters.",
  },
  {
    icon: Receipt,
    title: "Tax Registration & Advisory",
    description:
      "Guidance on Estonian tax registrations and obligations based on your company's activities and business model.",
  },
  {
    icon: Ship,
    title: "Import & Export Compliance",
    description:
      "Assistance with customs-related registrations and documentation for businesses trading goods within and outside the EU.",
  },
  {
    icon: Wallet,
    title: "Business Banking Assistance",
    description:
      "Practical support for selecting and setting up suitable business banking and payment solutions for your company.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Business Support",
    description:
      "Helping Estonian companies manage regulatory and operational requirements when expanding into international markets.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Corporate Compliance",
    description:
      "Continuous support for maintaining statutory obligations, regulatory filings, company records, and compliance requirements.",
  },
  
];

export default function EstoniaBusinessServices() {
  const sectionRef = useRef(null);
  

  

  return (
    <section
      ref={sectionRef}
      
      className="bg-white py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="dt-eyebrow text-xl  font-semibold tracking-widest uppercase mb-4 text-gray-500">
            Estonia Company Formation
          </p>
          <h2 className="dt-heading text-3xl md:text-4xl font-bold text-slate-900 leading-snug mb-5">
            Business Setup Services for{" "}
            <span className="text-dark-blue">Foreign Founders</span>
          </h2>
          <p className="dt-subtitle text-slate-500 leading-relaxed">
            From choosing the right legal structure to opening your first
            business account, we handle each step of setting up and running
            your Estonian company remotely.
          </p>
        </div>

        {/* Service grid */}
        <div className="dt-service-grid relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {services.map(({ icon: Icon, title, description }, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const isDark = (row + col) % 2 === 0;

    return (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: (index % 3) * 0.12,
          ease: "easeOut",
        }}
        className={`dt-service-card group flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
          isDark ? "bg-light-blue" : "bg-white"
        }`}
      >
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
            isDark
              ? "bg-white/15 text-white"
              : "bg-light-blue/20 text-light-blue"
          }`}
        >
          <Icon className="text-2xl" strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed text-justify ${
            isDark ? "text-gray-700" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </motion.div> 
    );
  })}
</div>
      </div>
    </section>
  );
}