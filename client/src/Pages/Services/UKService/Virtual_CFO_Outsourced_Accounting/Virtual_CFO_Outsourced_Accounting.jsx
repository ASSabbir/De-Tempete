// File: Virtual_CFO_Outsourced_Accounting.jsx
import { useState } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import {
  LuChartNoAxesCombined,
  LuTarget,
  LuWallet,
  LuFileText,
  LuHandCoins,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/UK/freepik__virtual-cfo-image-for-website__36106.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";

const cfoServices = [
  {
    icon: LuTarget,
    title: "Financial Strategy & Planning",
    items: [
      "Strategic budgeting",
      "Financial forecasting & scenario modelling",
      "Profitability analysis",
      "Growth planning",
    ],
  },
  {
    icon: LuWallet,
    title: "Cash Flow Management",
    items: [
      "Cash flow forecasting",
      "Working capital management",
      "Cost reduction strategies",
      "Liquidity monitoring",
    ],
  },
  {
    icon: LuFileText,
    title: "Financial Reporting & KPIs",
    items: [
      "Management accounts",
      "Monthly performance reports",
      "Custom KPI dashboards",
      "Board-level financial reporting",
    ],
  },
  {
    icon: LuHandCoins,
    title: "Investor & Funding Support",
    items: [
      "Financial projections",
      "Business financial modelling",
      "Investment readiness preparation",
      "Due diligence support",
    ],
  },
];

const outsourcedItems = [
  {
    title: "Bookkeeping",
    desc: "Accurate day-to-day recording of all financial transactions, kept up to date and fully reconciled.",
  },
  {
    title: "Payroll Coordination",
    desc: "End-to-end payroll processing, PAYE & NI calculations, and compliant payslip management.",
  },
  {
    title: "VAT Returns",
    desc: "Timely, accurate VAT preparation and MTD-compliant submissions to HMRC.",
  },
  {
    title: "Management Accounts",
    desc: "Regular management reporting giving you a clear, real-time view of business performance.",
  },
  {
    title: "Year-End Preparation",
    desc: "Full year-end accounts preparation, ready for filing and audit-ready documentation.",
  },
  {
    title: "Liaison with HMRC",
    desc: "We manage HMRC correspondence, queries, and compliance on your behalf.",
  },
];

const approach = [
  "Financial Health Assessment",
  "System Review & Optimisation",
  "Implementation Of Reporting Structure",
  "Ongoing Strategic Oversight",
];

const whyOutsourced = [
  {
    title: "Reduce operational costs",
    desc: "Lower your fixed expenses by outsourcing your finance function instead of maintaining a full in-house accounting team.",
  },
  {
    title: "Eliminate recruitment & training overhead",
    desc: "Avoid the time, cost, and risk associated with hiring, onboarding, and training accounting staff.",
  },
  {
    title: "Access experienced UK accounting professionals",
    desc: "Gain immediate access to qualified UK finance experts with up-to-date regulatory knowledge and industry experience.",
  },
  {
    title: "Improve reporting accuracy",
    desc: "Ensure precise, timely financial reporting that supports confident and informed business decision-making.",
  },
];

const Virtual_CFO_Outsourced_Accounting = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <HeroSection
        bgImage={bg}
        alt="Virtual CFO & Outsourced Accounting"
        heading={
          <>
            Virtual CFO & Outsourced
            <br />
            <span className="text-light-blue">
              Accounting Services In The UK
            </span>
          </>
        }
        description="Strategic financial leadership without the cost of a full-time CFO. Our Virtual CFO and Outsourced Accounting services provide UK businesses with expert financial oversight, reporting accuracy, cash flow control, and growth-focused decision support, all delivered remotely with complete transparency. Whether you're a startup, SME, or scaling enterprise, we become your financial backbone."
      />

      <SecondSection></SecondSection>

      {/* What Is A Virtual CFO */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              What Is A <span className="font-bold">Virtual CFO?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              A Virtual CFO delivers executive-level financial strategy,
              forecasting, and business planning without the expense of hiring
              an in-house Chief Financial Officer.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              We help you:
            </h4>
            <div className="space-y-3">
              {[
                "Understand your financial position clearly",
                "Improve profitability",
                "Control cash flow",
                "Prepare for investment or funding",
                "Build financial systems for sustainable growth",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img1}
            alt="What Is A Virtual CFO"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Our Virtual CFO Services */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Our <span className="font-bold">Virtual CFO</span> Services
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-x-16 gap-y-16 mt-16">
            {cfoServices.map((item, index) => {
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

      {/* Outsourced Accounting Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Outsourced Accounting <span className="block">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              If managing your internal accounts is time-consuming or
              inefficient, we fully manage your accounting function.
            </p>
          </div>

          <div className="space-y-4">
            {outsourcedItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md  flex items-center justify-center text-white text-sm">
                      <img src={logo} alt="" />
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

      {/* Our Approach */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Our <span className="font-bold">Approach</span>
            </h2>
            <p className="mt-4 text-slate-300">
              We work proactively, not reactively.
            </p>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {approach.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
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

      {/* Why Choose Outsourced Accounting */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose{" "}
              <span className="font-bold">Outsourced Accounting?</span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyOutsourced.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <LuChartNoAxesCombined className="text-light-blue text-2xl shrink-0" />
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
            Start Your UK{" "}
            <span className="font-bold">
              Virtual
              <br />
              CFO Today
            </span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UK presence with confidence."
        commitmentTitle="Let's Strengthen Your Financial Leadership"
        bodyText="Gain strategic clarity, financial control, and expert insight, without the cost of a full-time CFO."
      />

      {/* <RecentBlogs blogs={blogPosts} /> */}
    </div>
  );
};

export default Virtual_CFO_Outsourced_Accounting;
