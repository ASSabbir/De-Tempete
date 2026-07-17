import { useState } from "react";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "MISA Investment License & Company Registration",
    points: [
      "LLC, JSC, branch, and representative office setup",
      "MISA investment license and initial approvals",
      "Commercial Registration (CR) with Ministry of Commerce",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Office Selection & Lease Assistance",
    points: [
      "Mainland and Free Zone office solutions",
      "Physical offices, flexi-desks, and virtual setups",
      "Lease agreement and Ejari support",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "Investor & Employee Visa Processing",
    points: [
      "Investor and employee Iqama applications",
      "Visa processing through Qiwa and Absher",
      "Medical tests, Emirates ID, and renewals support",
    ],
  },
  {
    number: "4",
    step: "Step 04",
    title: "Corporate Bank Account Opening",
    points: [
      "Saudi bank selection based on business activity",
      "Documentation preparation and compliance checks",
      "End-to-end bank coordination until activation",
    ],
  },
  {
    number: "5",
    step: "Step 05",
    title: "Accounting, Zakat, & Tax Registration",
    points: [
      "Bookkeeping and financial reporting",
      "Zakat and tax registration and filings",
      "CFO advisory and compliance management",
    ],
  },
  {
    number: "6",
    step: "Step 06",
    title: "Trademark & IP Protection",
    points: [
      "Company name and trademark registration",
      "Intellectual property filing in Saudi Arabia",
      "Renewal and brand protection support",
    ],
  },
];

const EndToEnd = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Banner */}
        <div className="bg-[#081B57] rounded-2xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-18">
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-medium max-w-4xl leading-relaxed text-center lg:text-left">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            KSA’s <span className="font-bold">business laws.</span>
          </h3>

          <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 hover:bg-white hover:text-[#081B57] hover:scale-105 hover:shadow-xl">
            Get Started Now
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-[#081B57] text-6xl font-light leading-tight">
            Our End-To-End
            <br />
            Company <span className="font-bold">Formation Support</span>
          </h2>

          <p className="mt-2 text-[#1f2a50] text-xl">
            <span className="font-bold italic">de tempête</span> provides
            complete company formation and financial management services in the
            KSA.
          </p>
        </div>

        {/* Content */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

  {/* Left Steps */}
  <div className="lg:col-span-3">
    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">
      {steps.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveStep(index)}
          className={`flex-shrink-0 lg:w-full text-left px-5 sm:px-6 py-3 sm:py-5 text-base sm:text-lg lg:text-2xl rounded-xl transition-all duration-300
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
    <div className="relative bg-[#EFEFEF] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">

      {/* Triangle */}
      <div className="hidden lg:block absolute left-[-60px] top-5 border-t-[35px] border-b-[35px] border-r-[60px] border-t-transparent border-b-transparent border-r-[#EFEFEF]"></div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">

        {/* Number */}
        <div className="flex justify-center sm:block">
          <h1 className="text-6xl sm:text-8xl lg:text-[140px] leading-none font-bold text-[#58D3EC]">
            {steps[activeStep].number}
          </h1>
        </div>

        {/* Text */}
        <div className="flex-1 pt-0 sm:pt-5 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#081B57] mb-4 sm:mb-5 leading-tight">
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
