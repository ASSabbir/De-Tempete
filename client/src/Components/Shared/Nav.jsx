import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import logo1 from '../../asstes/Images/logo1.webp'
import logo2 from '../../asstes/Images/logo2.webp'

import ukImg from '../../asstes/Images/New folder/Business-set-up-in-UK.webp'
import usaImg from '../../asstes/Images/New folder/Business-set-up-in-USA.webp'
import ksaImg from '../../asstes/Images/New folder/Business-set-up-in-kSA.webp'
import bdImg from '../../asstes/Images/New folder/Business-set-up-in-BD.webp'
import uaeImg from '../../asstes/Images/New folder/Dubai-Business-set-up.webp'

const companyFormation = [
  { img: uaeImg,  label: "Business Setup in UAE", path: "/business-setup/uae" },
  { img: ksaImg,  label: "Business Setup in KSA", path: "/business-setup/ksa" },
  { img: bdImg,   label: "Business Setup in Bangladesh", path: "/business-setup/bd" },
  { img: ukImg,   label: "Business Setup in UK", path: "/business-setup/uk" },
  { img: usaImg,  label: "Business Setup in USA", path: "/business-setup/usa" },
];

const services = {
  UAE: [
    { label: "Market Expansion & Setup Advisory", path: "/services/uae/market-expansion" },
    { label: "Regulatory & ISO Compliance", path: "/services/uae/regulatory" },
    { label: "Finance & Accounting", path: "/services/uae/finance" },
    { label: "Taxation", path: "/services/uae/taxation" },
    { label: "HR & Payroll Solutions", path: "/services/uae/hr-payroll" },
    { label: "Branding & Growth", path: "/services/uae/branding" },
    { label: "E-Invoicing", path: "/services/uae/e-invoicing" },
    { label: "Investment", path: "/services/uae/investment" },
  ],
  UK: [
    { label: "Market Expansion & Setup Advisory", path: "/services/uk/market-expansion" },
    { label: "Compliance & Regulatory Services", path: "/services/uk/compliance" },
    { label: "Bookkeeping & Financial Management", path: "/services/uk/bookkeeping" },
    { label: "Tax Planning & Advisory", path: "/services/uk/tax-planning" },
    { label: "Business Advisory", path: "/services/uk/business-advisory" },
    { label: "Virtual CFO & Outsourced Accounting", path: "/services/uk/virtual-cfo" },
    { label: "Making Tax Digital (MTD)", path: "/services/uk/mtd" },
    { label: "Industry-Specific Accounting Solutions", path: "/services/uk/industry" },
  ],
  Bangladesh: [
    { label: "Market Expansion & Setup Advisory", path: "/services/bd/market-expansion" },
    { label: "Regulatory & ISO Compliance", path: "/services/bd/regulatory" },
    { label: "Finance & Accounting", path: "/services/bd/finance" },
    { label: "Taxation", path: "/services/bd/taxation" },
    { label: "HR & Payroll Solutions", path: "/services/bd/hr-payroll" },
    { label: "Training, Mentorship & Capacity Building", path: "/services/bd/training" },
    { label: "Investment & Partnership Facilitation", path: "/services/bd/investment" },
    { label: "Technology and Automation", path: "/services/bd/technology" },
  ],
  KSA: [
    { label: "Market Expansion & Setup Advisory", path: "/services/ksa/market-expansion" },
    { label: "Regulatory & ISO Compliance", path: "/services/ksa/regulatory" },
    { label: "Finance & Accounting", path: "/services/ksa/finance" },
    { label: "Taxation", path: "/services/ksa/taxation" },
    { label: "HR & Payroll Solutions", path: "/services/ksa/hr-payroll" },
    { label: "Branding & Growth", path: "/services/ksa/branding" },
    { label: "Automation and Digital Transformation", path: "/services/ksa/automation" },
    { label: "Investment", path: "/services/ksa/investment" },
  ],
};

const resourceSections = {
  COMPANY: [
    { label: "About", path: "/about" },
    { label: "E-brochure", path: "/resource/e-brochure" },
    { label: "News & Events", path: "/resource/news-events" },
    { label: "Contact", path: "/contact" },
    { label: "Blogs", path: "/resource/blogs" },
  ],
  PUBLICATIONS: [
    { label: "UAE", path: "/publications/uae" },
    { label: "KSA", path: "/publications/ksa" },
    { label: "UK", path: "/publications/uk" },
    { label: "Bangladesh", path: "/publications/bangladesh" },
  ],
  LIBRARY: [
    { label: "UAE", path: "/library/uae" },
    { label: "KSA", path: "/library/ksa" },
    { label: "UK", path: "/library/uk" },
    { label: "Bangladesh", path: "/library/bangladesh" },
  ],
  FORMS: [
    { label: "UAE", path: "/forms/uae" },
    { label: "KSA", path: "/forms/ksa" },
    { label: "UK", path: "/forms/uk" },
    { label: "Bangladesh", path: "/forms/bangladesh" },
  ],
};

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
const [activeServiceRegion, setActiveServiceRegion] = useState("UAE");
  const [resourceOpen, setResourceOpen] = useState(false);
  const [mobileResourceOpen, setMobileResourceOpen] = useState(false);
  const resourceRef = useRef(null);
  const resourceTimeout = useRef(null);

  const servicesRef = useRef(null);
  const companyRef = useRef(null);
  const servicesTimeout = useRef(null);
  const companyTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (setter, timeout) => {
    clearTimeout(timeout.current);
    setter(true);
  };

  const handleLeave = (setter, timeout) => {
    timeout.current = setTimeout(() => setter(false), 150);
  };

  const textClass = scrolled
    ? "text-gray-700 hover:text-[#0d1e4a] hover:bg-gray-100"
    : "text-white/90 hover:text-white hover:bg-white/10";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            {scrolled
              ? <img src={logo2} className="h-16" alt="logo" />
              : <img src={logo1} className="h-14" alt="logo" />
            }
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Company Formation Mega Menu */}
            <div
              ref={companyRef}
              className="relative"
              onMouseEnter={() => handleEnter(setCompanyOpen, companyTimeout)}
              onMouseLeave={() => handleLeave(setCompanyOpen, companyTimeout)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass} ${companyOpen ? (scrolled ? "bg-gray-100 text-[#0d1e4a]" : "bg-white/10 text-white") : ""}`}>
                Company Formation
                <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              {/* Company Formation Dropdown — image cards */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-200  origin-top ${companyOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                style={{ background: "#0d1e4a", width: "1600px" }}
              >
                <div className="p-5">
                  {/* Top row — 4 cards */}
                  <div className="grid grid-cols-4  gap-3 mb-3">
                    {companyFormation.slice(0, 4).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setCompanyOpen(false)}
                        className="relative rounded-xl overflow-hidden group bg-amber-50 cursor-pointer block"
                        style={{ height: "250px" }}
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 px-2 py-2">
                          <span className="block text-white text  text-center bg-linear-to-r from-light-blue to-cyan-800 backdrop-blur-sm rounded-lg py-3  px-2 leading-tight">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom row — 1 card same size as above */}
                  <div className="grid grid-cols-4 gap-3">
                    {companyFormation.slice(4).map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setCompanyOpen(false)}
                        className="relative rounded-xl overflow-hidden group cursor-pointer block"
                        style={{ height: "250px" }}
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 px-2 py-2">
                          <span className="block text-white text  text-center bg-linear-to-r from-light-blue to-cyan-800 backdrop-blur-sm rounded-lg py-3  px-2 leading-tight">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Mega Menu */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => handleEnter(setServicesOpen, servicesTimeout)}
              onMouseLeave={() => handleLeave(setServicesOpen, servicesTimeout)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass} ${servicesOpen ? (scrolled ? "bg-gray-100 text-[#0d1e4a]" : "bg-white/10 text-white") : ""}`}>
                Services
                <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-200 origin-top ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                style={{ background: "#0d1e4a" }}
              >
                <div className="flex border-b border-white/10">
                  {Object.keys(services).map((region) => (
                    <button
                      key={region}
                      onMouseEnter={() => setActiveServiceRegion(region)}
                      className={`flex-1 py-3.5 text-sm font-semibold transition-colors duration-150 ${activeServiceRegion === region ? "text-white border-b-2 border-[#1a9fd4]" : "text-white/50 hover:text-white/80"}`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {services[activeServiceRegion].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#1a9fd4] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

             {/* About */}
            <Link
              to="/about"
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass}`}
            >
              About
            </Link>

            {/* Resource Mega Menu */}
            <div
              ref={resourceRef}
              className="static"
              onMouseEnter={() => handleEnter(setResourceOpen, resourceTimeout)}
              onMouseLeave={() => handleLeave(setResourceOpen, resourceTimeout)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass} ${resourceOpen ? (scrolled ? "bg-gray-100 text-[#0d1e4a]" : "bg-white/10 text-white") : ""}`}
              >
                Resource
                <svg
                  className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${resourceOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              <div
                className={`absolute mt-2 rounded-2xl overflow-hidden shadow-2xl transition-all duration-200 origin-top ${resourceOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
                style={{ background: "#0d1e4a", top: "100%", left: 0, right: 0 }}
              >
                <div className="p-6 grid grid-cols-4 gap-8">
                  {Object.entries(resourceSections).map(([section, links]) => (
                    <div key={section}>
                      <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3 pb-2 border-b border-white/10">
                        {section}
                      </h4>
                      <ul className="space-y-1">
                        {links.map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={() => setResourceOpen(false)}
                              className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-150 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#1a9fd4] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${textClass}`}
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              to="/cost-calculator"
              className={`ml-3 px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-200 ${scrolled ? "border-[#0d1e4a] text-[#0d1e4a] hover:bg-[#0d1e4a] hover:text-white" : "border-white text-white hover:bg-white hover:text-[#0d1e4a]"}`}
            >
              Cost Calculator
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${scrolled ? "text-[#0d1e4a] hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "#0d1e4a" }}
      >
        <div className="px-4 py-4 space-y-1">

          {/* Mobile Company Formation */}
          <div>
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Company Formation
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileCompanyOpen ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="grid grid-cols-2 gap-2 px-2 py-3">
                {companyFormation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="relative rounded-xl overflow-hidden group block"
                    style={{ height: "90px" }}
                  >
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1.5">
                      <span className="block text-white text-[9px] font-semibold text-center bg-[#1a9fd4]/85 backdrop-blur-sm rounded-md py-1 px-1 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px]" : "max-h-0"}`}>
              <div className="flex gap-2 px-4 py-2 overflow-x-auto">
                {Object.keys(services).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveServiceRegion(region)}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeServiceRegion === region ? "bg-[#1a9fd4] text-white" : "bg-white/10 text-white/60 hover:text-white"}`}
                  >
                    {region}
                  </button>
                ))}
              </div>
              <div className="px-4 pb-3 space-y-0.5">
                {services[activeServiceRegion].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

         {/* Mobile Resource */}
          <div>
            <button
              onClick={() => setMobileResourceOpen(!mobileResourceOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Resource
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileResourceOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileResourceOpen ? "max-h-[800px]" : "max-h-0"}`}>
              <div className="px-4 pb-3 grid grid-cols-2 gap-x-4 gap-y-3">
                {Object.entries(resourceSections).map(([section, links]) => (
                  <div key={section}>
                    <h4 className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">
                      {section}
                    </h4>
                    {links.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-2 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other mobile links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 pb-2">
            <Link
              to="/cost-calculator"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3 text-center rounded-lg text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-[#0d1e4a] transition-all duration-200"
            >
              Cost Calculator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}