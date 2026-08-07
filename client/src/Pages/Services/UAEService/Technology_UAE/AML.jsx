// File: AML.jsx
import { useState } from "react";
import { ShieldCheck, FileCheck2, UserSearch, ClipboardCheck } from "lucide-react";
import { LuChartColumnBig } from "react-icons/lu";
import { HiChevronDown } from "react-icons/hi";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from "../../../../Components/Shared/SevicsBanner";

// TODO: replace with your actual AML section images
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/al.webp'
import img2 from '../../../../asstes/img_temp/al2.webp'
import img3 from '../../../../asstes/img_temp/aml.webp'
import img4 from '../../../../asstes/img_temp/al3.webp'

const whyChoose = [
  {
    icon: ShieldCheck,
    text: "End-to-end AML, CFT & sanctions compliance support",
  },
  {
    icon: FileCheck2,
    text: "goAML & TFS registration handled correctly, first time",
  },
  {
    icon: UserSearch,
    text: "Robust KYC, CDD & beneficial owner verification",
  },
  {
    icon: ClipboardCheck,
    text: "Inspection-ready with independent audit & MoE support",
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
    q: "How often should the AML policy and risk assessment be updated?",
    a: "Review them regularly and whenever there are material changes in customers, services, jurisdictions, ownership, delivery channels, regulations or risk exposure.",
  },
  {
    q: "What is the difference between KYC, CDD and EDD?",
    a: "KYC verifies identity, CDD assesses the customer and relationship risk, and EDD applies deeper checks and approvals for higher-risk cases.",
  },
  {
    q: "Can the MLRO or Compliance Officer function be outsourced?",
    a: "It may be outsourced where permitted, but senior management remains responsible for the effectiveness and adequacy of the AML compliance framework.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between text-left gap-4"
    >
      <span className="text-lg font-semibold text-[#16244b]">{faq.q}</span>
      <HiChevronDown
        className={`text-light-blue text-2xl shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-500 leading-7">{faq.a}</p>
      </div>
    </div>
  </div>
);

const AML = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full">
      <SevicsBanner
        bgImage={bg}
        alt="UAE AML Compliance Services"
        description="From registration and risk assessment to regulatory reporting, independent review and compliance technology, our specialists provide end-to-end support that protects your business and keeps it inspection-ready."
        title1={'Stay Compliant. Build Trust.'}
        title2={' Operate With Confidence.'}
      ></SevicsBanner>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">
                UAE AML Compliance Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="text-light-blue text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* goAML Registration */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">goAML</span>
              <br />
              Registration
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Complete your UAE FIU onboarding correctly and efficiently.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              We support regulated businesses and DNFBPs with the complete
              goAML registration process, ensuring the required entity, user
              and compliance information is submitted accurately, portal
              access is activated, and post-registration obligations are
              clearly understood.
            </p>
          </div>
          <img
            src={img1}
            alt="goAML Registration"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* AML Policy and Procedures */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img2}
            alt="AML Policy and Procedures"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">AML Policy</span>
              <br />
              and Procedures
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Build a practical AML framework tailored to your business.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              We prepare risk-based AML/CFT policies and procedures that
              reflect your industry, customers and services — covering
              onboarding controls, CDD and escalation procedures, suspicious
              activity reporting, and record-keeping and governance
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* KYC Verification */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              KYC <span className="font-light">Verification</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              Verify customers and beneficial owners with confidence.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              We provide structured KYC verification for individual and
              corporate customers — from identity and corporate-document
              review to ultimate beneficial owner verification and
              source-of-funds checks — helping you maintain complete,
              reliable due-diligence records.
            </p>
          </div>
          <img
            src={img3}
            alt="KYC Verification"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* MoE Inspection Support */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img4}
            alt="MoE Inspection Support"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">MoE Inspection</span>
              <br />
              Support
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
              Prepare for the Ministry of Economy inspection with confidence.
            </p>
            <p className="mt-3 text-base leading-8 text-gray-500">
              Our specialists review your compliance framework, organise
              required evidence, and support your business before, during and
              after an MoE inspection — including pre-inspection readiness
              review, mock inspections, and response to findings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-light text-[#16244b]">
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
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
          "Free strategic consultation",
          "End-to-end AML & compliance specialists",
          "Inspection-ready documentation and evidence",
          "Ongoing regulatory support and reporting",
        ]}
      />
    </div>
  );
};

export default AML;