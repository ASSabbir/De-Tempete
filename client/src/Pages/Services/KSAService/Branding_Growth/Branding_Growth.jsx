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

const handleTags = [
  "Brand Positioning Support",
  "Corporate Identity Development",
  "Digital Presence Strategy",
  "Marketing Campaign Support",
  "Business Visibility Enhancement",
  "Content & Creative Coordination",
];

const marketingItems = [
  "Brand Strategy & Identity",
  "Digital Marketing Roadmap",
  "Social Media Campaigns",
  "Content Creation & Copywriting",
  "Website & Funnel Optimization",
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
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Branding & Growth KSA"
        heading={
          <>
            Strengthen Your Brand &<br />
            <span className="text-light-blue">
              Business Growth In Saudi Arabia
            </span>
          </>
        }
        description="de tempête provides branding and growth solutions in Saudi Arabia, helping businesses improve market visibility, strengthen brand positioning, and support long-term business expansion."
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 1010,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 4, label: "Awards Received" },
        ]}
      />

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
              <span className="font-semibold text-gray-700">de tempête</span>{" "}
              supports businesses across Saudi Arabia with branding and growth
              services designed to strengthen corporate identity, improve market
              presence, and support sustainable business growth.
            </p>
          </div>
          <img
            src="/src/asstes/img_temp/servics/KSA/freepik__create-image-for-twhy-business-need-virtual-cfo-se__20677.webp"
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
                className="bg-[#37456B] rounded-lg py-4 px-4 text-center text-white text-sm font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Strategy Accordion */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-light text-[#16244b]">
              <span className="font-bold">Marketing Strategy</span>, Digital
              <br />
              Presence & Social Media
              <br />
              Campaigns
            </h2>
            <p className="mt-6 text-gray-500 font-semibold">
              Build a Strong Digital Footprint That Converts
            </p>
            <p className="mt-2 text-gray-500 text-sm">
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
                <button className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="flex items-center gap-3 text-[#16244b] font-semibold text-sm">
                    <span className="text-light-blue">◆</span>
                    {item}
                  </span>
                  <ChevronDown size={18} className="text-gray-500" />
                </button>
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
            <p className="mt-2 text-gray-400 text-sm max-w-2xl mx-auto">
              Strong visuals build trust, especially in the UAE's fast-paced,
              competitive market. We help you plan, execute, and deliver premium
              photoshoots and videos that represent your brand with style and
              clarity.
            </p>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {photoshootCards.map((c, i) => (
              <div key={i} className="bg-[#37456B] rounded-2xl p-8">
                <div className="w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center mb-5">
                  <span className="text-light-blue text-xl">◆</span>
                </div>
                <h3 className="text-white font-bold mb-2">{c.title}</h3>
                <p className="text-gray-300 text-sm leading-6">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Why Choose <span className="font-normal italic">de tempête</span>{" "}
              for Branding & Growth Services
            </h2>
            <div className="w-16 h-0.5 bg-light-blue mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#16244b] mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
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
        subheading="de tempête helps businesses in Saudi Arabia improve brand visibility, market positioning, and long-term business growth."
        commitmentItems={[
          "Brand positioning support",
          "Digital visibility strategies",
          "Market growth coordination",
          "Business expansion support",
        ]}
      />

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Branding_Growth;
