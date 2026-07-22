// File: IndustrySpecificUSA.jsx
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
  LuShip,
  LuRocket,
  LuChartNoAxesCombined,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import industryExpertiseImg from '../../../../asstes/img_temp/servics/UK/Whether-expanding-into.webp'


const industries = [
  {
    icon: LuShoppingCart,
    title: "E-commerce & Amazon Sellers",
    items: [
      "Multi-channel sales reconciliation",
      "Sales tax nexus tracking by state",
      "Amazon FBA & marketplace fee accounting",
      "Inventory and COGS management",
    ],
  },
  {
    icon: LuRocket,
    title: "SaaS & Startups",
    items: [
      "Subscription & recurring revenue accounting",
      "Deferred revenue recognition",
      "Investor-ready financial reporting",
      "Burn rate & runway tracking",
    ],
  },
  {
    icon: LuHouse,
    title: "Real Estate Investors",
    items: [
      "Rental income & expense tracking",
      "Multi-property portfolio accounting",
      "Depreciation & capital gains planning",
      "1031 exchange support coordination",
    ],
  },
  {
    icon: LuBriefcase,
    title: "Consultants & Agencies",
    items: [
      "Project & client-based revenue tracking",
      "Contractor & 1099 payment management",
      "Utilization & profitability analysis",
      "Cash flow management for service billing",
    ],
  },
  {
    icon: LuShip,
    title: "Import/Export Businesses",
    items: [
      "Landed cost & customs accounting",
      "Multi-currency transaction management",
      "Cross-border compliance coordination",
      "Supply chain cost tracking",
    ],
  },
];

const servicesItems = [
  {
    title: "Sector-Specific Bookkeeping",
    desc: "We manage your bookkeeping with a clear understanding of your industry's financial structure, revenue patterns, and cost models. From FBA fee reconciliation for e-commerce sellers to deferred revenue tracking for SaaS businesses, our bookkeeping ensures accurate records, clean audit trails, and real-time financial visibility tailored to your sector.",
  },
  {
    title: "Compliance & Regulatory Management",
    desc: "Every industry operates under specific US federal and state regulations and reporting standards. We ensure your business remains fully compliant with IRS requirements, sales tax obligations, and industry-specific reporting rules. Our proactive compliance management reduces risk, avoids penalties, and protects your company's reputation.",
  },
  {
    title: "Tax-Efficient Structuring",
    desc: "Tax rules vary significantly across industries. We structure your business finances to maximize allowable deductions, optimize sales tax positioning, and legally minimize federal and state tax exposure. Our goal is to enhance profitability while ensuring full compliance with US tax legislation.",
  },
  {
    title: "Cash Flow Forecasting",
    desc: "Different industries experience different cash flow cycles. We develop forward-looking cash flow forecasts based on your sector's operational patterns, helping you anticipate shortfalls, manage working capital, and maintain financial stability during growth or seasonal fluctuations.",
  },
  {
    title: "Business Performance Analysis",
    desc: "We analyze your financial data against industry benchmarks to measure profitability, cost efficiency, and operational performance. Our insights help you identify weaknesses, improve margins, and make informed strategic decisions backed by real financial evidence.",
  },
  {
    title: "Growth & Expansion Advisory",
    desc: "Whether expanding into new states, launching new product lines, or scaling operations, we provide financial guidance aligned with your industry dynamics. From funding preparation to expansion modeling, we ensure your growth plans are financially structured, sustainable, and strategically sound.",
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
    desc: "Stay aligned with US federal and state regulations and industry standards while minimizing legal and financial risks.",
  },
  {
    title: "Reduced tax exposure",
    desc: "Optimize your federal and state tax position through efficient structuring and strategic planning.",
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



const IndustrySpecificUSA = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <SevicsBanner
        bgImage={bgimg}
        alt="USA Industry-Specific Accounting Solutions"
        description="Get accounting support built around how your business actually operates. From e-commerce and SaaS to real estate, consulting, and import/export, we provide industry-specific accounting solutions that address the unique revenue models, compliance requirements, and cost structures of your sector."
        title1={"Industry-Specific"}
        title2={"Accounting Solutions For US Businesses"}
      ></SevicsBanner>

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
                "Different sales tax structures",
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
            src={industryExpertiseImg}
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
              Business Compliance USA support tailored to the way each
              industry actually operates
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
              Customized Financial <span className="font-bold">Frameworks</span>
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
        subheading="Get expert guidance, avoid costly delays, and build your US presence with confidence."
        highlightText="Your business deserves financial expertise designed for your sector — not generic solutions."
      />

      
    </div>
  );
};

export default IndustrySpecificUSA;