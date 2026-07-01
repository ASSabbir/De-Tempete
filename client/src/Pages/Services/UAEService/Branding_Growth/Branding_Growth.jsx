// File: Branding_Growth.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal, ChevronDown } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const sectors = [
  { title: "Modest Fashion Id", desc: "Entity development, product positioning, and campaign direction for modestwear brands." },
  { title: "Lifestyle & Consumer Brands", desc: "Market-fit insights, digital presence planning, and expansion strategies for lifestyle products." },
  { title: "Hospitality & F&B", desc: "Brand identity, menu storytelling, and launch marketing for restaurants, cafes, and hotels." },
];

const marketingItems = [
  { title: "Brand Strategy & Identity", desc: "Define your brand's positioning, tone, and visual identity for lasting market impact." },
  { title: "Digital Marketing Roadmap", desc: "A structured digital plan mapping channels, timelines, and growth milestones." },
  { title: "Social Media Campaigns", desc: "Platform-specific campaigns designed to grow reach and engagement." },
  { title: "Content Creation & Copywriting", desc: "On-brand content and copy that resonates with your target audience." },
  { title: "Website & Funnel Optimization", desc: "Optimize your website and conversion funnels for measurable results." },
];

const photoCards = [
  { title: "Brand Photoshoots", desc: "Professional Shoots For Corporate Teams, Founders, Products, And Spaces." },
  { title: "Video Production", desc: "Brand Films, Corporate Profile Videos, Interviews & Launch Content." },
  { title: "Creative Direction", desc: "Concept Creation, Moodboarding & Visual Storytelling Guidance." },
  { title: "Location & Crew Management", desc: "Models, Studios, Permits, Stylists & Production Planning." },
  { title: "Post-Production", desc: "Editing, Color Grading & Final Delivery In Multiple Formats." },
  { title: "Campaign Asset Development", desc: "Concept Creation, Moodboarding & Visual Storytelling Guidance." },
];

const whyChoose = [
  { title: "Market-Driven Strategies", desc: "Leverage UAE-specific insights to create branding and growth plans that deliver measurable results." },
  { title: "Multi-Sector Expertise", desc: "Guidance across digital, tech, real estate, lifestyle, and consumer brands to meet industry-specific needs." },
  { title: "Premium Campaign Execution", desc: "Design and execute high-quality branding, marketing, and digital campaigns that elevate your brand." },
  { title: "Cross-Border Expansion", desc: "Support for regional and international growth with strategic planning and market entry advisory." },
  { title: "Strategic Partnerships", desc: "Build strong networks and alliances to unlock new opportunities and collaborations." },
  { title: "Scalable Solutions", desc: "Flexible growth strategies designed for startups, SMEs, and enterprise-level brands alike." },
];

const Branding_Growth = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) => setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Branding & Growth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build. Grow. Shine.
            <br />
            <span className="text-[#4AC4DE]">Expand Your Reach And Make<br />An Impact</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            We help UAE businesses elevate their brand, expand strategically, and reach the right audience. From
            networking support to digital campaigns and content production, our end-to-end Branding & Growth
            solutions ensure your business thrives in a competitive market.
          </p>
          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F6F8] py-10">
        <div className="max-w-8xl mx-auto px-30">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div>
              <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">Why Choose Us?</h2>
            </div>
            <div className="flex items-center gap-5">
              <CalendarDays size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Globe size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={0} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Countries Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Handshake size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={943} duration={2500} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Medal size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={3} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Build Strong <span className="font-light">Strategic Alliances, Partnerships & Networking Support</span></h2>
            <p className="mt-5 text-gray-500 leading-7">
              Business growth is often about who you know as much as what you do. We help UAE companies forge
              meaningful partnerships, create strategic alliances, and leverage networking opportunities that open
              doors to new markets and collaborations.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">Our team handles:</h4>
            <div className="space-y-3">
              {["Alliance Identification & Analysis", "Partnership Structuring & Agreements", "Networking Event Support", "Cross-Industry Collaboration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp"
            alt="Build Strong Strategic Alliances"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Sector-Focused Advisory */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Sector-Focused <span className="font-bold">Advisory</span>
            </h2>
            <p className="mt-4 text-gray-500">Industry-Specific Expertise That Drives Brand Success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
            {sectors.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Strategy Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Marketing Strategy, Digital <span className="block">Presence & Social Media Campaigns</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm font-semibold">Build a Strong Digital Footprint That Converts</p>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
              We design marketing strategies that increase brand awareness, strengthen trust, and generate
              measurable results across digital and social platforms.
            </p>
          </div>

          <div className="space-y-4">
            {marketingItems.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-sm">
                      ✦
                    </div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  </div>
                  <ChevronDown size={20} className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`} />
                </button>
                {expandedItem === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Photoshoot & Video Production <span className="font-normal">Support</span>
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              Premium Visual Content That Elevates Your Brand Strong visuals build trust, especially in the UAE's
              fast-paced, competitive market. We help you plan, execute, and deliver premium photoshoots and videos
              that represent your brand with style and clarity.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {photoCards.map((item, index) => (
              <div key={index} className="bg-[#39446B] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center mb-5">
                  <LuChartNoAxesCombined className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our <span className="font-bold">Branding & Growth Services?</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl leading-tight font-light text-white">
                Start Expanding Your<br />Brand <span className="font-bold">Today</span>
              </h2>
              <p className="mt-8 text-cyan-400 text-xl font-semibold leading-9 max-w-xl">
                Get expert guidance, avoid costly delays, and build your UAE presence with confidence.
              </p>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {["Free initial consultation — no obligation", "100% confidentiality and secure handling of data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-bold text-[#16244B] mb-8">Book a Free Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea rows={5} placeholder="Write your message..." className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b]">
              Recent <span className="font-bold">Blogs</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              { id: 1, image: "/src/asstes/Images/New folder/council-tax.webp", title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide", desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to" },
              { id: 2, image: "/src/asstes/Images/New folder/self-assessment-tax-return.webp", title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity", desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process," },
              { id: 3, image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp", title: "The Role and Benefits of a Virtual CFO in Modern Businesses", desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual" },
            ].map((blog) => (
              <div key={blog.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-105 duration-500" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#16244b] leading-snug mb-4 group-hover:text-cyan-500 transition">{blog.title}</h3>
                  <p className="text-gray-500 text-lg leading-8 mb-8">{blog.desc}</p>
                  <a href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-cyan-500 font-semibold hover:gap-4 duration-300">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding_Growth;