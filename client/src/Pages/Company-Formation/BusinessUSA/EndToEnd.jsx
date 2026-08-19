import { useState } from "react";
import SharedButton from "../../../Components/Shared/SharedButton";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "Business Structure & State",
    points: [
      "LLC or C-Corp selection",
      "State selection guidance",
      "Business tax considerations",
      "Formation planning",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Company Name & Agent",
    points: [
      "Company name availability",
      "Legal name requirements",
      "Registered agent setup",
      "Agent address coordination",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "State Formation Filing",
    points: [
      "Formation document preparation",
      "Secretary of State filing",
      "State fee guidance",
      "Formation status support",
    ],
  },
  {
    number: "4",
    step: "Step 04",
    title: "Governance & Ownership",
    points: [
      "Operating agreement or bylaws",
      "Ownership documentation",
      "Voting & management structure",
      "Corporate records setup",
    ],
  },
  {
    number: "5",
    step: "Step 05",
    title: "EIN Application",
    points: [
      "IRS Form SS-4 support",
      "EIN application assistance",
      "Non-resident application guidance",
      "Banking readiness support",
    ],
  },
  {
    number: "6",
    step: "Step 06",
    title: "Banking & Payments",
    points: [
      "U.S. bank account guidance",
      "Fintech account setup",
      "Stripe & PayPal readiness",
      "Payment documentation support",
    ],
  },
  {
    number: "7",
    step: "Step 07",
    title: "Tax & Ongoing Compliance",
    points: [
      "Bookkeeping setup",
      "Federal tax compliance",
      "Form 5472 support",
      "Annual filing & state compliance",
    ],
  },
];

const EndToEnd = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Banner */}
        <div className="bg-[#081B57] rounded-2xl px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-8 mb-18">
          <h3 className="text-white text-xl font-medium max-w-4xl leading-relaxed">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            KSA’s <span className="font-bold">business laws.</span>
          </h3>

          
           <div className="">
            <SharedButton text={'Get Started Now'} path={'/business-setup/usa#bussiness-setup-usa'}></SharedButton>
           </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-[#081B57] text-3xl md:text-4xl 2xl:text-5xl font-light leading-tight">
            Our End-To-End
            <br />
            Company <span className="font-bold">Formation Support</span>
          </h2>

          <p className="mt-2 text-[#1f2a50] text-xl">
            <span className="font-bold italic">de tempête</span> provides
            complete company formation and financial management services in the
            USA.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Steps */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col  overflow-x-auto lg:overflow-visible pb-2">
              {steps.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-shrink-0 lg:w-full text-left px-5 sm:px-6 py-3  text-base sm:text-base l2xl:text-2xl rounded-xl transition-all duration-300
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
              <div className="hidden lg:block absolute left-[-60px] top-5 border-t-[35px] border-b-[35px] border-r-[60px] border-t-transparent border-b-transparent border-r-[#EFEFEF]" />

              <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                {/* Number */}
                <div className="flex justify-center md:block">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl  leading-none font-bold text-[#58D3EC]">
                    {steps[activeStep].number}
                  </h1>
                </div>

                {/* Text */}
                <div className="flex-1 pt-0 md:pt-5 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#081B57] mb-4 md:mb-5 leading-tight">
                    {steps[activeStep].title}
                  </h3>

                  <ul className="text-[#1f2a50] text-base sm:text-base lg:text-xl space-y-2">
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
