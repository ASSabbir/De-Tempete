import { useEffect, useRef, useState } from "react";
import worldimg from '../../asstes/img_temp/world map.png'


const pins = [
  { label: "UK", sub: "United Kingdom", top: "26%", left: "42%" },
  { label: "Estonia", sub: "Estonia", top: "22%", left: "65%" },
  { label: "KSA", sub: "Saudi Arabia", top: "44%", left: "56%" },
  { label: "Bangladesh", sub: "Bangladesh", top: "44%", left: "75%" },
  { label: "UAE", sub: "United Arab Emirates", top: "55%", left: "59%" },
];


export default function Worldmap() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white w-full" ref={sectionRef}>



      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 h-screen">
        <div className="relative w-full  flex justify-center items-center  h-full" >
          <div className="flex justify-center items-center  h-full ">
            <img src={worldimg} alt="" className="w-full h-full" />
          </div>

          {/* Pin markers */}
          {pins.map((pin) => (
            <div
              key={pin.label}
              className="absolute flex flex-col items-center group"
              style={{ top: pin.top, left: pin.left, transform: "translate(-50%, -100%)" }}
            >
              {/* Tooltip */}
              <div className={`mb-1 ${pin.label == 'UAE' ? 'top-8' : 'bottom-7'} absolute  bg-white rounded-lg  shadow-lg px-2 py-1 text-center pointer-events-none`}>
                <div className="text-[11px] font-bold text-[#0d1e4a] whitespace-nowrap">{pin.label}</div>
                <div className="text-[9px] text-gray-400 whitespace-nowrap">{pin.sub}</div>
              </div>
              {/* Pin icon */}
              <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
                <path d="M11 0C5.477 0 1 4.477 1 10c0 7.5 10 18 10 18S21 17.5 21 10C21 4.477 16.523 0 11 0z" fill="#2563eb" />
                <circle cx="11" cy="10" r="4" fill="white" />
              </svg>
              {/* Pulse ring */}
              <span className="absolute top-[calc(100%-14px)] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 opacity-60 animate-ping" style={{ animationDuration: "2s" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}