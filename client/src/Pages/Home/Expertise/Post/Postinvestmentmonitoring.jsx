
import { motion } from "framer-motion";

const services = [
  {
    title: "Portfolio Monitoring & Analysis",
    description:
      "We track market movements, evaluate performance indicators, and identify opportunities to optimize your portfolio's growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="10" y="16" width="36" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="16" y="8" width="24" height="10" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="22" y1="12" x2="34" y2="12" stroke="#4a6fa5" strokeWidth="1" />
        <polyline points="14,36 22,28 28,32 36,22 44,26" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
        <circle cx="36" cy="22" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Our team identifies risk exposure and implements mitigation strategies to safeguard your investments without compromising growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 6 C20 10 12 10 12 10 L12 30 C12 42 20 50 28 52 C36 50 44 42 44 30 L44 10 C44 10 36 10 28 6Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M20 28 l5 5 12-12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "Diversification Strategies",
    description:
      "Reduce concentration risk through smart, data-driven asset diversification and portfolio balancing.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M28 10 A18 18 0 0 1 46 28" stroke="#1a9fd4" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M46 28 A18 18 0 0 1 28 46" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M28 46 A18 18 0 0 1 10 28" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 2" />
        <path d="M10 28 A18 18 0 0 1 28 10" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 2" />
        <line x1="28" y1="10" x2="28" y2="46" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.3" />
        <line x1="10" y1="28" x2="46" y2="28" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.3" />
        <circle cx="28" cy="28" r="3" fill="#1a9fd4" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Tax Optimization",
    description:
      "We help structure your investments tax-efficiently, increasing your net returns and long-term gains.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="28" r="10" fill="white" stroke="#4a6fa5" strokeWidth="1" />
        <text x="21" y="24" fontSize="7" fill="#4a6fa5" fontWeight="bold">TAX</text>
        <line x1="20" y1="30" x2="36" y2="30" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="24" y1="34" x2="32" y2="34" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M14 14 L18 10 M42 14 L38 10" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M14 42 L18 46 M42 42 L38 46" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Rebalancing Plans",
    description:
      "We systematically rebalance your portfolio to maintain alignment with your financial goals and risk appetite.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M10 28 C10 28 18 20 28 20" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" />
        <path d="M28 20 C38 20 46 28 46 28" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <path d="M40 22 L46 28 L40 34" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
        <path d="M10 36 C10 36 18 44 28 44" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <path d="M28 44 C38 44 46 36 46 36" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" />
        <path d="M16 30 L10 36 L16 42" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Performance Reporting",
    description:
      "Receive transparent, easy-to-understand performance reports tracking returns, growth, risks, and overall portfolio health.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="8" height="36" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="20" y="20" width="8" height="26" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="32" y="16" width="8" height="30" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="44" y="24" width="8" height="22" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="12" cy="6" r="4" fill="#eef2f9" stroke="#1a9fd4" strokeWidth="1.3" />
        <circle cx="24" cy="6" r="4" fill="#dbeafe" stroke="#1a9fd4" strokeWidth="1.3" />
        <circle cx="36" cy="6" r="4" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Financial Planning Updates",
    description:
      "Your financial objectives evolve — and so should your investments. We refine your strategy regularly to keep it on track.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="12" width="44" height="30" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="44" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="42" x2="28" y2="44" stroke="#4a6fa5" />
        <circle cx="16" cy="22" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="28" cy="22" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="40" cy="22" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="12" y1="32" x2="44" y2="32" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M34 28 l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Access to Expert Advice",
    description:
      "Our financial specialists are always available to discuss concerns, strategies, or new opportunities.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="18" r="10" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M14 46c0-7.732 6.268-14 14-14s14 6.268 14 14" strokeLinecap="round" />
        <circle cx="28" cy="6" r="3" fill="#dbeafe" stroke="#1a9fd4" strokeWidth="1.2" />
        <line x1="28" y1="9" x2="28" y2="12" stroke="#1a9fd4" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 10 L16 6 M36 10 L40 6" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.3" />
        <path d="M14 14 L10 12 M42 14 L46 12" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Education & Insights",
    description:
      "Stay informed with market insights, trends, and expert commentary to make smarter financial decisions.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M10 38 C10 38 10 18 10 16 C10 14 12 12 14 12 L42 12 C44 12 46 14 46 16 L46 38 C46 40 44 42 42 42 L14 42 C12 42 10 40 10 38Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M10 38 L6 46 L28 40 L50 46 L46 38" fill="white" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="28" cy="26" r="6" fill="#dbeafe" stroke="#1a9fd4" strokeWidth="1.3" />
        <text x="25" y="30" fontSize="8" fill="#1a9fd4" fontWeight="bold">i</text>
        <line x1="18" y1="18" x2="26" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="30" y1="18" x2="38" y2="18" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Dividend & Interest Management",
    description:
      "We manage distribution cycles for income-generating assets with precision and transparency.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="28" width="44" height="20" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="10" y="32" width="8" height="12" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="22" y="32" width="8" height="12" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="34" y="32" width="8" height="12" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="44" y="42" fontSize="8" fill="#1a9fd4" fontWeight="bold">%</text>
        <polyline points="6,26 14,18 22,22 32,12 46,16" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
        <circle cx="32" cy="12" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Liquidation & Exit Strategies",
    description:
      "When it's time to exit, we ensure a smooth process that minimizes disruption, protects value, and considers all tax implications.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="18" width="32" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="12" y1="26" x2="32" y2="26" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="12" y1="31" x2="26" y2="31" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="38" y1="28" x2="52" y2="28" strokeLinecap="round" strokeWidth="2.2" stroke="#1a9fd4" />
        <path d="M44 22 L52 28 L44 34" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2" />
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