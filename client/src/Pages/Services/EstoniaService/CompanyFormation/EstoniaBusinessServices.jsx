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
 * <EstoniaBusinessServices colors={{ light: "#eaf1fb", dark: "#0e2a47" }} />
 */

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
      "Full application handled through Estonia's e-Business Register, EMTAK activity code included.",
  },
  {
    icon: MapPin,
    title: "Legal Address Service",
    description:
      "A registered Estonian legal address that satisfies the Commercial Code — no physical office needed.",
  },
  {
    icon: UserCheck,
    title: "Contact Person Service",
    description:
      "A licensed local contact person, arranged whenever your entire management board resides outside Estonia.",
  },
  {
    icon: Receipt,
    title: "VAT Registration Support",
    description:
      "We register your company for VAT the moment your turnover, or business activity, requires it.",
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
];

export default function EstoniaBusinessServices({
  colors = { light: "#eaf1fb", dark: "#0e2a47" },
}) {
  const sectionRef = useRef(null);
  const cssVars = { "--dt-light": colors.light, "--dt-dark": colors.dark };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dt-eyebrow, .dt-heading, .dt-subtitle", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".dt-service-card", {
        y: 36,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".dt-service-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={cssVars}
      className="bg-white py-20 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="dt-eyebrow text-xl  font-semibold tracking-widest uppercase mb-4 text-gray-500">
            Estonia Company Formation
          </p>
          <h2 className="dt-heading text-3xl md:text-5xl font-bold text-slate-900 leading-snug mb-5">
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
        <div className="dt-service-grid relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="dt-service-card group  text-xl rounded-2xl p-7 bg-gray-100  transition-transform duration-500  hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-linear-to-br from-blue-400 to-light-blue transition-transform duration-300 group-hover:scale-105">
                <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2.5">{title}</h3>
              <p className="text-base text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
}