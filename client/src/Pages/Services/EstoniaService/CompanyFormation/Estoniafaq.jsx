import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * EstoniaFAQ
 *
 * Accordion-style FAQ for Estonia company formation. Pass your two brand
 * colors in via the `colors` prop — same convention as EstoniaBusinessServices.
 *
 * <EstoniaFAQ colors={{ light: "#eaf1fb", dark: "#0e2a47" }} />
 */

const faqs = [
  {
    question: "What business structure should I choose in Estonia?",
    answer:
      "For almost every foreign founder, it's an OÜ (Private Limited Company). It gives you limited liability, needs only €0.01 per shareholder in share capital, and can be registered and run entirely online. An AS only makes sense once you're raising institutional capital or planning a public listing.",
  },
  {
    question: "How long does company registration actually take?",
    answer:
      "The e-Residency background check is the long part — typically 3 to 6 weeks. Once your digital ID is issued, the company itself is usually reviewed and approved within one working day. Start to finish, plan for 4 to 8 weeks before you're ready to trade.",
  },
  {
    question: "Do I need a legal address and a contact person?",
    answer:
      "Yes. Every Estonian company needs a registered legal address that satisfies the Commercial Code — this isn't office space, just an official address. A contact person is also required if your entire management board lives outside Estonia. Both are handled as annual service arrangements, not one-time state fees.",
  },
  {
    question: "When do I need to register for VAT?",
    answer:
      "Registration becomes mandatory once your annual Estonia-sourced taxable turnover passes €40,000, and you have three business days to apply from that point. If you're a non-resident business making any taxable supply in Estonia, registration may be required immediately, regardless of turnover.",
  },
  {
    question: "What is an EORI number, and do I need one?",
    answer:
      "An EORI number is the identifier customs authorities use to track shipments across the EU. If your company imports or exports physical goods, you'll need one before goods can clear customs — we handle this registration alongside your company setup.",
  }
];

export default function EstoniaFAQ({
  colors = { light: "#eaf1fb", dark: "#0e2a47" },
}) {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(0);

  // Set initial open/closed heights without animating on mount.
  useEffect(() => {
    faqs.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (!el) return;
      if (i === openIndex) {
        el.style.height = "auto";
        el.style.opacity = "1";
      } else {
        el.style.height = "0px";
        el.style.opacity = "0";
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dt-faq-heading, .dt-faq-subtitle, .dt-faq-intro", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".dt-faq-item", {
        y: 28,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".dt-faq-list",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (index) => {
    const closingIndex = openIndex;
    const isClosingOnly = closingIndex === index;
    const nextOpenIndex = isClosingOnly ? null : index;

    if (closingIndex !== null && contentRefs.current[closingIndex]) {
      const el = contentRefs.current[closingIndex];
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.32,
        ease: "power2.inOut",
      });
    }

    if (nextOpenIndex !== null && contentRefs.current[nextOpenIndex]) {
      const el = contentRefs.current[nextOpenIndex];
      gsap.set(el, { height: "auto" });
      const fullHeight = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => gsap.set(el, { height: "auto" }),
        }
      );
    }

    setOpenIndex(nextOpenIndex);
  };

  return (
    <section ref={sectionRef} className="bg-slate-50 py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="dt-faq-heading text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Estonia Company Formation,
            <br className="hidden sm:block" /> Answered
          </h2>
          <p
            className="dt-faq-subtitle text-lg md:text-xl font-semibold mb-3"
            style={{ color: colors.dark }}
          >
            Common Questions From Foreign Founders
          </p>
          <p className="dt-faq-intro text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're applying for e-Residency, choosing a structure, or
            opening your first account, here's what founders ask us most
            before registering their Estonian company.
          </p>
        </div>

        {/* Accordion */}
        <div className="dt-faq-list flex flex-col gap-5">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={question}
                className="dt-faq-item rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-6 py-5 sm:px-7 sm:py-6 text-left"
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                    
                  >
                    <div className="w-8 h-8 rounded-md bg-linear-to-br from-blue-400 to-light-blue flex items-center justify-center text-white text-sm">
                      ✦
                    </div>
                  </span>
                  <span className="flex-1 text-lg md:text-xl font-semibold text-slate-900">
                    {question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden"
                >
                  <p className="px-6 sm:px-7 pb-6 sm:pb-7 pl-[4.5rem] sm:pl-[5.25rem] text-base md:text-lg text-slate-500 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}