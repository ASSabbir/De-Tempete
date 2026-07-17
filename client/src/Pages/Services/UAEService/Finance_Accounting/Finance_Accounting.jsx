// File: Finance_Accounting.jsx
import { useState, useEffect } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import {
  LuFileSearch,
  LuShieldCheck,
  LuActivity,
  LuLandmark,
  LuTrendingUp,
  LuBriefcase,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const coreCards = [
  {
    title: "Accounting",
    image:
      "/src/asstes/Images/servics/Accounting.jpg",
    items: [
      "VAT-compliant accounting",
      "Chart of accounts setup",
      "Transaction recording",
      "Ledger & balance management",
    ],
  },
  {
    title: "Bookkeeping",
    image:
      "/src/asstes/Images/servics/Bookkeeping.jpg",
    items: [
      "Monthly transaction updates",
      "Expense & income categorization",
      "Bank & Cash reconciliation",
      "Payable/Receivable tracking",
      "Organized records",
    ],
  },
  {
    title: "Financial Reporting",
    image:
      "/src/asstes/Images/servics/Financial.webp",
    items: [
      "Monthly management reports",
      "P&L, Balance Sheet, Cash Flow",
      "Business performance snapshots",
      "Custom report formats",
      "Audit-ready summaries",
    ],
  },
];

const auditFeatures = [
  {
    icon: LuFileSearch,
    title: "Audit Coordination",
    desc: "We prepare required documents and manage communication with auditors for a smooth, stress-free statutory audit.",
  },
  {
    icon: LuActivity,
    title: "Internal Audits",
    desc: "We review financial and operational processes to identify gaps and strengthen internal controls.",
  },
  {
    icon: LuShieldCheck,
    title: "Risk Review",
    desc: "We assess business risks and recommend practical controls to protect your operations and assets.",
  },
  {
    icon: LuLandmark,
    title: "UAE Compliance",
    desc: "We ensure your finance processes meet UAE regulations, standards, and reporting requirements.",
  },
];

const budgetItems = [
  {
    title: "Budget Planning",
    desc: "Structured budget planning aligned with your business goals and revenue targets.",
  },
  {
    title: "Forecasting",
    desc: "Data-driven forecasting to anticipate future financial performance and trends.",
  },
  {
    title: "Cash Flow Tracking",
    desc: "Real-time cash flow tracking to maintain liquidity and operational stability.",
  },
  {
    title: "Scenario Analysis",
    desc: "Model different business scenarios to guide confident strategic decisions.",
  },
];

const modellingCards = [
  "Startup & SME Financial Modeling",
  "Feasibility & Scenario Analysis",
  "Revenue, Cost & Profitability Modeling",
  "Long-Term Financial Projections",
];

const whyChoose = [
  {
    title: "Transparent pricing & clear deliverables",
    desc: "Deep understanding of local labor laws and regulations.",
  },
  {
    title: "UAE-compliant systems & documentation",
    desc: "Manage employees anywhere with compliant EOR/PEO services.",
  },
  {
    title: "Secure, confidential financial handling",
    desc: "Reduce administrative burden and operational costs.",
  },
  {
    title: "Scalable solutions for startups & enterprises",
    desc: "Customized payroll and HR solutions for startups, SMEs, and corporates.",
  },
];

const Finance_Accounting = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Finance & Accounting"
        heading="Reliable. Compliant. Strategic."
        description={
          <>
            We Help UAE Businesses Simplify Their Financial Operations With
            End-To-End Accounting, Reporting, And Advisory Solutions.
            <br />
            <br />
            Whether you're a startup, SME, or fast-growing company, our team
            ensures full compliance, clean books, and data-driven financial
            clarity — so you can focus on scaling your business.
          </>
        }
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 9, label: "Years of Experience" },
          { icon: Globe, end: 20, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 30000,
            duration: 3000,
            label: "Clients Served",
          },
          { icon: Medal, end: 120, duration: 2500, label: "Awards Received" },
        ]}
      />

      {/* Core Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Accounting, Bookkeeping & Financial{" "}
              <span className="font-bold">Reporting</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Managing your finances shouldn't slow you down. We provide
              reliable, audit-ready accounting support that meets UAE regulatory
              standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {coreCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-5 left-6 text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {item.items.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 leading-6 text-sm"
                      >
                        <FaCheckCircle className="text-cyan-400 text-lg mt-0.5 shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Risk */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Statutory Audit Coordination, Internal{" "}
              <span className="font-bold">Audit & Risk Management</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We make audits stress-free by coordinating with auditors,
              preparing documents, and ensuring complete compliance. Beyond
              that, our internal audit and risk management services strengthen
              your financial controls.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-x-10 gap-y-14 mt-16">
            {auditFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="text-4xl text-slate-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Budgeting Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-2">
              Budgeting, Forecasting & Cash{" "}
              <span className="font-bold block">Flow Management</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              We support your financial planning with clear, data-driven
              insights that help you predict performance and maintain liquidity.
            </p>
          </div>

          <div className="space-y-4">
            {budgetItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-linear-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-sm">
                      ✦
                    </div>
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
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual CFO */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/UK/freepik__virtual-cfo-image-for-website__36106.webp"
            alt="Virtual CFO Services"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Virtual CFO <span className="font-light">Services</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Our Virtual CFO service gives you access to executive-level
              financial leadership — without the full-time cost. From strategic
              planning to financial governance, we guide your business toward
              profitability and long-term stability.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key areas:
            </h4>
            <div className="space-y-3">
              {[
                "Strategic financial planning",
                "Cost & profitability optimization",
                "KPI dashboards & investor reporting",
                "Capital structuring & financial governance",
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

      {/* Business Valuation */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Business <span className="font-light">Valuation</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We deliver professional valuation reports for investors, mergers,
              acquisitions, and business expansion decisions. Our valuation
              process ensures accurate insights based on financial data, market
              trends, and growth potential.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our valuation support includes:
            </h4>
            <div className="space-y-3">
              {[
                "Valuation for M&A & investments",
                "Market-based & asset-based valuation",
                "Scenario analysis & risk evaluation",
                "Investor-ready valuation reports",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/UK-tax-compliance-workspace-concept.webp"
            alt="Business Valuation"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Procurement Advisory */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp"
            alt="Procurement Advisory & Vendor Management"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Procurement Advisory &{" "}
              <span className="font-light">Vendor Management</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Optimize your operations with structured procurement systems and
              effective vendor management.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key areas:
            </h4>
            <div className="space-y-3">
              {[
                "Vendor evaluation & negotiation support",
                "Procurement process setup & optimization",
                "Contract & supplier performance management",
                "Day-to-day procurement & operational support",
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

      {/* Financial Modelling */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">
              Financial Modelling & Analysis
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              We create detailed financial models that help you evaluate new
              projects, forecast profitability, and support fundraising or
              strategic planning.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {modellingCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuTrendingUp className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Businesses In The UAE{" "}
              <span className="font-bold">Trust Us</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuBriefcase className="text-cyan-400 text-2xl shrink-0" />
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
        heading={
          <>
            Procurement Advisory &{" "}
            <span className="font-bold">
              Vendor
              <br />
              Management
            </span>
          </>
        }
        subheading="Optimize your operations with structured procurement systems and effective vendor management."
        commitmentItems={[
          "Vendor evaluation & negotiation support",
          "Procurement process setup & optimization",
          "Contract & supplier performance management",
          "Day-to-day procurement & operational support",
        ]}
      />

      <RecentBlogs
        blogs={[
          {
            id: 1,
            image: "/src/asstes/Images/New folder/council-tax.webp",
            title:
              "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
            desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
          },
          {
            id: 2,
            image:
              "/src/asstes/Images/New folder/self-assessment-tax-return.webp",
            title:
              "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
            desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
          },
          {
            id: 3,
            image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
            title:
              "The Role and Benefits of a Virtual CFO in Modern Businesses",
            desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
          },
        ]}
      />
    </div>
  );
};

export default Finance_Accounting;
