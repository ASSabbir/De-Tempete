const features = [
  {
    title: "1- Strategic Location",
    desc: "Connects Asia, Africa, and Europe with global access to 70% of the world’s population.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "2- Vision 2030 Growth",
    desc: "Diversifying into tourism, technology, logistics, renewable energy, and manufacturing.",
    bg: "bg-white",
  },
  {
    title: "3- Advanced Infrastructure",
    desc: "World-class ports, airports, and industrial cities supporting seamless trade.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "4- Investor Reforms",
    desc: "100% foreign ownership and simplified digital setup via MISA.",
    bg: "bg-white",
  },
  {
    title: "5- Tax Benefits & Incentives",
    desc: "Low corporate taxes, no personal income tax, and special economic zone advantages.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "6- Economic Stability",
    desc: "Strong G20 economy, skilled workforce, and secure business environment.",
    bg: "bg-white",
  },
];

const Why_Business = () => {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[#081B57] leading-tight">
            <span className="block text-5xl md:text-6xl font-light">
              Why Start A
            </span>

            <span className="block text-5xl md:text-6xl font-bold mt-2">
              Business In The KSA?
            </span>
          </h2>

          <p className="mt-10 text-[#2B3557] text-lg ">
            Saudi Arabia is rapidly emerging as one of the world's most attractive
            investment and business destinations under Vision 2030. With a strong
            and diversified economy, investor-friendly reforms, and massive
            government-backed development projects, the Kingdom offers exceptional
            opportunities for entrepreneurs, startups, and international companies
            looking to expand in the Middle East. Strategically located at the
            crossroads of Asia, Europe, and Africa, Saudi Arabia provides access
            to key global markets, advanced infrastructure, growing digital
            transformation, and a highly competitive business environment. From
            foreign investment support to expanding sectors such as technology,
            tourism, construction, healthcare, and e-commerce, the Kingdom is
            creating long-term opportunities for sustainable business growth and
            international expansion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-24">

          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.bg}
              rounded-[0px_0px_25px_25px]
              shadow-sm
              min-h-[230px]
              px-5 py-4
              transition-all duration-300
              hover:-translate-y-2`}
            >
              <h3 className="text-[#081B57] text-3xl font-bold leading-snug">
                {item.title}
              </h3>

              <p className="text-[#1F2A4D] text-xl leading-9">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Why_Business;