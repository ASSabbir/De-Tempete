import { motion } from "framer-motion";

import {
  TbUsersGroup,
  TbChartLine,
  TbChartBar,
  TbScale,
  TbCalculator,
  TbShieldExclamation,
  TbAdjustmentsHorizontal,
  TbRocket,
  TbReportAnalytics,
  TbDoorExit,
  TbFileReport,
  TbGavel,
} from "react-icons/tb";
 
// Shared icon wrapper — keeps the same soft-circle / brand-blue look
// as the old inline SVGs, just swapped for a proper icon library.
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-light-blue/15 flex items-center justify-center text-light-blue text-2xl">
    {children}
  </div>
);
 
const services = [
  {
    title: "Valuation Consulting",
    description:
      "Expert guidance to help startups understand value drivers, financial assumptions, and investor expectations.",
    icon: (
      <IconWrap>
        <TbUsersGroup />
      </IconWrap>
    ),
  },
  {
    title: "Financial Modelling",
    description:
      "Detailed financial projections covering revenue, expenses, and cash flow — built to evaluate growth and profitability potential.",
    icon: (
      <IconWrap>
        <TbChartLine />
      </IconWrap>
    ),
  },
  {
    title: "Market & Industry Analysis",
    description:
      "Comprehensive assessment of market size, trends, growth opportunities, and competitive positioning.",
    icon: (
      <IconWrap>
        <TbChartBar />
      </IconWrap>
    ),
  },
  {
    title: "Comparable Company Analysis (CCA)",
    description:
      "Benchmarking with similar startups to provide realistic and investor-approved valuation insights.",
    icon: (
      <IconWrap>
        <TbScale />
      </IconWrap>
    ),
  },
  {
    title: "Valuation Method Analysis",
    description:
      "Use of multiple valuation models, revenue multiples, asset-based models, risk-adjusted methods, and more, to ensure accuracy.",
    icon: (
      <IconWrap>
        <TbCalculator />
      </IconWrap>
    ),
  },
  {
    title: "Risk Evaluation",
    description:
      "Assessment of operational, financial, technological, and regulatory risks that may impact valuation.",
    icon: (
      <IconWrap>
        <TbShieldExclamation />
      </IconWrap>
    ),
  },
  {
    title: "Scenario & Sensitivity Analysis",
    description:
      "Evaluation of best-case, worst-case, and realistic scenarios to understand how different factors influence valuation outcomes.",
    icon: (
      <IconWrap>
        <TbAdjustmentsHorizontal />
      </IconWrap>
    ),
  },
  {
    title: "Pre-Investment Valuation",
    description:
      "Helps founders negotiate equity, funding amounts, and investor terms confidently.",
    icon: (
      <IconWrap>
        <TbRocket />
      </IconWrap>
    ),
  },
  {
    title: "Post-Funding Assessment",
    description:
      "Updated valuation after fundraising to reflect growth, new financials, and market shifts.",
    icon: (
      <IconWrap>
        <TbReportAnalytics />
      </IconWrap>
    ),
  },
  {
    title: "Exit Strategy Valuation",
    description:
      "Valuation for mergers, acquisitions, IPO planning, or founder exit preparation.",
    icon: (
      <IconWrap>
        <TbDoorExit />
      </IconWrap>
    ),
  },
  {
    title: "Reporting & Documentation",
    description:
      "Clear, transparent, and audit-ready valuation reports with all assumptions, methodologies, and conclusions documented.",
    icon: (
      <IconWrap>
        <TbFileReport />
      </IconWrap>
    ),
  },
  {
    title: "Expert Testimony",
    description:
      "Professional representation for disputes, legal processes, or investor-related clarifications.",
    icon: (
      <IconWrap>
        <TbGavel />
      </IconWrap>
    ),
  },
];
 

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: (i % 3) * 0.1, ease: "easeOut" },
  }),
};

export default function BusinessValuationServices() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl text-[#0d1e4a] font-normal mb-12 lg:mb-16">
          Business Valuation <span className="font-extrabold">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col gap-3"
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 w-fit mb-1">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0d1e4a] font-bold text-base sm:text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}