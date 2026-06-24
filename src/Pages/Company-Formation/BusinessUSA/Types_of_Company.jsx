import { useState } from "react";

const companyData = [
  {
    id: 1,
    title: "Limited Liability Company (LLC)",
    number: "1",
    points: [
      "Most preferred structure for foreign investors",
      "Can be 100% foreign-owned (subject to activity approval by MISA)",
      "Limited liability protection for shareholders",
      "Simple setup and management process",
      "Suitable for small to medium-sized enterprises",
    ],
  },
  {
    id: 2,
    title: "Joint Stock Company (JSC)",
    number: "2",
    points: [
      "Ideal for large-scale or public ventures",
      "Requires minimum two shareholders",
      "Can issue shares and list on Tadawul (Saudi Stock Exchange)",
      "Higher regulatory compliance standards",
    ],
  },
  {
    id: 3,
    title: "Foreign Branch Office",
    number: "3",
    points: [
      "Allows a foreign company to operate under its parent brand",
      "Activities must match those approved in the MISA license",
      "Must appoint a local representative in Saudi Arabia",
      "Full ownership retained by the parent company",
    ],
  },
  {
    id: 4,
    title: "Representative Office",
    number: "4",
    points: [
      "Non-commercial entity (cannot generate revenue)",
      "Primarily for market research, promotion, or feasibility studies",
      "Acts as a liaison between the parent company and Saudi clients",
    ],
  },
  {
    id: 5,
    title: "Sole Establishment",
    number: "5",
    points: [
      "Owned by one individual",
      "Generally limited to Saudi or GCC nationals",
      "Simpler registration but full personal liability applies",
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
            <span className="font-bold">
              Business Entities in Saudi Arabia
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
            Saudi Arabia offers multiple company structures to suit different
            investment goals and ownership models. Each entity type is regulated
            under the Saudi Companies Law and approved through the Ministry of
            Investment (MISA).
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
                      activeTab === index
                        ? "text-[#58CDE7]"
                        : "text-[#14224A]"
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