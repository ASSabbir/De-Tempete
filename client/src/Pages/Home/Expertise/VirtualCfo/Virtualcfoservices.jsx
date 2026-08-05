import { motion } from "framer-motion";

import {
  TbTargetArrow,
  TbReportMoney,
  TbCashBanknote,
  TbUsersGroup,
  TbCoins,
  TbChartLine,
  TbBulb,
  TbShieldCheck,
  TbShieldLock,
} from "react-icons/tb";
 
// Shared icon wrapper — keeps the same soft-circle / brand-blue look
// as the old inline SVGs, just swapped for a proper icon library.
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 rounded-sm bg-light-blue/20 flex items-center justify-center text-light-blue text-2xl">
    {children}
  </div>
);
 
const services = [
  {
    title: "Developing Financial Strategy",
    description:
      "We align your financial goals with your overall business objectives from capital allocation to investment planning and growth opportunities, ensuring your financial roadmap supports sustainable expansion.",
    icon: (
      <IconWrap>
        <TbTargetArrow />
      </IconWrap>
    ),
  },
  {
    title: "Financial Reporting",
    description:
      "Our CFOs ensure accurate, timely, and compliant financial reporting, giving you a clear picture of your company's performance while maintaining accounting standards.",
    icon: (
      <IconWrap>
        <TbReportMoney />
      </IconWrap>
    ),
  },
  {
    title: "Cash Flow & Accounting Management",
    description:
      "We manage budgeting, forecasting, scenario analysis, and pricing strategies — helping you maintain healthy cash flow and long-term financial stability.",
    icon: (
      <IconWrap>
        <TbCashBanknote />
      </IconWrap>
    ),
  },
  {
    title: "Maintaining Investor Relations",
    description:
      "We communicate your financial performance and growth potential to investors, fostering trust, confidence, and strong relationships with key stakeholders.",
    icon: (
      <IconWrap>
        <TbUsersGroup />
      </IconWrap>
    ),
  },
  {
    title: "Capital Management",
    description:
      "Our experts optimize your company's capital structure by balancing equity and debt, managing liquidity, and ensuring you have the resources to grow efficiently.",
    icon: (
      <IconWrap>
        <TbCoins />
      </IconWrap>
    ),
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "We handle budgeting, forecasting, and performance analysis, empowering you with insights that drive better decisions and financial resilience.",
    icon: (
      <IconWrap>
        <TbChartLine />
      </IconWrap>
    ),
  },
  {
    title: "Company Insights",
    description:
      "Our virtual CFOs identify cost-saving opportunities, streamline operations, and provide benchmarking and performance analytics to help you stay competitive.",
    icon: (
      <IconWrap>
        <TbBulb />
      </IconWrap>
    ),
  },
  {
    title: "Compliance & Governance",
    description:
      "We ensure your organization adheres to all financial regulations and reporting standards, protecting you from legal risks and penalties.",
    icon: (
      <IconWrap>
        <TbShieldCheck />
      </IconWrap>
    ),
  },
  {
    title: "Risk Management",
    description:
      "We assess financial risks, implement preventive strategies, and establish internal controls to safeguard your business against fraud and errors.",
    icon: (
      <IconWrap>
        <TbShieldLock />
      </IconWrap>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.12, ease: "easeOut" },
  }),
};

export default function VirtualCFOServices() {
  return (
    <section className="bg-[#f4f6fb] w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-4xl 2xl:text-[3vw] text-[#0d1e4a] font-normal mb-3">
            Virtual CFO <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-500 text-sm 2xl:text-[1vw] ">
            <span className="font-bold italic text-[#0d1e4a]">de tempête</span> provide comprehensive
            financial oversight to help you make confident, data driven decisions.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group flex hover:bg-white p-10 flex-col gap-4"
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 w-fit">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0d1e4a] font-bold text-xl 2xl:text-[1.1vw] leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[1vw]leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}