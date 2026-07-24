import logo from "/src/asstes/img_temp/imgi_7_admin-ajax-rezdneyzuk6y7bcoroponv273ut9dda1za2jyf75s0.webp";

const steps = [
  {
    title: "Step 01",
    desc: "Choose your business activity (EMTAK code) and confirm that the OÜ structure is the right fit for your business.",
  },
  {
    title: "Step 02",
    desc: "Apply for an Estonian e-Residency digital ID to enable fully remote company formation and management.",
  },
  {
    title: "Step 03",
    desc: "Reserve a unique OÜ company name and prepare the Articles of Association.",
  },
  {
    title: "Step 04",
    desc: "Arrange a registered legal address and contact person service through a licensed Estonian provider.",
  },
  {
    title: "Step 05",
    desc: "Submit your OÜ registration through the e-Business Register, pay the €265 state fee, and digitally sign the incorporation documents.",
  },
  {
    title: "Step 06",
    desc: "Open a business bank or fintech account and register for VAT or EORI if required for your business activities.",
  },
];
const positions = [
  "left-[5%] top-[-15px]",
  "left-1/2 -translate-x-1/2 top-[-15px]",
  "right-[5%] top-[-15px]",

  "left-[5%] top-[360px]",
  "left-1/2 -translate-x-1/2 top-[360px]",
  "right-[5%] top-[360px]",
];

const ProcessStep = () => {
  return (
    <section className="bg-[#F8F8F8] overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-5xl mb-24">
          <h2 className="text-[#000000] text-4xl md:text-6xl font-light leading-tight">
            Step-By-Step Process For
            <br />
            Estonia <span className="font-bold">Company Registration</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Setting up a business in the Estonia involves a few streamlined steps
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative h-[650px]">

          {/* Road SVG */}
          <svg
            viewBox="0 170 1200 400"
            className="absolute inset-0 w-full h-full"
          >
            <path
              d="
                M150 80
                H1050
                A90 90 0 0 1 1050 260
                H150
                A90 90 0 0 0 150 440
                H1050
              "
              stroke="#58D3EC"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute w-[250px] text-center ${positions[index]}`}
            >
              {/* Icon */}
              <div className="w-20 h-20 hover:shadow-2xl hover:scale-105 duration-200 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mx-auto relative z-10">
                <img
                  src={logo}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Step */}
              <h3 className="mt-2 text-2xl font-bold text-[#081B57]">
                {step.title}
              </h3>

              {/* Description */}
              <p className=" text-gray-700 text-md">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden space-y-10">

          {steps.map((step, index) => (
            <div key={index} className="flex gap-5">

              {/* Left Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow border flex items-center justify-center">
                  <img
                    src={logo}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[3px] h-24 bg-light-blue mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-[#081B57]">
                  {step.title}
                </h3>

                <p className="text-gray-700 mt-3 leading-7">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProcessStep;