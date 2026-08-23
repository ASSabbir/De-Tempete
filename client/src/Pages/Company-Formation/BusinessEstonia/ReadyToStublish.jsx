import SharedButton from "../../../Components/Shared/SharedButton";

const ReadyToStublish = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#081B57] to-[#57D3EB] py-24">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xlfont-bold leading-tight">
          Ready To Establish
        </h2>

        <h3 className="text-4xl 2xl:text-5xl font-light mt-2">
          Your Presence In The Estonia?
        </h3>

        <p className="mt-8 text-base leading-8 text-gray-100 max-w-3xl mx-auto">
          Whether you're launching a startup or expanding globally, our
          Estonia business setup consultants ensure your company is fully
          compliant and ready to grow.
        </p>

        
        <div className="my-10">
          
        <SharedButton text={' Start Your Estonia Business Today'} path={'/business-setup/estonia#bussiness-setup-estonia'}></SharedButton>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 mt-5 left-0 w-full overflow-hidden pointer-events-none">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>
              10 YEARS OF LEGACY & EMPOWERING BUSINESSES SINCE 2016 . 10
              YEARS OF LEGACY & EMPOWERING BUSINESSES SINCE 2016 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016 . 10 YEARS OF
              EXPERIENCE & EMPOWERING BUSINESSES SINCE 2016
            </span>

            <span>
              10 YEARS OF LEGACY & EMPOWERING BUSINESSES SINCE 2016 . 10
              YEARS OF LEGACY & EMPOWERING BUSINESSES SINCE 2016 10 YEARS OF
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
        font-size: 100px;
      }
    }
  `}
      </style>
    </section>
  );
};

export default ReadyToStublish;
