import { useState, useRef } from "react";

const Brand = () => (
  <strong><em>de tempête</em></strong>
);

const faqs = [
  {
    q: <>01. Who is required to comply with UAE AML regulations?</>,
    a: <>UAE AML rules apply to regulated financial institutions and relevant DNFBPs, including real estate businesses, auditors, accountants, CSPs, legal professionals and dealers in precious metals and stones.</>,
  },
  {
    q: <>02. Is goAML registration mandatory?</>,
    a: <>Generally, yes, for businesses within regulated categories. goAML is the UAE FIU platform used to submit suspicious activity and other required regulatory reports.</>,
  },
  {
    q: <>03. What is the difference between goAML registration and TFS registration?</>,
    a: <>goAML is the UAE FIU reporting portal, while TFS compliance covers sanctions screening, match assessment, freezing actions and related reporting obligations.</>,
  },
  {
    q: <>04. What documents should an AML-compliant business maintain?</>,
    a: <>Businesses should retain AML policies, risk assessments, KYC and UBO records, screening results, reporting evidence, training records and management approvals.</>,
  },
  {
    q: <>05. How often should the AML policy and risk assessment be updated?</>,
    a: <>Review them regularly and whenever there are material changes in customers, services, jurisdictions, ownership, delivery channels, regulations or risk exposure.</>,
  },
  {
    q: <>06. What is the difference between KYC, CDD and EDD?</>,
    a: <>KYC verifies identity, CDD assesses the customer and relationship risk, and EDD applies deeper checks and approvals for higher-risk cases.</>,
  },
  {
    q: <>07. When should a suspicious transaction or activity be reported?</>,
    a: <>A report should be considered when there are reasonable grounds to suspect money laundering, terrorist financing, proliferation financing or related criminal activity.</>,
  },
  {
    q: <>08. What are DPMSR and REAR reports?</>,
    a: <>DPMSR applies to qualifying precious-metals and stones transactions, while REAR applies to certain real estate transactions reported through goAML.</>,
  },
  {
    q: <>09. Can the MLRO or Compliance Officer function be outsourced?</>,
    a: <>It may be outsourced where permitted, but senior management remains responsible for the effectiveness and adequacy of the AML compliance framework.</>,
  },
  {
    q: <>10. What happens during a Ministry of Economy AML inspection?</>,
    a: <>Inspectors may review risk assessments, policies, KYC files, screening records, goAML and TFS compliance, training, reporting history and remediation evidence.</>,
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div
      className={`rounded-xl border bg-white transition-all duration-300 overflow-hidden ${isOpen ? "border-gray-200 " : "border-gray-200 hover:border-gray-300"
        }`}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left group"
      >
        <span
          className={`text-base sm:text-base font-semibold transition-colors duration-200 ${isOpen ? "text-[#0d1e4a]" : "text-[#0d1e4a] group-hover:text-[#1a9fd4]"
            }`}
        >
          {faq.q}
        </span>

        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-[#0d1e4a]  rotate-0" : "bg-white border-gray-300 group-hover:border-[#1a9fd4]"
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

      <div
        ref={contentRef}
        className="transition-all duration-400 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="px-5 sm:px-7 pb-5 text-base sm:text-[15px] text-gray-500 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function AmlFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f8f9fc] w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-[3vw] 2xl:text-[2.6rem] text-[#0d1e4a] font-normal mb-10 lg:mb-14">
          Frequently Asked <span className="font-extrabold">Questions</span>
        </h2>

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