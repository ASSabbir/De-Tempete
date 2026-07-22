
import heroVideo from '../../asstes/video/Hero-video.mp4'
import { useState, useEffect, useRef } from "react";
import SharedFullButton from '../../Components/Shared/SharedFullButton';
 import { Link } from "react-router";
const slides = [
  {
    title: "Fast & Secure ID Verification",
    description:
      "Complete digital verification in minutes — ensuring trust, security, and compliance for every client.",
  },
  {
    title: "Global Business Setup Made Simple",
    description:
      "From UAE to UK, we handle company formation across 5 countries — so you can focus on growth.",
  },
  {
    title: "Expert Accounting & Tax Advisory",
    description:
      "Stay compliant and profitable with our certified accountants managing your books and tax strategy.",
  },
  {
    title: "HR & Payroll Solutions You Can Trust",
    description:
      "Automate payroll, manage contracts, and stay legally compliant — across every jurisdiction you operate in.",
  },
  {
    title: "Grow Your Brand Across Borders",
    description:
      "Strategic branding and market expansion services to help you stand out and scale internationally.",
  },
];
 
const services = [
  "Company Formation",
  "Accounting & Bookkeeping",
  "Tax Planning & Advisory",
  "HR & Payroll",
  "Regulatory & ISO Compliance",
  "Branding & Growth",
  "Virtual CFO",
  "Investment Advisory",
];
 
const INTERVAL = 3000;

 

const Banner = () => {
 const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" | "down"
  const intervalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", designation: "", service: "",
  });
 
  const goTo = (index, dir = "up") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };
 
  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setDirection("up");
        setAnimating(true);
        setTimeout(() => setAnimating(false), 400);
        return next;
      });
    }, INTERVAL);
  };
 
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);
 
  const handleDotClick = (i) => {
    const dir = i > current ? "up" : "down";
    goTo(i, dir);
    startInterval();
  };
 
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
 
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0d1e4a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <video className='object-center object-cover h-full w-full' src={heroVideo} autoPlay muted loop></video>
            <div className='bg-dark-blue/80 w-full h-full absolute top-0'></div>
      </div>
 
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-28 lg:py-32">
 
          {/* LEFT — Text Slider */}
          <div className="flex flex-col justify-center">
            {/* Slide text */}
            <div className="relative  min-h-[220px] sm:min-h-[200px]">
              <div
                key={current}
                className={`transition-all duration-400 ${
                  animating
                    ? direction === "up"
                      ? "opacity-0 -translate-y-100"
                      : "opacity-0 translate-y-100"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ transition: "opacity 0.4s ease, transform 0.4s ease" }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                  {slides[current].title}
                </h1>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg">
                  {slides[current].description}
                </p>
              </div>
            </div>
 
            
 
            {/* CTA */}
            <div className='mt-15'>
              <SharedFullButton text={'Contact Us Now'} path={'/contact'}></SharedFullButton>
            </div>
          </div>
 
          {/* RIGHT — Consultation Form */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              className="w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl"
              style={{ background: "rgba(13, 30, 74, 0.75)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Free Consultation
              </h2>
 
              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { name: "name", placeholder: "Name", type: "text" },
                  { name: "email", placeholder: "Email", type: "email" },
                  { name: "phone", placeholder: "Phone", type: "tel" },
                  { name: "company", placeholder: "Company", type: "text" },
                  { name: "designation", placeholder: "Designation", type: "text" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={["name", "email", "phone"].includes(field.name)}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                ))}
 
                {/* Service dropdown */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all duration-200 appearance-none cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: formData.service ? "white" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <option value="" disabled style={{ background: "#0d1e4a", color: "white" }}>
                      What Services Are You Looking?
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#0d1e4a", color: "white" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
 
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-sm font-bold text-white transition-all duration-200 mt-2 shadow-lg hover:shadow-[#1a9fd4]/40 hover:shadow-xl hover:brightness-110"
                  style={{ background: "linear-gradient(135deg, #1a9fd4, #0d7faa)" }}
                >
                  Request Callback Now
                </button>
              </form>
            </div>
          </div>
 
        </div>
      </div>
 
      {/* Progress bar keyframe */}
      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  );
}

export default Banner;