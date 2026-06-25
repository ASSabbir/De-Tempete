const features = [
  {
    title: "1- Access to the World's Largest Economy",
    desc: "Operate within one of the most stable and powerful economies, offering unmatched business opportunities and consumer demand.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "2- Business-Friendly Environment",
    desc: "Simple company formation processes, strong legal protections, and a highly supportive entrepreneurial ecosystem.",
    bg: "bg-white",
  },
  {
    title: "3- Global Market Reach",
    desc: "Expand internationally while benefiting from the USA's extensive trade networks and global business reputation.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "4- Strong Banking & Financial System",
    desc: "Access world-class banking, payment processing, investment opportunities, and financial services.",
    bg: "bg-white",
  },
  {
    title: "5- Ideal for Foreign Entrepreneurs",
    desc: "Non-residents can establish companies remotely and gain access to international clients and investors.",
    bg: "bg-[#57C9E3]",
  },
  {
    title: "6- Innovation & Growth Opportunities",
    desc: "Home to leading technology hubs, startup ecosystems, and venture capital networks supporting rapid business growth.",
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
              Business In The USA?
            </span>
          </h2>

          <p className="mt-10 text-[#2B3557] text-lg">
            The United States remains one of the world's most attractive
            destinations for entrepreneurs, startups, and international
            investors. With a strong legal framework, advanced infrastructure,
            access to global markets, and a highly developed financial system,
            the USA offers exceptional opportunities for business growth and
            expansion. Foreign founders can establish companies remotely, access
            international banking solutions, and benefit from one of the world's
            most innovative business environments. Whether launching a startup,
            e-commerce brand, consulting firm, or technology company, the USA
            provides the credibility, scalability, and market access needed for
            long-term success.
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

export default Why_Business;
