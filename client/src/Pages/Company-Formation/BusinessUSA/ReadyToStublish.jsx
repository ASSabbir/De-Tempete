const ReadyToStublish = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#081B57] to-[#57D3EB] py-24">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready To Establish
        </h2>

        <h3 className="text-4xl md:text-5xl font-light mt-2">
          Your Presence In The USA?
        </h3>

        <p className="mt-8 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
          Whether you're launching a startup or expanding globally, our USA
          business setup consultants ensure your company is fully compliant and
          ready to grow.
        </p>

        <button className="my-15 border-2 border-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-[#081B57] duration-300">
          Start Your USA Business Today
        </button>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 mt-5 left-0 w-full overflow-hidden pointer-events-none">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>
              10 YEARS OF EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 . 10
              YEARS OF EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 . 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016
            </span>

            <span>
              10 YEARS OF EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 . 10
              YEARS OF EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016
            </span>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
    .marquee-track {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }

    .marquee-content {
      display: flex;
      width: max-content;
      animation: marquee 100s linear infinite;
    }

    .marquee-content span {
      font-size: 120px;
      font-weight: 800;
      line-height: 0.8;
      color: rgba(255,255,255,0.12);
      padding-right: 80px;
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @media (max-width: 768px) {
      .marquee-content span {
        font-size: 60px;
      }
    }
  `}
      </style>
    </section>
  );
};

export default ReadyToStublish;
