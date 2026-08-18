import { useEffect, useRef, useState } from "react";
import worldimg from '../../asstes/img_temp/Map.webp'
import SecondSection from "../../Components/Shared/SecondSection";


export default function WhyChoose() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  

  return (
    <section className="bg-white w-full" ref={sectionRef}>

      {/* ── Stats Bar ── */}
      <SecondSection></SecondSection>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
              From Formation To Finance —{" "}
              <br className="hidden sm:block" />
              We Simplify <span className="font-extrabold">Business Growth</span>
            </h2>

            <div className="space-y-4 text-sm 2xl:text-[1vw] text-gray-600 leading-relaxed">
              <p>
                <span className="font-bold italic text-[#0d1e4a]">de tempête</span> is a global accounting and
                business advisory firm providing end-to-end business solutions —  from company formation to financial compliance and reporting, business automation, valuation, and investment guidance.
              </p>
              <p>
                With registered presence in the UK, UAE, KSA, Estonia, USA and Bangladesh, we empower companies to operate
                efficiently, remain compliant, and grow sustainably across borders.
              </p>
              <p>
                Backed by 9+ years of expertise, 98% client retention, and experience across 24+ industries, our
                certified professionals blend global insight with technology-driven financial systems to deliver
                measurable results and lasting impact.
              </p>
            </div>
          </div>

          {/* Right — World Map SVG + Pins */}
          <div className="relative w-full select-none">
            {/* World map SVG — simplified flat paths */}
            <div className="relative w-full  flex justify-center items-center" >
             <div className="flex justify-center items-center">
                 <img src={worldimg} alt="" className="" />
             </div>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}