import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. How do I hand over my books if everything is disorganized?",
        a: "No problem! most clients come to us with messy or outdated books. de tempête specializes in “clean-up bookkeeping,” where we fix past records, categorize transactions properly, and bring everything up to date before taking over the routine work.",
    },
    {
        q: "02. What access do you need from my side to start bookkeeping?",
        a: "We only need secure access to your bank statements, invoices, receipts, and accounting software (if you have one). If you’re not using any software yet, we’ll help you choose and set it up.",
    },
    {
        q: "03. Will I still have control over my financial data?",
        a: "Absolutely. You stay the owner of all financial records. We only manage and organize them, you have full visibility and access at all times. ",
  },
    {
        q: "04. Can you take over bookkeeping from my previous accountant or bookkeeper?",
        a: "Yes. We can coordinate the transition smoothly, request required documents, review past books, and ensure everything is transferred without disruption. ",
    },
    {
        q: "05. How often will my books be updated?",
        a: "You can choose daily, weekly, monthly, or custom frequency. Your books will always stay current so you never get last-minute surprises.",
    }
    ,
    {
        q: "06. What accounting software do you support and can you work with the one I’m already using?",
        a: "We work with all major tools including QuickBooks, Xero, Zoho Books, Wave, FreshBooks, and custom setups. If you’re already using a system, we integrate into it. If not, we help you select the right one. ",
    }
    ,
    {
        q: "07. What happens if you find errors in my previous bookkeeping?",
        a: "We correct them during the onboarding and cleanup phase. This includes reclassifying expenses, fixing balance sheet issues, matching transactions, and ensuring everything is accurate before continuing.",
    }
    ,
    {
        q: "08. How do you ensure accuracy and avoid mistakes in my books?",
        a: "We follow a structured workflow that includes reconciliations, double reviews, standardized categorization, and monthly closing checks, ensuring error-free bookkeeping.",
    }
    ,
    {
        q: "09. How do you handle confidentiality and data security?",
        a: "All client files are handled through encrypted channels, secure cloud storage, and strict confidentiality protocols. Your financial data stays private and protected.",
    }
    ,
    {
        q: "10. How do I get started?",
        a: "Book a free consultation, share your current bookkeeping situation, and we’ll outline a clean handover plan. Once you’re ready, we start immediately, no delays, no complications.",
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

export default function BookFAQ() {
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