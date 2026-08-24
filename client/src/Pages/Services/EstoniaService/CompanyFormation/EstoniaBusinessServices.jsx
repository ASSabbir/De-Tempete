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
import { GrLocation } from "react-icons/gr";

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
    title: "Business Structure Advisory",
    description:
      "We help you choose the right structure — OÜ, AS, or branch — based on your ownership plans and growth stage.",
  },
  {
    icon: FileCheck2,
    title: "Commercial Register Registration",
    description:
      "Full application support through Estonia's e-Business Register, including the required EMTAK activity code.",
  },
  {
    icon: MapPin,
    title: "Legal Address Service",
    description:
      "A registered Estonian legal address that satisfies the Commercial Code requirements without the need for a physical office.",
  },
  {
    icon: UserCheck,
    title: "Contact Person Service",
    description:
      "A licensed local contact person arranged whenever your entire management board resides outside Estonia.",
  },
  {
    icon: Receipt,
    title: "VAT Registration Support",
    description:
      "We register your company for VAT when your turnover or business activity requires it.",
  },
  {
    icon: Ship,
    title: "EORI Registration Support",
    description:
      "For companies importing or exporting goods, we secure your EORI number for customs clearance across the EU.",
  },
  {
    icon: Wallet,
    title: "Bank Account & Fintech Setup",
    description:
      "Guided account opening with Wise Business, Revolut Business, Paysera, or traditional Estonian banks.",
  },
  {
    icon: Globe2,
    title: "EU Market Entry Advisory",
    description:
      "Strategic guidance on trading across the EU Single Market, from your first invoice onward.",
  },
  {
    icon: GrLocation,
    title: "Cross-Border Business Support",
    description:
      "Helping Estonian companies manage regulatory and operational requirements when expanding into international markets.",
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