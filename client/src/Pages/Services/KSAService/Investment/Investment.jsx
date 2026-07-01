// Pages/Services/KSAService/Investment/Investment.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import {
  LuTrendingUp,
  LuBriefcase,
  LuHandshake,
  LuChartNoAxesCombined,
  LuMessageSquare,
  LuTarget
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

const handleCards = [
  { icon: LuTrendingUp, title: "Investment opportunity support" },
  { icon: LuBriefcase, title: "Business expansion guidance" },
  { icon: LuHandshake, title: "Partnership coordination" },
  { icon: LuChartNoAxesCombined, title: "Market growth support" },
  { icon: LuMessageSquare, title: "Investor communication support" },
  { icon: LuTarget, title: "Business positioning assistance" },
];

const investmentPlanningPoints = ["Investment planning support", "Market opportunity assessment", "Business expansion guidance", "Growth strategy assistance", "Market positioning support", "Opportunity evaluation assistance"];

const strategicPartnershipPoints = ["Business partnership support", "Investor coordination assistance", "Expansion planning support", "Market entry guidance", "Business collaboration support", "Growth-focused operational assistance"];

const gains = ["Improved Market Opportunities", "Stronger Business Positioning", "Better Expansion Readiness", "Strategic Partnership Support", "Growth-Focused Business Planning", "Enhanced Market Visibility"];

const whyChoose = [
  { title: "KSA Market Understanding", desc: "Supporting businesses with localized market and expansion insights." },
  { title: "Growth-Focused Approach", desc: "Helping businesses identify stronger investment and growth opportunities." },
  { title: "Strategic Business Support", desc: "Supporting long-term expansion and partnership development." },
  { title: "Structured Expansion Planning", desc: "Improving operational readiness for market growth." },
  { title: "Scalable Business Solutions", desc: "Flexible support for startups, SMEs, and expanding enterprises." },
  { title: "Long-Term Business Growth", desc: "Building investment strategies aligned with sustainable expansion goals." },
];

const Investment = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Investment KSA"
        heading="Invest With Confidence."
        description={<><span className="block text-light-blue font-semibold text-xl md:text-2xl mb-4">Accelerate Your Investment & Business Growth in Saudi Arabia</span><span className="font-semibold text-white">de tempête</span> provides investment support services in Saudi Arabia, helping businesses explore market opportunities, strengthen partnerships, and support long-term business expansion.</>}
        ctaText="Get Expert Investment Advice"
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 9, label: "Years of Experience" },
        { icon: Globe, end: 20, label: "Countries Covered" },
        { icon: Handshake, end: 30000, duration: 3000, label: "Clients Served" },
        { icon: Medal, end: 120, duration: 2500, label: "Awards Received" },
      ]} />

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/freepik__create-image-for-wesite-section-excise-tax-advisor__80770.webp" alt="Investment & Business Growth Support" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Investment & Business<br /><span className="font-normal">Growth Support</span></h2>
            <p className="mt-5 text-gray-500 leading-7">Saudi Arabia continues to create strong opportunities for businesses seeking expansion, partnerships, and long-term market growth. Businesses entering or expanding within the Kingdom require structured guidance, market understanding, and strategic support to navigate opportunities effectively.</p>
            <p className="mt-3 text-gray-500 leading-7"><span className="font-semibold text-gray-700">de tempête</span> supports businesses across Saudi Arabia with investment and business growth solutions designed to improve market positioning, strengthen business partnerships, and support sustainable expansion.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">What We Handle For You</h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-x-10 gap-y-12 max-w-4xl mx-auto">
            {handleCards.map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-cyan-500 text-2xl" />
                </div>
                <h3 className="text-[#16244b] font-semibold text-sm">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Investment Planning &<br /><span className="font-normal">Market Opportunity Support</span></h2>
            <p className="mt-5 text-gray-500">Identifying the right market opportunities is essential for building sustainable business growth and stronger investment outcomes.</p>
            <p className="mt-3 text-gray-500"><span className="font-semibold text-gray-700">de tempête</span> supports businesses in Saudi Arabia with investment planning and market opportunity services designed to improve expansion readiness and support strategic business growth.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Services Include</p>
            <div className="space-y-3 mt-6">
              {investmentPlanningPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <img src="/src/asstes/Images/servics/KSA/freepik__create-image-for-wesite-section-excise-tax-advisor__80770.webp" alt="Investment Planning & Market Opportunity Support" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src="/src/asstes/Images/servics/KSA/freepik__create-image-for-wesite-section-excise-tax-advisor__80770.webp" alt="Strategic Partnership & Business Expansion Support" className="w-full h-96 object-cover rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-[#16244b]">Strategic Partnership &<br /><span className="font-normal">Business Expansion Support</span></h2>
            <p className="mt-5 text-gray-500">Strong partnerships and structured expansion strategies help businesses improve market reach and strengthen long-term growth potential.</p>
            <p className="mt-3 text-gray-500"><span className="font-semibold text-gray-700">de tempête</span> assists businesses in Saudi Arabia with partnership support and expansion-focused solutions designed to improve business collaboration and support operational growth.</p>
            <p className="mt-3 font-semibold text-gray-700">Our Services Include</p>
            <div className="space-y-3 mt-6">
              {strategicPartnershipPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
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
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6 mb-14" />
          <div className="grid lg:grid-cols-3 gap-6">
            {gains.map((g, i) => (
              <div key={i} className="bg-[#37456B] rounded-lg py-6 px-4 text-white font-medium">{g}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#16244b]">Why Choose Our <span className="font-normal">Investment Advisory</span></h2>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {whyChoose.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-[#16244b] mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={<>Start Your UAE<br />Expansion <span className="font-bold">Today</span></>}
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={["Free initial tax consultation — no obligation", "100% confidentiality and secure handling of data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"]}
      />

      <RecentBlogs blogs={[
        { id: 1, image: "/src/asstes/Images/New folder/council-tax.webp", title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide", desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to" },
        { id: 2, image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp", title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity", desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process," },
        { id: 3, image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp", title: "The Role and Benefits of a Virtual CFO in Modern Businesses", desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual" },
      ]} />
    </div>
  );
};

export default Investment;