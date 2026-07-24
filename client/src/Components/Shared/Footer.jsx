import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import img1 from '../../asstes/img_temp/logo1.webp'
import { Link } from "react-router";



const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/detempete",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/14612088/admin/dashboard/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/detempetelimited",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/DeTempeteHQ",
    label: "X",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@detempete",
    label: "YouTube",
  },
];
const footerColumns = [
  {
    title: "BUSINESS SETUP",
    links: [
      { label: "UAE", path: "/business-setup/uae" },
      { label: "UK", path: "/business-setup/uk" },
      { label: "KSA", path: "/business-setup/ksa" },
      { label: "USA", path: "/business-setup/usa" },
      { label: "Estonia", path: "/business-setup/estonia" },
      { label: "Bangladesh", path: "/business-setup/bd" },
    ],
  },
  {
    title: "PUBLICATIONS",
    links: [
      { label: "UAE", path: "/publications/uae" },
      { label: "KSA", path: "/publications/ksa" },
      { label: "UK", path: "/publications/uk" },
      { label: "Bangladesh", path: "/publications/bangladesh" },
    ],
  },
  {
    title: "LIBRARY",
    links: [
      { label: "UAE", path: "/library/uae" },
      { label: "KSA", path: "/library/ksa" },
      { label: "UK", path: "/library/uk" },
      { label: "Bangladesh", path: "/library/bangladesh" },
    ],
  },
  {
    title: "FORMS",
    links: [
      { label: "UAE", path: "/forms/uae" },
      { label: "KSA", path: "/forms/ksa" },
      { label: "UK", path: "/forms/uk" },
      { label: "Bangladesh", path: "/forms/bangladesh" },

    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", path: "/about" },
      { label: "E-Brochure", path: "https://drive.google.com/file/d/1XFM7Aa3OPQNjXvA47v6mwKX67uM6Oq6O/view?pli=1" },
      { label: "News & Events", path: "/news-events" },
      { label: "Blog", path: "/blogs" },
      { label: "Contact", path: "/contact" },

    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-conditions" },
    ],
  },
];


const Footer = () => {
  const officeCards = [
    {
      title: "UK ",
      phone: "+44 7831 848639",
      address: "115 London Road, Morden, SM4 5HP, UK",
    },
    {
      title: "BANGLADESH ",
      phone: "+88 0195 333 5155",
      address:
        "Bashati Xclusive, Flat - B4, House - 06, Road - 07, Niketon, Dhaka 1212, Bangladesh",
    },
    {
      title: "UAE ",
      phone: "+971 56 699 4282",
      address:
        "Office 601/31, Business Village Block B - Port Saeed - Deira - Dubai - United Arab Emirates",
    },
    {
      title: "ESTONIA ",
      phone: "+971 56 699 4282",
      address: "Volume 20/3, Tallinn 13516, Estonia",
    },
    {
      title: "KSA ",
      phone: "+971 56 699 4282",
      address:
        "Office # 303, Al Mohamdia Tower, Custodian of the Two Holy Mosques Road, Al Aqrabiyah City, Al Khobar, Ash Sharqiyah, Saudi Arabia",
    },
  ];


  return (
    <footer className="bg-[#081B57] text-white mt-24 sm:mt-32 lg:mt-40 relative">      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-5 pt-25">
        <div className="relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-top-20 w-full max-w-7xl -mt-16 lg:mt-0">
          <div className="bg-linear-to-r from-[#0A1B57] to-[#57D3EB] rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-light-blue transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_0_30px_rgba(74,196,222,0.35)]">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold max-w-3xl text-center lg:text-left">
              Sign up for our newsletter to get update information, news,
              insights or promotions.
            </h2>

            <div className="w-full max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-black px-5 py-3 rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-light-blue focus:scale-[1.02]"
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
            src={img1}
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
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">
                {column.title}
              </h3>
              <div className="text-gray-300 text-sm sm:text-base">
                {column.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block w-full sm:w-auto mx-auto sm:mx-0 py-1 transition-all duration-300 hover:text-light-blue hover:translate-x-0 sm:hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-14 sm:mt-20">
          {officeCards.map((office, index) => (
            <div
              key={index}
              className="bg-[#2D3C75] rounded-xl p-6 transition-all duration-300 hover:bg-[#374a8f] hover:-translate-y-1 hover:shadow-lg hover:shadow-light-blue/10"
            >
              <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5">
                {office.title}
              </h3>

              <div className="flex gap-3 text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base">
                <IoCallOutline className="text-light-blue mt-1 shrink-0" />
                <span>{office.phone}</span>
              </div>

              <div className="flex gap-3 text-gray-300 text-sm sm:text-base">
                {/* <IoLocationOutline className="text-light-blue mt-1 text-3xl sm:text-4xl shrink-0" /> */}
                <span>{office.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 border-t border-gray-700 pt-10">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#2D3C75] flex items-center justify-center transition-all duration-300 hover:bg-light-blue hover:scale-110 hover:-translate-y-1 hover:rotate-6"
            >
              <Icon />
            </a>
          ))}
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