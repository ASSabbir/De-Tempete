import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

const handleTags = ["Regulatory Compliance Coordination", "ISO Documentation Support", "Internal Process Structuring", "Operational Compliance Reviews", "Policy & SOP Development", "Compliance Risk Monitoring", "Government Platform Assistance", "Audit Preparation Support"];

const isoPoints = ["ISO readiness assessments", "Documentation & SOP structuring", "Process gap identification", "Workflow standardization support", "Internal compliance coordination", "Operational process improvement", "Risk management documentation", "Audit preparation assistance"];

const regComplianceItems = ["Business compliance assessments", "Regulatory documentation review", "Commercial compliance support", "Internal policy development", "Compliance process structuring", "Corporate governance assistance", "Compliance reporting support", "Operational control recommendations"];

const industryCovers = ["Trading & distribution", "Professional services", "Manufacturing businesses", "Technology companies", "Construction & engineering", "Retail & e-commerce", "Healthcare support sectors", "Logistics & operational services"];

const platformSupport = ["Qiwa compliance coordination", "GOSI operational support", "ZATCA compliance assistance", "Muqeem process support", "MISA-related coordination", "Regulatory document organization", "Compliance renewal tracking", "Government submission guidance"];

const whyChoose = [
  { title: "KSA-Focused Regulatory Expertise", desc: "Advisory support designed around Saudi business regulations and operational frameworks." },
  { title: "Structured Compliance & Governance Support", desc: "Helping businesses build organized internal compliance systems and controls." },
  { title: "Practical Solutions for Growing Businesses", desc: "Supporting startups, SMEs, and expanding companies across multiple sectors." },
  { title: "Long-Term Operational Compliance Approach", desc: "Focused on sustainable compliance management instead of short-term fixes." },
];

const Regulatory_Compliance = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/servics/KSA/Trusted-Compliance-Support-for-Businesses-in-Saudi-Arabia.webp"
        heading={<>Regulatory & ISO Compliance<br /><span className="text-light-blue">Framework In Saudi Arabia</span></>}
        description="de tempête helps businesses across Saudi Arabia strengthen regulatory compliance, operational compliance, and support long-term business growth through structured compliance and ISO support services."
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 1018, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 4, label: "Awards Received" },
      ]} />

      {/* Trusted Compliance Support */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/Regulatory-Compliance-Services-in-Saudi-Arabia.webp" alt="Trusted Compliance Support" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Trusted Compliance Support<br /><span className="font-normal">For Businesses In Saudi Arabia</span></h2>
            <p className="mt-5 text-gray-500 leading-7">Operating in Saudi Arabia requires businesses to stay aligned with evolving regulatory requirements, operational compliance, and industry-specific compliance controls. From government platform registrations to internal process controls, businesses must maintain organized compliance systems to reduce risks and support sustainable growth.</p>
            <p className="mt-3 text-gray-500 leading-7"><span className="font-semibold text-gray-700">de tempête</span> provides regulatory and ISO compliance support services in Saudi Arabia, helping companies improve operational transparency, maintain compliance readiness, and strengthen business credibility across multiple sectors.</p>
          </div>
        </div>
      </section>

      {/* What We Handle For You */}
      <section className="py-20 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">What We Handle For You</h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-12" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {handleTags.map((t, i) => (
              <div key={i} className="bg-[#37456B] rounded-lg py-4 px-4 text-center text-white text-sm font-medium">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Regulatory Compliance<br /><span className="font-normal">Services In Saudi Arabia</span></h2>
            <p className="mt-5 text-gray-500"><span className="font-semibold text-gray-700">de tempête</span> supports businesses in Saudi Arabia with structured compliance management services to help organizations align with local operational and regulatory requirements.</p>
            <p className="mt-3 font-semibold text-gray-700">We help you with:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {regComplianceItems.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/freepik__creat-image-for-wesite-section-iso-standards-advis__80760.webp" alt="Regulatory Compliance Services" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* ISO Certification & Process Alignment */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/Trusted-Compliance-Support-for-Businesses-in-Saudi-Arabia.webp" alt="ISO Certification & Process Alignment" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">ISO Certification & <span className="font-normal">Process<br />Alignment Support</span></h2>
            <p className="mt-5 text-gray-500">We help businesses in Saudi Arabia prepare operational processes and documentation frameworks for ISO compliance readiness and long-term process improvement.</p>
            <p className="mt-3 font-semibold text-gray-700">We help you with:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {isoPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
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
            <h2 className="text-3xl font-bold text-[#16244b]">Industry-Specific <span className="font-normal">Compliance<br />Management</span></h2>
            <p className="mt-5 text-gray-500">Different industries in Saudi Arabia operate under different regulatory expectations. <span className="font-semibold text-gray-700">de tempête</span> helps businesses implement compliance practices based on operational and industry-specific requirements.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Support Covers:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {industryCovers.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/INdustry-specific.webp" alt="Industry-Specific Compliance Management" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Risk Monitoring & Operational Compliance Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/Modern-office-with-audit-tool.webp" alt="Risk Monitoring & Operational Compliance Reviews" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Risk Monitoring & <span className="font-normal">Operational</span> Compliance<br />Reviews</h2>
            <p className="mt-5 text-gray-500 leading-7">Strong compliance management helps businesses reduce operational risks, improve accountability, and maintain smoother day-to-day operations. <span className="font-semibold text-gray-700">de tempête</span> assists businesses in Saudi Arabia with compliance monitoring and operational reviews to identify process gaps, documentation weaknesses, and regulatory risks before they impact business continuity.</p>
          </div>
        </div>
      </section>

      {/* Government Platforms & Regulatory Coordination */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Government Platforms &<br /><span className="font-normal">Regulatory Coordination</span></h2>
            <p className="mt-5 text-gray-500">Our team assists businesses with compliance coordination related to major Saudi government and operational platforms required for business activities and workforce management.</p>
            <p className="mt-3 font-semibold text-gray-700">Platform Support Includes:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {platformSupport.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/Government-Platforms-Regulatory-Coordination.webp" alt="Government Platforms & Regulatory Coordination" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Why Businesses Choose de tempête */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">Why Businesses <span className="font-normal">Choose</span> <span className="italic font-light">de tempête</span></h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 flex gap-4">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Start Building Your Business<br />Compliance Framework <span className="font-bold">Today</span></>}
        subheading="Improve regulatory compliance, reduce risks, and strengthen business operations across Saudi Arabia."
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