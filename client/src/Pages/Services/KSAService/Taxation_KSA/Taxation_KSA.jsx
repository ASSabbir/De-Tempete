import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

const handleTags = [
  "VAT Registration Support",
  "ZATCA Compliance Coordination",
  "E-Invoicing Support",
  "VAT Filing Assistance",
  "Tax Documentation Management",
  "Compliance-Ready Record Support",
  "Financial Data Coordination",
  "Tax Process Monitoring",
];

const vatAdvisoryPoints = [
  "VAT registration support",
  "Tax account setup assistance",
  "Business activity classification",
  "Initial compliance documentation",
  "ZATCA registration coordination",
  "Tax profile setup support",
  "Regulatory onboarding assistance",
  "VAT setup process guidance",
];

const zatcaBenefits = [
  "ZATCA compliance assistance",
  "E-invoicing coordination support",
  "Invoice documentation review",
  "Tax invoice organization",
  "Digital invoice process support",
  "Reporting documentation management",
  "Operational compliance coordination",
  "Regulatory process monitoring",
];

const vatFilingItems = [
  "VAT filing coordination support",
  "Tax data preparation support",
  "Financial record organization",
  "VAT calculation assistance",
  "Reporting documentation review",
  "Filing deadline coordination support",
  "Compliance reporting support",
  "Tax setup assistance",
  "Regulatory documentation support",
  "Tax account organization",
  "Business activity classification support",
  "VAT-related record coordination",
  "Compliance documentation review",
  "Tax readiness support",
];

const ongoingBenefits = [
  "ZATCA compliance assistance",
  "E-invoicing coordination support",
  "Invoice documentation review",
  "Tax invoice organization",
  "Digital invoice process support",
  "Reporting documentation management",
  "Operational compliance coordination",
  "Regulatory process monitoring",
];

const gains = [
  "Improved Tax Organization",
  "Stronger VAT Compliance",
  "Better Reporting Accuracy",
  "Organized Tax Documentation",
  "Reduced Compliance Risks",
  "Structured Financial Processes",
];

const whyChoose = [
  {
    title: "KSA Tax Compliance Understanding",
    desc: "Support aligned with Saudi taxation and VAT requirements.",
  },
  {
    title: "ZATCA-Focused Operational Support",
    desc: "Helping businesses maintain organized regulatory coordination.",
  },
  {
    title: "Structured Documentation Management",
    desc: "Improving tax-record organization and reporting readiness.",
  },
  {
    title: "Operational Compliance Approach",
    desc: "Supporting smoother tax management across business operations",
  },
  {
    title: "Scalable Business Support",
    desc: "Flexible taxation support for startups, SMEs, and enterprises.",
  },
  {
    title: "Long-Term Compliance Stability",
    desc: "Building structured tax processes that support sustainable growth.",
  },
];

const Taxation_KSA = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Taxation KSA"
        heading={
          <>
            Strengthen Your Tax
            <br />
            <span className="text-light-blue">Compliance In Saudi Arabia</span>
          </>
        }
        description="de tempête provides taxation support services in Saudi Arabia, helping businesses maintain VAT compliance, improve tax documentation processes, and manage regulatory requirements with greater operational confidence."
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 847,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 3, label: "Awards Received" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/Tax-Compliance-Regulatory-Support.webp"
            alt="Tax Compliance & Regulatory Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Tax Compliance &<br />
              <span className="font-normal">Regulatory Support</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Managing tax obligations in Saudi Arabia requires businesses to
              maintain organized financial records, accurate reporting
              processes, and compliance-ready documentation aligned with local
              regulations.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports businesses across Saudi Arabia with structured taxation
              services designed to improve tax management processes, support VAT
              compliance, and maintain organized regulatory documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What We Handle For You
          </h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mb-12" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {handleTags.map((t, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg py-4 px-4 text-center text-white text-sm font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT <span className="font-normal">Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Businesses operating in Saudi Arabia must maintain proper VAT
              registration and structured tax documentation processes to support
              regulatory compliance.
            </p>
            <p className="mt-3 text-gray-500">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              assists businesses with VAT registration support and tax setup
              coordination designed to improve operational readiness and
              organized tax management systems.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Our Services Include
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {vatAdvisoryPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/Branch-of-Foreign-Company-1.webp"
            alt="VAT Advisory"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-excise-tax-advisor__80770.webp"
            alt="ZATCA Compliance & E-Invoicing Coordination"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              ZATCA Compliance &{" "}
              <span className="font-normal">
                E-
                <br />
                Invoicing Coordination
              </span>
            </h2>
            <p className="mt-5 text-gray-500">
              Businesses in Saudi Arabia are required to align with ZATCA
              regulations and maintain compliant e-invoicing processes for
              smoother tax operations.
            </p>
            <p className="mt-3 text-gray-500">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports businesses with ZATCA compliance coordination and
              e-invoicing support designed to improve reporting accuracy and
              operational compliance.
            </p>
            <p className="mt-3 font-semibold text-gray-700">Benefits:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {zatcaBenefits.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT Filing & Tax
              <br />
              <span className="font-normal">Documentation Support</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Accurate VAT filing and organized tax documentation are essential
              for maintaining smoother financial operations and reducing
              compliance-related risks.
            </p>
            <p className="mt-3 text-gray-500">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              provides VAT filing support services in Saudi Arabia to help
              businesses maintain organized tax records and structured reporting
              processes.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Filing Support Includes
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {vatFilingItems.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-corporate-tax-advi__80768.webp"
            alt="VAT Filing & Tax Documentation Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-wesite-section-corporate-tax-advi__80768.webp"
            alt="Ongoing Tax Coordination & Regulatory Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Ongoing Tax Coordination &<br />
              <span className="font-normal">Regulatory Support</span>
            </h2>
            <p className="mt-5 text-gray-500">
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports businesses in Saudi Arabia with ongoing tax coordination
              and regulatory support to help maintain smoother reporting
              processes, organized reporting activities, and operational tax
              management.
            </p>
            <p className="mt-3 font-semibold text-gray-700">Benefits:</p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {ongoingBenefits.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What You Gain?</h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-3 gap-6">
            {gains.map((g, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg py-6 px-4 text-white font-medium"
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Why Choose <span className="font-normal italic">de tempête</span>{" "}
              for Taxation Services?
            </h2>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#16244b] mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Start Building A<br />
            Stronger Tax
            <br />
            Framework <span className="font-bold">Today</span>
          </>
        }
        subheading="de tempête helps businesses in Saudi Arabia improve VAT compliance and maintain organized tax operations."
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

export default Taxation_KSA;
