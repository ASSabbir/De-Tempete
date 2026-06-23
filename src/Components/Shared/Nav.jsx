import { useState, useEffect, useRef } from "react";
import logo1 from '../../asstes/Images/logo1.webp'
import logo2 from '../../asstes/Images/logo2.webp'

const services = {
  UAE: [
    "Market Expansion & Setup Advisory",
    "Regulatory & ISO Compliance",
    "Finance & Accounting",
    "Taxation",
    "HR & Payroll Solutions",
    "Branding & Growth",
    "E-Invoicing",
    "Investment",
  ],
  UK: [
    "Market Expansion & Setup Advisory",
    "Compliance & Regulatory Services",
    "Bookkeeping & Financial Management",
    "Tax Planning & Advisory",
    "Business Advisory",
    "Virtual CFO & Outsourced Accounting",
    "Making Tax Digital (MTD)",
    "Industry-Specific Accounting Solutions",
  ],
  Bangladesh: [
    "Market Expansion & Setup Advisory",
    "Regulatory & ISO Compliance",
    "Finance & Accounting",
    "Taxation",
    "HR & Payroll Solutions",
    "Training, Mentorship & Capacity Building",
    "Investment & Partnership Facilitation",
    "Technology and Automation",
  ],
  KSA: [
    "Market Expansion & Setup Advisory",
    "Regulatory & ISO Compliance",
    "Finance & Accounting",
    "Taxation",
    "HR & Payroll Solutions",
    "Branding & Growth",
    "Automation and Digital Transformation",
    "Investment",
  ],
};

const navLinks = ["Company Formation", "About", "Resource", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("UAE");
  const servicesRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center ">
            {scrolled
             ?<img src={logo2} className="h-16" alt="" />
             :<img src={logo1} className="h-14" alt="" />
            }
            
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Company Formation */}
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-[#0d1e4a] hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Company Formation
              <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Services with Mega Menu */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#0d1e4a] hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                } ${servicesOpen ? (scrolled ? "bg-gray-100 text-[#0d1e4a]" : "bg-white/10 text-white") : ""}`}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              {/* Mega Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-200 origin-top ${
                  servicesOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
                style={{ background: "#0d1e4a" }}
              >
                {/* Region Tabs */}
                <div className="flex border-b border-white/10">
                  {Object.keys(services).map((region) => (
                    <button
                      key={region}
                      onMouseEnter={() => setActiveRegion(region)}
                      className={`flex-1 py-3.5 text-sm font-semibold transition-colors duration-150 ${
                        activeRegion === region
                          ? "text-white border-b-2 border-[#1a9fd4]"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>

                {/* Service Items */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {services[activeRegion].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#1a9fd4] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other nav links */}
            {navLinks.slice(1).map((link) => (
              <button
                key={link}
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#0d1e4a] hover:bg-gray-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link}
                {link === "Resource" && (
                  <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}

            {/* CTA */}
            <button
              className={`ml-3 px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-200 ${
                scrolled
                  ? "border-[#0d1e4a] text-[#0d1e4a] hover:bg-[#0d1e4a] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#0d1e4a]"
              }`}
            >
              Cost Calculator
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              scrolled ? "text-[#0d1e4a] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#0d1e4a" }}
      >
        <div className="px-4 py-4 space-y-1">
          <a href="#" className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            Company Formation
          </a>

          {/* Mobile Services Toggle */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px]" : "max-h-0"}`}>
              {/* Region tabs mobile */}
              <div className="flex gap-2 px-4 py-2 overflow-x-auto">
                {Object.keys(services).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      activeRegion === region
                        ? "bg-[#1a9fd4] text-white"
                        : "bg-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
              <div className="px-4 pb-3 space-y-0.5">
                {services[activeRegion].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <a key={link} href="#" className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
              {link}
            </a>
          ))}

          <div className="pt-2 pb-2">
            <button className="w-full py-3 rounded-lg text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-[#0d1e4a] transition-all duration-200">
              Cost Calculator
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}