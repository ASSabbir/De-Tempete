

const complianceChecks = [
  {
    title: 'VAT scheme validation',
    description: 'Standard, Flat Rate, or Cash Accounting confirmed against your actual setup.',
  },
  {
    title: 'HMRC MTD API connection test',
    description: 'Verified live before go live, not assumed.',
  },
  {
    title: 'Companies House filing format check',
    description: 'Compatibility confirmed where applicable.',
  },
];
import logo from '../../asstes/img_temp/logo.webp'
import SharedFullButton from './SharedFullButton';
import { motion } from "framer-motion";


const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AccountingSoftwareImplementation = ({features}) => {
  return (
    <section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-[#081B57] mt-3 leading-tight">
        Accounting Software Implementation Service
      </h2>

      <p className="mt-6 text-base text-gray-600 leading-relaxed">
        From choosing the right platform to getting your team fully trained on it —
        we handle the entire setup so your accounting software works for you from day one.
      </p>
    </div>

    {/* Feature Grid - Signature Chessboard Design */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feature, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: (index % 3) * 0.12,
              ease: "easeOut",
            }}
            className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
              isDark ? "bg-light-blue" : "bg-white"
            }`}
          >
            {/* Logo */}
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                isDark ? "bg-white/15" : "bg-light-blue/20"
              }`}
            >
              <img
                src={logo}
                alt=""
                className={`w-8 h-8 object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
  );
};

export default AccountingSoftwareImplementation;