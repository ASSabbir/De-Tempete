import React, { useState } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
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
    title: "Company Formation",
    image:
      "/src/asstes/Images/servics/UK/company-formation.webp",
    items: [
      "UK Limited Company setup support",
      "Companies House registration guidance",
      "Business structure advisory",
      "Company name registration",
      "Incorporation documentation support",
      "Startup setup planning",
      "Expansion-focused structuring",
    ],
  },
  {
    title: "HMRC Registrations",
    image:
      "/src/asstes/Images/servics/UK/UK-tax-compliance-workspace-concept.webp",
    items: [
      "Corporation Tax registration guidance",
      "VAT registration preparation",
      "PAYE registration support",
      "HMRC compliance assistance",
      "Tax setup coordination",
      "Registration planning support",
      "Operational readiness guidance",
    ],
  },
  {
    title: "International Business Structuring",
    image:
      "/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp",
    items: [
      "Non-resident founder guidance",
      "Shareholder structuring support",
      "Director & PSC planning",
      "International ownership advisory",
      "Compliance preparation support",
      "UK expansion planning",
      "Long-term scalability guidance",
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

const Market_Expansion = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const exportReadinessItems = [
    {
      title: "Corporation Tax Registration Guidance",
      description:
        "Support for understanding Corporation Tax registration requirements after incorporation.",
    },
    {
      title: "VAT Registration Preparation",
      description:
        "Guidance regarding VAT registration applicability and operational readiness preparation.",
    },
    {
      title: "PAYE Employer Registration Support",
      description:
        "Preparation guidance for businesses planning payroll setup and employee onboarding.",
    },
    {
      title: "Director & PSC Structuring Guidance",
      description:
        "Support regarding ownership structures, directorship responsibilities, and PSC compliance considerations.",
    },
    {
      title: "Identity Verification Preparation",
      description:
        "Guidance regarding Companies House identity verification requirements for directors and PSCs.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Bangladesh Business Setup"
        minHeight="h-screen"
        overlay="bg-[#0E1937]/80"
        heading={
          <>
            Enter UK Business Market
            <br />
            <span className="text-light-blue">Strategic Setup & Expansion</span>
            <br />
            <span className="font-normal">Advisory For Growing Companies</span>
          </>
        }
        description="The UK is one of the world's leading destinations for startups, investors, consultants, and international businesses due to its strong economy, transparent regulations, and global business connectivity. de tempête supports businesses with UK company formation, market entry planning, compliance guidance, and operational setup support for smooth business expansion."
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
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#13264d]">
              Business Setup &{" "}
              <span className="font-extrabold">Registration</span>
            </h2>

            <div className="inline-block mt-5 px-5 py-1 rounded text-cyan-400  text-lg">
              UK Company Formation & Setup Services
            </div>

            <p className="mt-7 text-lg text-gray-600 leading-8">
              Starting a business in the UK requires proper structuring, tax
              registration, and compliance preparation from the beginning. de
              tempête supports startups, SMEs, and international businesses with
              UK company formation and operational setup guidance for smooth
              market entry.
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
        <div className="max-w-[1600px] mx-auto px-6">
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
              Businesses entering the UK market must align operations, pricing,
              and business structures with local regulations and market
              expectations. de tempête supports businesses with UK market entry,
              localisation planning, and operational setup advisory for smoother
              expansion.
            </p>
          </div>

          {/* Features */}

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-24">
            {[
              {
                icon: LuBadgeDollarSign,
                title: "Business Activity & SIC Code Advisory",
                desc: "Guidance for selecting suitable SIC codes aligned with business activities and operational objectives.",
              },
              {
                icon: LuChartColumnBig,
                title: "Financial & Operational Planning",
                desc: "Evaluate startup requirements, operational readiness, and long-term business sustainability.",
              },
              {
                icon: LuScale,
                title: "Compliance & Operational Readiness",
                desc: "Prepare business operations while understanding UK compliance obligations and reporting expectations.",
                highlight: true,
              },
              {
                icon: LuBookOpen,
                title: "Risk & Administrative Assessment",
                desc: "Identify operational risks, documentation gaps, and structural considerations before business expansion.",
              },
              {
                icon: LuMegaphone,
                title: "Business Model Localisation",
                desc: "Adapt services, communication strategies, and operational structures to UK market standards.",
              },
              {
                icon: LuHandCoins,
                title: "Partnership & Commercial Planning",
                desc: "Explore supplier coordination, strategic partnerships, and commercial collaboration opportunities.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className={`rounded-3xl transition-all duration-300 bg-white p-10 ${
                    item.highlight
                      ? "hover:-translate-y-2 hover:shadow-2xl"
                      : "hover:-translate-y-1 hover:shadow-lg"
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
              UK Compliance & Tax
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              Registration Advisory
            </p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              Businesses operating in the UK must maintain proper registrations
              and compliance readiness to reduce administrative delays and
              operational risks. de tempête supports businesses with
              registration, compliance coordination, and operational setup
              guidance.
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
        <div className="max-w-[1600px] mx-auto px-6 space-y-28">
          {/* ===================== Bank Account Opening ===================== */}

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Image */}

            <div className="h-full">
              <img
                src="/src/asstes/Images/servics/Dubai-bank.webp"
                alt="Bank Account Opening"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content */}

            <div className="flex flex-col justify-center">
              <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Bank Account</span>
                <br />
                <span className="font-bold">Opening</span> Assistance
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-500">
                Opening a UK business bank account often requires demonstrable
                operational clarity, ownership transparency, and compliance
                readiness depending on the business structure and activities.
              </p>

              <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                Our team handles:
              </h4>

              <div className="space-y-5">
                {[
                  "Business banking preparation guidance",
                  "Operational clarification support",
                  "Documentation readiness assistance",
                  "Overseas founder banking support",
                  "Compliance onboarding preparation",
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

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Content */}

            <div className="flex flex-col justify-center">
              <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                <span className="font-bold">Trademark</span>
                <span> Registration & IP</span>
                <br />
                Protection
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-500">
                We assist in trademark and intellectual property registration
                through the UAE Ministry of Economy — ensuring your brand, logo
                and products are legally safeguarded.
              </p>

              <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                Our support includes:
              </h4>

              <div className="space-y-5">
                {[
                  "Trademark search and registration",
                  "Patent and copyright advisory",
                  "IP renewal and protection strategy",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <FaCircleCheck className="text-cyan-400 text-2xl shrink-0" />

                    <span className="text-gray-600 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}

            <div className="h-full">
              <img
                src="/src/asstes/Images/servics/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646.webp"
                alt="Trademark Registration"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Visa */}

      {/* ================= Investor Visa ================= */}

      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Heading */}

          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              <span className="font-bold">Investor Visa</span> &
              <span className="font-bold"> UAE Residency</span> Support
            </h2>

            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              Secure your place in the UAE with seamless investor and residency
              visa assistance. de tempête manages all documentation and
              applications to ensure smooth visa processing for investors,
              employees, and dependents.
            </p>
            <div className="w-44 h-1 bg-cyan-400 rounded-full mx-auto mt-10"></div>
          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {[
              "Investor & Partner Visa Processing",
              "Dependent Visa Sponsorship",
              "Emirates ID & Medical Coordination",
              "Visa Renewals And Compliance",
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
        <div className="max-w-325 mx-auto ">
          {/* Heading */}

          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b] leading-tight">
              Why Choose Our
              <span className="font-bold"> UAE Market Expansion Advisory</span>
            </h2>

            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Cards */}

          <div className="max-w-7xl grid lg:grid-cols-2 gap-6 mt-20">
            {[
              {
                title: "Accurate and up-to-date financial records",
                desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                title: "End-to-end support — from setup to residency",
                desc: "Deep knowledge of UAE business, legal & banking landscape.",
              },
              {
                title:
                  "Tailored solutions for startups, SMEs & global investors",
                desc: "Deep knowledge of UAE business, legal & banking landscape.",
              },
              {
                title: "Transparent processes and ongoing compliance focus",
                desc: "Deep knowledge of UAE business, legal & banking landscape.",
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

      <ConsultationCTA
        heading={
          <>
            Start Your UAE
            <br />
            Expansion<span className="font-bold"> Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Market_Expansion;
