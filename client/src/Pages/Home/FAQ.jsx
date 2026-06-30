import { useState, useRef } from "react";

const faqs = [
  {
    q: "01. How can I register a company in the UK, UAE, KSA, or Bangladesh?",
    a: "You can register a company by submitting the required documents (ID, proof of address, business plan), choosing your business type, and completing local compliance formalities. We guide you step-by-step to ensure the process is smooth and legally compliant.",
  },
  {
    q: "02. What services are included in your virtual CFO and accounting packages?",
    a: "A virtual CFO package typically includes cash flow management, forecasting, financial reporting, bookkeeping, and strategic advice, helping you make data-driven decisions and optimize business performance.",
  },
  {
    q: "03. How do you help with tax advisory and compliance?",
    a: "We analyze your financials, identify tax-saving opportunities, prepare filings, and ensure your business complies with local regulations in the UK, UAE, KSA, or Bangladesh — so you minimize liabilities and avoid penalties.",
  },
  {
    q: "04. How can you prepare my business for investment?",
    a: "Investment readiness involves organizing financial statements, performing a valuation, creating investor-ready reports, and aligning strategy — all designed to make your business attractive to potential investors.",
  },
  {
    q: "05. Do you handle HR and payroll across multiple countries?",
    a: "Yes — multi-country HR and payroll require setting up local payroll systems, following labor laws, and automating salary and compliance processes. This ensures employees are paid accurately and legally in each region.",
  },
  {
    q: "06. Are your services suitable for startups and established companies?",
    a: "Absolutely. We work with startups from day one — helping with formation, compliance, and growth — as well as established businesses looking to expand globally, optimize operations, or prepare for investment.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`rounded-xl border bg-white transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-gray-200 "
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      {/* Question row */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left group"
      >
        <span
          className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
            isOpen ? "text-[#0d1e4a]" : "text-[#0d1e4a] group-hover:text-[#1a9fd4]"
          }`}
        >
          {faq.q}
        </span>

        {/* +/- icon */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-[#0d1e4a]  rotate-0"
              : "bg-white border-gray-300 group-hover:border-[#1a9fd4]"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-400"}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
            )}
          </svg>
        </span>
      </button>

      {/* Answer — smooth height animation */}
      <div
        ref={contentRef}
        className="transition-all duration-400  ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="px-5 sm:px-7 pb-5 text-sm sm:text-[15px] text-gray-500 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f8f9fc] w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-10 lg:mb-14">
          Frequently Asked <span className="font-extrabold">Questions</span>
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>

      </div>
    </section>
  );
}