import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaIdCard,
  FaBuilding,
  FaPercent,
  FaGlobeEurope,
  FaFileInvoiceDollar,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: FaIdCard,
    title: "e-Residency & Digital ID",
    description:
      "We handle your e-Residency application and digital ID setup, so you can sign, register, and manage everything online from anywhere.",
  },
  {
    icon: FaBuilding,
    title: "OÜ Company Registration",
    description:
      "Your Estonian company (OÜ) gets registered correctly the first time, with no back-and-forth on paperwork or filings.",
  },
  {
    icon: FaPercent,
    title: "0% Tax on Reinvested Profits",
    description:
      "Estonia's unique EU tax model means no corporate tax until profits are distributed — reinvested earnings stay untaxed.",
  },
  {
    icon: FaGlobeEurope,
    title: "EU Market & Digital Banking",
    description:
      "Full access to the EU Single Market, with digital banking and payment integration set up alongside your registration.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Accounting, VAT & Compliance",
    description:
      "Ongoing bookkeeping, OSS/EU VAT handling, and annual compliance filing, so nothing gets missed after you're set up.",
  },
];

const EstoniaEResidency = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ee-eyebrow, .ee-heading, .ee-subtitle", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".ee-card", {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".ee-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section  className="bg-[#101D42] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="ee-eyebrow text-base md:text-base font-semibold tracking-widest text-light-blue uppercase mb-4">
          Company Formation
        </p>

        <h2 className="ee-heading text-3xl md:text-5xl font-bold text-white leading-snug mb-5">
          Establish Your Business in Estonia{" "}
          <span className="text-light-blue">with e-Residency</span>
        </h2>

        <p className="ee-subtitle text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed text-base">
          Launch and run an EU company 100% online — no physical presence required.
        </p>

        <div className="ee-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="ee-card group flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-lightext-light-blue/40 transition duration-300"
            >
              
              <h3 className="font-semibold text-white text-base mb-3">
                {title}
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default EstoniaEResidency;