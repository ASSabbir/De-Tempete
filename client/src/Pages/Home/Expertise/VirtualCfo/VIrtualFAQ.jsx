import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. What is a Virtual CFO, and how does it differ from a full-time CFO?",
        a: "A Virtual CFO (Chief Financial Officer) provides strategic financial leadership remotely or part-time, helping businesses make smarter financial decisions without the cost of hiring a full-time executive. Unlike a full-time CFO, a Virtual CFO offers flexible, scalable support tailored to your business needs.",
    },
    {
        q: "02. How can a Virtual CFO help my business grow?",
        a: "A Virtual CFO does more than manage numbers—they provide strategic insights to improve profitability, optimize cash flow, and plan for growth. From budgeting and forecasting to risk management and financial strategy, they help businesses scale efficiently while avoiding costly mistakes.",
    },
    {
        q: "03. When should I consider hiring a Virtual CFO?",
        a: "A Virtual CFO does more than manage numbers—they provide strategic insights to improve profitability, optimize cash flow, and plan for growth. From budgeting and forecasting to risk management and financial strategy, they help businesses scale efficiently while avoiding costly mistakes.",
  },
    {
        q: "04. Can a Virtual CFO work with my existing accountant or finance team?",
        a: "Yes. A Virtual CFO complements your current team by providing strategic oversight and actionable insights. They integrate with accountants, bookkeepers, and other financial staff to ensure accurate reporting, compliance, and high-level decision-making.",
    },
    {
        q: "05. How quickly can I onboard a Virtual CFO?",
        a: "Onboarding is fast and structured. After understanding your business and goals through an initial audit, we set up reporting systems, define KPIs, and create a roadmap for strategic financial management. Most businesses begin seeing actionable insights within weeks.",
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

export default function VIrtualFAQ() {
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