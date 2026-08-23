import * as MarqueeModule from "react-fast-marquee";
const MarqueeLib =
  MarqueeModule.default?.default ||
  MarqueeModule.default ||
  MarqueeModule.Marquee ||
  MarqueeModule;

const TrustedPartner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#081B57] to-[#57D3EB] py-24">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold leading-tight">
          Your Trusted Partner for Global Accounting, Compliance & Business Formation.
        </h2>

        <button className="my-15 border-2 border-white px-10 py-4 rounded-xl text-base font-medium hover:bg-white hover:text-[#081B57] duration-300">
          Get Started Now
        </button>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <MarqueeLib
          speed={80}
          gradient={false}
          pauseOnHover={false}
        >
          <span className="marquee-text">
            9 YEARS OF LEGACY &amp; EMPOWERING BUSINESSES SINCE 2017 .&nbsp;
          </span>
        </MarqueeLib>
      </div>

      {/* Text styling only — no animation logic here */}
      <style>
        {`
    .marquee-text {
      font-size: 120px;
      font-weight: 800;
      line-height: 0.8;
      color: rgba(255,255,255,0.12);
      padding-right: 80px;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .marquee-text {
        font-size: 80px;
      }
    }
  `}
      </style>
    </section>
  );
};

export default TrustedPartner;