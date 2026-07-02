import { useState, useRef } from "react";

const faqs = [
    {
        q: "01.  How do you ensure payroll accuracy?",
        a: "We ensure accurate payroll processing through structured systems, automated calculations, and multi-level verification checks. This minimizes errors while maintaining compliance with local payroll regulations.",
    },
    {
        q: "02.  Do you offer global HR & payroll services?",
        a: "Yes, we provide global HR and payroll services tailored to different countries. Our solutions align with region-specific labor laws, tax regulations, and compliance requirements.",
    },
    {
        q: "03. Is employee data secure with your HR services?",
        a: "We follow strict data security and confidentiality protocols to protect all employee information. Our systems are designed to ensure safe handling of sensitive HR and payroll data.",
  },
    {
        q: "04. Do you handle payroll taxes and compliance?",
        a: "Yes, we manage payroll taxes, statutory contributions, and regulatory filings. This ensures your business remains fully compliant with local and international labor laws.",
    },
    {
        q: "05. Can you manage HR for growing teams?",
        a: "Our HR solutions are scalable and designed to support businesses at every stage of growth. We streamline workforce management while maintaining efficiency and compliance.",
    }
    ,
    {
        q: "06. What industries do you support for HR & payroll?",
        a: "We provide HR and payroll solutions across multiple industries, adapting our services to meet specific operational and compliance needs of each sector.",
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

export default function HRFaq() {
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