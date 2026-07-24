// File: Business_Advisory.jsx
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
  LuBuilding2,
  LuTrendingUp,
  LuWallet,
  LuFileSearch,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import strategicAdvisoryImg from '../../../../asstes/img_temp/Home/freepik__the-style-is-candid-image-photography-with-natural__92081-scaled.webp'
import exitStrategyImg from '../../../../asstes/img_temp/compliance-calendar-img.webp'


const valuationCards = [
  {
    icon: LuBuilding2,
    title: "Business Valuation",
    desc: "Accurate valuation reports based on financial performance, market position, and future earnings potential.",
  },
  {
    icon: LuTrendingUp,
    title: "Investment Feasibility Analysis",
    desc: "Evaluate potential investments and capital allocation decisions to ensure profitability and strategic fit.",
  },
  {
    icon: LuWallet,
    title: "ROI Forecasting",
    desc: "Project returns to support confident, data-driven investment and growth decisions.",
  },
  {
    icon: LuFileSearch,
    title: "Investor Readiness Support",
    desc: "Pitch decks, financial models, and due diligence preparation for funding rounds and investor conversations.",
  },
];

const maItems = [
  {
    title: "M&A Strategy & Due Diligence",
    desc: "Comprehensive financial and operational due diligence to identify risk before a deal closes.",
  },
  {
    title: "Deal Structuring & Negotiation",
    desc: "Support in building deal structures that protect your interests and align incentives on both sides.",
  },
  {
    title: "Business Restructuring Advisory",
    desc: "Operational, financial, and organizational restructuring designed for efficiency and long-term growth.",
  },
  {
    title: "Post-Merger Integration",
    desc: "Structured integration of teams, systems, and financial processes after a merger or acquisition closes.",
  },
];

const financialGrowth = [
  {
    title: "Financial Forecasting & Planning",
    desc: "Clear Projections To Guide Decision-Making And Investment.",
  },
  {
    title: "Profitability Analysis",
    desc: "Identify Strengths, Reduce Inefficiencies, And Improve Margins.",
  },
  {
    title: "Growth & Expansion Strategy",
    desc: "Structured Plans To Scale Into New Markets Or Product Lines.",
  },
  {
    title: "Risk Management Advisory",
    desc: "Assess Vulnerabilities And Build Strategies That Protect Your Business.",
  },
];

const whyChoose = [
  "Tailored solutions for startups, SMEs & large enterprises",
  "Data-driven insights for confident decision-making",
  "Full support across valuation, M&A, and exit planning",
  "Strong compliance, documentation & financial expertise",
];

const Business_Advisory = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <SevicsBanner
        bgImage={bgimg}
        alt="USA Business Advisory & Strategy Services"
        description="Make confident, informed business decisions with our comprehensive advisory and strategy services. From business valuation and investment advisory to mergers and acquisitions, exit planning, and financial growth strategy, we help US businesses navigate major decisions with clarity, data, and expert guidance at every stage."
        title1={"Strategic Advisory"}
        title2={"For Every Stage Of Your US Business"}
      ></SevicsBanner>

      {/* Strategic Business Advisory Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={strategicAdvisoryImg}
            alt="Strategic Business Advisory Overview"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Strategic Business</span>
              <br />
              <span className="font-bold">Advisory</span> & Consultancy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Guidance Built Around the Decisions That Matter Most
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We guide founders, executives, and investors through the
              business decisions with the highest stakes — from
              understanding what your company is worth to planning a merger,
              acquisition, or eventual exit.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key Points:
            </h4>
            <div className="space-y-3">
              {[
                "Business valuation & investment advisory",
                "Mergers, acquisitions & restructuring support",
                "Exit strategy & succession planning",
                "Financial strategy & growth consulting",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Valuation & Investment Advisory */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl leading-tight text-[#16244b] font-light">
            <span className="font-bold">Business Valuation</span> & Investment
            Advisory
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
            Know Your Worth. Make Smarter Investment Decisions.
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-500">
            Our valuation and investment advisory services help you
            understand the true financial position of your business,
            attract investors, and make informed strategic decisions backed
            by data.
          </p>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-4 gap-10 mt-16">
          {valuationCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="text-4xl text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* M&A Accordion */}
      <section className="py-20 px-6 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Mergers, Acquisitions &{" "}
              <span className="block">Restructuring Support</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm font-semibold">
              Strategic Support for M&A and Business Transformation
            </p>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
              Whether you're merging, acquiring, or restructuring operations,
              our advisors ensure a smooth, compliant, and strategic
              transition from start to finish.
            </p>
          </div>

          <div className="space-y-4">
            {maItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm">
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

      {/* Exit Strategy & Succession Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Exit Strategy</span> & Succession
              <br />
              Planning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Plan Your Exit with Confidence
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We help business owners prepare for a successful transition,
              whether you're selling, retiring, or passing the business to
              the next generation of leadership.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key Points
            </h4>
            <div className="space-y-3">
              {[
                "Exit Strategy Development",
                "Succession Planning",
                "Valuation & Deal Advisory",
                "Transition & Handover Guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={exitStrategyImg}
            alt="Exit Strategy & Succession Planning"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Financial Strategy & Growth Consulting */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              Financial Strategy &{" "}
              <span className="font-bold">Growth Consulting</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              <span className="font-semibold text-white">
                Build a Financial Strategy That Drives Growth
              </span>
              <br />
              We create actionable financial strategies that enhance
              profitability, strengthen cash flow, and support sustainable
              business expansion across your US operations.
            </p>
            <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {financialGrowth.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-bold text-white leading-relaxed">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b] leading-tight">
              Why Choose Our{" "}
              <span className="font-bold">
                Business Advisory & Consultancy Services
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
                <LuChartNoAxesCombined className="text-light-blue text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Make Smarter Business<br />Decisions <span className="font-bold">Today</span></>}
        bodyText="Get expert guidance to value, grow, restructure, or exit your US business with confidence."
        highlightText="Talk to Our Business Advisors"
      />

      
    </div>
  );
};

export default Business_Advisory;