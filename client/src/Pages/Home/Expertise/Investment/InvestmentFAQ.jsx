import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. How do I know if my business is ready for investors?",
        a: "de tempête evaluates your business model, financials, growth strategy, and market positioning to determine whether your business is truly investor-ready and prepared for fundraising opportunities.",
    },
    {
        q: "02. Can de tempête help create financial projections and pitch decks?",
        a: "Yes. Our investment readiness services include financial forecasting, investor-focused business plans, and professionally designed pitch decks that help present your business with clarity and confidence.",
    },
    {
        q: "03. Can investment readiness improve my chances of securing funding?",
        a: "Businesses with clear financials, strong market validation, and organized investor materials are more likely to attract serious investors. de tempête helps position your business for stronger investor engagement and funding opportunities. ",
  },
    {
        q: "04. What types of businesses can benefit from investment readiness services?",
        a: "Startups, SMEs, expanding businesses, and companies preparing for fundraising, acquisitions, or investor partnerships can all benefit from investment readiness and strategic financial planning. ",
    },
    {
        q: "05. Does de tempête provide investor introductions?",
        a: "We help businesses identify and connect with potential investors whose goals, industries, and investment strategies align with their long-term vision and growth plans.",
    }
    ,
    {
        q: "06. Is my business information kept confidential during the process?",
        a: "Absolutely. de tempête handles all financial documents, business plans, and sensitive company information with strict confidentiality and professional discretion.",
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

export default function InvestmentFAQ() {
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