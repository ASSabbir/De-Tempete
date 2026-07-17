import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import {
  ShieldCheck,
  Landmark,
  BadgeCheck,
  Building2,
  Globe2,
  Sparkles,
} from "lucide-react";
import img1 from '../../asstes/Images/about/up/1.png'
import img2 from '../../asstes/Images/about/up/2.png'
import img3 from '../../asstes/Images/about/up/3.jpg'
import img4 from '../../asstes/Images/about/up/4.jpeg'
import img5 from '../../asstes/Images/about/up/5.png'
import img6 from '../../asstes/Images/about/up/6.png'
import img7 from '../../asstes/Images/about/up/7.png'
import img8 from '../../asstes/Images/about/up/8.png'
import img9 from '../../asstes/Images/about/up/9.png'
import img10 from '../../asstes/Images/about/up/10.png'
import img12 from '../../asstes/Images/about/up/12.jpg'
import img11 from '../../asstes/Images/about/up/11.jpg'
import img13 from '../../asstes/Images/about/up/13.png'
import img14 from '../../asstes/Images/about/up/14.png'
import img15 from '../../asstes/Images/about/up/15.png'
import img16 from '../../asstes/Images/about/up/16.png'
import img18 from '../../asstes/Images/about/up/18.png'
import img19 from '../../asstes/Images/about/up/19.png'
import img20 from '../../asstes/Images/about/up/20.png'
import img21 from '../../asstes/Images/about/up/21.png'
import img22 from '../../asstes/Images/about/up/22.png'
import img23 from '../../asstes/Images/about/up/23.png'
import img24 from '../../asstes/Images/about/up/24.png'
import img25 from '../../asstes/Images/about/up/25.png'
import img26 from '../../asstes/Images/about/up/26.png'
import img27 from '../../asstes/Images/about/up/27.png'
import img28 from '../../asstes/Images/about/up/28.jpeg'
import img29 from '../../asstes/Images/about/up/29.jpg'
import img30 from '../../asstes/Images/about/up/30.jpg'
import img31 from '../../asstes/Images/about/up/31.jpg'
import img32 from '../../asstes/Images/about/up/32.png'
import img33 from '../../asstes/Images/about/up/33.png'

/**
 * ---------------------------------------------------------------------------
 * Replace these with your real partner logos (swap the <PartnerCard icon .../>
 * for an <img src="/logos/xyz.svg" /> if you have actual logo files).
 * Each column just needs an array of unique items — duplication for the
 * seamless loop is handled automatically inside <MarqueeColumn />.
 * ---------------------------------------------------------------------------
 */
const COLUMN_1 = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33]


function PartnerCard({ icon }) {
  return (
    <div className="flex w-40 shrink-0 flex-col items-center gap-2 rounded-2xl  px-4 py-5 ">
      <img src={icon} alt="" />
    </div>
  );
}


function MarqueeColumn({ items, direction = "down", speed = 26, className = "" }) {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // "down": items appear to fall from top -> bottom
      // "up":   items appear to rise from bottom -> top
      const fromVars = direction === "down" ? { yPercent: -50 } : { yPercent: 0 };
      const toVars = direction === "down" ? { yPercent: 0 } : { yPercent: -50 };

      gsap.set(track, { ...fromVars, force3D: true, willChange: "transform" });

      gsap.to(track, {
        ...toVars,
        duration: speed,
        ease: "none",
        repeat: -1,
        force3D: true,
      });
    }, track);

    return () => ctx.revert();
  }, [direction, speed]);

  return (
    <div
      className={`relative h-full w-40 overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div ref={trackRef} className="flex flex-col gap-5">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex flex-col gap-15" aria-hidden={copy === 1}>
            {items.map((item,index) => (
              <PartnerCard key={`${copy}-${index}`} icon={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GrowthPartners() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <h2 className="text-3xl  leading-tight text-dark-blue sm:text-5xl">
            <span className="font-extrabold">Our Growth</span> Partners Or
            Strategic Partners
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
        </div>

        {/* Right: three infinite vertical marquees */}
        <div className="flex h-[420px] items-center justify-center gap-6 sm:h-[480px]">
          <MarqueeColumn items={COLUMN_1} direction="down" speed={60} className="mt-0" />
          <MarqueeColumn items={COLUMN_1} direction="up" speed={60} className="mt-10" />
          <MarqueeColumn items={COLUMN_1} direction="down" speed={60} className="mt-0" />
        </div>
      </div>
    </section>
  );
}