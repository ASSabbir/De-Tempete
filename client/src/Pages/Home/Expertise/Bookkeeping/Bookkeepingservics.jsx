import { motion } from "framer-motion";
import { TbBook, TbBuildingBank, TbCertificate, TbChartAreaLine, TbCircleCheck, TbClock, TbFileDollar, TbFileInvoice, TbNotebook, TbPigMoney, TbReceipt, TbReceiptTax, TbReportMoney, TbSearch } from "react-icons/tb";

// import {
//   TbNotebook,
//   TbFileInvoice,
//   TbFileDollar,
//   TbBuildingBank,
//   TbReceipt,
//   TbReportMoney,
//   TbBook,
//   TbReceiptTax,
//   TbDatabaseCheck,
//   TbChartAreaLine,
//   TbPigMoney,
//   TbCircleCheck,
//   TbClock,
//   TbCertificate,
//   TbSearch,
// } from "react-icons/tb";
 
// Shared icon wrapper — keeps the same soft-circle / brand-blue look
// as the old inline SVGs, just swapped for a proper icon library.
const IconWrap = ({ children }) => (
  <div className="w-12 h-12 rounded-lg bg-light-blue/15 flex items-center justify-center text-light-blue text-2xl">
    {children}
  </div>
);
 
const services = [
  {
    title: "Recording Transactions",
    description:
      "We record all financial transactions, sales, purchases, expenses, and income, in the appropriate ledgers or accounting software for complete accuracy.",
    icon: (
      <IconWrap>
        <TbNotebook />
      </IconWrap>
    ),
  },
  {
    title: "Accounts Receivable",
    description:
      "Track and manage customer payments, ensuring invoices are collected promptly and cash flow remains steady.",
    icon: (
      <IconWrap>
        <TbFileInvoice />
      </IconWrap>
    ),
  },
  {
    title: "Accounts Payable",
    description:
      "Monitor supplier and vendor payments to maintain strong relationships and avoid late fees.",
    icon: (
      <IconWrap>
        <TbFileDollar />
      </IconWrap>
    ),
  },
  {
    title: "Bank Reconciliation",
    description:
      "We regularly reconcile your accounts to identify and resolve discrepancies between your books and bank statements.",
    icon: (
      <IconWrap>
        <TbBuildingBank />
      </IconWrap>
    ),
  },
  {
    title: "Expense Tracking",
    description:
      "Systematic classification and monitoring of company expenses, including rent, utilities, payroll, and operational costs.",
    icon: (
      <IconWrap>
        <TbReceipt />
      </IconWrap>
    ),
  },
  {
    title: "Financial Reporting",
    description:
      "Monthly and quarterly reports, including balance sheets, profit & loss, and cash flow statements, to give you a clear financial picture.",
    icon: (
      <IconWrap>
        <TbReportMoney />
      </IconWrap>
    ),
  },
  {
    title: "General Ledger Maintenance",
    description:
      "We maintain a comprehensive record of every financial transaction to ensure your books are complete and audit-ready.",
    icon: (
      <IconWrap>
        <TbBook />
      </IconWrap>
    ),
  },
  {
    title: "Tax Preparation",
    description:
      "Organize and present financial data for tax filing, ensuring accuracy, compliance, and on-time submission.",
    icon: (
      <IconWrap>
        <TbReceiptTax />
      </IconWrap>
    ),
  },
  {
    title: "Data Accuracy & Integrity",
    description:
      "All financial data is securely recorded, verified, and stored, ensuring reliable information for critical decisions.",
    icon: (
      <IconWrap>
        {/* <TbDatabaseCheck /> */}
        <TbReceiptTax />
      </IconWrap>
    ),
  },
  {
    title: "Financial Analysis",
    description:
      "We interpret financial data to help you identify trends, strengths, and areas for improvement.",
    icon: (
      <IconWrap>
        <TbChartAreaLine />
      </IconWrap>
    ),
  },
  {
    title: "Budgeting Support",
    description:
      "Assist in creating and managing budgets to optimize resources, control spending, and plan for growth.",
    icon: (
      <IconWrap>
        <TbPigMoney />
      </IconWrap>
    ),
  },
  {
    title: "Reduced Errors",
    description:
      "Our skilled professionals minimize mistakes in financial recording and reporting through proven best practices.",
    icon: (
      <IconWrap>
        <TbCircleCheck />
      </IconWrap>
    ),
  },
  {
    title: "Time Savings",
    description:
      "Outsource your bookkeeping tasks to free up time for strategic planning and business development.",
    icon: (
      <IconWrap>
        <TbClock />
      </IconWrap>
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Stay fully compliant with accounting and tax laws as our experts stay updated with the latest regulations.",
    icon: (
      <IconWrap>
        <TbCertificate />
      </IconWrap>
    ),
  },
  {
    title: "Audit Support",
    description:
      "We prepare all necessary documentation and information for smooth external audits when required.",
    icon: (
      <IconWrap>
        <TbSearch />
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

export default function BookkeepingServices() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-[3vw] 2xl:text-[2.6rem] text-[#0d1e4a] font-normal text-center mb-14 lg:mb-20">
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
              <h3 className="text-[#0d1e4a] font-bold text-base sm:text-base leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}