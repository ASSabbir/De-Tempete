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
    <footer className="bg-[#081B57] text-white mt-40 relative">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-full max-w-7xl">
          <div className="bg-linear-to-r from-[#0A1B57] to-[#57D3EB] rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border border-cyan-400">
            <h2 className="text-2xl md:text-4xl font-bold max-w-3xl">
              Sign up for our newsletter to get update information, news,
              insights or promotions.
            </h2>

            <div className="w-full max-w-sm ">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-black px-5 py-3 rounded"
              />

              <button className="w-full bg-[#081B57] py-3 rounded flex items-center justify-center gap-2 hover:bg-[#10297c] duration-300">
                <MdEmail size={20} />
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-52 pb-10">
        {/* Logo */}
        <div className="text-center">
          <img
            src="/src/asstes/images/logo1.webp"
            alt="Logo"
            className="h-16 mx-auto mb-6"
          />

          <p className="text-gray-300">
            Global Accounting Outsourcing and Business Advisory firm with
            experienced and certified professionals.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-20">
          <div>
            <h3 className="font-bold mb-5">BUSINESS SETUP</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">UAE</button>
              <button className="block hover:text-cyan-300">UK</button>
              <button className="block hover:text-cyan-300">KSA</button>
              <button className="block hover:text-cyan-300">USA</button>
              <button className="block hover:text-cyan-300">Bangladesh</button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">PUBLICATIONS</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">UAE</button>
              <button className="block hover:text-cyan-300">KSA</button>
              <button className="block hover:text-cyan-300">UK</button>
              <button className="block hover:text-cyan-300">Bangladesh</button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">LIBRARY</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">UAE</button>
              <button className="block hover:text-cyan-300">KSA</button>
              <button className="block hover:text-cyan-300">UK</button>
              <button className="block hover:text-cyan-300">Bangladesh</button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">FORMS</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">UAE</button>
              <button className="block hover:text-cyan-300">KSA</button>
              <button className="block hover:text-cyan-300">UK</button>
              <button className="block hover:text-cyan-300">Bangladesh</button>
              <button className="block hover:text-cyan-300">
                Regulatory Updates
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">COMPANY</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">About</button>
              <button className="block hover:text-cyan-300">E-Brochure</button>
              <button className="block hover:text-cyan-300">
                News & Events
              </button>
              <button className="block hover:text-cyan-300">Blog</button>
              <button className="block hover:text-cyan-300">Contact</button>
              <button className="block hover:text-cyan-300">
                Career with Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">LEGAL</h3>
            <div className=" text-gray-300">
              <button className="block hover:text-cyan-300">
                Privacy Policy
              </button>
              <button className="block hover:text-cyan-300">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-20">
          {officeCards.map((office, index) => (
            <div key={index} className="bg-[#2D3C75] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-5">{office.title}</h3>

              <div className="flex gap-3 text-gray-300 mb-5">
                <IoCallOutline className="text-cyan-300 mt-1" />
                <span>{office.phone}</span>
              </div>

              <div className="flex gap-3 text-gray-300">
                <IoLocationOutline className="text-cyan-300 mt-1 text-4xl" />
                <span>{office.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-10 border-t border-gray-700 pt-10">
          {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, index) => (
              <button
                key={index}
                className="w-12 h-12 rounded-full bg-[#2D3C75] flex items-center justify-center hover:bg-cyan-400 duration-300"
              >
                <Icon />
              </button>
            ),
          )}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 pt-4">
          Copyright © 2026 <span className="italic">de tempête</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
