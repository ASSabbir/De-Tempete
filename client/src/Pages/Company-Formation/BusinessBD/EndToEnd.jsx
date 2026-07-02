import { useState } from "react";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "Business Licensing & Registration",
    points: [
      "Company incorporation (RJSC / BIDA approvals)",
      "Trade License, e-TIN, VAT/BIN registrations",
      "Documentation preparation and filing coordination",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Structuring & Market Entry Advisory",
    points: [
      "Entity structure planning (PLC, BO, LO)",
      "Shareholding and governance setup",
      "Compliance roadmap aligned with business model",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "Banking & Capital Advisory",
    points: [
      "Capital remittance documentation support",
      "Bank account opening coordination",
      "Foreign exchange and repatriation guidance",
    ],
  },
  {
    number: "4",
    step: "Step 04",
    title: "Accounting & Tax Compliance",
    points: [
      "Bookkeeping and financial reporting (IFRS-based)",
      "Corporate tax, VAT, and withholding compliance",
      "Monthly and annual filing management",
    ],
  },
  {
    number: "5",
    step: "Step 05",
    title: "Payroll & HR Compliance",
    points: [
      "Payroll processing and tax deductions",
      "Employee documentation and compliance",
      "Local and expatriate payroll handling",
    ],
  },
  {
    number: "6",
    step: "Step 06",
    title: "Audit & Ongoing Compliance Support",
    points: [
      "Audit preparation and coordination",
      "RJSC filings and annual returns",
      "Continuous compliance monitoring",
    ],
  },
];

const EndToEnd = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#efefef] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Banner */}
        <div className="bg-[#081B57] rounded-2xl px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-8 mb-18">
          <h3 className="text-white text-2xl font-medium max-w-4xl leading-relaxed">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            Bangladesh <span className="font-bold">regulations.</span>
          </h3>

          <button className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-[#081B57] duration-300">
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
            complete business setup and compliance support tailored for
            Bangladesh operations.
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
                <div className="flex justify-center sm:justify-start">
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
