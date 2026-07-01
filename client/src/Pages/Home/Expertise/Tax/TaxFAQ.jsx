import { useState, useRef } from "react";

const faqs = [
    {
        q: "01. How do I know if my business is fully tax compliant?",
        a: "Many businesses assume they are compliant until they face penalties, audits, or reporting issues. Professional tax advisory helps identify compliance gaps, improve reporting accuracy, and reduce operational risks before they become costly problems. ",
    },
    {
        q: "02. Why should businesses use professional tax advisory services instead of handling taxes internally?",
        a: "Tax regulations constantly evolve across different markets. Professional advisory support helps businesses reduce errors, manage risks, improve tax efficiency, and avoid costly compliance issues that internal teams may overlook.",
    },
    {
        q: "03.  Does de tempête support businesses operating across multiple countries?",
        a: "Yes. de tempête supports businesses with cross-border tax considerations, international operational structures, and tax-related coordination for businesses operating in multiple regions. ",
  },
    {
        q: "04. What are the risks of incorrect tax filings or reporting?",
        a: "Incorrect filings may lead to penalties, financial losses, operational disruptions, regulatory investigations, and reputational damage. Structured tax management helps reduce these risks. ",
    },
    {
        q: "05. Can tax advisory services help reduce unnecessary financial losses?",
        a: "Yes. Proper tax planning and advisory support can help businesses identify inefficiencies, improve financial organization, and avoid unnecessary tax exposure or compliance-related costs. ",
    }
    ,
    {
        q: "06. Is tax advisory only important for large companies?",
        a: "No. Startups, SMEs, and growing businesses often face the highest risks due to limited internal tax expertise. Early tax planning and compliance support help build stronger long-term operations. ",
    }
    ,
    {
        q: "07. How can businesses prepare for changing tax regulations?",
        a: "Businesses need continuous monitoring, structured reporting processes, and expert guidance to adapt to changing tax environments without disrupting operations.",
    }
    ,
    {
        q: "08. When should a business consider professional tax advisory support?",
        a: "Businesses should consider professional tax advisory when expanding operations, entering new markets, facing compliance challenges, restructuring operations, or experiencing difficulties managing tax obligations internally.",
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

export default function TaxFAQ() {
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