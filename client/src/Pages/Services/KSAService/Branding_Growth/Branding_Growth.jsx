import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
import img1 from '../../../../asstes/img_temp/servics/KSA/Financial-Reporting-Document-KSA.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import { useState } from "react";

const handleTags = [
  "Brand Positioning Support",
  "Corporate Identity Development",
  "Digital Presence Strategy",
  "Marketing Campaign Support",
  "Business Visibility Enhancement",
  "Content & Creative Coordination",
];

const marketingItems = [
  {
    title: "Brand Strategy & Identity",
    desc: "Build a strong, recognizable brand with a clear positioning, compelling messaging, and a consistent visual identity that resonates with your target audience.",
  },
  {
    title: "Digital Marketing Roadmap",
    desc: "Develop a data-driven marketing strategy that aligns with your business objectives, identifies growth opportunities, and maximizes return on investment.",
  },
  {
    title: "Social Media Campaigns",
    desc: "Plan, execute, and optimize engaging social media campaigns that increase brand awareness, audience engagement, and lead generation across key platforms.",
  },
  {
    title: "Content Creation & Copywriting",
    desc: "Create high-quality marketing content, website copy, blogs, and promotional materials designed to educate, engage, and convert your audience.",
  },
  {
    title: "Website & Funnel Optimization",
    desc: "Improve user experience, conversion rates, and customer journeys through website optimization, landing page enhancements, and high-performing sales funnels.",
  },
];

const photoshootCards = [
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
    title: "Strategic Brand Positioning",
    desc: "Helping businesses build stronger and more professional brand identities.",
  },
  {
    title: "Growth-Focused Approach",
    desc: "Supporting long-term visibility and sustainable business expansion.",
  },
  {
    title: "Digital Presence Understanding",
    desc: "Improving online communication and market reach.",
  },
  {
    title: "Structured Brand Development",
    desc: "Creating consistent branding across business operations.",
  },
  {
    title: "Scalable Business Support",
    desc: "Flexible branding solutions for startups, SMEs, and growing enterprises.",
  },
  {
    title: "Long-Term Market Growth",
    desc: "Building branding strategies that support business stability and expansion.",
  },
];

const Branding_Growth = () => {
  const [expandedItem, setExpandedItem] = useState(null);
      const toggleAccordion = (idx) =>
          setExpandedItem(expandedItem === idx ? null : idx);
  return (
    <div className="w-full">
      <HeroSection
        bgImage={bg}
        alt="Branding & Growth KSA"
        heading={
          <>
            Strengthen Your Brand &<br />
            <span className="text-light-blue">
              Business Growth In Saudi Arabia
            </span>
          </>
        }
        description={<><span className="font-bold italic">de tempête</span> provides branding and growth solutions in Saudi Arabia, helping businesses improve market visibility, strengthen brand positioning, and support long-term business expansion.</>}
      />

      <SecondSection></SecondSection>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">
              Brand Development &{" "}
              <span className="font-normal">
                Business Growth
                <br />
                Support
              </span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Building a strong business presence requires more than visibility.
              Businesses in Saudi Arabia need clear brand positioning,
              consistent communication, and structured growth strategies to
              remain competitive in evolving markets.
            </p>
            <p className="mt-3 text-gray-500 leading-7">
              <span className="font-semibold text-gray-700 italic">de tempête</span>{" "}
              supports businesses across Saudi Arabia with branding and growth
              services designed to strengthen corporate identity, improve market
              presence, and support sustainable business growth.
            </p>
          </div>
          <img
            src={img1}
            alt="Brand Development & Business Growth Support"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="py-20 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What We Handle For You
          </h2>
          <div className="w-16 h-0.5 bg-light-blue mx-auto mb-12" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {handleTags.map((t, i) => (
              <div
                key={i}
                className="bg-[#37456B] rounded-lg py-12 px-4 text-center text-white text-base font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-light text-[#16244b]">
              <span className="font-bold">Marketing Strategy</span>, Digital
              <br />
              Presence & Social Media
              
              Campaigns
            </h2>
            <p className="mt-6 text-gray-500 font-semibold">
              Build a Strong Digital Footprint That Converts
            </p>
            <p className="mt-2 text-gray-500 text-base">
              We design marketing strategies that increase brand awareness,
              strengthen trust, and generate measurable results across digital
              and social platforms.
            </p>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
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

      {/* Photoshoot & Video Production */}
      <section className="py-24 bg-[#16244B]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              Photoshoot & Video Production{" "}
              <span className="font-normal">Support</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Premium Visual Content That Elevates Your Brand
            </p>
            <p className="mt-2 text-gray-400 text-base max-w-2xl mx-auto">
              Strong visuals build trust, especially in the Saudi Arabia
 fast-paced,
              competitive market. We help you plan, execute, and deliver premium
              photoshoots and videos that represent your brand with style and
              clarity.
            </p>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {photoshootCards.map((c, i) => (
              <div key={i} className="bg-[#37456B] rounded-2xl p-8">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-5">
                  <img src={logo} alt="" />
                </div>
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-gray-300 text-base leading-6">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl  text-[#16244b]">
              Why Choose <span className="font-bold italic">de tempête</span>{" "}
              for Branding & Growth Services
            </h2>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-base font-bold text-[#16244b] mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-base leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Start Building A<br />
            Stronger Brand
            <br />
            Presence <span className="font-bold">Today</span>
          </>
        }
        subheading={<><span className="italic font-black">de tempête</span> helps businesses in Saudi Arabia improve brand visibility, market positioning, and long-term business growth.</>}
        commitmentItems={[
          "Brand positioning support",
          "Digital visibility strategies",
          "Market growth coordination",
          "Business expansion support",
        ]}
      />

      {/* <RecentBlogs blogs={blogPosts} /> */}
    </div>
  );
};

export default Branding_Growth;
