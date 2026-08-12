// File: AML.jsx
import { useState, useEffect } from "react";
import {
  ChevronDown,
  FileCheck2,
  ShieldCheck,
  ClipboardList,
  UserSearch,
  GraduationCap,
  UserCog,
  ClipboardCheck,
  SearchCheck,
  ScanSearch,
  BarChart3,
  FileBarChart2,
  Users2,
  Building2,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SecondSection from "../../../../Components/Shared/SecondSection";

// TODO: replace with real AML-specific photography
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/al.webp'
import img2 from '../../../../asstes/img_temp/al2.webp'
import img3 from '../../../../asstes/img_temp/aml.webp'
import img4 from '../../../../asstes/img_temp/al3.webp'
import logo from '../../../../asstes/img_temp/logo.webp'

// Full remaining service list — everything not covered by the 3 image highlights below
const serviceSuite = [
  {
    icon: ShieldCheck,
    title: "TFS Registration",
    desc: "Registration and setup for UAE Targeted Financial Sanctions, including portal activation and initial sanctions-compliance guidance.",
  },
  {
    icon: ClipboardList,
    title: "AML Policy & Procedures",
    desc: "Risk-based AML/CFT policy manuals covering onboarding controls, CDD, escalation procedures and governance requirements.",
  },
  {
    icon: GraduationCap,
    title: "Staff AML Training",
    desc: "Role-based induction and refresher training so your team recognises red flags and understands reporting responsibilities.",
  },
  {
    icon: UserCog,
    title: "Outsourced MLRO / Compliance Officer",
    desc: "Ongoing compliance oversight, customer-risk review, escalation handling and management/board reporting.",
  },
  {
    icon: SearchCheck,
    title: "Independent AML Audit",
    desc: "Objective review of your AML/CFT programme — control testing, KYC file sampling, and a formal findings report.",
  },
  {
    icon: ScanSearch,
    title: "Sanctions-Screening Software",
    desc: "Vendor selection, implementation, watchlist rule setup and false-positive tuning for sanctions/PEP screening tools.",
  },
  {
    icon: BarChart3,
    title: "Enterprise-Wide Risk Assessment",
    desc: "Documented risk assessment across products, delivery channels, jurisdictions and customer base.",
  },
  {
    icon: FileBarChart2,
    title: "Regulatory Reporting (DPMSR/REAR)",
    desc: "Preparation and submission of DPMSR and REAR reports through goAML, with full supporting documentation.",
  },
  {
    icon: Users2,
    title: "PEP & Adverse-Media Screening",
    desc: "Identification of politically exposed and reputationally high-risk customers, with escalation support.",
  },
  {
    icon: Building2,
    title: "Internal AML Department Setup",
    desc: "Full compliance function design — governance, MLRO role structure, registers, and a training roadmap.",
  },
];

const faqs = [
  {
    q: "Who is required to comply with UAE AML regulations?",
    a: "UAE AML rules apply to regulated financial institutions and relevant DNFBPs, including real estate businesses, auditors, accountants, CSPs, legal professionals and dealers in precious metals and stones.",
  },
  {
    q: "Is goAML registration mandatory?",
    a: "Generally, yes, for businesses within regulated categories. goAML is the UAE FIU platform used to submit suspicious activity and other required regulatory reports.",
  },
  {
    q: "What is the difference between goAML registration and TFS registration?",
    a: "goAML is the UAE FIU reporting portal, while TFS compliance covers sanctions screening, match assessment, freezing actions and related reporting obligations.",
  },
  {
    q: "What documents should an AML-compliant business maintain?",
    a: "Businesses should retain AML policies, risk assessments, KYC and UBO records, screening results, reporting evidence, training records and management approvals.",
  },
  {
    q: "How often should the AML policy and risk assessment be updated?",
    a: "Review them regularly and whenever there are material changes in customers, services, jurisdictions, ownership, delivery channels, regulations or risk exposure.",
  },
  {
    q: "What is the difference between KYC, CDD and EDD?",
    a: "KYC verifies identity, CDD assesses the customer and relationship risk, and EDD applies deeper checks and approvals for higher-risk cases.",
  },
  {
    q: "When should a suspicious transaction or activity be reported?",
    a: "A report should be considered when there are reasonable grounds to suspect money laundering, terrorist financing, proliferation financing or related criminal activity.",
  },
  {
    q: "What are DPMSR and REAR reports?",
    a: "DPMSR applies to qualifying precious-metals and stones transactions, while REAR applies to certain real estate transactions reported through goAML.",
  },
  {
    q: "Can the MLRO or Compliance Officer function be outsourced?",
    a: "It may be outsourced where permitted, but senior management remains responsible for the effectiveness and adequacy of the AML compliance framework.",
  },
  {
    q: "What happens during a Ministry of Economy AML inspection?",
    a: "Inspectors may review risk assessments, policies, KYC files, screening records, goAML and TFS compliance, training, reporting history and remediation evidence.",
  },
];

const whyChoose = [
  {
    title: "End-to-End Coverage",
    desc: "From registration and policy design to screening technology and inspection support — every AML obligation handled under one roof.",
  },
  {
    title: "goAML & TFS Specialists",
    desc: "Direct, hands-on experience with UAE FIU onboarding, portal activation and Targeted Financial Sanctions requirements.",
  },
  {
    title: "Inspection-Ready Documentation",
    desc: "Policies, KYC files and evidence organised the way regulators expect, so an MoE inspection is never a scramble.",
  },
  {
    title: "Independent, Objective Reviews",
    desc: "Audit and risk-assessment work carried out with the rigour of a third party, not a rubber stamp.",
  },
  {
    title: "Scalable Compliance Support",
    desc: "Outsourced MLRO support for lean teams, or a full internal AML department build for growing businesses.",
  },
  {
    title: "Technology-Enabled Screening",
    desc: "Practical guidance on selecting and tuning sanctions, PEP and adverse-media screening software.",
  },
];

const AML = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <HeroSection
        bgImage={bgimg}
        alt="UAE AML Compliance Services"
        heading={
          <>
            Stay Compliant. Build Trust.
            <br />
            <span className="text-light-blue">
              Operate With Confidence.
            </span>
          </>
        }
        description="At de tempête, we help businesses in the UAE meet their anti-money laundering, counter-terrorist financing, sanctions and regulatory obligations with confidence. From registration and risk assessment to regulatory reporting, independent review and compliance technology, our specialists provide end-to-end support that protects your business and keeps it inspection-ready."
      />

      <SecondSection></SecondSection>

      {/* goAML Registration — highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Complete Your{" "}
              <span className="font-light">
                goAML Registration Correctly & Efficiently
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We support regulated businesses and DNFBPs with the complete
              goAML registration process, ensuring the required entity, user
              and compliance information is submitted accurately and portal
              access is activated without delay.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our support covers:
            </h4>
            <div className="space-y-3">
              {[
                "Eligibility & Registration Review",
                "Preparation of Required Information & Documents",
                "Compliance Officer & User Account Setup",
                "Portal Activation & Access Support",
                "Guidance on Post-Registration Obligations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img1}
            alt="goAML Registration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* KYC Verification — highlight */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img2}
            alt="KYC Verification"
            className="w-full h-full object-cover rounded-2xl shadow-lg order-2 lg:order-1"
          />
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Verify Customers &{" "}
              <span className="font-light">
                Beneficial Owners With Confidence
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We provide structured KYC verification support for individual
              and corporate customers, helping your business maintain
              complete and reliable due-diligence records at every stage of
              the customer lifecycle.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our support covers:
            </h4>
            <div className="space-y-3">
              {[
                "Individual & Corporate Identity Verification",
                "Corporate-Document Review",
                "Ultimate Beneficial Owner Verification",
                "Source-of-Funds Document Review",
                "KYC File Preparation & Periodic Updates",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MoE Inspection Support — highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Prepare For The{" "}
              <span className="font-light">
                Ministry of Economy Inspection With Confidence
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Our specialists review your compliance framework, organise
              required evidence, and support your business before, during
              and after an MoE inspection — so nothing is left to chance.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our support covers:
            </h4>
            <div className="space-y-3">
              {[
                "Pre-Inspection Readiness Review",
                "Policy, Risk Assessment & KYC File Review",
                "Evidence & Document Preparation",
                "Mock Inspection & Staff Preparation",
                "Response to Findings & Corrective Actions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img3}
            alt="MoE Inspection Support"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Complete AML Service Suite — remaining 10 services */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Our Complete <span className="font-bold">AML Service Suite</span>
            </h2>
            <p className="mt-4 text-gray-500">
              Every Compliance Obligation, Covered Under One Roof
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6 mt-16">
            {serviceSuite.map((item, index) => (
              <div key={index} className="hover:bg-white p-7 rounded-xl transition-all duration-300">
                <item.icon
                  className="bg-light-blue/20 text-light-blue p-1 rounded-sm mb-3"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked{" "}
              <span className="block">Questions</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Clear Answers to Common UAE AML Compliance Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 shrink-0 transition-transform ${
                      expandedItem === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-base leading-7">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">
              Why Choose Our{" "}
              <span className="font-normal">AML Compliance Services</span>
            </h2>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-5">
                  <LuChartNoAxesCombined className="text-white text-2xl" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Stay Ahead of
            <br />
            <span className="font-bold">Regulatory Risk</span>
          </>
        }
        subheading="From goAML and TFS registration to KYC, independent audits and inspection readiness, our specialists help your business stay compliant, protected and confident."
        commitmentItems={[
          "Free strategic consultation — no obligation",
          "End-to-end AML & compliance specialists",
          "Inspection-ready documentation and evidence",
          "Ongoing regulatory support and reporting",
        ]}
      />
    </div>
  );
};

export default AML;