
import { FaCheckCircle } from "react-icons/fa";
import {
  LuTrendingUp,
  LuBriefcase,
  LuHandshake,
  LuChartNoAxesCombined,
  LuMessageSquare,
  LuTarget,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { motion } from "framer-motion";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";


const handleCards = [
  { icon: LuTrendingUp, title: "Investment opportunity support" },
  { icon: LuBriefcase, title: "Business expansion guidance" },
  { icon: LuHandshake, title: "Partnership coordination" },
  { icon: LuChartNoAxesCombined, title: "Market growth support" },
  { icon: LuMessageSquare, title: "Investor communication support" },
  { icon: LuTarget, title: "Business positioning assistance" },
];

const investmentPlanningPoints = [
  "Investment planning support",
  "Market opportunity assessment",
  "Business expansion guidance",
  "Growth strategy assistance",
  "Market positioning support",
  "Opportunity evaluation assistance",
];

const strategicPartnershipPoints = [
  "Business partnership support",
  "Investor coordination assistance",
  "Expansion planning support",
  "Market entry guidance",
  "Business collaboration support",
  "Growth-focused operational assistance",
];

const gains = [
  "Improved Market Opportunities",
  "Stronger Business Positioning",
  "Better Expansion Readiness",
  "Strategic Partnership Support",
  "Growth-Focused Business Planning",
  "Enhanced Market Visibility",
];

const whyChoose = [
  {
    title: "KSA Market Understanding",
    desc: "Supporting businesses with localized market and expansion insights.",
  },
  {
    title: "Growth-Focused Approach",
    desc: "Helping businesses identify stronger investment and growth opportunities.",
  },
  {
    title: "Strategic Business Support",
    desc: "Supporting long-term expansion and partnership development.",
  },
  {
    title: "Structured Expansion Planning",
    desc: "Improving operational readiness for market growth.",
  },
  {
    title: "Scalable Business Solutions",
    desc: "Flexible support for startups, SMEs, and expanding enterprises.",
  },
  {
    title: "Long-Term Business Growth",
    desc: "Building investment strategies aligned with sustainable expansion goals.",
  },
];
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/KSA/Accounting-Bookkeeping-Services-in-Saudi-Arabia.webp'
import img2 from '../../../../asstes/img_temp/servics/KSA/Branch-of-Foreign-Company-1.webp'
import img3 from '../../../../asstes/img_temp/servics/KSA/445569.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";

const Investment = () => {
  const id = 'services-ksa-inverstment'
  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bg}
        alt="Investment KSA"
        heading="Invest With Confidence."
        description={
          <>
            <span className="block text-light-blue font-semibold text-xl md:text-2xl mb-4">
              Accelerate Your Investment & Business Growth in Saudi Arabia
            </span>
            <span className="font-semibold text-white italic">de tempête</span>{" "}
            provides investment support services in Saudi Arabia, helping
            businesses explore market opportunities, strengthen partnerships,
            and support long-term business expansion.
          </>
        }
        ctaText="Get Expert Investment Advice"
      />

      <SecondSection></SecondSection>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img1}
            alt="Investment & Business Growth Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Investment & Business
              <br />
              <span className="font-normal">Growth Support</span>
            </h2>
            <p className="mt-5 text-gray-500 text-justify leading-7">
              Saudi Arabia continues to create strong opportunities for
              businesses seeking expansion, partnerships, and long-term market
              growth. Businesses entering or expanding within the Kingdom
              require structured guidance, market understanding, and strategic
              support to navigate opportunities effectively.
            </p>
            <p className="mt-3 text-gray-500 text-justify leading-7">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses across Saudi Arabia with investment and
              business growth solutions designed to improve market positioning,
              strengthen business partnerships, and support sustainable
              expansion.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              What We Handle For You
            </h2>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-x-10 gap-y-12 max-w-4xl mx-auto">
            {handleCards.map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14  rounded-xl flex items-center justify-center shrink-0">
                  <img src={logo} alt="" />
                </div>
                <h3 className="text-[#16244b] font-semibold text-base">
                  {c.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Investment Planning &<br />
              <span className="font-normal">Market Opportunity Support</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Identifying the right market opportunities is essential for
              building sustainable business growth and stronger investment
              outcomes.
            </p>
            <p className="mt-3 text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses in Saudi Arabia with investment planning and
              market opportunity services designed to improve expansion
              readiness and support strategic business growth.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Our Services Include
            </p>
            <div className="space-y-3 mt-6">
              {investmentPlanningPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img3}
            alt="Investment Planning & Market Opportunity Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={img2}
            alt="Strategic Partnership & Business Expansion Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Strategic Partnership &<br />
              <span className="font-normal">Business Expansion Support</span>
            </h2>
            <p className="mt-5 text-gray-500">
              Strong partnerships and structured expansion strategies help
              businesses improve market reach and strengthen long-term growth
              potential.
            </p>
            <p className="mt-3 text-gray-500">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              assists businesses in Saudi Arabia with partnership support and
              expansion-focused solutions designed to improve business
              collaboration and support operational growth.
            </p>
            <p className="mt-3 font-semibold text-gray-700">
              Our Services Include
            </p>
            <div className="space-y-3 mt-6">
              {strategicPartnershipPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">What You Gain?</h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-3 gap-6">
            {gains.map((g, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg flex justify-center items-center h-20 px-4 text-white font-medium"
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Why Choose Our{" "}
              <span className="font-normal">Investment Advisory</span>
            </h2>

            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((f, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const isDark = (row + col) % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: (i % 3) * 0.12,
                    ease: "easeOut",
                  }}
                  className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${isDark ? "bg-light-blue" : "bg-white"
                    }`}
                >
                  {/* Logo */}
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center ${isDark ? "bg-white/15" : "bg-light-blue/20"
                      }`}
                  >
                    <img
                      src={logo}
                      alt=""
                      className={`w-8 h-8 object-contain ${isDark ? "brightness-0 invert" : ""
                        }`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
                    {f.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed text-justify ${isDark ? "text-gray-700" : "text-gray-500"
                      }`}
                  >
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationCTA
        id={id}
        heading={
          <>
            Start Your KSA
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your KSA presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />


    </div>
  );
};

export default Investment;
