// File: Regulatory_Compliance.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

const amlItems = [
  "Risk Assessment And AML Policy Development",
  "KYC (Know Your Customer) Framework Setup",
  "Training For Compliance Officers And Staff",
  "Ongoing Monitoring And Reporting Mechanisms",
  "Regulatory Audit Preparation And Remediation",
];

const whyChoose = [
  {
    title: "UAE Regulatory Expertise",
    desc: "Strong understanding of UAE compliance frameworks, authority procedures, and regulatory requirements.",
  },
  {
    title: "Trusted Business Support",
    desc: "Supporting startups, SMEs, and growing enterprises across diverse business sectors.",
  },
  {
    title: "Structured Compliance Execution",
    desc: "Managing compliance processes with clear coordination, accurate documentation, and timely follow-ups.",
  },
  {
    title: "Reliable Operational Guidance",
    desc: "Helping businesses reduce compliance risks and maintain smooth regulatory operations.",
  },
];

const Regulatory_Compliance = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Regulatory & ISO Compliance"
        heading={<>Stay Compliant. Build Trust.<br /><span className="text-light-blue">Operate With Confidence.</span></>}
        description="At de tempête, we help businesses in the UAE navigate complex regulatory frameworks and international standards, ensuring your operations meet every legal and quality requirement. From company governance to ISO certification and AML compliance, our experts provide end-to-end guidance that keeps your business secure, credible, and future-ready."
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 1097, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 4, label: "Awards Received" },
      ]} />

      {/* Corporate Secretarial */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__corporate-secretarial-services-statutory-complianc__58647.webp"
            alt="Corporate Secretarial Services & Statutory Compliance"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Corporate Secretarial{" "}
              <span className="font-light">
                Services & Statutory Compliance
              </span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              Ensure your business meets every corporate governance requirement.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              Our corporate secretarial and compliance services cover all
              mandatory filings, documentation, and updates required by UAE
              authorities, giving you peace of mind and operational clarity.
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Maintenance of statutory registers and records",
                "Preparation and filing of annual returns",
                "Drafting of board resolutions and meeting minutes",
                "Corporate governance and reporting compliance",
                "Regulatory updates and proactive reminders",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AML */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">
              AML (Anti-Money Laundering) Advisory & Compliance
            </h2>
            <p className="mt-4 text-cyan-400 font-semibold">
              Safeguard your business reputation through strong AML controls.
            </p>
            <p className="mt-4 text-slate-300 leading-7">
              With the UAE's growing emphasis on financial transparency, we help
              businesses develop and maintain robust AML frameworks aligned with
              local and international laws.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-16">
            {amlItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-3xl" />
                </div>
                <h3 className="mt-6 text-sm font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              ISO Standards Advisory,{" "}
              <span className="font-light">
                Training & Certification Support
              </span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              Achieve globally recognized quality and process standards.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              Whether you're aiming for ISO 9001, ISO 14001, ISO 27001, or other
              international standards, our advisors guide you through every
              step, from readiness assessments to certification audits.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              We help you with:
            </h4>
            <div className="space-y-3">
              {[
                "ISO gap analysis and implementation roadmap",
                "Documentation and process alignment",
                "Staff awareness and auditor training",
                "Liaison with accredited certification bodies",
                "Continuous improvement and post-certification support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/freepik__creat-image-for-wesite-section-iso-standards-advis__80760.webp"
            alt="ISO Standards Advisory, Training & Certification Support"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Liquidation */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__create-image-for-wesite-section-liquidation-compan__80761.webp"
            alt="Liquidation & Company Closure Support"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Liquidation & Company{" "}
              <span className="font-light">Closure Support</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              Exit the market efficiently and in full legal compliance.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              When it's time to wind down your UAE entity, de tempête ensures a
              smooth and compliant closure process, minimizing risk and
              liability.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our Support Covers:
            </h4>
            <div className="space-y-3">
              {[
                "Regulatory and authority notifications",
                "Final audits and financial settlements",
                "Visa and license cancellations",
                "Liquidator appointment and reporting",
                "Document handover and deregistration",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Businesses{" "}
              <span className="font-bold">Choose de tempête</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <ConsultationCTA
        heading={<>Start Building Your<br />Business <span className="font-bold">Compliance Framework Today</span></>}
        subheading="Improve regulatory compliance, reduce risks, and strengthen business operations across UAE."
        commitmentItems={["Stronger compliance controls", "Reduced operational risks", "Better internal processes", "Higher business credibility"]}
      />

      <RecentBlogs blogs={[
        { id: 1, image: "/src/asstes/Images/New folder/council-tax.webp", title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide", desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to" },
        { id: 2, image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp", title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity", desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process," },
        { id: 3, image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp", title: "The Role and Benefits of a Virtual CFO in Modern Businesses", desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual" },
      ]} />
    </div>
  );
};

export default Regulatory_Compliance;
