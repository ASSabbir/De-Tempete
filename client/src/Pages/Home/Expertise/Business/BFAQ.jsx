import { useState, useRef } from "react";

const faqs = [
  {
    q: "01. Why does my startup need a professional valuation?",
    a: "A valuation helps you understand your true market worth, negotiate confidently with investors, and plan strategic growth based on real data instead of assumptions.",
  },
  {
    q:
    (
      <>
        02. What makes {" "}
        <strong>
          <em>de tempête’s </em>
        </strong>{" "}
        valuation services different?
      </>
    )
    ,
    a: (
      <>
        <strong>
          <em>de tempête</em>
        </strong>{" "}
        delivers investor-ready, data-backed valuations supported by financial
        models, market analysis, risk assessment, and industry benchmarks.
        Every valuation is tailored to your startup’s unique business model.
      </>
    ),
  },
  {
    q: "03. What information do I need to start the valuation process?",
    a: "You only need basic financials (or estimates), your business model, traction metrics, and market details. Early-stage or pre-revenue startups can also proceed with minimal data.",
  },
  {
    q: (
      <>
        04 .Can {" "}
        <strong>
          <em>de tempête</em>
        </strong>{" "}
        value pre-revenue or early-stage startups?
      </>
    ),
    a: (
      <>
        Yes.{" "}
        <strong>
          <em>de tempête</em>
        </strong>{" "}
        assesses market size, product potential, comparable startups, and risk
        factors to deliver a realistic, defensible pre-revenue valuation.
      </>
    ),
  },
  {
    q: "05. How long does the valuation take?",
    a: "Most valuations take 10–12 business days, depending on your startup’s complexity and data availability.",
  },
  {
    q: "06. Will the valuation help me negotiate with investors?",
    a: "Yes. Our structured, transparent valuation report gives founders strong negotiation power and enhances credibility during funding rounds.",
  },
  {
    q: "07. Does the service include financial modelling and projections?",
    a: "Yes. We provide detailed financial modelling covering revenue, expenses, cash flow, and scenario analysis to support strategic decision-making.",
  },
  {
    q: "08. Are the reports investor-ready?",
    a: "Absolutely. You receive a clear, audit-ready valuation report documenting assumptions, methodology, financial models, and final valuation conclusions.",
  },
  {
    q: "09. Is my startup’s information kept confidential?",
    a: "100%. All financial and business data is handled securely and remains strictly confidential.",
  },
  {
    q: (
      <>
        10. How do I get started with {" "}
        <strong>
          <em>de tempête</em>
        </strong>
        {" "}?
      </>
    ),
    a: (
      <>
        Book a Free Startup Valuation Consultation with{" "}
        <strong>
          <em>de tempête</em>
        </strong>
        , and our team will guide you through the process.
      </>
    ),
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`rounded-xl border bg-white transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-gray-200"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      {/* Question */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left group"
      >
        <span
          className={`text-base sm:text-base font-semibold transition-colors duration-200 ${
            isOpen
              ? "text-[#0d1e4a]"
              : "text-[#0d1e4a] group-hover:text-[#1a9fd4]"
          }`}
        >
          {faq.q}
        </span>

        {/* Plus / Minus Icon */}
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-[#0d1e4a]"
              : "bg-white border-gray-300 group-hover:border-[#1a9fd4]"
          }`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              isOpen ? "text-white" : "text-gray-400"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 12H4"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16M4 12h16"
              />
            )}
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || 0}px`
            : "0px",
        }}
      >
        <div className="px-5 sm:px-7 pb-5 text-base sm:text-[15px] text-gray-500 leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function BFAQ() {
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
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}