import { useState } from "react";

const steps = [
  {
    number: "1",
    step: "Step 01",
    title: "Company Formation Support",
    points: [
      "LLC & Delaware C-Corp registration",
      "EIN application assistance",
      "Registered agent coordination",
      "Formation document preparation",
    ],
  },
  {
    number: "2",
    step: "Step 02",
    title: "Banking & Payment Support",
    points: [
      "Stripe readiness guidance",
      "Business banking assistance",
      "Multi-currency setup support",
      "Banking documentation assistance",
    ],
  },
  {
    number: "3",
    step: "Step 03",
    title: "Tax & Compliance Support",
    points: [
      "Form 5472 preparation support",
      "Annual filing guidance",
      "Federal compliance assistance",
      "Cross-border advisory support",
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
          <h3 className="text-white text-2xl font-medium max-w-4xl leading-relaxed">
            At <span className="italic font-bold">de tempête</span>, we manage
            the full process — ensuring fast approval and full compliance with
            KSA’s <span className="font-bold">business laws.</span>
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
            USA.
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
