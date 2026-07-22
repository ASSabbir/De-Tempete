import logo from "/src/asstes/img_temp/imgi_7_admin-ajax-rezdneyzuk6y7bcoroponv273ut9dda1za2jyf75s0.webp";

const steps = [
  {
    title: "Step 01",
    desc: "Choose your business structure (Limited Company, LLP, Sole Trader, etc.)",
  },
  {
    title: "Step 02",
    desc: "Conduct a company name availability check and reserve your preferred name",
  },
  {
    title: "Step 03",
    desc: "Secure a UK registered office address, either physical or virtual",
  },
  {
    title: "Step 04",
    desc: "Appoint directors, shareholders, and identify People with Significant Control (PSC)",
  },
  {
    title: "Step 05",
    desc: "Prepare the Memorandum and Articles of Association for incorporation",
  },
  {
    title: "Step 06",
    desc: "Register the company with Companies House and receive the Certificate of Incorporation",
  },
  {
    title: "Step 07",
    desc: "Open a UK business bank account and set up financial operations",
  },
  {
    title: "Step 08",
    desc: "Register for Corporation Tax, VAT, and PAYE with HMRC where applicable",
  },
  {
    title: "Step 09",
    desc: "Ensure ongoing compliance through annual filings, confirmation statements, and tax submissions",
  },
];

const positions = [
  // Row 1
  "left-[5%] top-[40px]",
  "left-1/2 -translate-x-1/2 top-[40px]",
  "right-[5%] top-[40px]",

  // Row 2 
  "left-[5%] top-[410px]",
  "left-1/2 -translate-x-1/2 top-[410px]",
  "right-[5%] top-[410px]",

  // Row 3
  "left-[5%] top-[780px]",
  "left-1/2 -translate-x-1/2 top-[780px]",
  "right-[5%] top-[780px]", 
];

const ProcessStep = () => {
  return (
    <section className="bg-[#ffffff] overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-[#000000] text-4xl md:text-6xl font-light leading-tight">
            Step-By-Step Process For
            <br />
            UK <span className="font-bold">Company Registration</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Setting up a business in the United Kingdom involves a few
            streamlined steps
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative h-[1050px]">
          {/* Road SVG */}
          <svg
            viewBox="0 40 1200 1600"
            className="absolute inset-0 w-full"
          >
            <path
              d="
      M150 120
      H1050
      A90 90 0 0 1 1050 300
      H150
      A90 90 0 0 0 150 480
      H1050
      A90 90 0 0 1 1050 660
      H150
      A90 90 0 0 0 150 840
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
              <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mx-auto relative z-10">
                <img src={logo} alt="" className="w-10 h-10 object-contain" />
              </div>

              {/* Step */}
              <h3 className="mt-2 text-2xl font-bold text-[#081B57]">
                {step.title}
              </h3>

              {/* Description */}
              <p className=" text-gray-700 text-md">{step.desc}</p>
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
                  <img src={logo} alt="" className="w-8 h-8 object-contain" />
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[3px] h-24 bg-cyan-400 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-[#081B57]">
                  {step.title}
                </h3>

                <p className="text-gray-700 mt-3 leading-7">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
