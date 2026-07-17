const features = [
  {
    title: "1- 0% Tax on Retained Profits",
    desc: "No corporate income tax while profits stay in the company. Tax applies only when dividends are distributed — at 22%.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "2- 100% Digital & Remote",
    desc: "Register in as little as one business day and manage everything online with e-Residency — no travel required.",
    bg: "bg-white",
  },
  {
    title: "3- Full EU Market Access",
    desc: "One company, 27 EU markets. Invoice, sell, and operate across the Single Market with SEPA banking and EU VAT recognition.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "4- 100% Foreign Ownership",
    desc: "No local sponsor, partner, or resident director needed. Full control from day one, with share capital starting from €0.01.",
    bg: "bg-white",
  },
  {
    title: "5- Low Setup & Running Costs",
    desc: "€265 state registration fee, €150 e-Residency, and typical first-year costs of €1,000–€3,000 including essential services.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "6- Proven Startup Ecosystem",
    desc: "The country behind Wise, Skype, and Bolt, offering one of Europe's lowest bureaucratic environments and a world-leading digital infrastructure.",
    bg: "bg-white",
  },
];

const Why_BusinessEs = () => {
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
              Business In The Estonia?
            </span>
          </h2>

          <p className="mt-10 text-[#2B3557] text-lg">
            Estonia is Europe's most advanced digital economy and one of the world's easiest places to launch and run a company. Through the e-Residency programme, entrepreneurs from 170+ countries can establish a 100% foreign-owned EU company entirely online — no travel, no local sponsor, no layers of paperwork. With 0% corporate tax on retained profits, full access to the EU Single Market, and 99% of public services running digitally, Estonia offers a uniquely founder-friendly environment. Home to the startup ecosystem that produced Wise, Skype, and Bolt, and a member of the EU, Eurozone, NATO, and OECD, the country combines credibility, simplicity, and cash-flow-friendly taxation — making it the ideal EU launchpad for startups, SaaS businesses, e-commerce sellers, and international founders.
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

              <p className="text-[#1F2A4D] text-xl leading-9">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why_BusinessEs;
