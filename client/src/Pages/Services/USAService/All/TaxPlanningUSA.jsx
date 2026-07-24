// File: TaxPlanningUSA.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";

import { LuChartColumnBig } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import federalTaxImg from '../../../../asstes/img_temp/servics/UK/freepik__corporate-tax-planning-compliance-image-unique-con__88847.webp'
import stateTaxImg from '../../../../asstes/img_temp/servics/UK/freepik__personal-tax-planningimage-for-website-section-no-__88846.webp'
import salesTaxImg from '../../../../asstes/img_temp/servics/UK/freepik__capital-gains-tax-cgt-advisory-image-unique-concep__88848.webp'
import reporting1099Img from '../../../../asstes/img_temp/servics/UK/freepik__inheritance-tax-planning-image-unique-but-clear-co__88850.webp'
import taxPlanningImg from '../../../../asstes/img_temp/servics/UK/freepik__hmrc-investigation-support-dispute-resolution-imag__88852.webp'

const whyChoose = [
  "Tailored tax strategy for LLCs, C-Corps, and multi-state businesses",
  "Full compliance with IRS and state tax regulations",
  "Proactive planning to reduce federal and state liabilities",
  "Accurate, on-time sales tax and 1099 filings",
  "Clear, transparent guidance from experienced US tax advisors",
];

const TaxPlanningUSA = () => {
  return (
    <div className="w-full">
      <SevicsBanner
        bgImage={bgimg}
        alt="USA Tax Planning & Advisory Services"
        description="Navigate US federal and state tax obligations with confidence through our comprehensive tax planning and advisory services. From federal tax preparation for LLCs and C-Corps to state tax filings, sales tax registration, 1099 reporting, and proactive tax planning, we help businesses of every size stay compliant while minimizing their overall tax burden."
        title1={"Smart Tax Planning"}
        title2={"Built For Your US Business Structure"}
      ></SevicsBanner>

      

      {/* Federal Tax Preparation (LLC / C-Corp) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={federalTaxImg}
            alt="Federal Tax Preparation for LLCs and C-Corps"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Federal Tax Preparation</span>
              <br />(LLC / C-Corp)
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Accurate federal filings built around your entity structure.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We prepare and coordinate federal tax filings tailored to your
              business structure, whether you operate as an LLC or C-Corp.
              From entity-specific deductions to filing deadlines, our team
              ensures your federal tax position is accurate, compliant, and
              optimized for your long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* State Tax Filings Coordination */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              State Tax <span className="font-light">Filings Coordination</span>
            </h2>
            <p className="mt-5 text-gray-500 font-semibold">
              One coordinated process across every state you operate in.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              Our state tax advisory helps you manage filing obligations
              across multiple jurisdictions efficiently. We coordinate state
              income tax, franchise tax, and other state-level filings,
              giving you clarity and consistency across every state where
              your business has a presence.
            </p>
          </div>
          <img
            src={stateTaxImg}
            alt="State Tax Filings Coordination"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Sales Tax Registration & Filing */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={salesTaxImg}
            alt="Sales Tax Registration & Filing"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Sales Tax</span>
              <br />
              Registration & Filing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Stay ahead of sales tax obligations in every state you sell into.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We help you understand where you need to register for sales
              tax and manage the full filing process from there. Whether
              you're selling physical goods, digital products, or services,
              our advisors ensure accurate registration, timely filings, and
              full compliance across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* 1099 Reporting Support */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">1099</span>
              <br />
              Reporting Support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Accurate contractor reporting, filed on time.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Our 1099 reporting support ensures every contractor and
              vendor payment is tracked, categorized, and reported correctly
              to the IRS. We manage form preparation, recipient distribution,
              and filing deadlines, minimizing your risk of penalties and
              reporting errors.
            </p>
          </div>
          <img
            src={reporting1099Img}
            alt="1099 Reporting Support"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Tax Planning & Advisory */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={taxPlanningImg}
            alt="Tax Planning & Advisory"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Tax Planning</span>
              <br />
              & Advisory
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Plan ahead, not just at filing time.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We work with you throughout the year, not just at tax season,
              to build a proactive tax strategy for your business. From
              estimated payment planning to entity structure reviews and
              deduction opportunities, our advisors help you make informed
              decisions that reduce your overall tax burden.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-bold">
                Tax Planning & Advisory Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartColumnBig className="text-light-blue text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Plan Smarter. Save
            <br />
            More. <span className="font-bold">Stay Compliant.</span>
          </>
        }
        bodyText="Get expert US tax guidance designed to protect your business, reduce liabilities, and support your long-term financial goals."
        highlightText="Speak to Our Tax Experts"
      />

      
    </div>
  );
};

export default TaxPlanningUSA;