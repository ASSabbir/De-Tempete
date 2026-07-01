import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaBuilding } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const businessData = [
  {
    title: "Private Limited Company",
    image:
      "/src/asstes/Images/servics/Bd/freepik__corporate-companies-bandgladesh-flag-website-image__46804.webp",
    items: [
      "100% foreign ownership allowed",
      "Full Bangladesh market access",
      "Mandatory office and local directors",
      "Taxable as per Bangladesh corporate regulations",
      "VAT registration support",
    ],
  },
  {
    title: "Branch Office",
    image:
      "/src/asstes/Images/servics/Bd/freepik__private-limited-company-bangladesh-for-company-set__46797.webp ",
    items: [
      "Linked to parent company",
      "Limited liability in Bangladesh",
      "Business activities restricted",
      "Registration with Bangladesh Bank & RJSC",
      "VAT and tax compliance assistance",
    ],
  },
  {
    title: "Representative Office",
    image:
      "/src/asstes/Images/servics/Bd/freepik__private-limited-company-bangladesh-for-company-set__46795.webp",
    items: [
      "Non-commercial operations only",
      "No local revenue generation",
      "Quick setup process",
      "Ideal for market research and liaison functions",
    ],
  },
];

{
  /* Go-To-Market Strategy */
}
import {
  LuBadgeDollarSign,
  LuChartColumnBig,
  LuScale,
  LuBookOpen,
  LuMegaphone,
  LuHandCoins,
} from "react-icons/lu";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Market_Expansion = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const exportReadinessItems = [
    {
      title: "Export Readiness Assessment",
      description: "Align business operations and supply chain for compliance",
    },
    {
      title: "Trade Regulations Guidance",
      description:
        "Navigate Bangladesh export controls, customs, and compliance obligations",
    },
    {
      title: "Risk Management & Due Diligence",
      description: "Safeguard operations against partner and logistics risks",
    },
    {
      title: "Documentation & Logistics Optimization",
      description: "Streamline invoices, customs, and shipping processes",
    },
    {
      title: "Sustainable Export Systems",
      description: "Build scalable, compliant trade operations",
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Bangladesh Business Setup"
        heading={
          <>
            Expand With Confidence
            <br />
            Establish Your Business Presence
            <br />
            <span className="text-light-blue">In Bangladesh The Right Way</span>
          </>
        }
        description="Bangladesh is one of the world's fastest-growing economies. Our expert team helps international companies establish their business presence in Bangladesh with confidence, supporting every step from registration to market entry."
        ctaText="Get a Consultation"
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 9, label: "Years of Experience" },
          { icon: Globe, end: 20, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 30000,
            duration: 3000,
            label: "Clients Served",
          },
          { icon: Medal, end: 120, duration: 2500, label: "Awards Received" },
        ]}
      />

      {/* Business Setup & Registration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#13264d]">
              Business Setup &{" "}
              <span className="font-extrabold">Registration</span>
            </h2>

            <div className="inline-block mt-5 px-5 py-1 rounded bg-[#2D7EF7] text-white font-semibold text-sm">
              Simplified Business Setup & Structure Guidance
            </div>

            <p className="mt-7 text-lg text-gray-600 leading-8">
              From company incorporation to licensing, we simplify every stage
              of your Bangladesh business setup. Our experts help you select the
              right business structure — Private Limited, Branch, or
              Representative Office — based on ownership goals, industry, and
              operational needs.
            </p>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {businessData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Image */}

                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>

                  {/* Icon */}

                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg">
                      <FaBuilding className="text-white text-3xl" />
                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="absolute bottom-8 left-28 text-white text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}

                <div className="p-8">
                  <ul className="space-y-5">
                    {item.items.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-600 leading-7"
                      >
                        <FaCheckCircle className="text-cyan-400 text-xl mt-1 shrink-0" />

                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}

          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              We manage end-to-end documentation, government coordination, and
              licensing so you can focus on growth, not paperwork.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 bg-linear-to-r from-cyan-400 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 duration-300 shadow-lg">
              Explore Complete Business Setup Service Guide
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= Go-To-Market Strategy ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl leading-tight font-light text-[#16244b]">
              <span className="font-bold">Go-To-Market</span> Strategy &
              <span className="font-semibold">
                {" "}
                Business Model Localisation
              </span>
            </h2>

            <p className="mt-8 text-xl text-gray-500 leading-9 max-w-4xl mx-auto">
              Success in Bangladesh requires more than just registration. We
              help tailor your business model, pricing and operations to align
              with local culture, consumer behavior and regulatory requirements.
            </p>
          </div>

          {/* Features */}

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-24">
            {[
              {
                icon: LuBadgeDollarSign,
                title: "Target Market & Competitive Analysis",
                desc: "Evaluate market size, trends, demand potential and competitive positioning.",
              },
              {
                icon: LuChartColumnBig,
                title: "Financial & ROI Modelling",
                desc: "Detailed financial projections, pricing models and investment return analysis.",
              },
              {
                icon: LuScale,
                title: "Regulatory & Operational Readiness",
                desc: "Ensure compliance with Bangladesh regulations and operational requirements.",
                highlight: true,
              },
              {
                icon: LuBookOpen,
                title: "Risk & Sensitivity Assessment",
                desc: "Identify potential business risks, mitigation strategies and scenario planning.",
              },
              {
                icon: LuMegaphone,
                title: "Business Model Localisation",
                desc: "Adapt products, pricing and business structure for Bangladesh market behavior.",
              },
              {
                icon: LuHandCoins,
                title: "Launch Roadmap",
                desc: "Define launch phases, KPIs, milestones and sustainable market rollout strategy.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`rounded-3xl transition-all duration-300 ${
                    item.highlight
                      ? "bg-white shadow-2xl p-10 hover:-translate-y-2"
                      : "hover:bg-white hover:shadow-xl p-4"
                  }`}
                >
                  <Icon className="text-5xl text-slate-500 mb-6" />

                  <h3 className="text-3xl font-bold text-[#16244b] leading-snug mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xl leading-9">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Export Readiness */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Export Readiness, Trade
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              Compliance & Logistics Advisory
            </p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              For smooth exports of merchandise and products from Bangladesh,
              obtain trade compliance and logistics advisory to ensure
              consistent growth and scalability.
            </p>
          </div>

          <div className="max-w-5xl  mx-auto space-y-0">
            {exportReadinessItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden my-4"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/asstes/Images/New folder/imgi_7_admin-ajax.webp"
                      alt="check"
                      className="w-5 h-5 object-contain shrink-0"
                    />

                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {/* ===================== Bank Account Opening ===================== */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}

            <div>
              <img
                src="/src/asstes/Images/servics/Bd/freepik__bangladesh-bank-city-view-blangladesh-flag__46799.webp"
                alt="Bank Account Opening"
                className="w-full h-107.5 object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content */}

            <div>
              <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Bank Account</span>
                <br />
                <span className="font-bold">Opening</span> Assistance
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-500">
                Coordinate with leading local and international banks for
                account opening, compliance documentation, and end-to-end
                activation support.
              </p>

              <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                Our team handles:
              </h4>

              <div className="space-y-5">
                {[
                  "Local & international bank coordination",
                  "Documentation & KYC support",
                  "Account activation guidance",
                  "Smooth & fast onboarding",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <FaCircleCheck className="text-cyan-400 text-2xl shrink-0" />

                    <span className="text-gray-600 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===================== Trademark ===================== */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}

            <div>
              <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Trademark</span>
                <span> Registration & IP</span>
                <br />
                Protection
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-500">
                Secure your brand, logo and products with trademark and
                intellectual property registration in Bangladesh. Our experts
                assist with searches, filing, copyright advisory and renewal
                support.
              </p>

              <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                Our support includes:
              </h4>

              <div className="space-y-5">
                {[
                  "Trademark & patent registration",
                  "Copyright advisory & protection",
                  "Brand & logo security",
                  "Renewal & compliance support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <FaCircleCheck className="text-cyan-400 text-2xl shrink-0" />

                    <span className="text-gray-600 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}

            <div>
              <img
                src="/src/asstes/Images/servics/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646.webp"
                alt="Trademark Registration"
                className="w-full h-107.5 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Visa */}

      {/* ================= Investor Visa ================= */}

      <section className="bg-[#16244B] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              <span className="font-bold">Investor Visa</span> &
              <span className="font-bold"> UAE Residency</span> Support
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              For foreign investors and key employees, we provide guidance on
              Bangladesh investor visas, work permits, residency processes and
              compliance documentation.
            </p>

            <div className="w-44 h-1 bg-cyan-400 rounded-full mx-auto mt-10"></div>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {[
              "Investor & Work Visa Guidance",
              "Residency & Compliance Support",
              "Application Documentation Help",
              "Smooth Approval Process",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-5xl" />
                </div>

                <h3 className="mt-10 text-2xl font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* ================= Why Choose Us ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b] leading-tight">
              Why Choose Our
              <span className="font-bold"> Expansion Advisory Service?</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-2 gap-6 mt-20">
            {[
              {
                title: "Proven Multi-Market Experience",
                desc: "Leverage our years of experience helping businesses successfully enter and operate in multiple countries, including Bangladesh.",
              },
              {
                title: "Global & Local Expertise",
                desc: "Benefit from our combined knowledge of international best practices and deep understanding of the Bangladesh business environment.",
              },
              {
                title: "Complete Setup Support",
                desc: "From company registration to operational launch, we manage every step so you can focus on business growth.",
              },
              {
                title: "In-Depth Bangladesh Insights",
                desc: "Access valuable insights into local regulations, banking, taxation and market dynamics for confident decision-making.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}

                <div className="w-14 h-14 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                  <LuChartNoAxesCombined className="text-cyan-400 text-3xl" />
                </div>

                {/* Content */}

                <div>
                  <h3 className="text-2xl font-bold text-[#16244b] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-lg leading-8">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* ================= CTA Section ================= */}

      <ConsultationCTA
        heading={
          <>
            Start Your Bangladesh
            <br />
            Expansion<span className="font-bold"> Today</span>
          </>
        }
        subheading="Get expert guidance, avoid delays and establish your Bangladesh presence with complete confidence."
        commitmentItems={[
          "Free initial consultation — no obligation",
          "Complete confidentiality & secure handling",
          "Bangladesh regulatory & market experts",
          "Practical, tailored advice for your business",
        ]}
      />

      {/* Blog Section */}
      {/* ================= Recent Blogs ================= */}

      <RecentBlogs
        blogs={[
          {
            id: 1,
            image: "/src/asstes/Images/New folder/council-tax.webp",
            title:
              "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
            desc: "Council tax can sometimes become a financial burden. Learn practical ways to create a manageable arrangement plan and avoid unnecessary penalties.",
          },
          {
            id: 2,
            image:
              "/src/asstes/Images/New folder/self-assessment-tax-return.webp",
            title: "Self-Assessment Tax Return Process for Businesses",
            desc: "Understand the self-assessment tax return process with our comprehensive guide covering deadlines, documentation and compliance requirements.",
          },
          {
            id: 3,
            image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
            title: "The Role & Benefits of a Virtual CFO in Modern Businesses",
            desc: "Discover how a Virtual CFO helps businesses improve financial planning, cash flow management and strategic decision-making.",
          },
        ]}
      />
    </div>
  );
};

export default Market_Expansion;
