import { BsArrowUpRight } from "react-icons/bs";
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
import { FaShieldAlt } from "react-icons/fa";
const services = [
  {
    title: "Virtual CFO",
    path: "/virtual-cfo",
    description:
      "Optimize cash flow and strategy with expert virtual CFO services across the world",
    icon: <FaUserTie />,
  },
  {
    title: "Business Valuation",
    path: "/business-valuation",
    description:
      "Unlock your company's true worth with precise business valuation services for global markets.",
    icon: <FaChartLine />,
  },
  {
    title: "Tax Advisory",
    path: "/Tax-Advisory",
    description:
      "Maximize savings and stay compliant with smart tax advisory and planning in the UK, UAE, KSA, Estonia, USA and Bangladesh.",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "UAE AML Compliance Services",
    path: "/aml-compliance",
    description:
      "End-to-end UAE AML compliance solutions, from goAML registration and KYC to risk assessments, audits, and regulatory reporting.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Bookkeeping",
    path: "/bookkeeping",
    description:
      "Streamline accounting and maintain accurate bookkeeping for transparent financial records.",
    icon: <FaBook />,
  },
  {
    title: "HR & Payroll",
    path: "/hr-payroll",
    description:
      "Simplify operations with seamless HR management and payroll services for multi-country compliance.",
    highlight: true,
    icon: <FaUsersCog />,
  },
  {
    title: "Investment Readiness",
    path: "/investment-readiness",
    description:
      "Prepare for funding and growth with structured investment readiness solutions worldwide.",
    icon: <FaHandshake />,
  },
  {
    title: "Due Diligence",
    path: "/due-diligence",
    description:
      "Secure deals and partnerships with thorough financial due diligence for cross-border transactions.",
    icon: <FaSearchDollar />,
  },
  {
    title: "Post Investment Monitoring",
    path: "/post-investment-monitoring",
    description:
      "Track performance and ensure value creation with continuous post-investment monitoring globally.",
    icon: <FaChartPie />,
  },

];

export default function HireBased() {
  return (
    <section className="  w-full bg-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl 2xl:text-5xl text-[#0d1e4a] font-normal mb-10 lg:mb-14">
          Hire Based On <span className="font-extrabold">Expertise</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl">
          {services.map((s, i) => {
            const isDark = i % 2 === 0;

            return (
              <Link
                to={s.path}
                key={s.title}
                className={`group relative flex h-full flex-col gap-4 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer lg:p-9 ${isDark
                    ? "bg-light-blue text-dark-blue"
                    : "bg-white  text-[#0d1e4a]"
                  }`}
              >
                {/* Top accent on hover */}
                <div
                  className={`absolute top-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${isDark
                      ? "bg-linear-to-r from-[#22d3ee] to-white"
                      : "bg-linear-to-r from-[#22d3ee] to-[#0d1e4a]"
                    }`}
                />

                {/* Icon */}
                <div className="flex transition-transform duration-300 group-hover:scale-105">
                  <div
                    className={`rounded-sm p-3 text-2xl ${isDark
                        ? "bg-white/20 text-white"
                        : "bg-light-blue/10 text-light-blue"
                      }`}
                  >
                    {s.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className={`mb-2 text-sm font-bold 2xl:text-[1.3vw] ${isDark ? "text-[#0d1e4a]" : "text-[#0d1e4a]"
                      }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed 2xl:text-[1vw] ${isDark ? "text-gray-800" : "text-gray-600"
                      }`}
                  >
                    {s.description}
                  </p>
                </div>

                {/* See More */}
                <div
                  className={`mt-auto pt-10 flex items-center justify-end gap-2 ${isDark ? "text-[#22d3ee]" : "text-light-blue"
                    }`}
                >
                  <span className="text-end">See More</span>
                  <BsArrowUpRight />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
