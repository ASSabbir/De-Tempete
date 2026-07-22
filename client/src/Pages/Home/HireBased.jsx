import { Link } from "react-router";
import {
  FaUserTie,
  FaChartLine,
  FaFileInvoiceDollar,
  FaBook,
  FaUsersCog,
  FaHandshake,
  FaSearchDollar,
  FaChartPie,
} from "react-icons/fa";
const services = [
  {
    title: "Virtual CFO",
    path: "/virtual-cfo",
    description:
      "Optimize cash flow and strategy with expert virtual CFO services across the UK, UAE, KSA, Estonia and Bangladesh.",
    icon: <FaUserTie  />,
  },
  {
    title: "Business Valuation",
    path: "/business-valuation",
    description:
      "Unlock your company's true worth with precise business valuation services for global markets.",
    icon: <FaChartLine  />,
  },
  {
    title: "Tax Advisory",
    path: "/Tax-Advisory",
    description:
      "Maximize savings and stay compliant with smart tax advisory and planning in the UK, UAE, KSA, Estonia and Bangladesh.",
    icon: <FaFileInvoiceDollar  />,
  },
  {
    title: "Bookkeeping",
    path: "/bookkeeping",
    description:
      "Streamline accounting and maintain accurate bookkeeping for transparent financial records.",
    icon: <FaBook  />,
  },
  {
    title: "HR & Payroll",
    path: "/hr-payroll",
    description:
      "Simplify operations with seamless HR management and payroll services for multi-country compliance.",
    highlight: true,
    icon: <FaUsersCog  />,
  },
  {
    title: "Investment Readiness",
    path: "/investment-readiness",
    description:
      "Prepare for funding and growth with structured investment readiness solutions worldwide.",
    icon: <FaHandshake  />,
  },
  {
    title: "Due Diligence",
    path: "/due-diligence",
    description:
      "Secure deals and partnerships with thorough financial due diligence for cross-border transactions.",
    icon: <FaSearchDollar  />,
  },
  {
    title: "Post Investment Monitoring",
    path: "/post-investment-monitoring",
    description:
      "Track performance and ensure value creation with continuous post-investment monitoring globally.",
    icon: <FaChartPie  />,
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
            <a
              href={s.path}
              key={s.title}
              className={`group relative flex flex-col gap-4 p-7 hover:shadow-xl lg:p-9 transition-all duration-300 cursor-pointer
                `}
            >
              {/* Top accent on hover */}
              <div
                className={`absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#22d3ee] to-[#0d1e4a] transition-all duration-300 group-hover:w-full `}
              />

              {/* Icon */}
              <div className="transition-transform duration-300 text-light-blue  group-hover:scale-105 t">
                <div className="text-4xl">
                  {s.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[#0d1e4a] font-bold text-base sm:text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </a>
          ))}

          {/* CTA cell — 9th cell */}
          <div className="bg-white flex flex-col justify-center gap-4 p-7 lg:p-9">
            <p className="text-gray-400 text-sm leading-relaxed">
              Get tailored financial and company formation guidance from our
              experienced advisors.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1a9fd4] hover:bg-[#1589bb] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-[#1a9fd4]/30 hover:shadow-lg w-fit"
            >
              Contact Now
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
