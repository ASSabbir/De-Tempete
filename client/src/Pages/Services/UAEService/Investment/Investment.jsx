// File: Investment.jsx
import { useState, useEffect } from "react";


import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";

import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";

import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/freepik__corporate-secretarial-services-statutory-complianc__58647.webp'
import img2 from '../../../../asstes/img_temp/servics/Bd/financial-governance.webp'
import img3 from '../../../../asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'


const dueDiligenceCards = [
  {
    title: "Financial & Operational Assessment",
    desc: "Analyze financial statements, cash flow, and business performance to ensure investment viability.",
    image:
      img1,
  },
  {
    title: "Risk & Compliance Checks",
    desc: "Evaluate legal, regulatory, and operational risks for informed decision-making.",
    image:
      img2,
  },
  {
    title: "Post-Investment Monitoring",
    desc: "Track KPIs, profitability, and growth strategies to maintain investment performance.",
    image:
      img3,
  },
];

const bprItems = [
  {
    title: "Process Mapping & Optimization",
    desc: "Identify inefficiencies and redesign workflows for smoother operations.",
  },
  {
    title: "Operational Audits",
    desc: "Comprehensive evaluation of systems, controls, and performance.",
  },
  {
    title: "Performance Improvement Plans",
    desc: "Implement measurable improvements to enhance profitability and scalability.",
  },
];

const financeAdvisoryItems = [
  {
    title: "M&A Advisory",
    desc: "Support for mergers, acquisitions, and joint ventures, including valuation and negotiations.",
  },
  {
    title: "Fundraising Readiness",
    desc: "Prepare businesses for investor meetings, pitch decks, and funding strategies.",
  },
  {
    title: "Financial Planning & Strategy",
    desc: "Build sustainable financial models, cash flow projections, and ROI assessments.",
  },
];

const whyChoose = [
  {
    title: "Market Expertise",
    desc: "In-depth knowledge of UAE business, legal, and financial environments.",
  },
  {
    title: "Comprehensive Advisory",
    desc: "Support throughout due diligence, investment, and post-investment monitoring.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized strategies for SMEs, startups, and global investors.",
  },
  {
    title: "Transparent Processes",
    desc: "Clear, compliant workflows with ongoing performance tracking.",
  },
];

const Investment = () => {
  const id = 'services-uae-investment'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bgimg}
        alt="Investment Advisory UAE"
        heading="Invest With Confidence."
        description={
          <>
            <span className="block text-light-blue font-semibold text-xl md:text-2xl mb-4">
              Make Your Capital Work Smarter in the UAE.
            </span>
            The UAE continues to attract global investors with its dynamic
            markets, tax-friendly policies, and strategic location. Our
            Investment Advisory services help you navigate due diligence,
            corporate finance, and operational efficiency—ensuring that your
            investments are secure, compliant, and optimized for growth.
          </>
        }
        ctaText="Get Expert Investment Advice"
      />

      <SecondSection></SecondSection>

      {/* Due Diligence */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Due Diligence & Post-{" "}
              <span className="font-bold">Investment Monitoring</span>
            </h2>
            <p className="mt-4 text-light-blue font-semibold">
              Mitigate Risks and Maximize Returns
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              Successful investments start with informed decisions. We perform
              in-depth due diligence to identify potential risks, verify
              financial and operational health, and assess growth potential.
              Post-investment, we monitor performance and implement corrective
              actions to protect your capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {dueDiligenceCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="relative h-78 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-white text-base font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-base leading-6 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BPR */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Business Process Reengineering (BPR) & Operational Audits
            </h2>
            <p className="mt-4 text-gray-600 font-semibold">
              Streamline Operations. Boost Efficiency.
            </p>
            <p className="mt-4 text-gray-500  text-center leading-7">
              We help portfolio companies optimize processes, reduce costs, and
              enhance productivity. Through operational audits and business
              process reengineering, we ensure that businesses perform at peak
              efficiency while aligning with investor objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-5 mt-16">
            {bprItems.map((item, index) => (
              <div key={index} className="text-center border-[1px] p-10 rounded-2xl hover:shadow-2xl duration-300 border-gray-300 flex flex-col items-center justify-center">
                <div >
                  <img src={logo} className="w-14 mb-4" alt="" />
                </div>
                <h3 className="text-base font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Finance Advisory */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Corporate Finance Advisory, M&A Support & Fundraising Readiness
            </h2>
            <p className="mt-4 text-gray-600 font-semibold">
              Drive Growth with Expert Financial Guidance
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              Our corporate finance advisory services guide investors and businesses through mergers, acquisitions, fundraising, and strategic growth initiatives. We help you make data-driven decisions to secure funding, optimize valuations, and achieve sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 mt-16">
            {financeAdvisoryItems.map((item, index) => (
              <div key={index} className="flex justify-center items-center flex-col text-center">
                <img src={logo} className="mb-5" alt="" />
                <h3 className="text-base font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-6">{item.desc}</p>
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
        <span className="font-bold">Investment Advisory</span>
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-5 mt-16 max-w-5xl mx-auto">
      {whyChoose.map((item, index) => {
        const isDark = index === 0 || index === 3;

        return (
          <div
            key={index}
            className={`flex items-start gap-5 p-8 transition-all duration-300 hover:shadow-2xl ${
              isDark
                ? "bg-light-blue"
                : "bg-white border border-gray-200"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center shrink-0 ${
                isDark ? "bg-white/15" : "bg-light-blue/20"
              }`}
            >
              <img
                src={logo}
                className={`w-8 object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
                alt=""
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#16244b] mb-2">
                {item.title}
              </h3>

              <p
                className={`text-base leading-6 ${
                  isDark ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <ConsultationCTA
      id={id}
        heading={
          <>
            Start Your UAE
            <br />
            Expansion <span className="font-bold">Today</span>
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


    </div>
  );
};

export default Investment;
