// File: AML.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
import img1 from '../../../../asstes/img_temp/aml/1.webp'
import img2 from '../../../../asstes/img_temp/aml/2.webp'
import img3 from '../../../../asstes/img_temp/aml/3.webp'
import img4 from '../../../../asstes/img_temp/aml/4.webp'
import img5 from '../../../../asstes/img_temp/aml/5.webp'
import img6 from '../../../../asstes/img_temp/aml/6.webp'
import img7 from '../../../../asstes/img_temp/aml/7.webp'
import img8 from '../../../../asstes/img_temp/aml/8.webp'
import img9 from '../../../../asstes/img_temp/aml/9.webp'
import img10 from '../../../../asstes/img_temp/aml/10.webp'
import img11 from '../../../../asstes/img_temp/aml/11.webp'
import img12 from '../../../../asstes/img_temp/aml/12.webp'
import img13 from '../../../../asstes/img_temp/aml/13.webp'

import logo from '../../../../asstes/img_temp/logo.webp'
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";

// All 13 AML services, each rendered as a full image + checklist card
// (images cycle through the 4 available photos until real photography
// exists for every service)
const services = [
  {
    title: "Complete Your ",
    highlight: "goAML Registration Correctly & Efficiently",
    desc: "We support regulated businesses and DNFBPs with the complete goAML registration process, ensuring the required entity, user and compliance information is submitted accurately and portal access is activated without delay.",
    bullets: [
      "Eligibility & Registration Review",
      "Preparation of Required Information & Documents",
      "Compliance Officer & User Account Setup",
      "Portal Activation & Access Support",
      "Guidance on Post-Registration Obligations",
    ],
    image: img1,
    alt: "goAML Registration",
  },
  {
    title: "Meet UAE ",
    highlight: "Targeted Financial Sanctions Requirements",
    desc: "We assist businesses with TFS registration and initial setup so they can receive sanctions updates and establish the required compliance process.",
    bullets: [
      "TFS Registration & Account Setup",
      "Required User & Entity Information",
      "Portal Activation Support",
      "Initial Sanctions-Compliance Guidance",
      "Record of Registration & Responsible Personnel",
    ],
    image: img2,
    alt: "TFS Registration",
  },
  {
    title: "Build A Practical ",
    highlight: "AML Framework Tailored To Your Business",
    desc: "Our team prepares risk-based AML/CFT policies and procedures that reflect your industry, customers, services and regulatory exposure.",
    bullets: [
      "AML/CFT Policy & Procedure Manual",
      "Customer Onboarding & Acceptance Controls",
      "CDD & Escalation Procedures",
      "Suspicious Activity Reporting Process",
      "Record-Keeping & Governance Requirements",
    ],
    image: img3,
    alt: "AML Policy and Procedures",
  },
  {
    title: "Verify Customers & ",
    highlight: "Beneficial Owners With Confidence",
    desc: "We provide structured KYC verification support for individual and corporate customers, helping your business maintain complete and reliable due-diligence records at every stage of the customer lifecycle.",
    bullets: [
      "Individual & Corporate Identity Verification",
      "Corporate-Document Review",
      "Ultimate Beneficial Owner Verification",
      "Source-of-Funds Document Review",
      "KYC File Preparation & Periodic Updates",
    ],
    image: img4,
    alt: "KYC Verification",
  },
  {
    title: "Equip Your Team To ",
    highlight: "Recognise & Respond To Financial-Crime Risks",
    desc: "Our practical training programmes help employees understand UAE AML obligations and apply the correct controls in their daily roles.",
    bullets: [
      "Induction & Refresher Training",
      "Role-Based AML Awareness",
      "KYC & Suspicious-Activity Red Flags",
      "Sanctions & Reporting Responsibilities",
      "Attendance Records & Training Assessments",
    ],
    image: img5,
    alt: "Staff AML Training",
  },
  {
    title: "Access Experienced ",
    highlight: "Compliance Oversight Without Building A Full Team",
    desc: "We provide outsourced MLRO and compliance officer support to help businesses manage ongoing AML obligations, escalations and management reporting.",
    bullets: [
      "Ongoing Compliance Oversight",
      "Customer-Risk Review & Escalation",
      "Suspicious Activity Assessment",
      "Management & Board Reporting",
      "Regulatory Coordination & Compliance Calendar Support",
    ],
    image: img6,
    alt: "Outsourced MLRO / Compliance Officer",
  },
  {
    title: "Prepare For The ",
    highlight: "Ministry of Economy Inspection With Confidence",
    desc: "Our specialists review your compliance framework, organise required evidence and support your business before, during and after an MoE inspection — so nothing is left to chance.",
    bullets: [
      "Pre-Inspection Readiness Review",
      "Policy, Risk Assessment & KYC File Review",
      "Evidence & Document Preparation",
      "Mock Inspection & Staff Preparation",
      "Response to Findings & Corrective Actions",
    ],
    image: img7,
    alt: "MoE Inspection Support",
  },
  {
    title: "Test The Effectiveness Of ",
    highlight: "Your AML Framework Independently",
    desc: "We conduct objective reviews of your AML/CFT programme to identify control weaknesses, documentation gaps and areas requiring improvement.",
    bullets: [
      "Independent Policy & Control Review",
      "Sample Testing of KYC Files",
      "Risk-Assessment & Reporting Review",
      "Audit Findings & Recommendations",
      "Management Report & Follow-Up Review",
    ],
    image: img8,
    alt: "Independent AML Audit",
  },
  {
    title: "Automate Screening & ",
    highlight: "Strengthen Ongoing Compliance",
    desc: "de tempête helps businesses select, implement and optimize software for sanctions, PEP and adverse-media screening.",
    bullets: [
      "Software Needs Assessment",
      "Vendor Selection & Implementation Support",
      "Watchlist & Screening-Rule Setup",
      "User Onboarding & Training",
      "Testing, Validation & False-Positive Tuning",
    ],
    image: img9,
    alt: "Sanctions-Screening Software",
  },
  {
    title: "Understand Your ",
    highlight: "Overall AML Exposure & Prioritise The Right Controls",
    desc: "We prepare a documented enterprise-wide risk assessment aligned with your business model, customer base and operating environment.",
    bullets: [
      "Product & Service Risk Assessment",
      "Delivery-Channel Risk Assessment",
      "Jurisdiction & Geographical Risk Assessment",
      "Customer & Counterparty Risk Assessment",
      "Inherent & Residual Risk Evaluation",
    ],
    image: img10,
    alt: "Business / Enterprise-Wide Risk Assessment",
  },
  {
    title: "Prepare & Submit ",
    highlight: "Required UAE FIU Reports Accurately",
    desc: "We assist with the review, preparation and submission of DPMSR and REAR reports through goAML, including supporting documentation and internal records.",
    bullets: [
      "DPMSR Preparation & Submission Support",
      "REAR Preparation & Submission Support",
      "Transaction & Document Review",
      "Narrative & Supporting-Evidence Preparation",
      "Internal Approval & Filing Records",
    ],
    image: img11,
    alt: "Regulatory Reporting Through goAML (DPMSR/REAR)",
  },
  {
    title: "Identify Politically Exposed & ",
    highlight: "Reputationally High-Risk Customers",
    desc: "We conduct PEP and adverse-media screening to support customer onboarding, periodic review and risk escalation decisions.",
    bullets: [
      "PEP & Related-Party Screening",
      "Adverse-Media & Reputational-Risk Checks",
      "Potential-Match Review & Resolution",
      "Risk Classification & Escalation Support",
      "Screening Evidence & Audit Trail",
    ],
    image: img12,
    alt: "PEP and Adverse-Media Screening",
  },
  {
    title: "Build A Structured ",
    highlight: "Compliance Function For Long-Term Growth",
    desc: "For larger and growing businesses, we design and establish an internal AML department with clear governance, reporting lines and operating procedures.",
    bullets: [
      "Compliance Function Structure & Governance",
      "MLRO & Compliance Officer Role Design",
      "Internal Forms, Registers & Templates",
      "Compliance Calendar & Reporting Framework",
      "Technology, Staffing & Training Roadmap",
    ],
    image: img13,
    alt: "Internal AML Department Setup",
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
  const id ='uae-services-aml'

  return (
    <div className="w-full">
      <HeroSection
      id={id}
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

      {/* All 13 AML services — full image + checklist card, alternating sides/backgrounds */}
      {services.map((service, index) => {
        const imageFirst = index % 2 === 1; // alternate which side the image sits on
        const bgClass = index % 2 === 0 ? "bg-white" : "bg-[#F5F6F8]";
        return (
          <section key={index} className={`py-20 ${bgClass}`}>
            <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
              {imageFirst && (
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-2xl shadow-lg order-2 lg:order-1"
                />
              )}
              <div
                className={`flex flex-col justify-center ${
                  imageFirst ? "order-1 lg:order-2" : ""
                }`}
              >
                <h2 className="text-3xl font-bold text-[#16244b]">
                  {service.title}
                  <span className="font-light">{service.highlight}</span>
                </h2>
                <p className="mt-5 text-gray-500 leading-7">{service.desc}</p>
                <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                  Our support covers:
                </h4>
                <div className="space-y-3">
                  {service.bullets.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-light-blue text-base shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {!imageFirst && (
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              )}
            </div>
          </section>
        );
      })}
      <div className="mb-30 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/uae'}></SharedFullButton>
      </div>
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
                <div className="w-12 h-12 bg-white p-2 rounded-xl flex items-center justify-center mb-5">
                  <img src={logo} alt="" />
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

      

      <ConsultationCTA
      id={id}
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