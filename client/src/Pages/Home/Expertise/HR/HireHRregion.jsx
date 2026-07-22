import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import uae from '../../../../asstes/img_temp/Contact/323301.webp'
import ksa from '../../../../asstes/img_temp/Contact/5111777.webp'
import bd from '../../../../asstes/img_temp/Contact/8362826.webp'
import uk from '../../../../asstes/img_temp/Contact/197374.webp'
import SharedButton from '../../../../Components/Shared/SharedFullButton';
const regions = [
  {
    id: "uae",
    tab: "UAE (United Arab Emirates)",
    flag: uae,
    shortName: "UAE",
    description:
      "Manage your HR and payroll operations in the UAE with full compliance to WPS and labor laws. We ensure accurate payroll processing, employee documentation, and benefit management. Our solutions help businesses stay compliant while maintaining efficient workforce operations.",
    path:'/services/uae/hr-payroll'
  },
  {
    id: "ksa",
    tab: "KSA (Saudi Arabia)",
    flag: ksa,
    shortName: "KSA",
    description:
      "Streamline HR and payroll in Saudi Arabia with systems aligned to GOSI, Qiwa, and local regulations. We handle payroll processing, workforce documentation, and compliance requirements. Our services ensure smooth operations while reducing administrative and legal risks.",
      path:'/services/ksa/hr-payroll'
   
  },
  {
    id: "bd",
    tab: "Bangladesh",
    flag: bd,
    shortName: "Bangladesh",
    description:
      "Manage HR and payroll in Bangladesh with solutions aligned to local labor laws, tax regulations, and compliance requirements. We ensure accurate salary processing, employee record management, and smooth statutory compliance for hassle-free operations.",
    path:'/services/bd/hr-payroll'
  },
  {
    id: "uk",
    tab: "United Kingdom (UK)",
    flag: uk,
    shortName: "UK",
    description:
      "Manage HR and payroll in the UK with systems aligned to HMRC and employment regulations. From payroll processing to compliance, we ensure accuracy, efficiency, and risk-free operations.",
    path:'/'
  },
];

export default function HireHRregion() {
  const [active, setActive] = useState("uae");

  const current = regions.find((r) => r.id === active);

  return (
    <section className="bg-[#f4f6fb] w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0d1e4a] font-normal mb-4">
           HR & Payroll <span className="font-extrabold">In Your Region</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Delivering compliant and efficient HR solutions tailored to your local workforce requirements.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-5 mb-6  overflow-hidden    ">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`flex-1 min-w-[140px] rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer 
                ${active === r.id
                  ? "bg-[#0d1e4a] text-white"
                  : "bg-white text-gray-500 hover:text-[#0d1e4a] hover:bg-gray-50"
                }`}
            >
              {r.tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 flex flex-col items-center text-center gap-5"
          >
            {/* Flag */}
            
            <img src={current.flag} alt="" className="w-22" />

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#0d1e4a] font-normal">
              HR & Payroll Services In{" "}
              <span className="font-extrabold">{current.shortName}</span>
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-3xl">
              {current.description}
            </p>

            {/* Focus Areas */}
            <div
              className="w-full rounded-xl flex justify-center p-6 sm:p-8 text-left mt-2"
             
            >
              <SharedButton text={`Get a Free HR Consultation in ${current.shortName}`} path={current.path}></SharedButton>
              
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}