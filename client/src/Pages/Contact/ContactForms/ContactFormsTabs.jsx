import { useState } from "react";
import ClientForm from "./ClientForm";
import PartnershipForm from "./PartnershipForm";
import CareerForm from "./CareerForm";

const TABS = [
  {
    key: "client", title: "Let's Grow Your Business", subtitle: "Talk to Our Team",
    copy: "Have a business challenge, expansion plan or compliance need? Whether you're entering a new market, managing finance and compliance, transforming operations or planning your next stage of growth, our team is ready to help.",
  },
  {
    key: "partnership", title: "Let's Grow Together", subtitle: "Partner With Us",
    copy: "Great partnerships create greater possibilities. We collaborate with professional firms, consultants, technology providers, financial institutions, business communities and other organizations to create opportunities and deliver greater value across markets.",
  },
  {
    key: "career", title: "Grow Your Career With Us", subtitle: "Explore Careers",
    copy: "Looking for more than your next job? Join a growing international team where you can work across markets, develop your expertise, embrace new ideas and contribute to businesses around the world.",
  },
];

export default function ContactFormsTabs() {
  const [active, setActive] = useState(null); // null | 'client' | 'partnership' | 'career'

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(active === tab.key ? null : tab.key)}
            className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col gap-2 ${
              active === tab.key ? "border-[#1a9fd4] bg-[#1a9fd4]/10" : "border-white/10 hover:border-[#1a9fd4]/60 hover:bg-[#1a9fd4]/5"
            }`}
          >
            <div>
              <p className={`font-bold text-base mb-1 ${active === tab.key ? "text-[#1a9fd4]" : "text-white"}`}>{tab.title}</p>
              <p className="text-[#1a9fd4] text-sm font-semibold">{tab.subtitle}</p>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">{tab.copy}</p>
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-8 pt-8 border-t border-white/10">
          {active === "client" && <ClientForm />}
          {active === "partnership" && <PartnershipForm />}
          {active === "career" && <CareerForm />}
        </div>
      )}
    </div>
  );
}