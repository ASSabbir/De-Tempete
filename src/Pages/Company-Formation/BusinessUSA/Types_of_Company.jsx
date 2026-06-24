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
    <section className="bg-[#F5F5F5] pb-24">
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
            <div className="bg-[#071B55] rounded-2xl p-10 relative min-h-[400px] shadow-xl">
              <div className="flex gap-8">
                {/* Number */}
                <h1 className="text-[#58CDE7] text-8xl font-bold leading-none">
                  {companyData[activeTab].number}
                </h1>

                {/* Content */}
                <div>
                  <h3 className="text-white text-5xl font-bold mb-8">
                    {companyData[activeTab].title}
                  </h3>

                  <ul className="space-y-4 text-white text-lg leading-8">
                    {companyData[activeTab].points.map((point, index) => (
                      <li key={index}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="absolute bottom-8 right-8">
                <button className="bg-white text-[#14224A] px-8 py-4 rounded-xl font-medium hover:bg-[#58CDE7] hover:text-white duration-300">
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
