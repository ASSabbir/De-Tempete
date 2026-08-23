// File: Taxation_UAE.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";

import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/freepik__create-image-for-wesite-section-corporate-tax-advi__80768.webp'
import img2 from '../../../../asstes/img_temp/servics/KSA/VAT.webp'
import img3 from '../../../../asstes/img_temp/servics/1775737113368.jpg'
import logo from '../../../../asstes/img_temp/logo.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import { ConsultationCTA } from "../../../../Components/Shared/ConsultationCTA";
import SharedFullButton from "../../../../Components/Shared/SharedFullButton";
const whyChoose = [
  {
    title: "UAE-Focused Expertise",
    desc: "Deep understanding of local regulations and compliance requirements.",
  },
  {
    title: "Global Experience",
    desc: "Practical solutions for cross-border and multinational operations.",
  },
  {
    title: "Risk Minimization",
    desc: "Proactive strategies to reduce penalties and financial exposure.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized tax planning for startups, SMEs, and large corporates.",
  },
];

const transferPricing = [
  "Compliance With UAE And International Transfer Pricing Rules",
  "Practical Strategies For Multinational Operations",
  "Reduce Risks In Cross-Border Transactions",
];

const Taxation_UAE = () => {
  const id = 'services-uae-tax'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bgimg}
        alt="Taxation UAE"
        heading={<>Simplify Your Business<br /><span className="text-light-blue">Taxes In The UAE</span></>}
        description="Expert Corporate Tax, VAT & Transfer Pricing Solutions for Seamless Compliance and Growth"
      />

      <SecondSection></SecondSection>

      {/* Corporate Tax Advisory */}
      <section className="pt-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img1}
            alt="Corporate Tax Advisory"
            className="w-full h-100 object-cover object-bottom rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Corporate <span className="font-light">Tax Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Take control of your corporate tax obligations in the UAE with
              expert guidance. We provide strategic planning, compliance
              support, and optimization to ensure your business meets
              regulations while minimizing tax liabilities.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Accurate corporate tax calculation and planning",
                "Minimized risk of penalties and audits",
                "Tailored strategies for startups, SMEs, and corporates",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VAT Advisory */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT <span className="font-light">Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Simplify VAT compliance with our end-to-end advisory services.
              From registration to filings and audits, we help businesses
              navigate UAE VAT regulations efficiently and accurately.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Complete VAT registration support",
                "Timely VAT filing and reporting",
                "Risk reduction and compliance assurance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img2}
            alt="VAT Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Excise Tax */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={img3}
            alt="Excise Tax Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Excise Tax <span className="font-light">Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Stay compliant with UAE excise tax laws while optimizing your
              business costs. Our advisory ensures proper classification,
              filing, and planning to avoid unnecessary penalties and improve
              financial efficiency.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Accurate excise tax calculation and reporting",
                "Guidance on excisable goods and compliance",
                "Reduce liabilities and avoid regulatory issues",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mb-20 flex justify-center">
        <SharedFullButton text={'Legal & Regulatory Update'} path={'/library/uae'}></SharedFullButton>
      </div>

      {/* Transfer Pricing */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Transfer{" "}
              <span className="font-bold">Pricing & Cross-Border Tax</span>{" "}
              Support
            </h2>
            <p className="mt-6 text-slate-300 leading-7">
              Ensure your international operations are fully compliant with UAE
              and global tax laws. We provide transfer pricing analysis,
              documentation, and cross-border advisory to optimize your global
              transactions.
            </p>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {transferPricing.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto">
                  <img src={logo} alt="" />
                </div>
                <h3 className="mt-8 text-base font-medium text-white leading-relaxed">
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
              <span className="font-bold">Taxation Services?</span>
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
            Ready To Simplify Your{" "}
            <span className="font-bold">
              Taxes In The UAE?
            </span>
          </>
        }
        subheading="Partner with de tempête and take control of your corporate, VAT,
                excise, and cross-border tax obligations with confidence."
        commitmentItems={[
          "Accurate & compliant tax filings",
          "Proactive tax planning & deadline management",
          "End-to-end support from registration to filing",
          "Transparent advice & ongoing support",
          "FTA-ready compliance with confidence",
        ]}
      />




    </div>
  );
};

export default Taxation_UAE;
