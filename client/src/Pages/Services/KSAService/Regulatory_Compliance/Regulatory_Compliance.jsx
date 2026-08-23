
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";

import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { motion } from "framer-motion";
import bg from '../../../../asstes/img_temp/servics/KSA/Trusted-Compliance-Support-for-Businesses-in-Saudi-Arabia.webp'
import img1 from '../../../../asstes/img_temp/servics/KSA/Regulatory-Compliance-Services-in-Saudi-Arabia.webp'
import img2 from '../../../../asstes/img_temp/servics/KSA/freepik__creat-image-for-wesite-section-iso-standards-advis__80760.webp'
import img3 from '../../../../asstes/img_temp/servics/KSA/Trusted-Compliance-Support-for-Businesses-in-Saudi-Arabia.webp'
import img4 from '../../../../asstes/img_temp/servics/KSA/INdustry-specific.webp'
import img5 from '../../../../asstes/img_temp/servics/KSA/Modern-office-with-audit-tool.webp'
import img6 from '../../../../asstes/img_temp/servics/KSA/Government-Platforms-Regulatory-Coordination.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";
const handleTags = [
  "MISA Investment License Renewal",
  "Commercial Registration Renewal",
  "COC Certificate Renewal",
  "National Address Renewal",
  "Qiwa and Muqeem Portal Renewal",
  "Annual Income Tax Filing",
  "Quarterly VAT Return Filing",
 
  "Audit Report Submission",
];

const isoPoints = [
  "ISO readiness assessments",
  "Documentation & SOP structuring",
  "Process gap identification",
  "Workflow standardization support",
  "Internal compliance coordination",
  "Operational process improvement",
  "Risk management documentation",
  "Audit preparation assistance",
];

const regComplianceItems = [
  "Business compliance assessments",
  "Regulatory documentation review",
  "Commercial compliance support",
  "Internal policy development",
  "Compliance process structuring",
  "Corporate governance assistance",
  "Compliance reporting support",
  "Operational control recommendations",
];

const industryCovers = [
  "Trading & distribution",
  "Professional services",
  "Manufacturing businesses",
  "Technology companies",
  "Construction & engineering",
  "Retail & e-commerce",
  "Healthcare support sectors",
  "Logistics & operational services",
];

const platformSupport = [
  "Qiwa compliance coordination",
  "GOSI operational support",
  "ZATCA compliance assistance",
  "Muqeem process support",
  "MISA-related coordination",
  "Regulatory document organization",
  "Compliance renewal tracking",
  "Government submission guidance",
];

const whyChoose = [
  {
    title: "KSA-Focused Regulatory Expertise",
    desc: "Advisory support designed around Saudi business regulations and operational frameworks.",
  },
  {
    title: "Structured Compliance & Governance Support",
    desc: "Helping businesses build organized internal compliance systems and controls.",
  },
  {
    title: "Practical Solutions for Growing Businesses",
    desc: "Supporting startups, SMEs, and expanding companies across multiple sectors.",
  },
  {
    title: "Long-Term Operational Compliance Approach",
    desc: "Focused on sustainable compliance management instead of short-term fixes.",
  },
  {
    title: "Reliable Regulatory & Filing Support",
    desc: "Ensuring essential licenses, registrations, tax filings, and compliance requirements are handled accurately and on time.",
  },
  {
    title: "End-to-End Business Compliance Assistance",
    desc: "Providing coordinated support across government portals, renewals, documentation, and ongoing regulatory requirements.",
  },
];

const Regulatory_Compliance = () => {
  const id ='services-ksa-regulatory'
  return (
    <div className="w-full">
      <HeroSection
      id={id}
        bgImage={bg}
        heading={
          <>
            Regulatory & ISO Compliance
            <br />
            <span className="text-light-blue">Framework In Saudi Arabia</span>
          </>
        }
        description={
          <><span className="italic font-bold">de tempête</span> helps businesses across Saudi Arabia strengthen regulatory compliance, operational compliance, and support long-term business growth through structured compliance and ISO support services.</>
        }
      />

      <SecondSection></SecondSection>

      {/* Trusted Compliance Support */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img1}
            alt="Trusted Compliance Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Trusted Compliance Support
              <br />
              <span className="font-normal">
                For Businesses In Saudi Arabia
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Operating in Saudi Arabia requires businesses to stay aligned with
              evolving regulatory requirements, operational compliance, and
              industry-specific compliance controls. From government platform
              registrations to internal process controls, businesses must
              maintain organized compliance systems to reduce risks and support
              sustainable growth.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              provides regulatory and ISO compliance support services in Saudi
              Arabia, helping companies improve operational transparency,
              maintain compliance readiness, and strengthen business credibility
              across multiple sectors.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-20 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/ksa'}></SharedFullButton>
      </div>


      {/* What We Handle For You */}
      <section className="py-20 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What We Handle For You
          </h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mb-12" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {handleTags.map((t, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg py-10 px-4 text-center text-white text-base font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Regulatory Compliance
              <br />
              <span className="font-normal">Services In Saudi Arabia</span>
            </h2>
            <p className="mt-5 text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses in Saudi Arabia with structured compliance
              management services to help organizations align with local
              operational and regulatory requirements.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              We help you with:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {regComplianceItems.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img2}
            alt="Regulatory Compliance Services"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ISO Certification & Process Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img3}
            alt="ISO Certification & Process Alignment"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              ISO Certification &{" "}
              <span className="font-normal">
                Process
                <br />
                Alignment Support
              </span>
            </h2>
            <p className="mt-5 text-gray-500">
              We help businesses in Saudi Arabia prepare operational processes
              and documentation frameworks for ISO compliance readiness and
              long-term process improvement.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              We help you with:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {isoPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Compliance Management */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Industry-Specific{" "}
              <span className="font-normal">
                Compliance
                <br />
                Management
              </span>
            </h2>
            <p className="mt-5 text-gray-500">
              Different industries in Saudi Arabia operate under different
              regulatory expectations.{" "}
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              helps businesses implement compliance practices based on
              operational and industry-specific requirements.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Our Support Covers:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {industryCovers.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img4}
            alt="Industry-Specific Compliance Management"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Risk Monitoring & Operational Compliance Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img5}
            alt="Risk Monitoring & Operational Compliance Reviews"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Risk Monitoring & <span className="font-normal">Operational</span>{" "}
              Compliance
              <br />
              Reviews
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Strong compliance management helps businesses reduce operational
              risks, improve accountability, and maintain smoother day-to-day
              operations.{" "}
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              assists businesses in Saudi Arabia with compliance monitoring and
              operational reviews to identify process gaps, documentation
              weaknesses, and regulatory risks before they impact business
              continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Government Platforms & Regulatory Coordination */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Government Platforms &<br />
              <span className="font-normal">Regulatory Coordination</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Our team assists businesses with compliance coordination related
              to major Saudi government and operational platforms required for
              business activities and workforce management.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Platform Support Includes:
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {platformSupport.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-base">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img6}
            alt="Government Platforms & Regulatory Coordination"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Businesses Choose de tempête */}
      <section className="py-24 bg-[#f8fbff]">
  <div className="max-w-[1600px] mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#16244b]">
        Why Businesses <span className="font-normal">Choose</span>{" "}
        <span className="italic font-bold">de tempête</span>
      </h2>

      <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {whyChoose.map((f, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.12,
              ease: "easeOut",
            }}
            className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
              isDark ? "bg-light-blue" : "bg-white"
            }`}
          >
            {/* Logo */}
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                isDark ? "bg-white/15" : "bg-light-blue/20"
              }`}
            >
              <img
                src={logo}
                alt=""
                className={`w-8 h-8 object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b] mb-2">
                {f.title}
              </h3>

              <p
                className={`text-sm leading-relaxed text-justify ${
                  isDark ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {f.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      <ConsultationCTA
      id={id}
        heading={
          <>
            Start Building Your Business
            <br />
            Compliance Framework <span className="font-bold">Today</span>
          </>
        }
        subheading="Improve regulatory compliance, reduce risks, and strengthen business operations across Saudi Arabia."
        commitmentItems={[
          "Stronger compliance controls",
          "Reduced operational risks",
          "Better internal processes",
          "Higher business credibility",
        ]}
      />

      
    </div>
  );
};

export default Regulatory_Compliance;
