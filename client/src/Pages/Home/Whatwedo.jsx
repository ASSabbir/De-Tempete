import logo from '../../asstes/Images/imgi_7_admin-ajax-rezdneyzuk6y7bcoroponv273ut9dda1za2jyf75s0.webp'
const cards = [
  {
    title: "Business Setup Services",
    description:
      "End-to-end company formation and registration across the UK, UAE, KSA, and Bangladesh with full compliance support.",
  },
  {
    title: "Accounting & Finance",
    description:
      "Expert bookkeeping, financial reporting, and CFO services to keep your business financially healthy and transparent.",
  },
  {
    title: "Corporate Services",
    description:
      "Comprehensive corporate governance, compliance management, and strategic advisory for sustainable growth.",
  },
  {
    title: "Taxation",
    description:
      "Smart tax planning, VAT registration, and advisory services to maximize savings while ensuring full compliance.",
  },
];


export default function WhatWeDo() {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-4">
            What We <span className="font-extrabold">Do?</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive business solutions designed to help you launch, manage, and scale
            your business with confidence across global markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#1a9fd4]/30 cursor-pointer"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#0d1e4a] transition-all duration-300 group-hover:w-1/2" />

              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <img src={logo} alt="" />
              </div>

              {/* Title */}
              <h3 className="text-[#0d1e4a] font-bold text-base sm:text-lg mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}