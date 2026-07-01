import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = [
  {
    id: "uae",
    tab: "UAE (United Arab Emirates)",
    flag: "🇦🇪",
    shortName: "UAE",
    description:
      "Navigating business finances in the UAE requires expertise in VAT, compliance, and free zone regulations. Our Virtual CFOs help you manage cash flow, ensure audit readiness, and plan strategically for expansion, whether you operate in mainland or free zone.",
    focusAreas: [
      "VAT compliance",
      "Budgeting & forecasting",
      "Free zone accounting",
      "Corporate tax planning",
    ],
  },
  {
    id: "ksa",
    tab: "KSA (Saudi Arabia)",
    flag: "🇸🇦",
    shortName: "KSA",
    description:
      "Saudi Arabia's Vision 2030 is transforming the business landscape. Our Virtual CFOs help you navigate Zakat obligations, IFRS reporting, and local compliance while positioning your business for sustainable growth in the Kingdom.",
    focusAreas: [
      "Zakat & tax compliance",
      "IFRS financial reporting",
      "Cash flow optimization",
      "Vision 2030 readiness",
    ],
  },
  {
    id: "bd",
    tab: "Bangladesh",
    flag: "🇧🇩",
    shortName: "Bangladesh",
    description:
      "Bangladesh's growing economy offers significant opportunities. Our Virtual CFOs provide expertise in NBR compliance, VAT management, and financial strategy to help your business scale efficiently in this dynamic market.",
    focusAreas: [
      "NBR & VAT compliance",
      "Financial restructuring",
      "Investment planning",
      "Payroll management",
    ],
  },
  {
    id: "uk",
    tab: "United Kingdom (UK)",
    flag: "🇬🇧",
    shortName: "UK",
    description:
      "The UK's complex regulatory environment demands expert financial leadership. Our Virtual CFOs help you navigate HMRC compliance, Making Tax Digital, and post-Brexit financial strategies to keep your business compliant and competitive.",
    focusAreas: [
      "HMRC & MTD compliance",
      "Corporation tax planning",
      "Cash flow forecasting",
      "Financial reporting (FRS)",
    ],
  },
];

export default function HireCFORegion() {
  const [active, setActive] = useState("uae");

  const current = regions.find((r) => r.id === active);

  return (
    <section className="bg-[#f4f6fb] w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-4">
            Hire A Virtual CFO <span className="font-extrabold">In Your Region</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our Virtual CFO services are available worldwide, but we understand every market operates
            differently. Select your region below to see how our experts can help you meet local
            compliance, manage finances efficiently, and accelerate growth.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-0 mb-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`flex-1 min-w-[140px] px-4 py-3.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap
                ${active === r.id
                  ? "bg-[#0d1e4a] text-white"
                  : "bg-white text-gray-500 hover:text-[#0d1e4a] hover:bg-gray-50"
                }`}
            >
              {r.tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 flex flex-col items-center text-center gap-5"
          >
            {/* Flag */}
            <div className="text-6xl select-none">{current.flag}</div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#0d1e4a] font-normal">
              Virtual CFO Services In{" "}
              <span className="font-extrabold">{current.shortName}</span>
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              {current.description}
            </p>

            {/* Focus Areas */}
            <div
              className="w-full rounded-xl p-6 sm:p-8 text-left mt-2"
              style={{ background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)" }}
            >
              <p className="text-[#0d1e4a] font-bold text-sm mb-4">
                Focus Areas<span className="text-gray-500 font-normal">:</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 text-sm text-[#0d1e4a] font-medium">
                    <svg className="w-5 h-5 shrink-0 text-[#1a9fd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}