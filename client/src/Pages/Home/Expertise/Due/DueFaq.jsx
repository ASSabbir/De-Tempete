import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. What risks can investment due diligence uncover before a deal is finalized?",
        a: "Investment due diligence helps uncover hidden financial liabilities, compliance issues, operational weaknesses, legal risks, inaccurate valuations, and potential growth limitations before investors commit capital or acquisitions move forward.",
    },
    {
        q: "02. How does de tempête conduct financial due diligence for investors?",
        a: "de tempête reviews financial statements, cash flow, liabilities, profitability, forecasting accuracy, tax exposure, and operational performance to help investors evaluate the true financial health of a business.",
    },
    {
        q: "03. Can due diligence help prevent bad investments or business acquisitions?",
        a: "Yes. A professional due diligence process reduces investment risk by identifying red flags, hidden obligations, inconsistent reporting, and operational inefficiencies before agreements are signed.",
  },
    {
        q: "04. What documents are usually required during a due diligence process?",
        a: "Businesses are typically required to provide financial records, tax documents, contracts, compliance certificates, operational reports, employee information, intellectual property records, and legal agreements for review.",
    },
    {
        q: "05. Why do investors request operational and legal due diligence before funding a company?",
        a: "Investors want to verify that a business is financially stable, legally compliant, operationally scalable, and capable of delivering long-term returns without hidden risks or liabilities.",
    }
    ,
    {
        q: "06. Does de tempête support due diligence for mergers and acquisitions?",
        a: "Absolutely. Startups seeking funding often use due diligence services to improve investor confidence, strengthen transparency, validate business operations, and prepare for venture capital or strategic investment discussions.",
    }
    ,
    {
        q: "07. Is sensitive business information kept confidential during due diligence?",
        a: "Absolutely. de tempête handles all financial records, legal documentation, operational data, and confidential business information with strict professional confidentiality throughout the due diligence engagement.",
    }
    ,
    {
        q: "08. Can startups benefit from investment due diligence services?",
        a: "Absolutely. Startups seeking funding often use due diligence services to improve investor confidence, strengthen transparency, validate business operations, and prepare for venture capital or strategic investment discussions.",
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

export default function DueFaq() {
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