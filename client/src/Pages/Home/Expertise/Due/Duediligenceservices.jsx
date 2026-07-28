import { motion } from "framer-motion";
import {
  TbChartBar,
  TbSettings,
  TbSearch,
  TbGavel,
  TbCalculator,
  TbCopyright,
  TbUsersGroup,
  TbUserCheck,
  TbServer,
  TbLeaf,
  TbPlugConnected,
  TbTrendingUp,
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
    title: "Financial Analysis",
    description:
      "Evaluating the target company's financial statements, including balance sheets, income statements, and cash flow statements, to assess its financial health, profitability, and sustainability.",
    icon: (
      <IconWrap>
        <TbChartBar />
      </IconWrap>
    ),
  },
  {
    title: "Operational Assessment",
    description:
      "Reviewing the target company's operational processes, management structure, and overall business strategy to identify any operational inefficiencies or areas of improvement.",
    icon: (
      <IconWrap>
        <TbSettings />
      </IconWrap>
    ),
  },
  {
    title: "Market Analysis",
    description:
      "Analyzing the target company's position within its industry and market trends to gauge its competitiveness and growth potential.",
    icon: (
      <IconWrap>
        <TbSearch />
      </IconWrap>
    ),
  },
  {
    title: "Legal and Regulatory Compliance",
    description:
      "Ensuring that the target company adheres to all applicable laws, regulations, permits, licenses, and contracts. This helps identify any potential legal liabilities or risks.",
    icon: (
      <IconWrap>
        <TbGavel />
      </IconWrap>
    ),
  },
  {
    title: "Valuation Method Analysis",
    description:
      "This service concentrates on the business's ability by using different model such as multiplier methods, asset-based valuation, time revenue method, risk analysis.",
    icon: (
      <IconWrap>
        <TbCalculator />
      </IconWrap>
    ),
  },
  {
    title: "Intellectual Property (IP) Evaluation",
    description:
      "Assessing the target company's intellectual property portfolio, such as patents, trademarks, copyrights, and trade secrets, to determine their value and protection.",
    icon: (
      <IconWrap>
        <TbCopyright />
      </IconWrap>
    ),
  },
  {
    title: "Customer and Supplier Relationships",
    description:
      "Understanding the target company's customer base and supplier relationships to assess the stability of its revenue streams and potential dependencies.",
    icon: (
      <IconWrap>
        <TbUsersGroup />
      </IconWrap>
    ),
  },
  {
    title: "Human Resources and Employee Relations",
    description:
      "Examining the target company's workforce, employee contracts, and overall human resources practices to identify any potential labour-related issues or challenges.",
    icon: (
      <IconWrap>
        <TbUserCheck />
      </IconWrap>
    ),
  },
  {
    title: "Technology and IT Infrastructure",
    description:
      "Reviewing the target company's technology assets and IT infrastructure to assess their reliability, security, and potential for future growth.",
    icon: (
      <IconWrap>
        <TbServer />
      </IconWrap>
    ),
  },
  {
    title: "Environmental and Sustainability Considerations",
    description:
      "Evaluating the target company's environmental impact, sustainability practices, and compliance with environmental regulations.",
    icon: (
      <IconWrap>
        <TbLeaf />
      </IconWrap>
    ),
  },
  {
    title: "Synergy and Integration Potential",
    description:
      "If the investment involves a merger or acquisition, evaluating how well the target company's operations and culture align with those of the acquiring company.",
    icon: (
      <IconWrap>
        <TbPlugConnected />
      </IconWrap>
    ),
  },
  {
    title: "Financial Projections and Valuation",
    description:
      "Creating financial projections based on various scenarios and methodologies to estimate the potential returns and valuation of the investment.",
    icon: (
      <IconWrap>
        <TbTrendingUp />
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

export default function DueDiligenceServices() {
  return (
    <section className="bg-gray-100 w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#0d1e4a] font-normal mb-3">
            Due Diligence <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            We provide comprehensive financial oversight to help you make confident, data-driven decisions.
          </p>
        </div>

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