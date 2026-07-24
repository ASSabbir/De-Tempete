import { useState } from "react";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Award,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaBuilding } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { ShieldCheck, Users, DollarSign } from "lucide-react";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

const isoServices = [
  {
    title: "ISO Implementation & Advisory",
    icon: HiOutlineClipboardDocumentList,
    items: [
      "Gap analysis & readiness assessment",
      "Documentation support (manuals, procedures & templates)",
      "Internal audit preparation",
      "Management review facilitation",
    ],
  },
  {
    title: "ISO Certification Support",
    icon: HiOutlineShieldCheck,
    items: [
      "ISO 9001 (Quality Management)",
      "ISO 14001 (Environmental Management)",
      "ISO 45001 (Occupational Health & Safety)",
      "Other ISO certifications based on business needs",
    ],
  },
];
const businessData = [
  {
    title: "Corporate & Statutory Compliance",
    image: "/src/asstes/img_temp/servics/Bd/1.webp",
    items: [
      "Company renewals & filing deadlines",
      "Annual returns & ROC filings",
      "Corporate governance practices",
      "Board resolutions & statutory documentation",
    ],
  },
  {
    title: "Licensing & Sector-Specific Permissions",
    image: "/src/asstes/img_temp/servics/Bd/2.webp",
    items: [
      "Trade licenses & activity permits",
      "Export/Import permissions & customs support",
      "Approvals for manufacturing, pharma & food sectors",
      "Liaison with regulatory authorities",
    ],
  },
  {
    title: "Reporting & Documentation",
    image: "/src/asstes/img_temp/servics/Bd/3.webp",
    items: [
      "Compliance calendars & reminders",
      "Preparation of statutory reports",
      "Submission coordination with government agencies",
      "Ongoing compliance monitoring & support",
    ],
  },
];

const exportReadinessItems = [
  {
    title: "Assessment & Planning",
    description:
      "We begin with a comprehensive compliance audit to identify regulatory gaps, business requirements, and implementation priorities.",
  },
  {
    title: "Documentation & Implementation",
    description:
      "We prepare all required documentation, policies, and standard operating procedures to ensure full regulatory compliance.",
  },
  {
    title: "Submission & Follow-Up",
    description:
      "Our experts manage filings, applications, authority coordination, and follow up until approvals are successfully obtained.",
  },
  {
    title: "Ongoing Support",
    description:
      "Compliance doesn't end with approval—we provide continuous guidance to maintain standards, meet future obligations, and stay audit-ready.",
  },
];

const Regulatory = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const servicesData = [
    {
      title: "Accounting & Bookkeeping",
      icon: BarChart3,
      description:
        "We manage day-to-day bookkeeping, ledger updates, and financial record-keeping to ensure accurate, organized, and compliant accounts.",
    },
    {
      title: "Financial Reporting & Compliance",
      icon: ShieldCheck,
      description:
        "Preparation of monthly, quarterly, and annual financial statements with IFRS alignment, regulatory reporting, and audit-ready documentation.",
    },
    {
      title: "Budgeting, Forecasting & Cash Flow",
      icon: DollarSign,
      description:
        "We develop budgets, cash flow projections, and financial forecasts to support better planning and informed decision-making.",
    },
    {
      title: "Accounts Payable & Receivable",
      icon: Users,
      description:
        "Efficient management of invoices, vendor payments, receivables tracking, and reconciliations to maintain healthy cash flow.",
    },
    {
      title: "Financial Analysis & Management Insights",
      icon: PieChart,
      description:
        "Clear profitability analysis, KPI tracking, and performance reviews that provide actionable financial insights for sustainable growth.",
    },
    {
      title: "Internal Controls & Process Optimization",
      icon: TrendingUp,
      description:
        "We design and strengthen internal controls, approval workflows, and reporting structures to minimize risk and improve accuracy and efficiency.",
    },
    {
      title: "Cash Flow Management",
      icon: BarChart3,
      description:
        "We design and strengthen financial controls, approval workflows, and operating structures to minimize risk, improve accuracy, and enhance operational efficiency.",
    },
    {
      title: "Audit Support & Preparation",
      icon: ShieldCheck,
      description:
        "We support internal and external audits by preparing schedules, organizing documentation, and ensuring smooth audit completion.",
    },
    {
      title: "Accounting Software & ERP Guidance",
      icon: TrendingUp,
      description:
        "Digital accounting set up and support. We help you choose, implement, and optimize systems like QuickBooks, Xero, SAP, Tally, or customized ERP solutions based on your business size and needs.",
    },
  ];

  const benefitsData = [
    {
      title: "Reduced Regulatory Risk & Penalties",
      icon: FaCheckCircle,
    },
    {
      title: "Faster Certification Approval",
      icon: FaCheckCircle,
    },
    {
      title: "Higher Credibility with Clients & Partners",
      icon: FaCheckCircle,
    },
    {
      title: "Streamlined Internal Processes",
      icon: FaCheckCircle,
    },
    {
      title: "Complete Peace of Mind",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Bangladesh Business Setup"
        heading={
          <>
            Regulatory & ISO Compliance
            <br />
            <span className="text-light-blue">Bangladesh</span>
            <br />
            Navigate Compliance with Confidence
          </>
        }
        description="Doing business in Bangladesh requires adherence to a wide range of regulatory requirements, from corporate governance and statutory filings to quality management and industry certifications. Our Regulatory & ISO Compliance services help you stay compliant, reduce risk, and strengthen operational credibility."
      />

      <StatsSection
        bgColor="bg-white"
        maxWidth="max-w-9xl"
        stats={[
          { icon: BarChart3, end: 9, label: "Years of Experience" },
          { icon: PieChart, end: 20, label: "Countries Covered" },
          {
            icon: TrendingUp,
            end: 30000,
            duration: 3000,
            label: "Clients Served",
          },
          { icon: Award, end: 120, duration: 2500, label: "Awards Received" },
        ]}
      />

      {/* Why Compliance
Matters Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div>
              <img
                src="/src/asstes/img_temp/servics/Bd/financial-governance.webp"
                alt="Financial Governance"
                className="w-full h-150 object-cover rounded-3xl shadow-lg"
              />
            </div>
            {/* Content */}
            <div>
              <h2 className="text-5xl text-[#16244b] font-light">
                <span className="font-bold">Why Compliance</span>
                <br />
                Matters
              </h2>

              <p className="mt-8 text-xl text-gray-600 text-justify">
                Non-compliance can lead to fines, operational delays, and
                reputational damage. Whether you’re a local startup, an
                international investor, or a multinational enterprise, we help
                you:
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Understand Bangladesh’s regulatory landscape",
                  "Achieve ISO and industry certifications",
                  "Maintain ongoing compliance efficiently",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <FaCircleCheck className="text-light-blue text-2xl shrink-0" />
                    <span className="text-gray-600 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Setup & Registration */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#13264d]">
              Regulatory Compliance Services
            </h2>

            <p className="mt-7 text-lg text-gray-600 leading-8">
              We provide end-to-end support for all regulatory requirements in
              Bangladesh, tailored to your industry and business model.
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
                    <div className="w-16 h-16 rounded-xl bg-light-blue flex items-center justify-center shadow-lg">
                      <FaBuilding className="text-white text-3xl" />
                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="absolute bottom-8 left-28 text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}

                <div className="p-8">
                  <ul className="space-y-2">
                    {item.items.map((text, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-600 leading-7"
                      >
                        <FaCheckCircle className="text-light-blue text-xl mt-1 shrink-0" />

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
              Stay ahead of changes impacting business operations in Bangladesh
              — from tax law updates to labour regulations and environmental
              requirements.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 bg-linear-to-r from-light-blue to-light-blue text-white px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 duration-300 shadow-lg">
              Legal & Regulatory Updates
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= ISO Certification & Quality Standards ================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl leading-tight text-[#16244b]">
              <span className="font-bold">ISO Certification</span>{" "}
              <span className="font-light">& Quality</span>
              <br />
              <span className="font-light">Standards</span>
            </h2>

            <p className="mt-8 text-lg text-gray-500 leading-8">
              Achieving ISO certification builds trust with your partners,
              clients, and stakeholders. We assist you with every stage of
              implementation, documentation, and certification.
            </p>
          </div>

          {/* Two Columns */}

          <div className="grid lg:grid-cols-2 gap-24 ">
            {isoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-[#eef8ff] flex items-center justify-center shrink-0">
                      <Icon className="text-[#4CC9F0] text-3xl" />
                    </div>

                    <h3 className="text-3xl font-bold text-[#16244b]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#4CC9F0] text-xl mt-1 shrink-0" />

                        <p className="text-gray-600 text-lg leading-7">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              How We Work
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              We breakdown compliance into practical, manageable steps
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
                      src="/src/asstes/img_temp/New folder/imgi_7_admin-ajax.webp"
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

      {/* What You Gain Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-8xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white">What You Gain</h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-3 hover:bg-[#43507d] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#16244b]">
              Why Choose Our Regulatory & ISO compliance Services
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Regulatory Expertise",
                desc: "Strong understanding of Bangladesh regulatory frameworks across multiple industries.",
              },
              {
                title: "Business-Focused Compliance",
                desc: "Practical solutions designed to support operations, not just meet legal requirements.",
              },
              {
                title: "Complete ISO Implementation Support",
                desc: "End-to-end guidance from gap analysis to audit readiness and final certification.",
              },
              {
                title: "Direct Authority Coordination",
                desc: "Active liaison with government bodies and accredited certification agencies.",
              },
              {
                title: "Structured & Transparent Process",
                desc: "Clear timelines, compliance calendars, and documented workflows for full visibility.",
              },
              {
                title: "Long-Term Advisory Partnership",
                desc: "Ongoing strategic support beyond one-time filings or certifications.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#f8fbff] to-white rounded-2xl p-8 border border-[#e0f4ff] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>

                  <h3 className="text-xl font-bold text-[#16244b]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Get Started
            <br />
            <span className="font-bold">Today</span>
          </>
        }
        subheading="Whether you need full finance outsourcing, project support, or advisory services, we can streamline your accounting and financial management in Bangladesh."
        commitmentTitle="Why Partner With Us"
        commitmentItems={[
          "Free initial consultation — no obligation",
          "Complete confidentiality & secure handling",
          "Professional & certified accounting experts",
          "Practical, customized solutions for your business",
        ]}
      />

      <RecentBlogs
        blogs={[
          {
            id: 1,
            image: "/src/asstes/img_temp/New folder/council-tax.webp",
            title:
              "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
            desc: "Council tax can sometimes become a financial burden. Learn practical ways to create a manageable arrangement plan and avoid unnecessary penalties.",
          },
          {
            id: 2,
            image:
              "/src/asstes/img_temp/New folder/self-assessment-tax-return.webp",
            title: "Self-Assessment Tax Return Process for Businesses",
            desc: "Understand the self-assessment tax return process with our comprehensive guide covering deadlines, documentation and compliance requirements.",
          },
          {
            id: 3,
            image: "/src/asstes/img_temp/New folder/Virtual-CFO-2048x1366.webp",
            title: "The Role & Benefits of a Virtual CFO in Modern Businesses",
            desc: "Discover how a Virtual CFO helps businesses improve financial planning, cash flow management and strategic decision-making.",
          },
        ]}
      />
    </div>
  );
};

export default Regulatory;
