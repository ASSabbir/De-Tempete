import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const officeCards = Array(8).fill({
    title: "UAE OFFICE",
    phone: "+971 56 699 4282",
    address:
      "Office 601/31, Business Village Block B - Port Saeed - Deira - Dubai - UAE",
  });

  return (
<footer className="bg-[#081B57] text-white mt-24 sm:mt-32 lg:mt-40 relative">      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-5 pt-25">
        <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-top-20 w-full max-w-7xl -mt-16 lg:mt-0">
          <div className="bg-linear-to-r from-[#0A1B57] to-[#57D3EB] rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-cyan-400 transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_0_30px_rgba(74,196,222,0.35)]">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold max-w-3xl text-center lg:text-left">
              Sign up for our newsletter to get update information, news,
              insights or promotions.
            </h2>

            <div className="w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-black px-5 py-3 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:scale-[1.02]"
              />

              <button className="w-full bg-[#081B57] py-3 rounded flex items-center justify-center gap-2 mt-3 lg:mt-2 transition-all duration-300 hover:bg-[#10297c] hover:scale-[1.03] active:scale-[0.98] group">
                <MdEmail
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-10 sm:pt-24 lg:pt-12 pb-10">
        {/* Logo */}
        <div className="text-center">
          <img
            src="/src/asstes/images/logo1.webp"
            alt="Logo"
            className="h-12 sm:h-16 mx-auto mb-6 transition-transform duration-300 hover:scale-105"
          />

          <p className="text-gray-300 text-sm sm:text-base px-2">
            Global Accounting Outsourcing and Business Advisory firm with
            experienced and certified professionals.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mt-14 sm:mt-20 text-center sm:text-left">
          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              BUSINESS SETUP
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UAE
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UK
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                KSA
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                USA
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Bangladesh
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              PUBLICATIONS
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UAE
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                KSA
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UK
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Bangladesh
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              LIBRARY
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UAE
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                KSA
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UK
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Bangladesh
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              FORMS
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UAE
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                KSA
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                UK
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Bangladesh
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Regulatory Updates
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              COMPANY
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                About
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                E-Brochure
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                News & Events
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Blog
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Contact
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Career with Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
              LEGAL
            </h3>
            <div className="text-gray-300 text-sm sm:text-base">
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Privacy Policy
              </button>
              <button className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-0 sm:hover:translate-x-1">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-14 sm:mt-20">
          {officeCards.map((office, index) => (
            <div
              key={index}
              className="bg-[#2D3C75] rounded-xl p-6 transition-all duration-300 hover:bg-[#374a8f] hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5">
                {office.title}
              </h3>

              <div className="flex gap-3 text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base">
                <IoCallOutline className="text-cyan-300 mt-1 shrink-0" />
                <span>{office.phone}</span>
              </div>

              <div className="flex gap-3 text-gray-300 text-sm sm:text-base">
                <IoLocationOutline className="text-cyan-300 mt-1 text-3xl sm:text-4xl shrink-0" />
                <span>{office.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 border-t border-gray-700 pt-10">
          {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, index) => (
              <button
                key={index}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2D3C75] flex items-center justify-center transition-all duration-300 hover:bg-cyan-400 hover:scale-110 hover:-translate-y-1 hover:rotate-6"
              >
                <Icon />
              </button>
            ),
          )}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 pt-4 text-sm sm:text-base">
          Copyright © 2026 <span className="italic">de tempête</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;