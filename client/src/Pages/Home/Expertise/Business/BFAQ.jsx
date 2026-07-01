import { useState, useRef } from "react";

const faqs = [
    {
        q: "01.  Why does my startup need a professional valuation?",
        a: "A valuation helps you understand your true market worth, negotiate confidently with investors, and plan strategic growth based on real data instead of assumptions.",
    },
    {
        q: "02. What makes de tempête’s valuation services different?",
        a: "De Tempête delivers investor-ready, data-backed valuations supported by financial models, market analysis, risk assessment, and industry benchmarks. Every valuation is tailored to your startup’s unique business model.",
    },
    {
        q: "03. What information do I need to start the valuation process?",
        a: "You only need basic financials (or estimates), your business model, traction metrics, and market details. Early-stage or pre-revenue startups can also proceed with minimal data.",
  },
    {
        q: "04. Can de tempête value pre-revenue or early-stage startups?",
        a: "Yes. We assess market size, product potential, comparable startups, and risk factors to deliver a realistic, defensible pre-revenue valuation.",
    },
    {
        q: "05. How long does the valuation take?",
        a: "Most valuations take 10–12 business days, depending on your startup’s complexity and data availability.",
    }
    ,
    {
        q: "06. Will the valuation help me negotiate with investors?",
        a: "Yes. Our structured, transparent valuation report gives founders strong negotiation power and enhances credibility during funding rounds.",
    }
    ,
    {
        q: "07. Does the service include financial modelling and projections?",
        a: "Yes. We provide detailed financial modelling covering revenue, expenses, cash flow, and scenario analysis to support strategic decision-making.",
    }
    ,
    {
        q: "08. Are the reports investor-ready?",
        a: "Absolutely. You receive a clear, audit-ready valuation report documenting assumptions, methodology, financial models, and final valuation conclusions.",
    }
    ,
    {
        q: "09. Is my startup’s information kept confidential?",
        a: "100%. All financial and business data is handled securely and remains strictly confidential.",
    }
    ,
    {
        q: "10. How do I get started with de tempête?",
        a: "Book a Free Startup Valuation Consultation, and our team will guide you through the process.",
    }
];

function FAQItem({ faq, index, isOpen, onToggle }) {
    const contentRef = useRef(null);

    return (
        <div
            className={`rounded-xl border bg-white transition-all duration-300 overflow-hidden ${isOpen
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
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[#0d1e4a]" : "text-[#0d1e4a] group-hover:text-[#1a9fd4]"
                        }`}
                >
                    {faq.q}
                </span>

                {/* +/- icon */}
                <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen
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