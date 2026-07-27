
import { motion } from "framer-motion";

import {
  TbChartLine,
  TbShieldCheck,
  TbChartPie,
  TbReceiptTax,
  TbArrowsExchange,
  TbChartBar,
  TbChecklist,
  TbHeadset,
  TbNews,
  TbPercentage,
  TbDoorExit,
} from "react-icons/tb";

// Shared icon wrapper — keeps the same soft-circle / brand-blue look
// as the old inline SVGs, just swapped for a proper icon library.
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-light-blue/20 flex items-center justify-center text-light-blue text-2xl">
    {children}
  </div>
);

const services = [
  {
    title: "Portfolio Monitoring & Analysis",
    description:
      "We track market movements, evaluate performance indicators, and identify opportunities to optimize your portfolio's growth.",
    icon: (
      <IconWrap>
        <TbChartLine />
      </IconWrap>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Our team identifies risk exposure and implements mitigation strategies to safeguard your investments without compromising growth.",
    icon: (
      <IconWrap>
        <TbShieldCheck />
      </IconWrap>
    ),
  },
  {
    title: "Diversification Strategies",
    description:
      "Reduce concentration risk through smart, data-driven asset diversification and portfolio balancing.",
    icon: (
      <IconWrap>
        <TbChartPie />
      </IconWrap>
    ),
  },
  {
    title: "Tax Optimization",
    description:
      "We help structure your investments tax-efficiently, increasing your net returns and long-term gains.",
    icon: (
      <IconWrap>
        <TbReceiptTax />
      </IconWrap>
    ),
  },
  {
    title: "Rebalancing Plans",
    description:
      "We systematically rebalance your portfolio to maintain alignment with your financial goals and risk appetite.",
    icon: (
      <IconWrap>
        <TbArrowsExchange />
      </IconWrap>
    ),
  },
  {
    title: "Performance Reporting",
    description:
      "Receive transparent, easy-to-understand performance reports tracking returns, growth, risks, and overall portfolio health.",
    icon: (
      <IconWrap>
        <TbChartBar />
      </IconWrap>
    ),
  },
  {
    title: "Financial Planning Updates",
    description:
      "Your financial objectives evolve — and so should your investments. We refine your strategy regularly to keep it on track.",
    icon: (
      <IconWrap>
        <TbChecklist />
      </IconWrap>
    ),
  },
  {
    title: "Access to Expert Advice",
    description:
      "Our financial specialists are always available to discuss concerns, strategies, or new opportunities.",
    icon: (
      <IconWrap>
        <TbHeadset />
      </IconWrap>
    ),
  },
  {
    title: "Education & Insights",
    description:
      "Stay informed with market insights, trends, and expert commentary to make smarter financial decisions.",
    icon: (
      <IconWrap>
        <TbNews />
      </IconWrap>
    ),
  },
  {
    title: "Dividend & Interest Management",
    description:
      "We manage distribution cycles for income-generating assets with precision and transparency.",
    icon: (
      <IconWrap>
        <TbPercentage />
      </IconWrap>
    ),
  },
  {
    title: "Liquidation & Exit Strategies",
    description:
      "When it's time to exit, we ensure a smooth process that minimizes disruption, protects value, and considers all tax implications.",
    icon: (
      <IconWrap>
        <TbDoorExit />
      </IconWrap>
    ),
  },
];



const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: (i % 3) * 0.1, ease: "easeOut" },
  }),
};

export default function PostInvestmentMonitoring() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl text-[#0d1e4a] font-normal mb-12 lg:mb-16">
          Post-Investment <span className="font-extrabold">Monitoring</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col gap-3"
            >
              <div className="mb-1 w-fit transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {s.icon}
              </div>
              <h3 className="text-[#0d1e4a] font-bold text-sm sm:text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}