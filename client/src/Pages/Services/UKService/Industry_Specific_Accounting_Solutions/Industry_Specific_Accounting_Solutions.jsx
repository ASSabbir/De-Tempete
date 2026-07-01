// File: Industry_Specific_Accounting_Solutions.jsx
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
  LuBuilding,
  LuShoppingCart,
  LuStethoscope,
  LuHouse,
  LuUtensils,
  LuBriefcase,
  LuChartNoAxesCombined,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const industries = [
  {
    icon: LuBuilding,
    title: "Construction & Contractors",
    items: [
      "CIS compliance",
      "Subcontractor tax management",
      "Project cost tracking",
      "Cash flow control for long-term projects",
    ],
  },
  {
    icon: LuShoppingCart,
    title: "E-commerce & Online Businesses",
    items: [
      "Multi-channel sales reporting",
      "VAT for online sellers",
      "International tax considerations",
      "Inventory financial management",
    ],
  },
  {
    icon: LuStethoscope,
    title: "Healthcare & Medical Professionals",
    items: [
      "Private practice accounting",
      "NHS & mixed income structures",
      "Tax efficiency planning",
      "Regulatory compliance",
    ],
  },
  {
    icon: LuHouse,
    title: "Real Estate & Property Investment",
    items: [
      "Rental income structuring",
      "Capital gains planning",
      "Property tax optimisation",
      "Portfolio financial management",
    ],
  },
  {
    icon: LuUtensils,
    title: "Hospitality & Retail",
    items: [
      "Margin analysis",
      "Stock control systems",
      "Payroll management",
      "Seasonal cash flow forecasting",
    ],
  },
  {
    icon: LuBriefcase,
    title: "Professional Services Firms",
    items: [
      "Partner profit allocation",
      "Time-based revenue tracking",
      "Advisory growth planning",
      "Expense management",
    ],
  },
];

const servicesItems = [
  {
    title: "Sector-Specific Bookkeeping",
    desc: "We manage your bookkeeping with a clear understanding of your industry’s financial structure, revenue patterns, and cost models. From project-based accounting in construction to multi-channel reconciliation for e-commerce businesses, our bookkeeping ensures accurate records, clean audit trails, and real-time financial visibility tailored to your sector.",
  },
  {
    title: "Compliance & Regulatory Management",
    desc: "Every industry operates under specific UK regulations and reporting standards. We ensure your business remains fully compliant with HMRC requirements, industry regulators, and statutory obligations. Our proactive compliance management reduces risk, avoids penalties, and protects your company’s reputation.",
  },
  {
    title: "Tax-Efficient Structuring",
    desc: "Tax rules vary significantly across industries. We structure your business finances to maximise allowable deductions, optimise VAT positioning, and legally minimise tax exposure. Our goal is to enhance profitability while ensuring full compliance with UK tax legislation.",
  },
  {
    title: "Cash Flow Forecasting",
    desc: "Different industries experience different cash flow cycles. We develop forward-looking cash flow forecasts based on your sector’s operational patterns, helping you anticipate shortfalls, manage working capital, and maintain financial stability during growth or seasonal fluctuations.",
  },
  {
    title: "Business Performance Analysis",
    desc: "We analyse your financial data against industry benchmarks to measure profitability, cost efficiency, and operational performance. Our insights help you identify weaknesses, improve margins, and make informed strategic decisions backed by real financial evidence.",
  },
  {
    title: "Growth & Expansion Advisory",
    desc: "Whether expanding into new markets, launching new services, or scaling operations, we provide financial guidance aligned with your industry dynamics. From funding preparation to expansion modelling, we ensure your growth plans are financially structured, sustainable, and strategically sound.",
  },
];

const frameworks = [
  "Industry Risks",
  "Revenue Model",
  "Operational Structure",
  "Growth Goals",
];

const benefits = [
  {
    title: "Improved compliance",
    desc: "Stay aligned with UK regulations and industry standards while minimising legal and financial risks.",
  },
  {
    title: "Reduced tax exposure",
    desc: "Optimise your tax position through efficient structuring and strategic planning.",
  },
  {
    title: "Better financial forecasting",
    desc: "Make informed decisions with clear, data-driven financial projections.",
  },
  {
    title: "Accurate benchmarking",
    desc: "Measure performance against industry standards to identify strengths and improvement areas.",
  },
];

const blogs = [
  {
    id: 1,
    image: "/src/asstes/Images/New folder/council-tax.webp",
    title:
      "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
    desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
  },
  {
    id: 2,
    image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp",
    title:
      "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
    desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
  },
  {
    id: 3,
    image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
    title: "The Role and Benefits of a Virtual CFO in Modern Businesses",
    desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
  },
];

const Industry_Specific_Accounting_Solutions = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Industry-Specific Accounting Solutions"
        heading={
          <>
            Industry-Specific Accounting
            <br />
            <span className="text-light-blue">Solutions In The UK</span>
          </>
        }
        description="Different industries require different financial strategies. Generic accounting does not address industry regulations, margins, tax structures, or compliance complexities. We deliver tailored accounting solutions built specifically for your sector."
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 910,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 3, label: "Awards Received" },
        ]}
      />

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              Why Industry{" "}
              <span className="font-bold">
                Expertise
                <br />
                Matters
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Every industry has its own financial structure, compliance
              requirements, tax considerations, and operational challenges.
              Generic accounting often misses these details, which can lead to
              reporting errors, missed tax opportunities, and poor financial
              visibility. Our team understands the unique needs of each sector
              and provides accounting support tailored to how your business
              actually operates.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our team handles:
            </h4>
            <div className="space-y-3">
              {[
                "Unique regulatory requirements",
                "Different VAT structures",
                "Specific cost models",
                "Sector-based tax planning opportunities",
                "Industry benchmarks for performance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/Whether expanding into.webp"
            alt="Why Industry Expertise Matters"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Industries We Support */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Industries We <span className="font-bold">Support</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-16">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <Icon className="text-4xl text-slate-500 mb-5" />
                  <h3 className="text-xl font-bold text-[#16244b] mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((li, i) => (
                      <li key={i} className="text-gray-500 text-sm leading-6">
                        - {li}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Industry-Based Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-2">
              Our <span className="font-bold">Industry-Based</span> Services
              <br />
              Include
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              Here are professional, UK-market aligned descriptions you can
              place under each heading
            </p>
          </div>

          <div className="space-y-4">
            {servicesItems.map((item, idx) => (
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

      {/* Customised Financial Frameworks */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Customised Financial <span className="font-bold">Frameworks</span>
            </h2>
            <p className="mt-4 text-slate-300">
              We don't apply one-size-fits-all systems. We build financial
              structures tailored to your
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {frameworks.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Benefits Of{" "}
              <span className="font-bold">Industry-Focused Accounting</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <LuChartNoAxesCombined className="text-cyan-400 text-2xl shrink-0" />
                  <h3 className="text-lg font-bold text-[#16244b]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Get Accounting That
            <br />
            Understands{" "}
            <span className="font-bold">
              Your
              <br />
              Industry
            </span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UK presence with confidence."
        highlightText="Your business deserves financial expertise designed for your sector — not generic solutions."
      />

      <RecentBlogs blogs={blogs} />
    </div>
  );
};

export default Industry_Specific_Accounting_Solutions;
