// File: Business_Advisory.jsx
import  { useState, useEffect } from "react";
import {
  CalendarDays,
  Globe,
  Handshake,
  Medal,
  ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import {
  LuChartNoAxesCombined,
  LuBuilding2,
  LuTrendingUp,
  LuWallet,
  LuFileSearch,
} from "react-icons/lu";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const valuationCards = [
  {
    icon: LuBuilding2,
    title: "Business Valuation",
    desc: "Accurate valuation reports based on financial performance, market conditions, and future projections.",
  },
  {
    icon: LuTrendingUp,
    title: "Investment Feasibility Analysis",
    desc: "Evaluate potential investments to ensure profitability and strategic alignment.",
  },
  {
    icon: LuWallet,
    title: "ROI Forecasting",
    desc: "Project returns to make confident, data-driven financial decisions.",
  },
  {
    icon: LuFileSearch,
    title: "Investor Readiness Support",
    desc: "Pitch decks, financial models, and due diligence preparation.",
  },
];

const maItems = [
  {
    title: "M&A Strategy & Due Diligence",
    desc: "Comprehensive financial and legal checks to minimise risk.",
  },
  {
    title: "Deal Structuring & Negotiation",
    desc: "Support in creating win-win deal structures that protect your interests.",
  },
  {
    title: "Business Restructuring Advisory",
    desc: "Operational, financial, and organisational restructuring for efficiency and growth.",
  },
  {
    title: "Post-Merger Integration",
    desc: "Smooth integration of teams, systems, and financial processes.",
  },
];

const financialGrowth = [
  {
    title: "Financial Forecasting & Planning",
    desc: "Clear Projections To Guide Decision-Making And Investment.",
  },
  {
    title: "Profitability Analysis",
    desc: "Identify Strengths, Reduce Inefficiencies, And Improve Margins.",
  },
  {
    title: "Growth & Expansion Strategy",
    desc: "Structured Plans To Scale Into New Markets Or Product Lines.",
  },
  {
    title: "Risk Management Advisory",
    desc: "Assess Vulnerabilities And Build Strategies That Protect Your Business.",
  },
];

const whyChoose = [
  "Tailored solutions for startups, SMEs & large enterprises",
  "Data-driven insights for confident decision-making",
  "Full support across formation, valuation, M&A, and exits",
  "Strong compliance, documentation & financial expertise",
];

const Business_Advisory = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const toggleAccordion = (idx) =>
    setExpandedItem(expandedItem === idx ? null : idx);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Business Advisory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Strategic Business
            <br />
            <span className="text-light-blue">
              Advisory For Confident Decisions
            </span>
            <br />& Sustainable Growth
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            From formation to expansion, valuation to exit strategies—our
            advisory solutions help businesses navigate challenges, unlock
            opportunities, and grow with clarity and confidence.
          </p>
          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-light-blue hover:border-light-blue hover:text-black duration-300">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F6F8] py-10">
        <div className="max-w-8xl mx-auto px-30">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Heading */}
            <div>
              <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">
                Why Choose Us?
              </h2>
            </div>

            {/* Stat 1 */}
            <div className="flex items-center gap-5">
              <CalendarDays size={70} className="text-[#14224A] stroke-[1.2]" />

              <div>
                <h3 className="text-[#14224A] text-4xl font-bold">
                  <AnimatedCounter end={9} />+
                </h3>

                <p className="text-[#14224A] text-xl font-medium">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5">
              <Globe size={70} className="text-[#14224A] stroke-[1.2]" />

              <div>
                <h3 className="text-[#14224A] text-4xl font-bold">
                  <AnimatedCounter end={20} />+
                </h3>

                <p className="text-[#14224A] text-xl font-medium">
                  Countries Covered
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5">
              <Handshake size={70} className="text-[#14224A] stroke-[1.2]" />

              <div>
                <h3 className="text-[#14224A] text-4xl font-bold">
                  <AnimatedCounter end={30000} duration={3000} />+
                </h3>

                <p className="text-[#14224A] text-xl font-medium">
                  Clients Served
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-5">
              <Medal size={70} className="text-[#14224A] stroke-[1.2]" />

              <div>
                <h3 className="text-[#14224A] text-4xl font-bold">
                  <AnimatedCounter end={120} duration={2500} />+
                </h3>

                <p className="text-[#14224A] text-xl font-medium">
                  Awards Received
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Formation Opening */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/UK/freepik__company-formation-in-business-set-up-in-uk-image-f__31544.webp"
            alt="Company Formation Opening & Business Setup"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Company Formation</span>
              <br />
              <span className="font-bold">Opening</span> & Business Setup
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Start Your Business on the Right Foundation
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We guide startups, SMEs, and investors through every step of
              company formation, ensuring compliance, efficiency, and the right
              structure for long-term success.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key Points:
            </h4>
            <div className="space-y-3">
              {[
                "Entity selection & structuring",
                "Licensing & registration",
                "Compliance and documentation",
                "Market entry advisory",
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

      {/* Business Valuation */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl leading-tight text-[#16244b] font-light">
            <span className="font-bold">Business Valuation</span> & Investment
            Advisory Localisation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
            Know Your Worth. Make Smarter Investment Decisions.
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-500">
            Our valuation and investment advisory services help you understand
            the true financial position of your business, attract investors, and
            make informed strategic decisions.
          </p>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-4 gap-10 mt-16">
          {valuationCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="text-4xl text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* M&A Accordion */}
      <section className="py-20 px-6 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Mergers, Acquisitions &{" "}
              <span className="block">Restructuring Support</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm font-semibold">
              Strategic Support for M&A and Business Transformation
            </p>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
              Whether you're merging, acquiring, or restructuring operations,
              our advisors ensure a smooth, compliant, and strategic transition.
            </p>
          </div>

          <div className="space-y-4">
            {maItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-linear-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-sm">
                      ✦
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
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Exit Strategy</span> & Succession
              <br />
              Planning Heading
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Plan Your Exit with Confidence
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We help business owners prepare for a successful transition,
              whether you're selling, retiring, or passing the business to the
              next generation.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Key Points
            </h4>
            <div className="space-y-3">
              {[
                "Exit Strategy Development",
                "Succession Planning",
                "Valuation & Deal Advisory",
                "Legal & Compliance Guidance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/freepik__exit-strategy-succession-planningheading-image-for__79393.webp"
            alt="Exit Strategy"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Financial Strategy & Growth Consulting */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              Financial Strategy &{" "}
              <span className="font-bold">Growth Consulting</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              <span className="font-semibold text-white">
                Build a Financial Strategy That Drives Growth
              </span>
              <br />
              We create actionable financial strategies that enhance
              profitability, strengthen cash flow, and support sustainable
              business expansion.
            </p>
            <div className="w-44 h-1 bg-cyan-400 rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {financialGrowth.map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-4xl" />
                </div>
                <h3 className="mt-8 text-lg font-bold text-white leading-relaxed">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-300 text-sm leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b] leading-tight">
              Why Choose Our{" "}
              <span className="font-bold">
                Business Advisory & Consultancy Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-cyan-400 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-sm">{item}</p>
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
                Make Smarter Business
                <br />
                Decisions <span className="font-bold">Today</span>
              </h2>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <p className="text-gray-200 text-lg">
                  Get expert guidance to build, scale, or exit your business
                  with confidence.
                </p>
                <p className="mt-4 text-cyan-400 font-bold text-lg">
                  Talk to Our Business Advisors
                </p>
              </div>
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

export default Business_Advisory;
