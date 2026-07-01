// File: Market_Expansion_Setup_Advisory.jsx
import { useState, useEffect } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaBuilding } from "react-icons/fa";
import {
  LuTarget,
  LuChartLine,
  LuShieldCheck,
  LuTriangleAlert,
  LuHandshake,
  LuFlag,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

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

const setupTypes = [
  {
    title: "Mainland",
    image:
      "/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp",
    items: [
      "100% foreign ownership",
      "Full UAE market access",
      "Physical office required",
      "Local sponsor required",
      "9% corporate tax",
      "5% VAT applicable",
      "Residence visa eligibility",
    ],
  },
  {
    title: "Free Zone",
    image:
      "/src/asstes/Images/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp",
    items: [
      "0% corporate tax",
      "Full foreign ownership",
      "Zone-restricted activities",
      "Office space required",
      "Annual audit required",
      "Residence visa eligibility",
      "VAT conditional rules",
    ],
  },
  {
    title: "Offshore",
    image:
      "/src/asstes/Images/servics/UK/UK-tax-compliance-workspace-concept.webp",
    items: [
      "Asset Protection",
      "Tax efficiency",
      "Quick setup process",
      "No UAE office",
      "No residence visa",
      "No minimum capital",
      "Audit not mandatory",
    ],
  },
];

const goToMarket = [
  {
    icon: LuTarget,
    title: "Target Market & Competitive Analysis",
    desc: "Assess market size, trends, demand potential, and your competitive positioning.",
  },
  {
    icon: LuChartLine,
    title: "Financial & ROI Modelling",
    desc: "Develop detailed financial projections — income, costs, profitability — and evaluate returns versus investments.",
  },
  {
    icon: LuShieldCheck,
    title: "Regulatory & Operational Readiness",
    desc: "Examine statutory, legal, and operational factors to ensure smooth market entry and execution.",
  },
  {
    icon: LuTriangleAlert,
    title: "Risk & Sensitivity Assessment",
    desc: "Identify risks and analyse how different scenarios could impact success.",
  },
  {
    icon: LuFlag,
    title: "Business Model Localisation",
    desc: "Adapt your pricing, offering, and structure to align with UAE market behavior and regulations.",
  },
  {
    icon: LuHandshake,
    title: "Partnerships & Distribution Planning",
    desc: "Identify potential local alliances and optimal routes to market.",
  },
];

const exportItems = [
  {
    title: "Assessing Your Export Readiness Before You Expand",
    desc: "Evaluate your operational, financial, and logistical readiness before entering export markets.",
  },
  {
    title: "Navigating Trade Regulations and Legal Requirements",
    desc: "Understand and comply with UAE and international trade regulations.",
  },
  {
    title: "Building Risk Management and Due Diligence Frameworks",
    desc: "Establish frameworks to identify and mitigate cross-border trade risks.",
  },
  {
    title: "Optimizing Documentation, Customs and Logistics Processes",
    desc: "Streamline documentation, customs clearance, and logistics operations.",
  },
  {
    title: "Creating Sustainable Export Systems for Long-Term Growth",
    desc: "Build scalable export systems that support long-term international growth.",
  },
];

const visaCards = [
  "Investor & Partner Visa Processing",
  "Dependent Visa Sponsorship",
  "Emirates ID & Medical Coordination",
  "Visa Renewals And Compliance",
];

const whyChoose = [
  {
    title: "Accurate and up-to-date financial records",
    desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "End-to-end support — from setup to residency",
    desc: "Deep knowledge of UAE business, legal & banking landscape.",
  },
  {
    title: "Tailored solutions for startups, SMEs & global investors",
    desc: "Deep knowledge of UAE business, legal & banking landscape.",
  },
  {
    title: "Transparent processes and ongoing compliance focus",
    desc: "Deep knowledge of UAE business, legal & banking landscape.",
  },
];

const Market_Expansion_Setup_Advisory = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Market Expansion & Setup Advisory UAE"
        heading={
          <>
            Expand With Confidence
            <br />
            <span className="text-light-blue">
              Establish Your Business Presence
            </span>
            <br />
            In The UAE The Right Way
          </>
        }
        description="The UAE continues to stand as the region's most attractive hub for global trade, investment, and innovation. Whether you're an international company entering the GCC market or a local business ready to scale, our Market Expansion & Setup Advisory services help you navigate every step — from strategy to execution, with clarity, compliance and confidence."
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

      {/* Business Setup & Registration */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#13264d]">
              Business Setup &{" "}
              <span className="font-extrabold">Registration</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              From entry formation to licensing, we simplify every stage of your
              UAE business setup.
            </p>
            <p className="mt-7 text-lg text-gray-600 leading-8">
              Our experts help you choose the right jurisdiction — Mainland,
              Free Zone, or Offshore — based on your ownership goals, industry
              type, and target market.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {setupTypes.map((item, index) => (
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
                  <div className="absolute bottom-4 left-6">
                    <div className="w-14 h-14 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg">
                      <FaBuilding className="text-white text-2xl" />
                    </div>
                  </div>
                  <h3 className="absolute bottom-5 left-24 text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {item.items.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-600 leading-7"
                      >
                        <FaCheckCircle className="text-cyan-400 text-lg mt-1 shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              We manage end-to-end documentation, government coordination, and
              licensing so you can focus on growth, not paperwork.
            </p>
            <button className="mt-8 inline-flex items-center gap-3 bg-linear-to-r from-cyan-400 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 duration-300 shadow-lg">
              Explore Complete Business Setup Service Guide
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Go-To-Market Strategy */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              <span className="font-bold">Go-To-Market</span> Strategy &
              Business Model Localisation
            </h2>
            <p className="mt-6 text-gray-500 leading-7">
              Success in the UAE market requires more than just registering a
              company, it requires understanding local culture, consumer
              behavior, and business dynamics. We help you tailor your business
              model, pricing, and operations to fit the UAE's regulatory and
              commercial landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
            {goToMarket.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <Icon className="text-4xl text-slate-500 mb-4" />
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

      {/* Export Readiness */}
      <section className="py-20 px-6 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Export Readiness, Trade{" "}
              <span className="block">Compliance & Logistics Advisory</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              We guide businesses on export licensing, customs documentation,
              and supply chain optimisation, ensuring your trade operations run
              smoothly across UAE borders.
            </p>
          </div>

          <div className="space-y-4">
            {exportItems.map((item, idx) => (
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

      {/* Bank Account & Trademark */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 space-y-16">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <img
              src="/src/asstes/Images/servics/Dubai-bank.webp"
              alt="Bank Account Opening"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#16244b]">
                Bank Account{" "}
                <span className="font-light">Opening Assistance</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-7">
                We coordinate with leading local and international banks to help
                you open and activate your account efficiently.
              </p>
              <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                Our team handles:
              </h4>
              <div className="space-y-3">
                {[
                  "Bank selection and eligibility guidance",
                  "Compliance documentation and submission",
                  "End-to-end coordination until account activation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#16244b]">
                Trademark{" "}
                <span className="font-light">Registration & IP Protection</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-7">
                We assist in trademark and intellectual property registration
                through the UAE Ministry of Economy — ensuring your brand, logo
                and products are legally safeguarded.
              </p>
              <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                Our support includes:
              </h4>
              <div className="space-y-3">
                {[
                  "Trademark search and registration",
                  "Patent and copyright advisory",
                  "IP renewal and protection strategy",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/src/asstes/Images/servics/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646.webp"
              alt="Trademark Registration"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Investor Visa */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Investor <span className="font-bold">Visa & UAE Residency</span>{" "}
              Support
            </h2>
            <p className="mt-6 text-slate-300 leading-7">
              Secure your place in the UAE with seamless investor and residency
              visa assistance. Our specialists manage all documentation and
              applications for smooth visa processing for investors, employees,
              and dependents. Services include:
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {visaCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartLine className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">UAE Market Expansion Advisory</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                  <LuChartLine className="text-cyan-400 text-2xl" />
                </div>
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
            Start Your UAE
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
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

export default Market_Expansion_Setup_Advisory;
