import React from 'react';
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/report.webp'
import img2 from '../../../../asstes/img_temp/images.webp'
import img3 from '../../../../asstes/img_temp/compliance-calendar-img.webp'
import {
  LuFileCheck2,
  LuShieldCheck,
  LuCalendarClock,
  LuBuilding2,
  LuTrendingUp,
  LuBriefcase,
} from "react-icons/lu";

const whyChoose = [
  {
    title: "End-to-End Company Formation",
    desc: "From e-Residency guidance and company registration to banking, taxation, and compliance, we manage the complete setup process.",
  },
  {
    title: "Expert Knowledge of Estonian Regulations",
    desc: "Our specialists ensure your business complies with Estonian corporate, tax, and regulatory requirements from day one.",
  },
  {
    title: "Transparent Process & Fixed Pricing",
    desc: "Clear timelines, predictable costs, and straightforward communication with no hidden fees throughout your engagement.",
  },
  {
    title: "Long-Term Business Support",
    desc: "Beyond incorporation, we provide ongoing accounting, annual reporting, compliance, and strategic advisory services as your business grows.",
  },
];

const auditFeatures = [
  {
    icon: LuFileCheck2,
    title: "Annual Reporting",
    desc: "Preparation and submission of annual reports with complete Commercial Register filing support to meet statutory obligations.",
  },
  {
    icon: LuShieldCheck,
    title: "Compliance Monitoring",
    desc: "Continuous monitoring of regulatory requirements, beneficial ownership obligations, and corporate compliance standards.",
  },
  {
    icon: LuCalendarClock,
    title: "Compliance Advisory",
    desc: "Ongoing advisory services, compliance calendar management, and proactive guidance to help your business remain fully compliant.",
  },
  {
    icon: LuBuilding2,
    title: "Corporate Records",
    desc: "Support for maintaining statutory registers, shareholder resolutions, and corporate documentation throughout your company's lifecycle.",
  },
];
const modellingCards = [
  "Business Banking & Fintech Guidance",
  "Accounting & Bookkeeping Support",
  "VAT Registration & Tax Compliance",
  "Ongoing Corporate Advisory",
];
const AnnualRepoting = () => {
  const dueDiligenceCards = [
    {
      title: "Annual Reporting & Filing",
      desc: "Prepare and submit annual reports while ensuring timely Commercial Register filings to keep your company compliant with Estonian corporate regulations.",
      image: img1,
    },
    {
      title: "Regulatory Compliance & Corporate Records",
      desc: "Maintain beneficial ownership records, shareholder resolutions, and corporate documentation while continuously monitoring regulatory obligations.",
      image: img2,
    },
    {
      title: "Ongoing Compliance Advisory",
      desc: "Receive proactive compliance guidance, calendar management, and ongoing advisory support to help your business meet every reporting deadline with confidence.",
      image: img3,
    },
  ];

  return (
    <div>
      <SevicsBanner bgImage={bgimg} alt="Bangladesh Business Setup"
        description="Stay compliant with Estonia's ongoing corporate requirements through expert annual reporting and regulatory support. We help your business meet statutory obligations by managing annual report preparation, Commercial Register filings, beneficial ownership compliance, corporate record maintenance, and ongoing regulatory monitoring—ensuring your company remains fully compliant and in good standing throughout the year."
        title1={' Maintain Full Corporate Compliance '}
        title2={'Throughout Your Business Journey In Estonia'}

      ></SevicsBanner>
      {/* Due Diligence */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Annual Reporting & Post-{" "}
              <span className="font-bold">Formation Compliance</span>
            </h2>
            <p className="mt-4 text-cyan-500 font-semibold">
              Keep Your Estonian Business Fully Compliant
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              Maintaining compliance is essential for every Estonian company. We help you meet ongoing statutory obligations through annual reporting, Commercial Register filings, corporate record management, and regulatory monitoring—ensuring your business remains compliant, well-organized, and in good standing throughout its lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {dueDiligenceCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200  hover:shadow-2xl duration-300"
              >
                <div className="relative h-68 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-white text-lg font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
               Keep Your Estonia Company{" "}
              <span className="font-bold"> Fully Compliant</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Compliance doesn't end after company formation. Our team supports your
  Estonian business with annual reporting, corporate record maintenance,
  regulatory monitoring, and ongoing governance services to ensure your company
  remains compliant, organized, and ready for sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-x-10 gap-y-14 mt-16">
            {auditFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="text-4xl text-slate-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* Financial Modelling */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">
              Business Growth & Operational Support
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
             Beyond company formation, we help you establish efficient business operations
  through banking guidance, accounting, tax compliance, and strategic advisory
  services—providing the support your business needs to grow confidently within
  the European market.
            </p>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
            {modellingCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                  <LuTrendingUp className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Trust */}
            <section className="py-24 bg-white">
              <div className="max-w-[1600px] mx-auto px-6">
                <div className="text-center">
                  <h2 className="text-4xl font-light text-[#16244b]">
                     Why Businesses Choose{" "}
                    <span className="font-bold">Our Estonia Experts</span>
                  </h2>
                  <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
                </div>
      
                <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
                  {whyChoose.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <LuBriefcase className="text-light-blue text-2xl shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-[#16244b] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

    </div>
  );
};

export default AnnualRepoting;