// File: Investment.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
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

const dueDiligenceCards = [
  { title: "Financial & Operational Assessment", desc: "Analyze financial statements, cash flow, and business performance to ensure investment viability.", image: "/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp" },
  { title: "Risk & Compliance Checks", desc: "Evaluate legal, regulatory, and operational risks for informed decision-making.", image: "/src/asstes/Images/servics/UK/UK-tax-compliance-workspace-concept.webp" },
  { title: "Post-Investment Monitoring", desc: "Track KPIs, profitability, and growth strategies to maintain investment performance.", image: "/src/asstes/Images/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp" },
];

const bprItems = [
  { title: "Process Mapping & Optimization", desc: "Identify inefficiencies and redesign workflows for smoother operations." },
  { title: "Operational Audits", desc: "Comprehensive evaluation of systems, controls, and performance." },
  { title: "Performance Improvement Plans", desc: "Implement measurable improvements to enhance profitability and scalability." },
];

const whyChoose = [
  { title: "Market Expertise", desc: "In-depth knowledge of UAE business, legal, and financial environments." },
  { title: "Comprehensive Advisory", desc: "Support throughout due diligence, investment, and post-investment monitoring." },
  { title: "Tailored Solutions", desc: "Customized strategies for SMEs, startups, and global investors." },
  { title: "Transparent Processes", desc: "Clear, compliant workflows with ongoing performance tracking." },
];

const Investment = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Investment Advisory UAE"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Invest With Confidence.</h1>
          <p className="max-w-4xl mx-auto mt-6 text-xl md:text-2xl text-[#4AC4DE] font-semibold leading-relaxed">
            Make Your Capital Work Smarter in the UAE.
          </p>
          <p className="max-w-4xl mx-auto mt-6 text-lg text-gray-200 leading-relaxed">
            The UAE continues to attract global investors with its dynamic markets, tax-friendly policies, and
            strategic location. Our Investment Advisory services help you navigate due diligence, corporate finance,
            and operational efficiency—ensuring that your investments are secure, compliant, and optimized for
            growth.
          </p>
          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
            Get Expert Investment Advice
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
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={847} duration={2500} />+</h3>
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

      {/* Due Diligence */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Due Diligence & Post- <span className="font-bold">Investment Monitoring</span>
            </h2>
            <p className="mt-4 text-cyan-500 font-semibold">Mitigate Risks and Maximize Returns</p>
            <p className="mt-4 text-gray-500 leading-7">
              Successful investments start with informed decisions. We perform in-depth due diligence to identify
              potential risks, verify financial and operational health, and assess growth potential. Post-investment,
              we monitor performance and implement corrective actions to protect your capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {dueDiligenceCards.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-white text-lg font-bold">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BPR */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Business Process Reengineering (BPR) & Operational Audits
            </h2>
            <p className="mt-4 text-gray-600 font-semibold">Streamline Operations. Boost Efficiency.</p>
            <p className="mt-4 text-gray-500 leading-7">
              We help portfolio companies optimize processes, reduce costs, and enhance productivity. Through
              operational audits and business process reengineering, we ensure that businesses perform at peak
              efficiency while aligning with investor objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 mt-16">
            {bprItems.map((item, index) => (
              <div key={index} className={`text-center ${index === 2 ? "bg-white shadow-xl rounded-2xl py-6" : ""}`}>
                <LuChartNoAxesCombined className="text-4xl text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
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
              Why Choose Our <span className="font-bold">Investment Advisory</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
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
                Start Your UAE<br />Expansion <span className="font-bold">Today</span>
              </h2>
              <p className="mt-8 text-cyan-400 text-xl font-semibold leading-9 max-w-xl">
                Get expert guidance, avoid costly delays, and build your UAE presence with confidence.
              </p>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <div className="space-y-3">
                  {["Free initial tax consultation — no obligation", "100% confidentiality and secure handling of data", "Region-specific tax experts", "Transparent and practical advice tailored to your needs"].map((item, index) => (
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

export default Investment;