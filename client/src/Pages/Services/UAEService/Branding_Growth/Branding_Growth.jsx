// File: Branding_Growth.jsx
import { useState, useEffect } from "react";
import {

  ChevronDown,
  Building2,
  LineChart,

  Blocks,
  BookOpenText,
  Megaphone,
  HandCoins,
  ShoppingBag,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";

import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";

import { motion } from "framer-motion";


import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import img1 from '../../../../asstes/img_temp/servics/BG-Build-Strong-Strategic-Alliances-Partnerships-Networking-Support_-1.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import ServiceGrid from "../../../../Components/Shared/Servicegrid";


const sectors = [
  {
    Icon: Building2,
    title: "Real Estate",
    description:
      "Brand positioning and marketing strategies tailored to UAE property developers and agencies.",
  },
  {
    Icon: LineChart,
    title: "Fintech",
    description:
      "Trust-driven branding and market positioning for finance, payments, and digital banking solutions.",
  },
  {
    Icon: Blocks,
    title: "Web3 & Blockchain",
    description:
      "Clear narrative building and growth strategy for blockchain, tokenized assets, and Web3 platforms.",
  },
  {
    Icon: BookOpenText,
    title: "Modest Fashion",
    description:
      "Entity development, product positioning, and campaign direction for modestwear brands.",
  },
  {
    Icon: Megaphone,
    title: "Lifestyle & Consumer Brands",
    description:
      "Market-fit insights, digital presence planning, and expansion strategies for lifestyle products.",
  },
  {
    Icon: HandCoins,
    title: "Hospitality & F&B",
    description:
      "Brand identity, menu storytelling, and launch marketing for restaurants, cafes, and hotels.",
  },
  {
    Icon: ShoppingBag,
    title: "E-commerce & D2C",
    description:
      "Conversion-focused online branding and digital optimization for scalable D2C businesses.",
  },
  {
    Icon: Sparkles,
    title: "Beauty & Wellness",
    description:
      "Brand differentiation, creator partnerships, and content guidance for clinics and beauty brands.",
  },
  {
    Icon: Briefcase,
    title: "Professional Services",
    description:
      "Strong brand positioning and digital visibility strategies for consultants and service-led businesses.",
  },
];

const marketingItems = [
  {
    title: "Brand Strategy & Identity",
    desc: "Brand narrative, tone of voice, value positioning & visual direction.",
  },
  {
    title: "Digital Marketing Roadmap",
    desc: "SEO, content strategy, performance planning & channel optimization.",
  },
  {
    title: "Social Media Campaigns",
    desc: "Concept creation, campaign management & ad performance tracking.",
  },
  {
    title: "Content Creation & Copywriting",
    desc: "High-conversion messaging tailored to UAE markets.",
  },
  {
    title: "Website & Funnel Optimization",
    desc: "User experience improvements that boost conversions and lead quality.",
  },
];

const photoCards = [
  {
    title: "Brand Photoshoots",
    desc: "Professional Shoots For Corporate Teams, Founders, Products, And Spaces.",
  },
  {
    title: "Video Production",
    desc: "Brand Films, Corporate Profile Videos, Interviews & Launch Content.",
  },
  {
    title: "Creative Direction",
    desc: "Concept Creation, Moodboarding & Visual Storytelling Guidance.",
  },
  {
    title: "Location & Crew Management",
    desc: "Models, Studios, Permits, Stylists & Production Planning.",
  },
  {
    title: "Post-Production",
    desc: "Editing, Color Grading & Final Delivery In Multiple Formats.",
  },
  {
    title: "Campaign Asset Development",
    desc: "Concept Creation, Moodboarding & Visual Storytelling Guidance.",
  },
];

const whyChoose = [
  {
    title: "Market-Driven Strategies",
    desc: "Leverage UAE-specific insights to create branding and growth plans that deliver measurable results.",
  },
  {
    title: "Multi-Sector Expertise",
    desc: "Guidance across digital, tech, real estate, lifestyle, and consumer brands to meet industry-specific needs.",
  },
  {
    title: "Premium Campaign Execution",
    desc: "Design and execute high-quality branding, marketing, and digital campaigns that elevate your brand.",
  },
  {
    title: "Cross-Border Expansion",
    desc: "Support for regional and international growth with strategic planning and market entry advisory.",
  },
  {
    title: "Strategic Partnerships",
    desc: "Build strong networks and alliances to unlock new opportunities and collaborations.",
  },
  {
    title: "Scalable Solutions",
    desc: "Flexible growth strategies designed for startups, SMEs, and enterprise-level brands alike.",
  },
];

const Branding_Growth = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);
  const id = 'services-uae-branding'

  return (
    <div className="w-full">
     
      <HeroSection
       id={id}
        bgImage={bgimg}
        alt="Branding & Growth"
        heading={
          <>
            Build. Grow. Shine.
            <br />
            <span className="text-light-blue">
              Expand Your Reach And Make
              <br />
              An Impact
            </span>
          </>
        }
        description="We help UAE businesses elevate their brand, expand strategically, and reach the right audience. From networking support to digital campaigns and content production, our end-to-end Branding & Growth solutions ensure your business thrives in a competitive market."
      />

      <SecondSection></SecondSection>
      {/* Strategic Alliances */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Build Strong{" "}
              <span className="font-light">
                Strategic Alliances, Partnerships & Networking Support
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Business growth is often about who you know as much as what you
              do. We help UAE companies forge meaningful partnerships, create
              strategic alliances, and leverage networking opportunities that
              open doors to new markets and collaborations.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Our team handles:
            </h4>
            <div className="space-y-3">
              {[
                "Alliance Identification & Analysis",
                "Partnership Structuring & Agreements",
                "Networking Event Support",
                "Cross-Industry Collaboration",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={img1}
            alt="Build Strong Strategic Alliances"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
      <ServiceGrid description={<div className="text-center">Industry-Specific Expertise That Drives Brand Success</div>} heading={<div className="text-center">Sector-Focused <span className="font-bold">Advisory</span></div>} services={sectors}></ServiceGrid>

      {/* Sector-Focused Advisory */}
      

      {/* Marketing Strategy Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Marketing Strategy, Digital{" "}
              <span className="block">Presence & Social Media Campaigns</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base font-semibold">
              Build a Strong Digital Footprint That Converts
            </p>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-base">
              We design marketing strategies that increase brand awareness,
              strengthen trust, and generate measurable results across digital
              and social platforms.
            </p>
          </div>

          <div className="space-y-4">
            {marketingItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md  flex items-center justify-center text-white text-base">
                      <img src={logo} alt="" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-base">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photoshoot & Video */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white">
              Photoshoot & Video Production{" "}
              <span className="font-normal">Support</span>
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              Premium Visual Content That Elevates Your Brand Strong visuals
              build trust, especially in the UAE's fast-paced, competitive
              market. We help you plan, execute, and deliver premium photoshoots
              and videos that represent your brand with style and clarity.
            </p>
            <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {photoCards.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-12 h-12 bg-white p-2 rounded-xl flex items-center justify-center mb-5">
                  <img src={logo} alt="" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-base leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
  <div className="max-w-[1600px] mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-[#16244b]">
        Why Choose Our{" "}
        <span className="font-bold">Branding & Growth Services?</span>
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {whyChoose.map((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <motion.div
            key={index}
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
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {item.desc}
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
            Start Expanding Your
            <br />
            Brand <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={[
          "Free initial consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />


    </div>
  );
};

export default Branding_Growth;
