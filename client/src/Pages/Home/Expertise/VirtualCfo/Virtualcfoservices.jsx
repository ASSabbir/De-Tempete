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

// Icon wrapper — color adapts depending on whether the card is a "blue" or "white" tile
const IconWrap = ({ children, isDark }) => (
  <div
    className={`w-12 h-12 rounded-sm flex items-center justify-center text-2xl ${
      isDark ? "bg-white/15 text-white" : "bg-light-blue/20 text-light-blue"
    }`}
  >
    {children}
  </div>
);

const services = [
  {
    title: "Developing Financial Strategy",
    description:
      "We align your financial goals with your overall business objectives from capital allocation to investment planning and growth opportunities, ensuring your financial roadmap supports sustainable expansion.",
    Icon: TbTargetArrow,
  },
  {
    title: "Financial Reporting",
    description:
      "Our CFOs ensure accurate, timely, and compliant financial reporting, giving you a clear picture of your company's performance while maintaining accounting standards.",
    Icon: TbReportMoney,
  },
  {
    title: "Cash Flow & Accounting Management",
    description:
      "We manage budgeting, forecasting, scenario analysis, and pricing strategies — helping you maintain healthy cash flow and long-term financial stability.",
    Icon: TbCashBanknote,
  },
  {
    title: "Maintaining Investor Relations",
    description:
      "We communicate your financial performance and growth potential to investors, fostering trust, confidence, and strong relationships with key stakeholders.",
    Icon: TbUsersGroup,
  },
  {
    title: "Capital Management",
    description:
      "Our experts optimize your company's capital structure by balancing equity and debt, managing liquidity, and ensuring you have the resources to grow efficiently.",
    Icon: TbCoins,
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "We handle budgeting, forecasting, and performance analysis, empowering you with insights that drive better decisions and financial resilience.",
    Icon: TbChartLine,
  },
  {
    title: "Company Insights",
    description:
      "Our virtual CFOs identify cost-saving opportunities, streamline operations, and provide benchmarking and performance analytics to help you stay competitive.",
    Icon: TbBulb,
  },
  {
    title: "Compliance & Governance",
    description:
      "We ensure your organization adheres to all financial regulations and reporting standards, protecting you from legal risks and penalties.",
    Icon: TbShieldCheck,
  },
  {
    title: "Risk Management",
    description:
      "We assess financial risks, implement preventive strategies, and establish internal controls to safeguard your business against fraud and errors.",
    Icon: TbShieldLock,
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

        {/* 3x3 Chessboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
          {services.map((service, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            // Alternate like a chessboard: (row + col) even -> blue tile, odd -> white tile
            const isDark = (row + col) % 2 === 0;

            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`flex p-10 flex-col hover:shadow-2xl duration-300 gap-4 ${
                  isDark ? "bg-light-blue" : "bg-white"
                }`}
              >
                {/* Icon */}
                <div className="w-fit">
                  <IconWrap isDark={isDark}>
                    <service.Icon />
                  </IconWrap>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-xl 2xl:text-[1.1vw] leading-snug ${
                    isDark ? "text-[#0d1e4a]" : "text-[#0d1e4a]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[1vw] leading-relaxed text-justify ${
                    isDark ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}