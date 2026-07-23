// File: ComplianceUSA.jsx
import { useState } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import {
  LuChartNoAxesCombined,
} from "react-icons/lu";
import { FaFileInvoice, FaCalculator, FaShieldAlt } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp'
import img2 from '../../../../asstes/img_temp/servics/freepik__vat-registration-mtdcompliant-filing-image-for-web__26471.webp'
import img3 from '../../../../asstes/img_temp/servics/ACSP-Identity.webp'
import img4 from '../../../../asstes/img_temp/servics/Payroll-Services.webp'
import img5 from '../../../../asstes/img_temp/servics/freepik__pension-autoenrolment-mtdcompliance-realistic-imag__5367.webp'

const accountsCards = [
  {
    title: "Annual Report Preparation & Filing",
    desc: "Ensure annual reports are accurately prepared and submitted to every Secretary of State office on time, fully compliant with state requirements.",
  },
  {
    title: "Franchise Tax Compliance",
    desc: "Calculate and file franchise tax obligations correctly in every state where your business operates, minimizing exposure to penalties.",
  },
  {
    title: "Registered Agent Coordination",
    desc: "Manage registered agent service and legal notice forwarding so your business stays in good standing in every state of registration.",
  },
  {
    title: "Good Standing Maintenance",
    desc: "Monitor entity status across states to prevent administrative dissolution, revocation, or loss of good standing.",
  },
  {
    title: "State-Specific Filing Requirements",
    desc: "Navigate varying forms, fees, and deadlines across states with a team that tracks every state's individual filing rules.",
  },
  {
    title: "Digital Filing & Recordkeeping",
    desc: "Submit filings through state portals with secure, organized digital recordkeeping for fast, accurate, audit-ready compliance.",
  },
];

const ctFeatures = [
  {
    icon: FaCalculator,
    title: "Federal Filing Coordination",
    desc: "We coordinate with your tax preparer to ensure federal filings align with IRS requirements and reporting deadlines.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "EIN & Entity Structure Alignment",
    desc: "Keep your EIN records and entity classification consistent with IRS expectations to avoid mismatches and delays.",
  },
  {
    icon: FaFileInvoice,
    title: "IRS Correspondence Management",
    desc: "Track, review, and respond to IRS notices before deadlines pass, reducing the risk of penalties or escalation.",
  },
  {
    icon: FaShieldAlt,
    title: "Audit-Ready Recordkeeping",
    desc: "Maintain organized, well-documented compliance records that reduce audit exposure and simplify IRS inquiries.",
  },
  {
    icon: FaFileInvoice,
    title: "Federal Deadline Monitoring",
    desc: "Monitor federal filing deadlines and estimated payment dates so nothing is missed across the tax year.",
  },
  {
    icon: FaShieldAlt,
    title: "Cross-Agency Compliance Alignment",
    desc: "Keep federal and state compliance records consistent, avoiding conflicting filings or duplicate reporting.",
  },
];

const selfAssessment = [
  "Businesses with operations in multiple states",
  "E-commerce companies with distributed fulfillment",
  "Remote-first and hybrid workforce employers",
  "Franchises and multi-location businesses",
];

const vatFeatures = [
  "Economic nexus threshold monitoring",
  "Physical presence nexus assessment",
  "Sales tax registration trigger reviews",
  "State-by-state nexus risk reporting",
];

const acspFeatures = [
  "Centralized deadline tracking across all states",
  "Automated reminders before every filing due date",
  "Custom calendar built around your entity structure",
];

const payrollFeatures = [
  "Registered agent service in all required states",
  "Timely forwarding of legal & state notices",
  "Entity status monitoring and renewal alerts",
];

const cisItems = [
  {
    title: "Economic Nexus Threshold Review",
    desc: "We review sales volume and transaction counts against each state's economic nexus thresholds to identify filing obligations early.",
  },
  {
    title: "Physical Presence Assessment",
    desc: "We assess employees, inventory, and property that may create physical nexus in a state.",
  },
  {
    title: "State Registration Determination",
    desc: "Based on nexus findings, we determine exactly which states require registration and by when.",
  },
  {
    title: "Ongoing Nexus Monitoring",
    desc: "As your operations expand, we continuously monitor your footprint to flag new nexus exposure before it becomes a compliance issue.",
  },
];

const niCards = [
  "Annual Report Deadlines",
  "Franchise Tax Due Dates",
  "IRS Federal Filing Deadlines",
  "Registered Agent Renewal Dates",
];

const whyChoose = [
  "Deep expertise across all 50 state filing requirements",
  "Dedicated compliance specialists coordinating with the IRS",
  "Centralized compliance calendar across every jurisdiction",
  "Transparent, fixed-fee compliance packages",
  "Zero missed deadlines, zero avoidable penalties",
];
const LuShieldCheck = FaShieldAlt;

const ComplianceUSA = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <SevicsBanner bgImage={bgimg} alt="USA Compliance Services"
        description="Stay ahead of US regulatory compliance requirements with expert annual filings and ongoing compliance support. We help your business meet its obligations by managing annual state filings, multi-state compliance tracking, IRS compliance coordination, multi-state nexus analysis, and compliance calendar setup — ensuring your company stays fully compliant across every state you operate in."
        title1={'Stay Ahead of '}
        title2={'US Regulatory Compliance Requirements'}

      ></SevicsBanner>

      

      {/* Problem Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-light-blue font-semibold">
            THE COMPLIANCE CHALLENGE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#14224A] mt-2">
            US Compliance Burden
          </h2>
          <p className="mt-4 text-light-blue font-semibold text-lg">
            US Regulatory Compliance Isn't Optional — It's Critical.
          </p>
          <p className="mt-6 text-gray-600 leading-8">
            From annual state filings to IRS coordination, multi-state
            tracking, and nexus exposure — every business operating across
            state lines must stay compliant or risk penalties, loss of good
            standing, or costly legal complications.
          </p>
          <p className="mt-8 font-semibold text-[#14224A]">
            Common challenges businesses face
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            {[
              "Tracking annual filing deadlines across 50 states",
              "Penalties for late or missed state filings",
              "Complex nexus rules triggered by remote sales and employees",
              "Disconnected registered agent and compliance records",
              "IRS notices going unanswered or mishandled",
              "No centralized compliance calendar across jurisdictions",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-light-blue text-lg mt-1 shrink-0" />
                <span className="text-gray-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual State Compliance & Filings */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#13264d]">
              Annual State Compliance{" "}
              <span className="font-extrabold">& Filings</span>
            </h2>
            <div className="inline-block mt-5 px-5 py-1 rounded bg-[#2D7EF7] text-white font-semibold text-sm">
              State-by-State Filing Accuracy
            </div>
            <p className="mt-7 text-lg text-gray-600 leading-8">
              Preparing and filing annual state compliance documents can be
              overwhelming, especially when managing multiple state
              requirements at once. We handle everything from tracking to
              submission, so your filings are accurate, timely, and audit
              ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {accountsCards.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <h3 className="text-xl font-bold text-[#14224A] mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-500 leading-7">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IRS Compliance Coordination */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl leading-tight font-light text-[#16244b]">
              <span className="font-bold">IRS Compliance</span> Coordination
            </h2>
            <p className="mt-8 text-xl text-gray-500 leading-9 max-w-4xl mx-auto">
              Coordinated IRS compliance that keeps your federal obligations
              on track. Managing IRS correspondence and federal deadlines
              alongside state compliance can be complex, and missed notices
              can lead to penalties. Our team keeps your federal and state
              compliance records aligned and accurate.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-24">
            {ctFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 hover:bg-white hover:shadow-xl rounded-3xl duration-300"
                >
                  <Icon className="text-5xl text-slate-500 mb-6" />
                  <h3 className="text-2xl font-bold text-[#16244b] leading-snug mb-5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-8">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multi-State Compliance Tracking */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img1}
            alt="Multi-State Compliance Tracking"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Multi-State</span>
              <br />
              Compliance Tracking
            </h2>
            <p className="mt-8 text-xl leading-9 text-gray-500">
              Coordinated Compliance Tracking for Businesses Operating Across
              State Lines. We monitor filing requirements, deadlines, and
              obligations in every state where you do business — so nothing
              falls through the cracks.
            </p>
            <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
              Perfect for:
            </h4>
            <div className="space-y-4">
              {selfAssessment.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-2xl shrink-0" />
                  <span className="text-gray-600 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-State Nexus Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Multi-State Nexus</span>
              Analysis
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Clear Nexus Analysis That Keeps You Ahead of New Obligations.
              Determining where your business has created nexus — whether
              through sales, employees, or physical presence — requires
              accuracy and up-to-date knowledge of state thresholds. We
              manage nexus review, monitoring, and reporting.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our nexus analysis includes:
            </h4>
            <div className="space-y-4">
              {vatFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img2}
            alt="Multi-State Nexus Analysis"
            className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Compliance Calendar Setup */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img3}
            alt="Compliance Calendar Setup"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />{" "}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Compliance Calendar</span> Setup
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              A single, centralized calendar covering every state and
              federal deadline your business is responsible for — annual
              reports, franchise tax, IRS filings, and registered agent
              renewals.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-500">
              As your compliance partner, we build and maintain this
              calendar so every deadline is tracked, flagged in advance, and
              never missed.
            </p>
            <div className="space-y-4 mt-6">
              {acspFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registered Agent & Entity Maintenance */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Registered Agent</span>
              <br />
              & Entity Maintenance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Reliable Registered Agent Coverage in Every State You Operate.
              Missed legal notices can lead to default judgments or loss of
              good standing. We provide registered agent coverage and
              entity maintenance across every state where you're registered.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our entity maintenance covers:
            </h4>
            <div className="space-y-4">
              {payrollFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img4}
            alt="Registered Agent & Entity Maintenance"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* IRS Notice & Deadline Monitoring */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img5}
            alt="IRS Notice & Deadline Monitoring"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">IRS Notice</span>
              <br />
              & Deadline Monitoring
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Stay Ahead of Every IRS Deadline and Notice. Federal
              correspondence and estimated payment deadlines require prompt
              attention. We monitor, flag, and coordinate response to IRS
              activity so nothing is missed.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our support includes:
            </h4>
            <div className="space-y-4">
              {[
                "Monitoring of IRS notices and deadlines",
                "Review and response coordination for federal notices",
                "Estimated tax payment deadline tracking",
                "Ongoing coordination with your federal tax preparer",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Compliance Calendar Deadline Categories */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              Compliance Calendar{" "}
              <span className="font-bold">Deadline Categories</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              Every Deadline, Tracked and Categorized. We organize your
              compliance calendar around the deadline types that matter most
              — so your team always knows what's due, and when.
            </p>
            <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {niCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-5xl" />
                </div>
                <h3 className="mt-10 text-xl font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
{/* Nexus Determination Accordion */}
      <section className="py-20 px-6 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Nexus Determination &{" "}
              <span className="block">Multi-State Filing Obligations</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              Nexus analysis made simple for growing businesses. We review
              your sales, employees, and physical footprint against each
              state's thresholds so your filing obligations are clear and
              accurate.
            </p>
          </div>

          <div className="space-y-4">
            {cisItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <ConsultationCTA
        heading={
          <>
            Start Your USA Compliance
            <br />
            Journey <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly penalties, and keep your business fully compliant across every state you operate in."
        commitmentItems={[
          "Free initial compliance consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "US regulatory compliance experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />
      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b] leading-tight">
              Why Choose Our{" "}
              <span className="font-bold">USA Compliance Advisory</span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuShieldCheck className="text-light-blue text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ComplianceUSA;