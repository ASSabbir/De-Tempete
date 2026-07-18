import React from 'react';
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';


const AnnualRepoting = () => {
    const dueDiligenceCards = [
  {
    title: "Annual Reporting & Filing",
    desc: "Prepare and submit annual reports while ensuring timely Commercial Register filings to keep your company compliant with Estonian corporate regulations.",
    image:
      "../../../../src/asstes/Images/report.webp",
  },
  {
    title: "Regulatory Compliance & Corporate Records",
    desc: "Maintain beneficial ownership records, shareholder resolutions, and corporate documentation while continuously monitoring regulatory obligations.",
    image:
      "../../../../src/asstes/Images/images.webp",
  },
  {
    title: "Ongoing Compliance Advisory",
    desc: "Receive proactive compliance guidance, calendar management, and ongoing advisory support to help your business meet every reporting deadline with confidence.",
    image:
      "../../../../src/asstes/Images/compliance-calendar-img.webp",
  },
];

    return (
        <div>
            <SevicsBanner bgImage={"../../../../src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"} alt="Bangladesh Business Setup"
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
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
            

        </div>
    );
};

export default AnnualRepoting;