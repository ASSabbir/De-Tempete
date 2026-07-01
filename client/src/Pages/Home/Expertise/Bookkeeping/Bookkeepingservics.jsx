import { motion } from "framer-motion";

const services = [
  {
    title: "Recording Transactions",
    description:
      "We record all financial transactions, sales, purchases, expenses, and income, in the appropriate ledgers or accounting software for complete accuracy.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="10" y="6" width="28" height="36" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="6" y="10" width="28" height="36" rx="3" fill="white" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="12" y1="20" x2="28" y2="20" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="12" y1="26" x2="28" y2="26" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="12" y1="32" x2="22" y2="32" stroke="#4a6fa5" strokeWidth="1" />
        <path d="M26 34 l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Accounts Receivable",
    description:
      "Track and manage customer payments, ensuring invoices are collected promptly and cash flow remains steady.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="14" width="40" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="22" width="12" height="8" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="36" cy="26" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="33" y="29" fontSize="6" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M28 8 L28 14 M22 10 L28 8 L34 10" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Accounts Payable",
    description:
      "Monitor supplier and vendor payments to maintain strong relationships and avoid late fees.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="14" width="40" height="28" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="22" width="12" height="8" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="36" cy="26" r="4" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="33" y="29" fontSize="6" fill="#4a6fa5" fontWeight="bold">$</text>
        <path d="M28 48 L28 42 M22 46 L28 48 L34 46" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Bank Reconciliation",
    description:
      "We regularly reconcile your accounts to identify and resolve discrepancies between your books and bank statements.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="6" y="10" width="44" height="32" rx="4" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="12" y="16" width="14" height="8" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="30" y1="19" x2="42" y2="19" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="30" y1="23" x2="38" y2="23" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="12" y1="30" x2="44" y2="30" stroke="#4a6fa5" strokeWidth="1" opacity="0.5" />
        <line x1="12" y1="34" x2="36" y2="34" stroke="#4a6fa5" strokeWidth="1" opacity="0.5" />
        <path d="M40 38 l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Expense Tracking",
    description:
      "Systematic classification and monitoring of company expenses, including rent, utilities, payroll, and operational costs.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="28" cy="28" r="10" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="10" x2="28" y2="18" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="38" x2="28" y2="46" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="28" x2="18" y2="28" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="28" x2="46" y2="28" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <text x="24" y="32" fontSize="10" fill="#4a6fa5" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Financial Reporting",
    description:
      "Monthly and quarterly reports, including balance sheets, profit & loss, and cash flow statements, to give you a clear financial picture.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="40" height="32" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="44" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="42" x2="28" y2="44" stroke="#4a6fa5" />
        <rect x="12" y="20" width="6" height="16" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="22" y="16" width="6" height="20" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="32" y="22" width="6" height="14" rx="1" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <polyline points="12,18 25,14 35,20 44,12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "General Ledger Maintenance",
    description:
      "We maintain a comprehensive record of every financial transaction to ensure your books are complete and audit-ready.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="10" y="8" width="36" height="42" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="18" y1="18" x2="38" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="24" x2="38" y2="24" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="30" x2="38" y2="30" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="36" x2="30" y2="36" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="8" x2="28" y2="50" stroke="#4a6fa5" strokeWidth="1" opacity="0.3" />
        <circle cx="40" cy="42" r="8" fill="white" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M37 42 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Tax Preparation",
    description:
      "Organize and present financial data for tax filing, ensuring accuracy, compliance, and on-time submission.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 6 L46 16 L46 32 C46 42 38 52 28 54 C18 52 10 42 10 32 L10 16 Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <text x="20" y="30" fontSize="10" fill="#4a6fa5" fontWeight="bold" opacity="0.5">TAX</text>
        <path d="M20 34 l4 4 12-12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Data Accuracy & Integrity",
    description:
      "All financial data is securely recorded, verified, and stored, ensuring reliable information for critical decisions.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="40" height="30" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <rect x="14" y="42" width="28" height="6" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <rect x="20" y="16" width="16" height="12" rx="2" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <text x="24" y="26" fontSize="8" fill="#4a6fa5" fontWeight="bold">$</text>
        <circle cx="44" cy="44" r="8" fill="#eef2f9" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M41 44 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Financial Analysis",
    description:
      "We interpret financial data to help you identify trends, strengths, and areas for improvement.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="8" y="10" width="40" height="30" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <polyline points="14,32 22,20 30,26 38,14 46,18" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2" />
        <circle cx="38" cy="14" r="2.5" fill="#1a9fd4" />
        <rect x="14" y="44" width="28" height="5" rx="2" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="28" y1="40" x2="28" y2="44" stroke="#4a6fa5" />
      </svg>
    ),
  },
  {
    title: "Budgeting Support",
    description:
      "Assist in creating and managing budgets to optimize resources, control spending, and plan for growth.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <path d="M28 8 C16 8 8 16 8 28 L48 28 C48 16 40 8 28 8Z" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="8" y1="28" x2="48" y2="28" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="28" y1="8" x2="28" y2="28" stroke="#4a6fa5" strokeWidth="1" opacity="0.4" />
        <line x1="8" y1="28" x2="44" y2="12" stroke="#1a9fd4" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="28" r="3" fill="#1a9fd4" />
        <rect x="12" y="32" width="32" height="14" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="18" y1="38" x2="38" y2="38" stroke="#4a6fa5" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Reduced Errors",
    description:
      "Our skilled professionals minimize mistakes in financial recording and reporting through proven best practices.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="28" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <path d="M20 28 l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2.5" />
        <circle cx="42" cy="14" r="7" fill="white" stroke="#4a6fa5" strokeWidth="1.2" />
        <line x1="39" y1="11" x2="45" y2="17" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="45" y1="11" x2="39" y2="17" stroke="#4a6fa5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Time Savings",
    description:
      "Outsource your bookkeeping tasks to free up time for strategic planning and business development.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="28" cy="30" r="18" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="28" y1="30" x2="28" y2="18" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="28" y1="30" x2="36" y2="36" strokeLinecap="round" strokeWidth="2" stroke="#1a9fd4" />
        <circle cx="28" cy="30" r="2" fill="#4a6fa5" />
        <line x1="28" y1="12" x2="28" y2="14" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="28" y1="46" x2="28" y2="48" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="10" y1="30" x2="12" y2="30" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <line x1="44" y1="30" x2="46" y2="30" strokeLinecap="round" strokeWidth="2" stroke="#4a6fa5" />
        <path d="M22 8 L28 6 L34 8" strokeLinecap="round" strokeLinejoin="round" stroke="#4a6fa5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Stay fully compliant with accounting and tax laws as our experts stay updated with the latest regulations.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <rect x="12" y="8" width="32" height="40" rx="3" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <line x1="18" y1="18" x2="38" y2="18" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="24" x2="38" y2="24" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="#4a6fa5" strokeWidth="1" />
        <circle cx="38" cy="38" r="8" fill="white" stroke="#1a9fd4" strokeWidth="1.5" />
        <path d="M35 38 l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Audit Support",
    description:
      "We prepare all necessary documentation and information for smooth external audits when required.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12" stroke="#4a6fa5" strokeWidth="1.4">
        <circle cx="26" cy="26" r="14" fill="#eef2f9" stroke="#4a6fa5" strokeWidth="1.3" />
        <circle cx="26" cy="26" r="5" fill="#dbeafe" stroke="#4a6fa5" strokeWidth="1" />
        <line x1="36" y1="36" x2="48" y2="48" strokeWidth="3" strokeLinecap="round" stroke="#4a6fa5" />
        <rect x="28" y="6" width="20" height="10" rx="2" fill="#dbeafe" stroke="#1a9fd4" strokeWidth="1.2" />
        <text x="30" y="14" fontSize="6" fill="#1a9fd4" fontWeight="bold">AUDIT</text>
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

export default function BookkeepingServices() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal text-center mb-14 lg:mb-20">
          Bookkeeping <span className="font-extrabold">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
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