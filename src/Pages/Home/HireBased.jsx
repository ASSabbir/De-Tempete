import { Link } from "react-router";

const services = [
  {
    title: "Virtual CFO",
    description: "Optimize cash flow and strategy with expert virtual CFO services across the UK, UAE, KSA, and Bangladesh.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <circle cx="32" cy="20" r="10" />
        <path d="M14 54c0-9.941 8.059-18 18-18s18 8.059 18 18" strokeLinecap="round" />
        <circle cx="32" cy="20" r="5" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <text x="29" y="23" fontSize="6" fill="#1a9fd4" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Business Valuation",
    description: "Unlock your company's true worth with precise business valuation services for global markets.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <rect x="8" y="36" width="10" height="20" rx="2" fill="#e0f2fe" stroke="#1a9fd4" />
        <rect x="22" y="26" width="10" height="30" rx="2" fill="#e0f2fe" stroke="#1a9fd4" />
        <rect x="36" y="16" width="10" height="40" rx="2" fill="#e0f2fe" stroke="#1a9fd4" />
        <rect x="50" y="8" width="10" height="48" rx="2" fill="#e0f2fe" stroke="#1a9fd4" />
        <circle cx="13" cy="22" r="3" fill="#1a9fd4" />
        <text x="10" y="25" fontSize="5" fill="white" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "Tax Advisory",
    description: "Maximize savings and stay compliant with smart tax advisory and planning in the UK, UAE, KSA, and Bangladesh.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <path d="M32 8 C20 8 14 18 14 28 C14 40 24 52 32 56 C40 52 50 40 50 28 C50 18 44 8 32 8Z" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <text x="27" y="34" fontSize="14" fill="#1a9fd4" fontWeight="bold">$</text>
        <path d="M20 10 Q16 6 18 2 Q22 6 20 10Z" fill="#0d1e4a" />
        <path d="M32 6 Q32 2 32 0 Q34 3 32 6Z" fill="#0d1e4a" />
        <path d="M44 10 Q48 6 46 2 Q42 6 44 10Z" fill="#0d1e4a" />
      </svg>
    ),
  },
  {
    title: "Bookkeeping",
    description: "Streamline accounting and maintain accurate bookkeeping for transparent financial records.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <rect x="10" y="8" width="36" height="48" rx="3" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <rect x="6" y="12" width="36" height="48" rx="3" fill="white" stroke="#0d1e4a" />
        <line x1="14" y1="24" x2="34" y2="24" stroke="#1a9fd4" />
        <line x1="14" y1="32" x2="34" y2="32" stroke="#1a9fd4" />
        <line x1="14" y1="40" x2="26" y2="40" stroke="#1a9fd4" />
        <circle cx="34" cy="38" r="6" fill="#e0f2fe" stroke="#1a9fd4" />
        <text x="31" y="41" fontSize="7" fill="#1a9fd4" fontWeight="bold">$</text>
      </svg>
    ),
  },
  {
    title: "HR & Payroll",
    description: "Simplify operations with seamless HR management and payroll services for multi-country compliance.",
    highlight: true,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <rect x="10" y="28" width="22" height="14" rx="2" fill="#e0f2fe" stroke="#1a9fd4" />
        <path d="M10 32 Q4 28 8 22 Q16 18 21 22" strokeLinecap="round" fill="#e0f2fe" />
        <rect x="28" y="10" width="20" height="10" rx="5" fill="#1a9fd4" />
        <text x="30" y="18" fontSize="7" fill="white" fontWeight="bold">HIRING!</text>
        <path d="M36 20 L34 26" stroke="#1a9fd4" strokeLinecap="round" />
        <circle cx="20" cy="16" r="6" fill="#e0f2fe" stroke="#0d1e4a" />
        <path d="M10 54c0-6 4-10 10-10s10 4 10 10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Investment Readiness",
    description: "Prepare for funding and growth with structured investment readiness solutions worldwide.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <circle cx="32" cy="44" r="10" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <text x="28" y="48" fontSize="10" fill="#1a9fd4" fontWeight="bold">$</text>
        <path d="M22 30 Q18 20 26 14 Q32 10 38 14 Q46 20 42 30" fill="#e0f2fe" stroke="#0d1e4a" />
        <path d="M26 28 Q24 22 28 18" strokeLinecap="round" />
        <path d="M36 14 Q42 10 46 6" strokeLinecap="round" stroke="#1a9fd4" />
        <path d="M40 8 L46 6 L44 12" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Due Diligence",
    description: "Secure deals and partnerships with thorough financial due diligence for cross-border transactions.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <circle cx="26" cy="26" r="14" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <circle cx="26" cy="26" r="4" fill="#1a9fd4" opacity="0.3" />
        <line x1="36" y1="36" x2="52" y2="52" strokeWidth="3" strokeLinecap="round" stroke="#0d1e4a" />
        <path d="M20 22 L26 18 L32 22" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" />
        <path d="M22 28 L26 32 L32 24" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" />
      </svg>
    ),
  },
  {
    title: "Post Investment Monitoring",
    description: "Track performance and ensure value creation with continuous post-investment monitoring globally.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" stroke="#0d1e4a" strokeWidth="1.5">
        <rect x="8" y="10" width="48" height="34" rx="3" fill="#e0f2fe" stroke="#1a9fd4" strokeWidth="1.2" />
        <rect x="14" y="48" width="36" height="6" rx="2" fill="#e0f2fe" stroke="#0d1e4a" />
        <line x1="32" y1="44" x2="32" y2="48" stroke="#0d1e4a" />
        <polyline points="14,36 24,24 32,30 42,18 50,22" strokeLinecap="round" strokeLinejoin="round" stroke="#1a9fd4" strokeWidth="2" />
        <circle cx="42" cy="18" r="2.5" fill="#1a9fd4" />
      </svg>
    ),
  },
];

export default function HireBased() {
  return (
    <section className="  w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-10 lg:mb-14">
          Hire Based On <span className="font-extrabold">Expertise</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  rounded-2xl ">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative flex flex-col gap-4 p-7 hover:shadow-xl lg:p-9 transition-all duration-300 cursor-pointer
                `}
            >
              {/* Top accent on hover */}
              <div className={`absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#22d3ee] to-[#0d1e4a] transition-all duration-300 group-hover:w-full `} />

              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-105 w-fit">
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[#0d1e4a] font-bold text-base sm:text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}

          {/* CTA cell — 9th cell */}
          <div className="bg-white flex flex-col justify-center gap-4 p-7 lg:p-9">
            <p className="text-gray-400 text-sm leading-relaxed">
              Get tailored financial and company formation guidance from our experienced advisors.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1a9fd4] hover:bg-[#1589bb] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-[#1a9fd4]/30 hover:shadow-lg w-fit"
            >
              Contact Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}