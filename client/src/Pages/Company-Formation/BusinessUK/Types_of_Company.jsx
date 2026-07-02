import { useState } from "react";

const companyData = [
  {
    id: 1,
    title: "Sole Trader",
    number: "1",
    points: [
      "Easiest and most cost-effective structure",
      "Owned and operated by one individual",
      "Full control over profits",
      "Personally liable for business debts",
      "Taxed through Self Assessment (Income Tax + National Insurance)",
      "Ideal for freelancers and small businesses",
    ],
  },
  {
    id: 2,
    title: "Partnership",
    number: "2",
    points: [
      "Two or more individuals share ownership",
      "Simple setup with shared profits",
      "Partners are jointly liable for debts",
      "Each partner files their own tax return",
      "Suitable for small teams or family businesses",
    ],
  },
  {
    id: 3,
    title: "Limited Liability Partnership (LLP)",
    number: "3",
    points: [
      "Hybrid of partnership and limited company",
      "Members have limited liability",
      "Registered with Companies House",
      "Profits taxed at member level, not the LLP",
      "Popular for professional services and consulting firms",
    ],
  },
  {
    id: 4,
    title: "Private Limited Company (Ltd)",
    number: "4",
    points: [
      "Separate legal entity from owners",
      "Shareholders’ liability limited to investment",
      "Pays Corporation Tax on profits",
      "Strong credibility with banks and clients",
      "Most popular structure for startups and SMEs",
    ],
  },
  {
    id: 5,
    title: "Public Limited Company (PLC)",
    number: "5",
    points: [
      "Can offer shares to the public",
      "Requires minimum £50,000 share capital",
      "Highly regulated",
      "Suitable for large businesses and public investment",
    ],
  },
];

const Types_of_Company = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#eaeaea] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl text-[#14224A] font-light">
            Types of Company Structures in <span className="font-bold">UK</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
            The UK offers multiple business structures depending on ownership,
            liability, and tax planning needs. Choosing the right structure is
            critical for long-term compliance and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Tabs */}
          <div className="lg:col-span-4">
            <div className="relative pl-8">
              {/* Main Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300"></div>

              <div className="space-y-8">
                {companyData.map((company, index) => (
                  <button
                    key={company.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative block text-left text-2xl transition duration-300 ${
                      activeTab === index ? "text-[#58CDE7]" : "text-[#14224A]"
                    }`}
                  >
                    {/* Active Indicator */}
                    {activeTab === index && (
                      <span className="absolute -left-8 top-1/2 -translate-y-1/2 h-12 w-[4px] rounded-full bg-[#58CDE7]"></span>
                    )}

                    {company.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#071B55] rounded-2xl p-6 sm:p-8 lg:p-10 relative shadow-xl min-h-auto lg:min-h-[400px]">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                {/* Number */}
                <div className="flex justify-center md:block">
                  <h1 className="text-[#58CDE7] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] font-bold leading-none">
                    {companyData[activeTab].number}
                  </h1>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-8 leading-tight">
                    {companyData[activeTab].title}
                  </h3>

                  <ul className="space-y-2 md:space-y-3 lg:space-y-4 text-white text-base sm:text-lg lg:text-xl leading-7 lg:leading-8">
                    {companyData[activeTab].points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8 lg:absolute lg:bottom-8 lg:right-8">
                <button className="w-full sm:w-auto bg-white text-[#14224A] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#58CDE7] hover:text-white duration-300">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types_of_Company;
