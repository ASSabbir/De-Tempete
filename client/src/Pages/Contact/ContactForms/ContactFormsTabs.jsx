import { useState, useCallback } from "react";
import { LuBriefcase, LuUsers, LuGraduationCap, LuArrowRight } from "react-icons/lu";
import Modal from "./Modal";
import ClientForm from "./ClientForm";
import PartnershipForm from "./PartnershipForm";
import CareerForm from "./CareerForm";
import SharedFullButton from "../../../Components/Shared/SharedFullButton";

const TABS = [
  {
    key: "client",
    Icon: LuBriefcase,
    eyebrow: "Business Enquiries",
    title: ["Your Business.", "Our Expertise."],
    copy: "From company setup and compliance to accounting and business growth, let's discuss what your business needs next.",
    cta: "Discuss Your Business Needs",
    modalTitle: "Let's Grow Your Business",
    modalSubtitle: "Talk to Our Team",
  },
  {
    key: "partnership",
    Icon: LuUsers,
    eyebrow: "Partnerships",
    title: ["Shared Vision.", "Greater Possibilities."],
    copy: "For professional firms, consultants and organisations looking to collaborate, refer clients and create shared opportunities.",
    cta: "Become a Partner",
    modalTitle: "Let's Grow Together",
    modalSubtitle: "Partner With Us",
  },
  {
    key: "career",
    Icon: LuGraduationCap,
    eyebrow: "Careers & Internships",
    title: ["Your Talent.", "Our Next Chapter."],
    copy: "Explore career and internship opportunities with an international team. Bring your ideas, build your expertise and grow with us.",
    cta: "Explore Opportunities",
    modalTitle: "Grow Your Career With Us",
    modalSubtitle: "Explore Careers",
  },
];

export default function ContactFormsTabs() {
  const [active, setActive] = useState(null); // null | 'client' | 'partnership' | 'career'
  const close = useCallback(() => setActive(null), []);
  const activeTab = TABS.find((t) => t.key === active);

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <p className="text-[#1a9fd4] text-xs font-semibold tracking-[0.25em] uppercase mb-3">Contact Us</p>
        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Let&rsquo;s Grow Beyond&mdash;Together.
        </h2>
        <p className="text-white/80 text-base sm:text-lg mt-2">Connect with the right team for your next step.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {TABS.map(({ key, Icon, eyebrow, title, copy, cta }, index) => {
  const isDark = index % 2 === 0;

  return (
    <div
      key={key}
      className={`flex flex-col rounded-2xl border p-6 transition-all duration-300  hover:shadow-xl ${
        isDark
          ? "bg-white/[0.04] backdrop-blur-md border-white/10 text-white"
          : "bg-white border-white text-[#16244b]"
      }`}
    >
      <Icon
        className={`w-9 h-9 mb-5 ${
          isDark ? "text-white" : "text-[#1a9fd4]"
        }`}
        strokeWidth={1.5}
      />

      <p
        className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${
          isDark ? "text-white/80" : "text-[#1a9fd4]"
        }`}
      >
        {eyebrow}
      </p>

      <h3 className="font-bold text-xl sm:text-2xl leading-snug mb-3">
        {title[0]}
        <br />
        {title[1]}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-6 flex-1 ${
          isDark ? "text-white/70" : "text-gray-500"
        }`}
      >
        {copy}
      </p>

      <button
        type="button"
        onClick={() => setActive(key)}
        className={`w-full flex items-center cursor-pointer justify-between gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-colors duration-200 ${
          isDark
            ? "bg-[#1a6ff0] hover:bg-[#2b7bf5] text-white"
            : "bg-[#16244b] hover:bg-[#243665] text-white"
        }`}
      >
        {cta}
        <LuArrowRight className="w-5 h-5 shrink-0" />
      </button>
       
    </div>
  );
})}
      </div>

      {/* Modal with the selected form */}
      <Modal
        open={!!activeTab}
        onClose={close}
        title={activeTab?.modalTitle}
        subtitle={activeTab?.modalSubtitle}
      >
        {active === "client" && <ClientForm />}
        {active === "partnership" && <PartnershipForm />}
        {active === "career" && <CareerForm />}
      </Modal>
    </div>
  );
}