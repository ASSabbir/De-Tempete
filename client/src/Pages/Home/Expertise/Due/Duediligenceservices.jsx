import { motion } from "framer-motion";

const services = [
  {
    title: "Financial Analysis",
    description:
      "Evaluating the target company's financial statements, including balance sheets, income statements, and cash flow statements, to assess its financial health, profitability, and sustainability.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="14" width="44" height="32" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="8" y="30" width="7" height="12" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="18" y="24" width="7" height="18" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="28" y="18" width="7" height="24" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="38" y="22" width="7" height="20" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="8" y="12" fontSize="8" fill="#4a6fa5" fontWeight="bold" opacity="0.5">$</text>
        <polyline points="8,28 22,20 32,14 46,18" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.6" />
        <circle cx="46" cy="18" r="2" fill="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Operational Assessment",
    description:
      "Reviewing the target company's operational processes, management structure, and overall business strategy to identify any operational inefficiencies or areas of improvement.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="28" r="10" fill="white" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="28" cy="28" r="3" fill="#1a9fd4" opacity="0.7" />
        <line x1="28" y1="10" x2="28" y2="18" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="28" y1="38" x2="28" y2="46" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="10" y1="28" x2="18" y2="28" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="38" y1="28" x2="46" y2="28" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="14" y1="14" x2="20" y2="20" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" opacity="0.5" />
        <line x1="36" y1="36" x2="42" y2="42" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" opacity="0.5" />
        <line x1="42" y1="14" x2="36" y2="20" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" opacity="0.5" />
        <line x1="14" y1="42" x2="20" y2="36" strokeLinecap="round" strokeWidth="1.5" stroke="#4a6fa5" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Market Analysis",
    description:
      "Analyzing the target company's position within its industry and market trends to gauge its competitiveness and growth potential.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="24" cy="24" r="16" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="36" y1="36" x2="50" y2="50" strokeWidth="3.5" strokeLinecap="round" stroke="#4a6fa5" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.4" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="#4a6fa5" strokeWidth="0.8" opacity="0.4" />
        <circle cx="24" cy="24" r="6" fill="#dbeafe" stroke="#1a9fd4" strokeWidth="1.2" />
        <path d="M42 8 L48 4 M48 4 L52 8 M48 4 L48 12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Legal and Regulatory Compliance",
    description:
      "Ensuring that the target company adheres to all applicable laws, regulations, permits, licenses, and contracts. This helps identify any potential legal liabilities or risks.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="12" y="8" width="32" height="40" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="18" y1="18" x2="38" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="24" x2="38" y2="24" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="38" cy="38" r="8" fill="white" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M35 38 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
        <rect x="20" y="6" width="16" height="6" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Valuation Method Analysis",
    description:
      "This service concentrates on the business's ability by using different model such as multiplier methods, asset-based valuation, time revenue method, risk analysis.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="28" r="10" fill="white" stroke="#4a6fa5" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="28" cy="28" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="10" y1="28" x2="18" y2="28" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <line x1="38" y1="28" x2="46" y2="28" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <line x1="28" y1="10" x2="28" y2="18" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <line x1="28" y1="38" x2="28" y2="46" strokeLinecap="round" strokeWidth="1.5" stroke="#1a9fd4" />
        <text x="24" y="32" fontSize="7" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Intellectual Property (IP) Evaluation",
    description:
      "Assessing the target company's intellectual property portfolio, such as patents, trademarks, copyrights, and trade secrets, to determine their value and protection.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 6 L46 16 L46 34 C46 44 37 52 28 54 C19 52 10 44 10 34 L10 16 Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="28" r="8" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="24" y="32" fontSize="10" fill="#4a6fa5" fontWeight="bold">IP</text>
        <path d="M20 20 l3 3 M36 20 l-3 3 M28 16 l0 3" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Customer and Supplier Relationships",
    description:
      "Understanding the target company's customer base and supplier relationships to assess the stability of its revenue streams and potential dependencies.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="12" cy="20" r="7" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="44" cy="20" r="7" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="28" cy="14" r="7" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M4 44c0-5 3-9 8-9" strokeLinecap="round" />
        <path d="M44 35c5 0 8 4 8 9" strokeLinecap="round" />
        <path d="M20 44c0-4 3-8 8-8s8 4 8 8" strokeLinecap="round" />
        <line x1="18" y1="16" x2="22" y2="15" stroke="#1a9fd4" strokeWidth="1.2" strokeDasharray="2 1" />
        <line x1="34" y1="15" x2="38" y2="16" stroke="#1a9fd4" strokeWidth="1.2" strokeDasharray="2 1" />
      </svg>
    ),
  },
  {
    title: "Human Resources and Employee Relations",
    description:
      "Examining the target company's workforce, employee contracts, and overall human resources practices to identify any potential labour-related issues or challenges.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="20" cy="16" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="36" cy="16" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M6 46c0-7 6-12 14-12" strokeLinecap="round" />
        <path d="M36 34c8 0 14 5 14 12" strokeLinecap="round" />
        <path d="M22 46c0-5 2.686-8 6-8s6 3 6 8" strokeLinecap="round" />
        <circle cx="44" cy="8" r="6" fill="white" stroke="#1a9fd4" strokeWidth="1.4" />
        <path d="M41 8 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Technology and IT Infrastructure",
    description:
      "Reviewing the target company's technology assets and IT infrastructure to assess their reliability, security, and potential for future growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="10" width="44" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="42" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="38" x2="28" y2="42" stroke="#4a6fa5" />
        <rect x="12" y="16" width="10" height="8" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="26" y="16" width="10" height="8" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="12" y="28" width="24" height="4" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="42" cy="20" r="6" fill="white" stroke="#1a9fd4" strokeWidth="1.4" />
        <path d="M39 20 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Environmental and Sustainability Considerations",
    description:
      "Evaluating the target company's environmental impact, sustainability practices, and compliance with environmental regulations.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 48 C28 48 10 38 10 22 C10 14 18 8 28 8 C38 8 46 14 46 22 C46 38 28 48 28 48Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M28 8 C28 8 18 18 22 30 C24 36 28 38 28 38 C28 38 32 36 34 30 C38 18 28 8 28 8Z" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="38" x2="28" y2="48" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M20 26 Q28 18 36 26" strokeLinecap="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Synergy and Integration Potential",
    description:
      "If the investment involves a merger or acquisition, evaluating how well the target company's operations and culture align with those of the acquiring company.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="4" y="14" width="20" height="26" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="32" y="14" width="20" height="26" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="24" y1="27" x2="32" y2="27" strokeLinecap="round" strokeWidth="2" stroke="#1a9fd4" />
        <path d="M28 22 L32 27 L28 32" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
        <line x1="10" y1="22" x2="18" y2="22" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="10" y1="27" x2="18" y2="27" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="38" y1="22" x2="46" y2="22" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="38" y1="27" x2="46" y2="27" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Financial Projections and Valuation",
    description:
      "Creating financial projections based on various scenarios and methodologies to estimate the potential returns and valuation of the investment.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="14" width="44" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <polyline points="12,36 20,24 28,30 38,16 48,20" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.4" />
        <polyline points="12,38 20,30 28,34 38,24 48,28" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.4" strokeDasharray="3 2" />
        <circle cx="38" cy="16" r="2.5" fill="#1a9fd4" />
        <text x="8" y="12" fontSize="7" fill="#4a6fa5" fontWeight="bold" opacity="0.5">$</text>
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