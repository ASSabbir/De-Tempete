import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. Will my investments be safe?",
        a: "Yes. de tempête prioritizes capital protection through proactive risk management, regular monitoring, and disciplined financial oversight, ensuring your investments stay secure while growing steadily.",
    },
    {
        q: "02. How will this service improve my returns?",
        a: "We optimize your portfolio through strategic rebalancing, diversification, tax-efficient planning, and data-driven insights, helping you maximize returns while maintaining a balanced risk profile.",
    },
    {
        q: "03. How often will I get updates and reports?",
        a: "You stay fully informed. We provide regular reports and updates based on your preference — weekly, monthly, or quarterly — covering performance, risks, and actionable insights.",
  },
    {
        q: "04. How do you manage risks?",
        a: "Our experts identify potential risks early, evaluate their impact, and implement strategies to mitigate them, ensuring your portfolio remains resilient under changing market conditions.",
    },
    {
        q: "05. What kind of expertise will I have access to?",
        a: "You gain direct access to our seasoned financial professionals who guide your strategy, answer questions, and provide insights to help you make confident, informed investment decisions.",
    }
    ,
    {
        q: "06. Does this service suit my type of investment?",
        a: "Absolutely. Whether you have startups, SMEs, stocks, dividend-paying assets, or interest-generating investments, our monitoring and management services are fully adaptable to your portfolio.",
    }
    ,
    {
        q: "07. What happens if I want to exit an investment?",
        a: "We assist with smooth and strategic exits, including liquidation planning, tax implications, and minimal disruption, ensuring your capital is efficiently and safely returned.",
    }
    ,
    {
        q: "08. How do I get started?",
        a: "Getting started is simple. Schedule a free consultation, and we’ll assess your portfolio, understand your goals, and create a customized post-investment monitoring plan tailored to your needs.",
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

export default function PostFaq() {
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