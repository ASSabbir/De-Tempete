import { motion } from "framer-motion";

const services = [
  {
    title: "Developing Financial Strategy",
    description:
      "We align your financial goals with your overall business objectives from capital allocation to investment planning and growth opportunities, ensuring your financial roadmap supports sustainable expansion.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <rect x="10" y="8" width="30" height="40" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="16" y1="20" x2="34" y2="20" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="16" y1="28" x2="34" y2="28" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="16" y1="36" x2="26" y2="36" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="44" cy="44" r="10" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M40 44h8M44 40v8" strokeLinecap="round" />
        <text x="41" y="47" fontSize="8" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Financial Reporting",
    description:
      "Our CFOs ensure accurate, timely, and compliant financial reporting, giving you a clear picture of your company's performance while maintaining accounting standards.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <circle cx="32" cy="36" r="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <text x="27" y="41" fontSize="12" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M24 18 L32 8 L40 18" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="8" x2="32" y2="22" strokeLinecap="round" />
        <circle cx="20" cy="28" r="3" fill="#eef2f9" stroke="#4a6fa5" />
        <circle cx="44" cy="28" r="3" fill="#eef2f9" stroke="#4a6fa5" />
        <line x1="22" y1="30" x2="29" y2="34" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="42" y1="30" x2="35" y2="34" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Cash Flow & Accounting Management",
    description:
      "We manage budgeting, forecasting, scenario analysis, and pricing strategies — helping you maintain healthy cash flow and long-term financial stability.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <rect x="8" y="18" width="48" height="30" rx="4" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="16" y="26" width="32" height="14" rx="2" fill="white" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="32" cy="33" r="5" fill="#eef2f9" stroke="#4a6fa5" />
        <text x="29" y="36" fontSize="7" fill="#4a6fa5" fontWeight="bold">$</text>
        <circle cx="13" cy="33" r="2" fill="#4a6fa5" opacity="0.4" />
        <circle cx="51" cy="33" r="2" fill="#4a6fa5" opacity="0.4" />
        <path d="M20 14 L44 14" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Maintaining Investor Relations",
    description:
      "We communicate your financial performance and growth potential to investors, fostering trust, confidence, and strong relationships with key stakeholders.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <circle cx="20" cy="22" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="44" cy="22" r="8" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M8 50c0-6.627 5.373-12 12-12" strokeLinecap="round" />
        <path d="M44 38c6.627 0 12 5.373 12 12" strokeLinecap="round" />
        <path d="M24 50c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
        <circle cx="32" cy="14" r="4" fill="#4a6fa5" opacity="0.3" stroke="#4a6fa5" />
        <text x="29" y="17" fontSize="5" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Capital Management",
    description:
      "Our experts optimize your company's capital structure by balancing equity and debt, managing liquidity, and ensuring you have the resources to grow efficiently.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <circle cx="32" cy="36" r="12" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <text x="27" y="41" fontSize="12" fill="#4a6fa5" fontWeight="bold">$</text>
        <circle cx="32" cy="36" r="20" fill="none" stroke="#4a6fa5" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="32" cy="16" r="3" fill="#4a6fa5" opacity="0.5" />
        <circle cx="50" cy="46" r="3" fill="#4a6fa5" opacity="0.5" />
        <circle cx="14" cy="46" r="3" fill="#4a6fa5" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "We handle budgeting, forecasting, and performance analysis, empowering you with insights that drive better decisions and financial resilience.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <rect x="8" y="10" width="48" height="34" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <polyline points="14,36 22,24 30,30 40,18 50,22" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.8" fill="none" />
        <circle cx="40" cy="18" r="2.5" fill="#4a6fa5" />
        <rect x="20" y="48" width="24" height="6" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="32" y1="44" x2="32" y2="48" stroke="#4a6fa5" />
      </svg>
    ),
  },
  {
    title: "Company Insights",
    description:
      "Our virtual CFOs identify cost-saving opportunities, streamline operations, and provide benchmarking and performance analytics to help you stay competitive.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <ellipse cx="32" cy="32" rx="24" ry="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <circle cx="32" cy="32" r="6" fill="white" stroke="#4a6fa5" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="2.5" fill="#4a6fa5" />
        <path d="M8 32 Q20 20 32 20 Q44 20 56 32" strokeLinecap="round" stroke="#4a6fa5" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    title: "Compliance & Governance",
    description:
      "We ensure your organization adheres to all financial regulations and reporting standards, protecting you from legal risks and penalties.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <rect x="24" y="6" width="16" height="20" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="32" y1="26" x2="32" y2="34" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="34" width="18" height="22" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <rect x="36" y="34" width="18" height="22" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="10" y1="34" x2="54" y2="34" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M28 44 L31 47 L36 40" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description:
      "We assess financial risks, implement preventive strategies, and establish internal controls to safeguard your business against fraud and errors.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.5">
        <path d="M32 6 L52 16 L52 34 C52 46 42 56 32 58 C22 56 12 46 12 34 L12 16 Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M24 32 L30 38 L40 26" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="2" />
        <circle cx="46" cy="10" r="6" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <path d="M44 10 L46 10 L48 8" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.2" />
      </svg>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-3">
            OVirtual CFO <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            <span className="font-bold italic text-[#0d1e4a]">de tempête</span> provide comprehensive
            financial oversight to help you make confident, data-driven decisions.
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
              <h3 className="text-[#0d1e4a] font-bold text-base sm:text-lg leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}