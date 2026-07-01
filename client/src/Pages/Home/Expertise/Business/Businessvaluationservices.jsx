import { motion } from "framer-motion";

const services = [
  {
    title: "Valuation Consulting",
    description:
      "Expert guidance to help startups understand value drivers, financial assumptions, and investor expectations.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="22" cy="18" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="36" cy="22" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M10 44c0-6 5-11 12-11" strokeLinecap="round" />
        <path d="M36 33c7 0 12 5 12 11" strokeLinecap="round" />
        <circle cx="29" cy="12" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M27 12 l1.5 1.5 3-3" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" />
      </svg>
    ),
  },
  {
    title: "Financial Modelling",
    description:
      "Detailed financial projections covering revenue, expenses, and cash flow — built to evaluate growth and profitability potential.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="40" height="30" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="42" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.1" />
        <line x1="28" y1="40" x2="28" y2="42" stroke="#4a6fa5" />
        <polyline points="14,32 22,22 28,27 36,16 44,20" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.6" />
        <circle cx="36" cy="16" r="2" fill="#4a6fa5" />
      </svg>
    ),
  },
  {
    title: "Market & Industry Analysis",
    description:
      "Comprehensive assessment of market size, trends, growth opportunities, and competitive positioning.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="30" width="8" height="18" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="18" y="22" width="8" height="26" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="30" y="14" width="8" height="34" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="42" y="8" width="8" height="40" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <polyline points="6,28 22,18 34,12 50,6" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Comparable Company Analysis (CCA)",
    description:
      "Benchmarking with similar startups to provide realistic and investor-approved valuation insights.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="18" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="30" y="10" width="18" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="14" y1="18" x2="20" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="22" x2="20" y2="22" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="36" y1="18" x2="42" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="36" y1="22" x2="42" y2="22" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M18 32 L28 38 L38 32" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="28" y1="38" x2="28" y2="46" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Valuation Method Analysis",
    description:
      "Use of multiple valuation models, revenue multiples, asset-based models, risk-adjusted methods, and more, to ensure accuracy.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="10" y="8" width="36" height="40" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="18" y1="18" x2="38" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="25" x2="38" y2="25" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="32" x2="30" y2="32" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="38" cy="36" r="6" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <text x="35" y="39" fontSize="7" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Risk Evaluation",
    description:
      "Assessment of operational, financial, technological, and regulatory risks that may impact valuation.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 8 L48 20 L48 36 C48 46 38 54 28 56 C18 54 8 46 8 36 L8 20 Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M28 22 L28 32" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <circle cx="28" cy="38" r="1.5" fill="#4a6fa5" />
        <text x="20" y="20" fontSize="9" fill="#4a6fa5" fontWeight="bold" opacity="0.4">RISK</text>
      </svg>
    ),
  },
  {
    title: "Scenario & Sensitivity Analysis",
    description:
      "Evaluation of best-case, worst-case, and realistic scenarios to understand how different factors influence valuation outcomes.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="24" r="10" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M22 22 Q28 16 34 22 Q28 30 22 22Z" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="34" x2="28" y2="42" strokeLinecap="round" />
        <line x1="20" y1="44" x2="36" y2="44" strokeLinecap="round" />
        <line x1="14" y1="22" x2="6" y2="18" strokeLinecap="round" stroke="#4a6fa5" opacity="0.5" />
        <line x1="42" y1="22" x2="50" y2="18" strokeLinecap="round" stroke="#4a6fa5" opacity="0.5" />
        <line x1="28" y1="12" x2="28" y2="6" strokeLinecap="round" stroke="#4a6fa5" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Pre-Investment Valuation",
    description:
      "Helps founders negotiate equity, funding amounts, and investor terms confidently.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="34" r="12" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <text x="23" y="39" fontSize="12" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M20 20 Q14 12 20 8 Q28 4 34 10 Q40 14 36 22" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M34 22 L38 18 L40 24" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Post-Funding Assessment",
    description:
      "Updated valuation after fundraising to reflect growth, new financials, and market shifts.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="10" y="20" width="36" height="24" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="16" y="28" width="8" height="8" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="27" y="35" fontSize="8" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M18 20 L18 14 L38 14 L38 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 14 L24 10 L32 10 L32 14" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="10,44 20,36 28,40 38,30 46,32" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
        <circle cx="46" cy="32" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Exit Strategy Valuation",
    description:
      "Valuation for mergers, acquisitions, IPO planning, or founder exit preparation.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="18" width="28" height="22" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="36" y1="28" x2="48" y2="28" strokeLinecap="round" strokeWidth="2" />
        <path d="M42 22 L48 28 L42 34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line x1="14" y1="26" x2="28" y2="26" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="31" x2="24" y2="31" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Reporting & Documentation",
    description:
      "Clear, transparent, and audit-ready valuation reports with all assumptions, methodologies, and conclusions documented.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="12" y="6" width="24" height="32" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="8" y="10" width="24" height="32" rx="3" fill="white" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="26" x2="26" y2="26" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="14" y1="32" x2="20" y2="32" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M24 34 L28 46 L32 34" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
        <circle cx="28" cy="50" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Expert Testimony",
    description:
      "Professional representation for disputes, legal processes, or investor-related clarifications.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="18" r="10" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="18" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M14 44c0-7.732 6.268-14 14-14s14 6.268 14 14" strokeLinecap="round" />
        <path d="M22 44 L28 38 L34 44" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
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
              <h3 className="text-[#0d1e4a] font-bold text-sm sm:text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>

              {/* Description */}
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