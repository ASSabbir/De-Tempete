import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";

/**
 * Reusable Marquee component.
 * - No external lib (react-fast-marquee caused import errors last time).
 * - Duration is calculated from actual content width, so speed stays
 *   consistent no matter how long/short the text is.
 * - Duplicates content automatically for a seamless loop.
 */
const Marquee = ({
  children,
  speed = 80, // pixels per second
  pauseOnHover = false,
  className = "",
  gap = 80, // px gap between repeated copies
}) => {
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.offsetWidth;
      setDuration(width / speed);
    }
  }, [speed, children]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationPlayState: pauseOnHover ? "running" : undefined,
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "running";
        }}
      >
        <div ref={contentRef} className="flex shrink-0" style={{ paddingRight: gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ paddingRight: gap }} aria-hidden="true">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const ReadyToStublish = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#081B57] to-[#57D3EB] py-24">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Your Trusted Partner for Global Accounting, Compliance & Business
          Formation.
        </h2>

        <Link to={'/contact'}>
        <button className="mt-10 border-2 border-white hover:border-light-blue hover:text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-light-blue cursor-pointer duration-300">
          Get Started Now
        </button>
        </Link>
      </div>

      {/* Bottom Marquee */}
      <div className="relative mt-20 w-full pointer-events-none">
        <Marquee speed={120}>
          <span className="text-[60px] md:text-[150px] font-extrabold leading-[0.8] text-white/10">
            9 YEARS OF EXPERIENCE & EMPOWERING BUSINESSES SINCE 2017 .
          </span>
        </Marquee>
      </div>
    </section>
  );
};

export default ReadyToStublish;