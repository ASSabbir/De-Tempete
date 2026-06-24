import { useState } from "react";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "Company Registration with Companies House",
    points: [
      "Company name availability check",
      "Preparation of incorporation documents (MOA & AOA)",
      "Director, shareholder & PSC setup",
      "Online filing with Companies House",
      "Certificate of Incorporation issued",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Business Structure Consultation",
    points: [
      "Evaluation of Sole Trader, Ltd, LLP & Partnership options",
      "Tax and liability comparison",
      "Advice based on business goals & growth plans",
      "Guidance for UK & non-UK residents",
      "Compliance implications explained clearly",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "Registered Office & Virtual Address Services",
    points: [
      "UK registered office address for Companies House & HMRC",
      "Director service address to protect personal privacy",
      "Mail receipt, scanning & forwarding",
      "Address compliance management",
      "Annual renewal support",
    ],
  },
  {
    number: "4",
    step: "Step 04",
    title: "UK Business Bank Account Assistance",
    points: [
      "Guidance on traditional banks & fintech options",
      "Support for non-UK resident founders",
      "Documentation preparation & verification",
      "Application assistance & follow-ups",
      "Faster account approval process",
    ],
  },
  {
    number: "5",
    step: "Step 05",
    title: "Accounting & Bookkeeping Services",
    points: [
      "Day-to-day bookkeeping",
      "Expense & invoice management",
      "Bank reconciliation",
      "Financial reporting",
      "Year-end accounts preparation",
    ],
  },
  {
    number: "6",
    step: "Step 06",
    title: "Corporation Tax, VAT & PAYE Registration",
    points: [
      "Corporation Tax registration with HMRC",
      "VAT registration (mandatory or voluntary)",
      "PAYE & payroll setup for employees",
      "Tax threshold assessment",
      "Ongoing tax compliance guidance",
    ],
  },
  {
    number: "7",
    step: "Step 07",
    title: "Ongoing Compliance & Filing Support",
    points: [
      "Annual accounts filing",
      "Confirmation statement submission",
      "CT600 Corporation Tax returns",
      "VAT returns & deadlines management",
      "HMRC & Companies House compliance monitoring",
    ],
  },
  {
    number: "8",
    step: "Step 08",
    title: "Virtual Office & Mail Forwarding Solutions",
    points: [
      "Professional UK business address",
      "Mail scanning or physical forwarding worldwide",
      "Dedicated business contact handling",
      "Enhanced business credibility",
      "Flexible service packages",
    ],
  },
  {
    number: "9",
    step: "Step 09",
    title: "Licensing & Regulatory Guidance",
    points: [
      "Identification of required licenses & permits",
      "Industry-specific compliance checks",
      "FCA & regulated activity guidance (where applicable)",
      "Support with gov.uk licence applications",
      "Risk reduction & compliance assurance",
    ],
  },
];

const EndToEnd = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f7f7f7] pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Banner */}
        <div className="bg-[#081B57] rounded-2xl px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-8 mb-18">
          <h3 className="text-white text-2xl font-medium max-w-4xl leading-relaxed">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            UK’s <span className="font-bold">business laws.</span>
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
            complete company formation and financial management services in the
            UK.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mx-22">
          {/* Left Steps */}
          <div className="lg:col-span-3">
            <div className="">
              {steps.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`block text-left w-full px-6 py-5 text-2xl rounded-xl
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
            <div className="relative bg-[#EFEFEF] rounded-3xl p-12 shadow-sm">
              {/* Triangle */}
              <div className="hidden lg:block absolute left-[-60px] top-5 border-t-[35px] border-b-[35px] border-r-[60px] border-t-transparent border-b-transparent border-r-[#EFEFEF]"></div>

              <div className="flex gap-8">
                {/* Number */}
                <div>
                  <h1 className="text-[140px] leading-none font-bold text-[#58D3EC]">
                    {steps[activeStep].number}
                  </h1>
                </div>

                {/* Text */}
                <div className="pt-5">
                  <h3 className="text-5xl font-bold text-[#081B57] mb-5">
                    {steps[activeStep].title}
                  </h3>

                  <ul className=" text-[#1f2a50] text-xl">
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
