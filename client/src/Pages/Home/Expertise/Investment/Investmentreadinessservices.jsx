import { motion } from "framer-motion";

const services = [
  {
    title: "Business Plan Review & Development",
    description:
      "We refine your business plan to clearly communicate your value proposition, market opportunity, competitive advantage, and growth strategy.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="28" height="36" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="16" width="16" height="3" rx="1" fill="#dbeafe" />
        <line x1="14" y1="24" x2="30" y2="24" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="29" x2="30" y2="29" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="34" x2="24" y2="34" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="38" cy="38" r="10" fill="white" stroke="#1a9fd4" strokeWidth="1.4" />
        <polyline points="32,38 36,42 44,32" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Financial Analysis & Projections",
    description:
      "Create accurate financial projections, including revenue, expenses, cash flow, and ROI, helping investors understand your potential returns and risks.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="14" width="44" height="32" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <polyline points="12,38 20,26 28,32 38,18 48,22" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.5" />
        <circle cx="38" cy="18" r="2.5" fill="#1a9fd4" />
        <polyline points="12,42 20,36 28,38 38,30 48,34" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.3" strokeDasharray="3 2" />
        <text x="8" y="12" fontSize="7" fill="#4a6fa5" fontWeight="bold" opacity="0.5">$</text>
      </svg>
    ),
  },
  {
    title: "Market Research & Analysis",
    description:
      "Gain in-depth insights into industry trends, target audience, and competitive landscape to strengthen your investment case.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="24" cy="24" r="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="24" cy="24" r="5" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="34" y1="34" x2="48" y2="48" strokeWidth="3" strokeLinecap="round" stroke="#4a6fa5" />
        <line x1="10" y1="24" x2="38" y2="24" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.4" />
        <line x1="24" y1="10" x2="24" y2="38" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.4" />
        <path d="M42 10 L46 6 M46 6 L50 10 M46 6 L46 14" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Valuation Services",
    description:
      "Determine your business's fair value using trusted methodologies, ensuring transparency and credibility with investors.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <line x1="28" y1="6" x2="28" y2="14" strokeLinecap="round" strokeWidth="2" />
        <line x1="14" y1="14" x2="42" y2="14" strokeLinecap="round" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="14" y2="22" strokeLinecap="round" />
        <line x1="42" y1="14" x2="42" y2="22" strokeLinecap="round" />
        <rect x="6" y="22" width="16" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="34" y="22" width="16" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <text x="11" y="36" fontSize="9" fill="#4a6fa5" fontWeight="bold">$</text>
        <text x="38" y="36" fontSize="9" fill="#1a9fd4" fontWeight="bold">$</text>
        <line x1="22" y1="44" x2="34" y2="44" strokeLinecap="round" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Legal & Compliance Guidance",
    description:
      "Our experts review contracts, intellectual property, and legal matters to minimize risk and enhance investor confidence.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 6 L46 14 L46 32 C46 44 37 52 28 54 C19 52 10 44 10 32 L10 14 Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="18" y1="24" x2="38" y2="24" strokeLinecap="round" />
        <line x1="18" y1="30" x2="38" y2="30" strokeLinecap="round" />
        <line x1="18" y1="36" x2="30" y2="36" strokeLinecap="round" />
        <path d="M32 38 l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Pitch Deck Creation",
    description:
      "Design visually compelling, content-rich pitch decks that highlight your business and investment opportunities.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="10" width="44" height="30" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="46" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="40" x2="28" y2="46" stroke="#4a6fa5" />
        <rect x="12" y="16" width="14" height="10" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="30" y="16" width="14" height="4" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="30" y="22" width="10" height="4" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <polyline points="12,32 20,28 28,30 36,26 44,28" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Investment Financial Planning",
    description:
      "Show potential investors exactly how their capital will be deployed and the expected return on investment.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="34" r="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <text x="23" y="39" fontSize="12" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M20 18 Q14 10 20 6 Q28 2 34 8 Q40 12 36 20" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M34 20 L38 16 L40 22" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Team Evaluation & Enhancement",
    description:
      "Assess your leadership team, recommend improvements, and ensure you have the right talent to execute your vision.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="16" cy="20" r="7" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="28" cy="16" r="7" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="40" cy="20" r="7" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M4 46c0-6 5-10 12-10" strokeLinecap="round" />
        <path d="M40 36c7 0 12 4 12 10" strokeLinecap="round" />
        <path d="M20 46c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
        <circle cx="42" cy="10" r="6" fill="white" stroke="#1a9fd4" strokeWidth="1.4" />
        <path d="M39 10 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Networking & Investor Introductions",
    description:
      "Leverage our network to connect with potential investors who align with your strategic goals.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="12" r="6" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="10" cy="40" r="6" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="46" cy="40" r="6" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="28" y1="18" x2="10" y2="34" stroke="#1a9fd4" strokeWidth="1.3" strokeDasharray="3 2" />
        <line x1="28" y1="18" x2="46" y2="34" stroke="#1a9fd4" strokeWidth="1.3" strokeDasharray="3 2" />
        <line x1="16" y1="40" x2="40" y2="40" stroke="#1a9fd4" strokeWidth="1.3" strokeDasharray="3 2" />
        <circle cx="28" cy="28" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="25" y="31" fontSize="6" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Due Diligence Support",
    description:
      "Prepare all necessary documentation and assist with investor due diligence for a smooth fundraising process.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="24" cy="26" r="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="34" y1="36" x2="48" y2="50" strokeWidth="3" strokeLinecap="round" stroke="#4a6fa5" />
        <line x1="18" y1="24" x2="30" y2="24" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="29" x2="30" y2="29" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M34 14 L40 8 L46 14" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
        <line x1="40" y1="8" x2="40" y2="20" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Strategic Advisory",
    description:
      "Ongoing strategic guidance to refine growth plans, identify challenges, and adapt to market changes.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="14" width="40" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <polyline points="12,34 20,24 28,28 36,16 46,20" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.5" />
        <circle cx="36" cy="16" r="2.5" fill="#1a9fd4" />
        <rect x="8" y="42" width="40" height="6" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="45" x2="22" y2="45" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="26" y1="45" x2="34" y2="45" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Market Fit & Product Analysis",
    description:
      "Continuously evaluate your product-market alignment and adjust offerings to maximize investor confidence.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 8 C18 8 10 16 10 26 C10 36 18 44 28 44 C38 44 46 36 46 26 C46 16 38 8 28 8Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M28 14 C22 14 18 20 18 26 C18 32 22 38 28 38 C34 38 38 32 38 26 C38 20 34 14 28 14Z" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="28" cy="26" r="4" fill="#1a9fd4" opacity="0.6" />
        <polyline points="36,14 44,8 50,6 48,12 42,18" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.6" />
        <line x1="34" y1="16" x2="40" y2="12" stroke="#1a9fd4" strokeWidth="1.2" />
      </svg>
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
          <h2 className="text-3xl sm:text-6xl text-[#0d1e4a] font-normal mb-3">
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
              <p className="text-gray-500 text-base sm:text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}