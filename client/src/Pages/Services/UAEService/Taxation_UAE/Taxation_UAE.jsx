// File: Taxation_UAE.jsx
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle,FaArrowRight } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";


const whyChoose = [
  {
    title: "UAE-Focused Expertise",
    desc: "Deep understanding of local regulations and compliance requirements.",
  },
  {
    title: "Global Experience",
    desc: "Practical solutions for cross-border and multinational operations.",
  },
  {
    title: "Risk Minimization",
    desc: "Proactive strategies to reduce penalties and financial exposure.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized tax planning for startups, SMEs, and large corporates.",
  },
];

const transferPricing = [
  "Compliance With UAE And International Transfer Pricing Rules",
  "Practical Strategies For Multinational Operations",
  "Reduce Risks In Cross-Border Transactions",
];

const Taxation_UAE = () => {
  return (
    <div className="w-full">
       <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Taxation UAE"
        heading={<>Simplify Your Business<br /><span className="text-light-blue">Taxes In The UAE</span></>}
        description="Expert Corporate Tax, VAT & Transfer Pricing Solutions for Seamless Compliance and Growth"
      />

      <StatsSection stats={[
        { icon: CalendarDays, end: 0, label: "Years of Experience" },
        { icon: Globe, end: 0, label: "Countries Covered" },
        { icon: Handshake, end: 1001, duration: 2500, label: "Clients Served" },
        { icon: Medal, end: 4, label: "Awards Received" },
      ]} />

      {/* Corporate Tax Advisory */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__create-image-for-wesite-section-corporate-tax-advi__80768.webp"
            alt="Corporate Tax Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Corporate <span className="font-light">Tax Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Take control of your corporate tax obligations in the UAE with
              expert guidance. We provide strategic planning, compliance
              support, and optimization to ensure your business meets
              regulations while minimizing tax liabilities.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Accurate corporate tax calculation and planning",
                "Minimized risk of penalties and audits",
                "Tailored strategies for startups, SMEs, and corporates",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VAT Advisory */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              VAT <span className="font-light">Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Simplify VAT compliance with our end-to-end advisory services.
              From registration to filings and audits, we help businesses
              navigate UAE VAT regulations efficiently and accurately.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Complete VAT registration support",
                "Timely VAT filing and reporting",
                "Risk reduction and compliance assurance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/Global-business-strategy-in-focus.webp"
            alt="VAT Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Excise Tax */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/1775737113368.jpg"
            alt="Excise Tax Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Excise Tax <span className="font-light">Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Stay compliant with UAE excise tax laws while optimizing your
              business costs. Our advisory ensures proper classification,
              filing, and planning to avoid unnecessary penalties and improve
              financial efficiency.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Accurate excise tax calculation and reporting",
                "Guidance on excisable goods and compliance",
                "Reduce liabilities and avoid regulatory issues",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Pricing */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Transfer{" "}
              <span className="font-bold">Pricing & Cross-Border Tax</span>{" "}
              Support
            </h2>
            <p className="mt-6 text-slate-300 leading-7">
              Ensure your international operations are fully compliant with UAE
              and global tax laws. We provide transfer pricing analysis,
              documentation, and cross-border advisory to optimize your global
              transactions.
            </p>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {transferPricing.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                  {item}
                </h3>
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
              Why Choose Our{" "}
              <span className="font-bold">Taxation Services?</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-[#16244b] mb-2">
                    {item.title}
                  </h3>
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
                Ready To Simplify Your
                <br />
                Taxes In The <span className="font-bold">UAE?</span>
              </h2>
              <p className="mt-8 text-cyan-400 text-xl font-semibold leading-9 max-w-xl">
                Partner with de tempête and take control of your corporate, VAT,
                excise, and cross-border tax obligations with confidence.
              </p>
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-bold text-[#16244B] mb-8">
                  Book a Free Consultation
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300"
                  >
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
              {
                id: 1,
                image: "/src/asstes/Images/New folder/council-tax.webp",
                title:
                  "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
                desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
              },
              {
                id: 2,
                image:
                  "/src/asstes/Images/New folder/self-assessment-tax-return.webp",
                title:
                  "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
                desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
              },
              {
                id: 3,
                image:
                  "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
                title:
                  "The Role and Benefits of a Virtual CFO in Modern Businesses",
                desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
              },
            ].map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#16244b] leading-snug mb-4 group-hover:text-cyan-500 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-8 mb-8">
                    {blog.desc}
                  </p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-cyan-500 font-semibold hover:gap-4 duration-300"
                  >
                    Read More <FaArrowRight />
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

export default Taxation_UAE;
