import { useState } from "react";

const companyData = [
  {
    id: 1,
    title: "LLC (Limited Liability Company)",
    number: "1",
    points: [
      "100% foreign ownership permitted",
      "Pass-through taxation structure",
      "Lower compliance burden",
      "Suitable for small businesses & e-commerce",
    ],
  },
  {
    id: 2,
    title: "C-Corporation (C-Corp)",
    number: "2",
    points: [
      "Preferred for VC & investors",
      "21% federal corporate taxation",
      "Suitable for startups & fundraising",
      "Supports stock options & equity distribution",
    ],
  },
  {
    id: 3,
    title: "Non-Resident Business Setup",
    number: "3",
    points: [
      "No local shareholder or sponsor required",
      "Remote company formation available",
      "No U.S. residency or visa requirement",
      "Access to Stripe, PayPal & USD banking",
      "Suitable for international entrepreneurs",
      "Flexible setup for global online businesses",
    ],
  },
];

const Types_of_Company = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#ecebeb] py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl text-[#14224A] font-light">
            Types of Company{" "}
            <span className="font-bold">Structures in USA</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
            There are three main options for company formation in the USA,
            depending on your business goals and target markets.
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
                  <h1 className="text-[#58CDE7] text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold leading-none">
                    {companyData[activeTab].number}
                  </h1>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-8 leading-tight">
                    {companyData[activeTab].title}
                  </h3>

                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-white text-base sm:text-lg lg:text-xl leading-7 lg:leading-8">
                    {companyData[activeTab].points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8 lg:absolute lg:bottom-8 lg:right-8">
                <button className="w-full sm:w-auto bg-white text-[#14224A] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium hover:bg-[#58CDE7] hover:text-white transition-all duration-300">
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
