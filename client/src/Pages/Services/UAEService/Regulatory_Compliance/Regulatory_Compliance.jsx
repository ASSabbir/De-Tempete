// File: Regulatory_Compliance.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const amlItems = [
  "Risk Assessment And AML Policy Development",
  "KYC (Know Your Customer) Framework Setup",
  "Training For Compliance Officers And Staff",
  "Ongoing Monitoring And Reporting Mechanisms",
  "Regulatory Audit Preparation And Remediation",
];

const whyChoose = [
  { title: "UAE Regulatory Expertise", desc: "Strong understanding of UAE compliance frameworks, authority procedures, and regulatory requirements." },
  { title: "Trusted Business Support", desc: "Supporting startups, SMEs, and growing enterprises across diverse business sectors." },
  { title: "Structured Compliance Execution", desc: "Managing compliance processes with clear coordination, accurate documentation, and timely follow-ups." },
  { title: "Reliable Operational Guidance", desc: "Helping businesses reduce compliance risks and maintain smooth regulatory operations." },
];

const Regulatory_Compliance = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Regulatory & ISO Compliance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stay Compliant. Build Trust.
            <br />
            <span className="text-[#4AC4DE]">Operate With Confidence.</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            At de tempête, we help businesses in the UAE navigate complex regulatory frameworks and international
            standards, ensuring your operations meet every legal and quality requirement. From company governance to
            ISO certification and AML compliance, our experts provide end-to-end guidance that keeps your business
            secure, credible, and future-ready.
          </p>
          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F6F8] py-10">
        <div className="max-w-8xl mx-auto px-30">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div>
              <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">Why Choose Us?</h2>
            </div>
            <div className="flex items-center gap-5">
              <CalendarDays size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Globe size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Countries Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Handshake size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={1097} duration={2500} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Medal size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={4} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Secretarial */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__corporate-secretarial-services-statutory-complianc__58647.webp"
            alt="Corporate Secretarial Services & Statutory Compliance"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Corporate Secretarial <span className="font-light">Services & Statutory Compliance</span></h2>
            <p className="mt-5 text-gray-500 font-semibold">Ensure your business meets every corporate governance requirement.</p>
            <p className="mt-3 text-gray-500 leading-7">
              Our corporate secretarial and compliance services cover all mandatory filings, documentation, and
              updates required by UAE authorities, giving you peace of mind and operational clarity.
            </p>
            <div className="space-y-3 mt-6">
              {["Maintenance of statutory registers and records", "Preparation and filing of annual returns", "Drafting of board resolutions and meeting minutes", "Corporate governance and reporting compliance", "Regulatory updates and proactive reminders"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
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
            <p className="mt-4 text-cyan-400 font-semibold">Safeguard your business reputation through strong AML controls.</p>
            <p className="mt-4 text-slate-300 leading-7">
              With the UAE's growing emphasis on financial transparency, we help businesses develop and maintain
              robust AML frameworks aligned with local and international laws.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-16">
            {amlItems.map((item, index) => (
              <div key={index} className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl">
                <div className="w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-3xl" />
                </div>
                <h3 className="mt-6 text-sm font-medium text-white leading-relaxed">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">ISO Standards Advisory, <span className="font-light">Training & Certification Support</span></h2>
            <p className="mt-5 text-gray-500 font-semibold">Achieve globally recognized quality and process standards.</p>
            <p className="mt-3 text-gray-500 leading-7">
              Whether you're aiming for ISO 9001, ISO 14001, ISO 27001, or other international standards, our
              advisors guide you through every step, from readiness assessments to certification audits.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">We help you with:</h4>
            <div className="space-y-3">
              {["ISO gap analysis and implementation roadmap", "Documentation and process alignment", "Staff awareness and auditor training", "Liaison with accredited certification bodies", "Continuous improvement and post-certification support"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-[#16244b]">Liquidation & Company <span className="font-light">Closure Support</span></h2>
            <p className="mt-5 text-gray-500 font-semibold">Exit the market efficiently and in full legal compliance.</p>
            <p className="mt-3 text-gray-500 leading-7">
              When it's time to wind down your UAE entity, de tempête ensures a smooth and compliant closure process,
              minimizing risk and liability.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">Our Support Covers:</h4>
            <div className="space-y-3">
              {["Regulatory and authority notifications", "Final audits and financial settlements", "Visa and license cancellations", "Liquidator appointment and reporting", "Document handover and deregistration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
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
              Why Businesses <span className="font-bold">Choose de tempête</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl leading-tight font-light text-white">
                Start Building Your<br />Business <span className="font-bold">Compliance Framework Today</span>
              </h2>
              <p className="mt-8 text-cyan-400 text-xl font-semibold leading-9 max-w-xl">
                Improve regulatory compliance, reduce risks, and strengthen business operations across UAE.
              </p>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {["Stronger compliance controls", "Reduced operational risks", "Better internal processes", "Higher business credibility"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-bold text-[#16244B] mb-8">Book a Free Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea rows={5} placeholder="Write your message..." className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b]">
              Recent <span className="font-bold">Blogs</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regulatory_Compliance;