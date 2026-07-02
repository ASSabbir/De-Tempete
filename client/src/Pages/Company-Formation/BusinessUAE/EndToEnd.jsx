import { useState } from "react";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "Business Licensing & Registration",
    points: [
      "Mainland, Free Zone, and Offshore company setup",
      "Activity selection & legal structure advisory",
      "Trade name reservation & initial approvals",
      "Government documentation & compliance handling",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Office Selection & Leasing Assistance",
    points: [
      "Virtual, shared, and physical office solutions",
      "Office space selection based on license requirements",
      "Ejari / lease registration support",
      "Cost-efficient workspace recommendations",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "Corporate Bank Account Opening",
    points: [
      "Bank selection based on business activity",
      "Documentation preparation & compliance checks",
      "Liaison with local & international banks",
      "Support until account activation",
    ],
  },
  {
    number: "4",
    step: "Step 04",
    title: "Accounting, Tax Registration & CFO Advisory",
    points: [
      "VAT & Corporate Tax registration",
      "Bookkeeping & financial reporting",
      "Audit coordination & compliance support",
      "Strategic CFO advisory & financial planning",
    ],
  },
  {
    number: "5",
    step: "Step 05",
    title: "Trademark & IP Protection",
    points: [
      "Trademark search & registration",
      "Brand name & logo protection",
      "Intellectual property advisory",
      "Renewal & infringement support",
    ],
  },
  {
    number: "6",
    step: "Step 06",
    title: "Business Growth & Ongoing Compliance",
    points: [
      "Annual license renewals",
      "PRO & visa services",
      "Regulatory compliance monitoring",
      "Long-term business advisory support",
    ],
  },
];

const EndToEnd = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#ebebeb] py-14 sm:py-20 lg:py-24">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .step-content {
          animation: fadeSlideIn 0.45s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Top Banner */}
        <div className="bg-[#081B57] rounded-2xl px-6 sm:px-10 py-6 lg:py-4 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-12 sm:mb-18 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-900/20">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium max-w-4xl leading-relaxed text-center lg:text-left">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            UAE’s <span className="font-bold">business laws.</span>
          </h3>

          <button className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl transition-all duration-300 hover:bg-white hover:text-[#081B57] hover:scale-105 active:scale-95 shrink-0">
            Get Started Now
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24 px-2">
          <h2 className="text-[#081B57] text-3xl sm:text-5xl lg:text-6xl font-light leading-tight">
            Our End-To-End
            <br />
            Company <span className="font-bold">Formation Support</span>
          </h2>

          <p className="mt-2 text-[#1f2a50] text-base sm:text-lg lg:text-xl">
            <span className="font-bold italic">de tempête</span> provides
            complete company formation and financial management services in the
            UAE.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Steps */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide pb-2">
              {steps.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-shrink-0 lg:w-full text-left px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base lg:text-xl xl:text-2xl rounded-xl transition-all duration-300
          ${
            activeStep === index
              ? "bg-[#081B57] text-white"
              : "text-[#1f2a50] hover:bg-gray-100"
          }`}
                >
                  {item.step}
                </button>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-9">
            <div className="relative bg-[#EFEFEF] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
              {/* Triangle */}
              <div className="hidden lg:block absolute left-[-60px] top-6 border-t-[35px] border-b-[35px] border-r-[60px] border-t-transparent border-b-transparent border-r-[#EFEFEF]" />

              <div
                key={activeStep}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8"
              >
                {/* Number */}
                <div className="flex justify-center sm:block">
                  <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-none font-bold text-[#58D3EC]">
                    {steps[activeStep].number}
                  </h1>
                </div>

                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#081B57] mb-4 sm:mb-5 leading-tight">
                    {steps[activeStep].title}
                  </h3>

                  <ul className="text-[#1f2a50] text-base sm:text-lg lg:text-xl space-y-2">
                    {steps[activeStep].points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndToEnd;
