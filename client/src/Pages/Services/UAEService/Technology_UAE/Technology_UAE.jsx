// File: Technology_UAE.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuSparkles, LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";

import tableau from "/src/asstes/img_temp/New folder/9-1.webp";
import sage from "/src/asstes/img_temp/New folder/3-2.webp";
import a from "/src/asstes/img_temp/New folder/11-1.webp";
import b from "/src/asstes/img_temp/New folder/12-1-934x1024.webp";
import c from "/src/asstes/img_temp/New folder/7-2.webp";
import d from "/src/asstes/img_temp/New folder/8.webp";
import e from "/src/asstes/img_temp/New folder/13-1.webp";
import f from "/src/asstes/img_temp/New folder/6-1.webp";
import g from "/src/asstes/img_temp/New folder/2.webp";

const logos = [tableau, sage, a, b, c, d, e, f, g];




const industries = [
  "Retail & E-commerce",
  "Real Estate & Construction",
  "Logistics & Trading",
  "Manufacturing & Distribution",
  "Healthcare & Clinics",
  "Hospitality & F&B",
  "Professional Services & Consulting",
  "Education & Training Providers",
];

const whyChoose = [
  {
    title: "Certified Partners",
    desc: "Certified Zoho and Odoo partners with experienced UAE-based consultants.",
  },
  {
    title: "Complete Implementation",
    desc: "End-to-end e-invoicing setup with system configuration to FTA-aligned reporting.",
  },
  {
    title: "Arabic & English Support",
    desc: "Bilingual support for businesses across Dubai, Abu Dhabi, Sharjah, and all UAE emirates.",
  },
  {
    title: "Industry-Specific Solutions",
    desc: "Customized e-invoicing workflows for retail, real estate, healthcare, and service businesses.",
  },
  {
    title: "Compliance Support",
    desc: "Ongoing updates and support aligned with evolving UAE e-invoicing regulations.",
  },
  {
    title: "Flexible Pricing",
    desc: "Transparent pricing and scalable packages for startups, SMEs, and enterprise businesses.",
  },
];

const processSteps = [
  {
    title: "Discovery & Assessment",
    desc: "We audit your current invoicing process, ERP setup, and compliance gaps.",
  },
  {
    title: "Solution Design",
    desc: "We recommend the right platform (Zoho or Odoo) and configuration based on your size, sector, growth plans.",
  },
  {
    title: "Implementation & Configuration",
    desc: "VAT modules, e-invoicing settings, Peppol integration, and templates set up to UAE standards.",
  },
  {
    title: "Data Migration",
    desc: "Clean, secure transfer of your customer, supplier, and historical invoice data.",
  },
  {
    title: "Testing & Training",
    desc: "Real-world testing followed by hands-on training for your team.",
  },
  {
    title: "Go-Live & Support",
    desc: "Smooth rollout backed by ongoing managed support.",
  },
];



const Technology_UAE = () => {
  return (
    <div className="w-full">
       <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="UAE E-Invoicing Solutions"
        heading={<>UAE E-Invoicing Solutions With<br /><span className="text-light-blue">Zoho & Odoo</span></>}
        description="Stay compliant with upcoming UAE e-invoicing regulations with de tempête's certified Zoho and Odoo implementation services. We help businesses automate invoicing, configure VAT-ready systems, integrate with the Peppol-based framework, and meet FTA compliance requirements through bilingual invoice templates, secure workflows, and ongoing support tailored for SMEs, startups, and enterprise businesses."
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 935, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 3, label: "Awards Received" },
      ]} />

      {/* What Is E-Invoicing */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b]">
            What Is <span className="font-bold">E-Invoicing In The UAE?</span>
          </h2>
          <p className="mt-6 text-gray-500 leading-7">
            E-invoicing in the UAE is the structured digital exchange of
            invoices between suppliers, buyers, and the Federal Tax Authority
            (FTA) in a machine-readable format that can be validated,
            transmitted, and securely stored electronically. The UAE Ministry of
            Finance has announced a phased rollout of mandatory e-invoicing
            under the Peppol 5-corner model, requiring businesses to issue VAT
            invoices in structured electronic formats such as XML/UBL, transmit
            invoices through accredited Peppol Access Points, maintain secure
            audit trails and archiving. As compliance requirements continue to
            evolve, businesses across the UAE need reliable accounting and ERP
            systems that are fully prepared for the new digital invoicing
            framework.
          </p>
        </div>
      </section>

      {/* Zoho */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/img_temp/servics/Zoho.jpg"
            alt="Zoho E-Invoicing Solutions In UAE"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Zoho E-Invoicing{" "}
              <span className="font-light">Solutions In UAE</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Zoho Books and Zoho Invoice help UAE businesses automate
              invoicing, streamline VAT processes, and prepare for upcoming
              e-invoicing requirements through a flexible cloud-based accounting
              system.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              What we deliver with Zoho:
            </h4>
            <div className="space-y-3">
              {[
                "Zoho Books implementation with VAT and e-invoicing modules configured",
                "Custom invoice templates in Arabic and English",
                "Integration with Peppol Access Points for compliant transmission",
                "Automated workflows for approvals, recurring invoices, and credit notes",
                "Real-time dashboards for VAT liability, receivables, and audit-readiness",
                "Migration from legacy systems (Tally, QuickBooks, Zoho to Excel)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              <span className="font-bold italic text-[#16244b]">
                Best suited for:
              </span>{" "}
              Small to mid-sized businesses, service providers, e-commerce
              sellers, consultants, and growing startups looking for a
              cloud-first, cost-effective solution.
            </p>
          </div>
        </div>
      </section>

      {/* Odoo */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Odoo E-Invoicing{" "}
              <span className="font-light">Solutions In UAE</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Odoo is a powerful, modular ERP that scales with your business.
              For UAE companies needing tight integration between invoicing,
              inventory, manufacturing, and CRM, Odoo is hard to beat.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              What we deliver with Odoo:
            </h4>
            <div className="space-y-3">
              {[
                "Odoo ERP implementation (Community & Enterprise editions)",
                "UAE-localized accounting & VAT modules",
                "E-invoicing module setup aligned with FTA and Peppol requirements",
                "Custom development for industry-specific invoicing workflows",
                "Integration with banking, payment gateway, POS, and warehouse systems",
                "Training and post-go-live support for your finance team",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              <span className="font-bold italic text-[#16244b]">
                Best suited for:
              </span>{" "}
              Small to mid-sized businesses, service providers, e-commerce
              sellers, consultants, and growing startups looking for a
              cloud-first, cost-effective solution.
            </p>
          </div>
          <img
            src="/src/asstes/img_temp/servics/UK/UK-tax-compliance-workspace-concept.webp"
            alt="Odoo E-Invoicing Solutions In UAE"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Our E-Invoicing{" "}
              <span className="font-bold">Implementation Process</span>
            </h2>
            <p className="mt-4 text-gray-500">
              A clear, proven approach — no surprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
            {processSteps.map((item, index) => (
              <div key={index}>
                <LuSparkles className="text-3xl text-slate-500 mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Industries <span className="font-bold">We Serve</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-16">
            {industries.map((item, index) => (
              <div
                key={index}
                className="relative h-40 rounded-2xl overflow-hidden group"
              >
                <img
                  src="/src/asstes/img_temp/servics/UK/Global-business-strategy-in-focus.webp"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                  alt={item}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-sm">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">Technolgy Services</span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-light-blue text-2xl mb-3" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Get UAE E-Invoicing<br />Ready <span className="font-bold">Today</span></>}
        subheading="Serving Dubai - Abu Dhabi - Sharjah - Ajman - Ras Al Khaimah - Fujairah - Umm Al Quwain"
        commitmentItems={["Free initial consultation — no obligation", "100% confidentiality and secure handling of FTA data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"]}
      />

      {/* Technological Partner */}
      <section className="py-24 bg-white overflow-hidden">
        <div className=" mx-auto px-6">
          <h2 className="text-center text-5xl font-light text-[#16244B] mb-20">
            Technological <span className="font-bold">Partner</span>
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex items-center"
              style={{
                animation: "scrollLeft 35s linear infinite",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="shrink-0 ">
                  <img
                    src={logo}
                    alt="Partner"
                    className="h-45 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
      @keyframes scrollLeft {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>
        </div>
      </section>
    </div>
  );
};

export default Technology_UAE;