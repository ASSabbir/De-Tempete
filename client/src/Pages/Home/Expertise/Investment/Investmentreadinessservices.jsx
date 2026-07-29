import { motion } from "framer-motion";

import {
  TbClipboardText,
  TbChartLine,
  TbSearch,
  TbScale,
  TbGavel,
  TbPresentation,
  TbWallet,
  TbUsersGroup,
  TbNetwork,
  TbFileSearch,
  TbBriefcase,
  TbTarget,
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
    title: "Business Plan Review & Development",
    description:
      "We refine your business plan to clearly communicate your value proposition, market opportunity, competitive advantage, and growth strategy.",
    icon: (
      <IconWrap>
        <TbClipboardText />
      </IconWrap>
    ),
  },
  {
    title: "Financial Analysis & Projections",
    description:
      "Create accurate financial projections, including revenue, expenses, cash flow, and ROI, helping investors understand your potential returns and risks.",
    icon: (
      <IconWrap>
        <TbChartLine />
      </IconWrap>
    ),
  },
  {
    title: "Market Research & Analysis",
    description:
      "Gain in-depth insights into industry trends, target audience, and competitive landscape to strengthen your investment case.",
    icon: (
      <IconWrap>
        <TbSearch />
      </IconWrap>
    ),
  },
  {
    title: "Valuation Services",
    description:
      "Determine your business's fair value using trusted methodologies, ensuring transparency and credibility with investors.",
    icon: (
      <IconWrap>
        <TbScale />
      </IconWrap>
    ),
  },
  {
    title: "Legal & Compliance Guidance",
    description:
      "Our experts review contracts, intellectual property, and legal matters to minimize risk and enhance investor confidence.",
    icon: (
      <IconWrap>
        <TbGavel />
      </IconWrap>
    ),
  },
  {
    title: "Pitch Deck Creation",
    description:
      "Design visually compelling, content-rich pitch decks that highlight your business and investment opportunities.",
    icon: (
      <IconWrap>
        <TbPresentation />
      </IconWrap>
    ),
  },
  {
    title: "Investment Financial Planning",
    description:
      "Show potential investors exactly how their capital will be deployed and the expected return on investment.",
    icon: (
      <IconWrap>
        <TbWallet />
      </IconWrap>
    ),
  },
  {
    title: "Team Evaluation & Enhancement",
    description:
      "Assess your leadership team, recommend improvements, and ensure you have the right talent to execute your vision.",
    icon: (
      <IconWrap>
        <TbUsersGroup />
      </IconWrap>
    ),
  },
  {
    title: "Networking & Investor Introductions",
    description:
      "Leverage our network to connect with potential investors who align with your strategic goals.",
    icon: (
      <IconWrap>
        <TbNetwork />
      </IconWrap>
    ),
  },
  {
    title: "Due Diligence Support",
    description:
      "Prepare all necessary documentation and assist with investor due diligence for a smooth fundraising process.",
    icon: (
      <IconWrap>
        <TbFileSearch />
      </IconWrap>
    ),
  },
  {
    title: "Strategic Advisory",
    description:
      "Ongoing strategic guidance to refine growth plans, identify challenges, and adapt to market changes.",
    icon: (
      <IconWrap>
        <TbBriefcase />
      </IconWrap>
    ),
  },
  {
    title: "Market Fit & Product Analysis",
    description:
      "Continuously evaluate your product-market alignment and adjust offerings to maximize investor confidence.",
    icon: (
      <IconWrap>
        <TbTarget />
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

export default function InvestmentReadinessServices() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-[3vw] 2xl:text-[2.6rem] text-[#0d1e4a] font-normal mb-3">
            Investment Readiness <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            We provide comprehensive financial oversight to help you make confident, data-driven decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid font-inter grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
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
              <h3 className="text-[#0d1e4a] font-bold text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-base sm:text-base leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}