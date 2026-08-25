// File: Compliance_Regulatory.jsx
import { useState } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

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
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";
import img1 from '../../../../asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp'
import img2 from '../../../../asstes/img_temp/servics/freepik__vat-registration-mtdcompliant-filing-image-for-web__26471.webp'
import img3 from '../../../../asstes/img_temp/servics/ACSP-Identity.webp'
import img4 from '../../../../asstes/img_temp/servics/Payroll-Services.webp'
import img5 from '../../../../asstes/img_temp/servics/freepik__pension-autoenrolment-mtdcompliance-realistic-imag__5367.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import ServiceGrid from "../../../../Components/Shared/Servicegrid";

const accountsCards = [
  {
    title: "Companies House Filing",
    desc: "Ensure all annual accounts are accurately prepared and submitted on time, fully compliant with UK regulations.",
  },
  {
    title: "GAAP-Aligned Accounts",
    desc: "Produce precise financial statements, balance sheets, and financial reports aligned with accounting standards.",
  },
  {
    title: "Error & Penalty Reduction",
    desc: "Minimise mistakes, avoid HMRC fines, and stay fully compliant with UK tax and reporting requirements.",
  },
  {
    title: "Transparent Reporting",
    desc: "Gain clear, actionable insights into your business performance for informed financial decisions.",
  },
  {
    title: "Year-End Adjustments & Reconciliations",
    desc: "Handle complex year-end adjustments and ensure all financial elements reflect true business numbers.",
  },
  {
    title: "Digital Filing Support",
    desc: "Submit accounts online via HMRC-approved digital filing platforms, ensuring fast, efficient and secure submission.",
  },
];

const ctFeatures = [
  {
    Icon: FaCalculator,
    title: "Accurate Tax Calculation & Adjustments",
    description:
      "We compute your corporation tax liability and apply all allowable deductions to minimise tax due.",
  },
  {
    Icon: LuChartNoAxesCombined,
    title: "Capital Allowances Optimisation",
    description:
      "Claim eligible asset allowances to reduce taxable profits and maximise savings.",
  },
  {
    Icon: FaFileInvoice,
    title: "Digital Submission to HMRC",
    description:
      "End-to-end online filing of your CT600 submission, error-free and on time.",
  },
  {
    Icon: FaShieldAlt,
    title: "Clear Review to Avoid Tax Risks",
    description:
      "Every submission is carefully reviewed to prevent errors, penalties, or HMRC queries.",
  },
  {
    Icon: FaFileInvoice,
    title: "Expert Advisory on Tax Planning",
    description:
      "Practical guidance on tax-saving strategies and future planning to keep your business compliant.",
  },
  {
    Icon: FaShieldAlt,
    title: "Handling HMRC Queries & Notices",
    description:
      "We liaise with HMRC on your behalf to resolve queries or notices effectively.",
  },
];

const selfAssessment = [
  "Company directors",
  "Consultants & contractors",
  "Sole traders & freelancers",
  "Landlords and individuals",
];

const vatFeatures = [
  "VAT registration & deregistration",
  "MTD-approved digital filing",
  "VAT advisory (Flat Rate, Standard, Zero-rated)",
  "Error-free submissions",
];

const acspFeatures = [
  "Fully compliant with UK regulations",
  "Secure, accurate, and error-free",
  "Fast and hassle-free — even for non-UK residents",
];

const payrollFeatures = [
  "PAYE tax & NI calculations",
  "RTI submissions to HMRC",
  "Payslips, statements, and deductions management",
];

const cisItems = [
  {
    title: "HMRC Subcontractor Verification",
    desc: "We verify subcontractor status directly with HMRC before payments are made.",
  },
  {
    title: "Monthly CIS Returns",
    desc: "Timely and accurate monthly CIS return submissions to HMRC.",
  },
  {
    title: "Deduction Statements",
    desc: "Accurate generation and distribution of subcontractor deduction statements.",
  },
  {
    title: "Compliance Monitoring for Contractors",
    desc: "Ongoing monitoring to keep contractor obligations fully compliant.",
  },
];

const niCards = [
  "Accurate NIC Calculations",
  "Director-Specific NIC Assessment",
  "Annual Reviews & Adjustments",
  "Compliance With Payroll & Self-Assessment",
];

const whyChoose = [
  "Expert knowledge of HMRC, Companies House & UK regulatory frameworks",
  "End-to-end compliance services under one roof",
  "Dedicated accounting & tax specialists",
  "Transparent and fixed pricing",
  "Zero missed deadlines, zero penalties",
];
const LuShieldCheck = FaShieldAlt;

const Compliance_Regulatory = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);
  const id = 'servics-uk-compliance'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bgimg}
        alt="UK Compliance"
        heading={
          <>
            Stay Compliant. Stay Confident.
            <br />
            <span className="text-light-blue">We Simplify UK Financial &</span>
            <br />
            Regulatory Obligations.
          </>
        }
        description={
          <>
            The UK regulatory landscape is complex, covering HMRC filings to
            payroll compliance, VAT rules, and CIS regulations. Whether you're a
            startup, SME, contractor, or growing business, our Compliance &
            Regulatory Services ensure accuracy, transparency, and full
            statutory compliance with zero hassle.


            <span className="text-base  text-gray-300">
              We handle the paperwork, deadlines, and reporting, so you stay
              focused on running your business.
            </span>
          </>
        }
      />

      <SecondSection></SecondSection>

      {/* Problem Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl 2xl:text-5xl font-bold text-[#14224A] mt-2">
            UK Compliance Burden
          </h2>
          <p className="mt-4 text-light-blue font-semibold text-base">
            Compliance in the UK Isn't Optional — It's Critical.
          </p>
          <p className="mt-6 text-gray-600 leading-8">
            From annual accounts to VAT, CIS, payroll, and MTD filing — every
            business must stay compliant or risk penalties, cash flow
            disruption, or legal trouble.
          </p>
          <p className="mt-8 font-semibold text-[#14224A]">
            Common challenges businesses face
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            {[
              "Confusing HMRC rules & deadlines",
              "Penalties for late or incorrect filing",
              "Complex CIS rules for contractors",
              "Manual errors in payroll & VAT",
              "Disconnect between bookkeeping & compliance",
              "Challenges with pension auto-enrolment compliance",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-light-blue text-base mt-1 shrink-0" />
                <span className="text-gray-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mb-20 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/uk'}></SharedFullButton>
      </div>

      {/* Company Accounts */}
      <section className="py-24 bg-white">
  <div className="max-w-[1600px] mx-auto px-6">
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-[#13264d]">
        Company Accounts{" "}
        <span className="font-extrabold">Preparation & Filing</span>
      </h2>

      <p className="mt-7 text-base text-gray-600 leading-8">
        Preparing and filing annual accounts can be stressful, especially
        when managing UK reporting standards. We handle everything from
        bookkeeping to submissions, so your accounts are accurate,
        compliant, and audit ready.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {accountsCards.map((c, i) => {
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

            {/* Title */}
            <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
              {c.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {c.desc}
            </p>
          </motion.div>
        );
      })}
    </div>

    <div className="text-center mt-16">
      <p className="text-gray-500 text-base mb-20">
        We manage end-to-end documentation, government coordination, and
        licensing so you can focus on growth, not paperwork.
      </p>

      <SharedFullButton
        text={"Explore Complete Business Setup Service Guide"}
        path={"/business-setup/uk"}
      />
    </div>
  </div>
</section>

      {/* Corporation Tax CT600 */}


      <ServiceGrid description={<div className="text-center max-w-5xl mx-auto">Optimised CT600 filing that minimises tax liability and ensures
        compliance. Corporation Tax filing can be complex and missing
        deadlines can lead to penalties. Our expert team handles your
        CT600 submissions accurately, helping you stay fully compliant
        while optimising your tax position.</div>}
        heading={<div className="text-center"><span className="font-bold">Corporation Tax</span> (CT600) Filing</div>}
        services={ctFeatures}></ServiceGrid>

      {/* Self Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img1}
            alt="Self-Assessment Tax Returns"
            className="w-full h-120 object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Self-Assessment</span>
              <br />
              Tax Returns
            </h2>
            <p className="mt-8 text-base leading-7 text-gray-500">
              Stress-free Self-Assessment Filing for Directors, Self-Employed,
              and High Earners. We handle your filing accurately and meet HMRC
              deadlines without hassle.
            </p>
            <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-base">
              Perfect for:
            </h4>
            <div className="space-y-4">
              {selfAssessment.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <FaCheckCircle className="text-light-blue text-2xl shrink-0" />
                  <span className="text-gray-600 text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VAT */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">VAT Registration</span> &
              MTD-Compliant Filing
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500">
              MTD-Compliant VAT Filing That Keeps You Penalty-Free. Navigating
              UK VAT rules, including Making Tax Digital (MTD), requires
              accuracy and proper software integration. We manage VAT
              registration, digital filings, and compliance monitoring.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our VAT support includes:
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
            alt="VAT Filing"
            className="w-full h-120 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ACSP */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img3}
            alt="ACSP Verification"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />{" "}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">ACSP Identity</span> Verification
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500">
              The ACSP verifies the identity of company officers before
              submitting filings to Companies House. Individuals that must be
              verified include — Company directors, Persons with Significant
              Control (PSC), Company Formation applicants.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-500">
              As an HMRC-registered agent and a Companies House Authorised
              Corporate Service Provider, we ensure every person is real and
              legally accountable for the business.
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

      {/* Payroll */}
      <section id="uk-payroll" className="pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Payroll Services</span>
              <br />
              (PAYE & RTI Compliance)
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500">
              Accurate, Timely Payroll Processing Fully Compliant with PAYE &
              RTI. Payroll mistakes lead to employee dissatisfaction and HMRC
              issues. We run your payroll flawlessly, every week or month, while
              keeping Real-Time Information (RTI) submissions compliant.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our payroll service covers:
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
            alt="Payroll Services"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Pension Auto-Enrolment */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img5}
            alt="Pension Auto-Enrolment Compliance"
            className="w-full h-120 object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Pension Auto-Enrolment</span>
              <br />
              Compliance
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-500">
              Ensure Your Business Meets All Auto-Enrolment Legal Requirements.
              Auto-enrolment is a legal requirement for UK employers. We manage
              your full pension compliance cycle from setup to ongoing
              monitoring.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our support includes:
            </h4>
            <div className="space-y-4">
              {[
                "Eligibility assessment of employees",
                "Employer contribution calculations",
                "Pension scheme setup & coordination",
                "Ongoing compliance & regulatory updates",
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

      {/* CIS Returns */}
      <section className="py-20 px-6 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Construction Industry{" "}
              <span className="block">Scheme (CIS) Returns</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              CIS compliance made simple for subcontractors and contractors. We
              handle verification, deductions, and monthly HMRC submissions so
              your payments are accurate and penalties avoided.
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
                  <div className="flex items-center gap-5">
                    <img src={logo} className="w-8" alt="" />
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-base">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NI Contributions */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl 2xl:text-5xl m leading-tight text-white font-light">
              National Insurance{" "}
              <span className="font-bold">Contributions Assessment</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-7 max-w-4xl mx-auto">
              Accurate NIC Assessments for Employees, Directors & Self-Employed.
              We calculate and assess National Insurance Contributions based on
              the latest HMRC rules — ensuring every payment is correct and
              compliant.
            </p>
            <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {niCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto">
                  <img src={logo} alt="" />
                </div>
                <h3 className="mt-10 text-xl font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
  <div className="max-w-[1600px] mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl 2xl:text-5xl font-light text-[#16244b] leading-tight">
        Why Choose Our{" "}
        <span className="font-bold">UK Compliance Advisory</span>
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        "Expert knowledge of HMRC, Companies House & UK regulatory frameworks",
        "End-to-end compliance services under one roof",
        "Dedicated accounting & tax specialists",
        "Transparent and fixed pricing",
        "Zero missed deadlines, zero penalties",
        "Proactive compliance support for long-term business stability",
      ].map((item, index) => {
        // Signature chessboard pattern:
        // Blue → White → Blue
        // White → Blue → White
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <div
            key={index}
            className={`flex p-10 min-h-[220px] flex-col justify-center gap-5 duration-300 hover:shadow-2xl ${
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

            {/* Text */}
            <p
              className={`text-base 2xl:text-[1vw] font-semibold leading-7 ${
                isDark ? "text-[#16244b]" : "text-gray-600"
              }`}
            >
              {item}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <ConsultationCTA
        id={id}
        heading={
          <>
            Start Your UK
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UK presence with confidence."
        commitmentItems={[
          "Free initial UK compliance consultation — no obligation",
          "100% confidential handling of your business and regulatory information",
          "Expert guidance on UK regulatory and statutory compliance",
          "Practical, transparent support to keep your business fully compliant",
        ]}
      />


    </div>
  );
};

export default Compliance_Regulatory;
