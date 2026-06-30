// File: Bookkeeping_Financial_Management.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

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

const whyChoose = [
  { title: "Accurate, timely, and compliant bookkeeping" },
  { title: "Data-driven insights for smarter decisions" },
  { title: "Cash flow forecasting for business stability" },
  { title: "Streamlined accounts payable & receivable" },
  { title: "Scalable solutions for SMEs and large enterprises" },
];

const Bookkeeping_Financial_Management = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Bookkeeping & Financial Management"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stay On Top Of Your Finances.
            <br />
            <span className="text-light-blue">Make Every Decision Count.</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Efficient bookkeeping and financial management are the backbone of
            every successful business. Whether you're a growing SME or an
            established company, our services ensure accurate records, clear
            insights, and data-driven decisions, so you can focus on growth, not
            paperwork.
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

      {/* Accurate & Timely Bookkeeping */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/New folder/Bookkeeping-for-Nonprofits.webp"
            alt="Accurate & Timely Bookkeeping"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Accurate & Timely</span>
              <br />
              Bookkeeping
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Keep your financial records up-to-date with precision and
              consistency.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Our monthly and quarterly bookkeeping services ensure that every
              transaction, invoice, and expense is recorded accurately. From
              tracking income and expenses to categorizing accounts and
              reconciling statements, we provide clarity and transparency for
              better financial control.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {["Monthly Bookkeeping", "Quarterly Bookkeeping"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reconcile Accounts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Reconcile Accounts</span> Without
              Stress
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Ensure your bank statements and books always match.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Bank reconciliation identifies discrepancies between your bank
              statements and internal records, preventing errors and fraud. Our
              team reviews every transaction, resolves inconsistencies, and
              provides clear reports so you always know your true cash position.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {[
                "Regular Reconciliation",
                "Error Detection & Correction",
                "Detailed Reporting",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/New folder/Reconcile Accounts.webp"
            alt="Reconcile Accounts"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Cash Flow Forecasting */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b]">
            <span className="font-bold">Cash Flow Forecasting</span> & Budgeting
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            <span className="font-semibold">
              Predict cash inflows and outflows to make smarter financial
              decisions.
            </span>{" "}
            Cash flow forecasting and budgeting help you anticipate financial
            needs, optimize spending, and avoid surprises. We create detailed
            projections, compare actuals against budgets, and provide actionable
            insights, so you can plan growth strategies and manage liquidity
            effectively.
          </p>
        </div>
      </section>

      {/* Management Accounts */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/New folder/Management Accounts Preparation.webp"
            alt="Management Accounts"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Management Accounts</span>
              <br />
              Preparation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Turn data into actionable insights with management accounts.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Management accounts provide a clear snapshot of your business
              performance. We prepare accurate reports, including profit & loss
              statements, balance sheets, and KPI analysis—enabling you to make
              informed strategic decisions quickly.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Design Feature:
            </h4>
            <div className="space-y-3">
              {[
                "Monthly & Quarterly Reports",
                "Performance Dashboards",
                "Key Metrics & Insights",
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

      {/* Accounts Payable & Receivable */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
              Accounts Payable &{" "}
              <span className="font-bold">Receivable Management</span>
            </h2>
            <p className="mt-8 text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
              <span className="font-semibold text-white">
                Stay on top of who owes you and who you owe.
              </span>{" "}
              Efficient accounts payable and receivable management improves cash
              flow and strengthens vendor and client relationships. We handle
              invoice tracking, payment scheduling, debt follow-ups, and
              reconciliation, ensuring smooth financial operations and timely
              reporting.
            </p>
            <div className="w-44 h-1 bg-cyan-400 rounded-full mx-auto mt-10"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {[
              "Accounts Receivable Monitoring",
              "Accounts Payable Scheduling",
              "Automated Reminders & Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                  <LuChartNoAxesCombined className="text-white text-5xl" />
                </div>
                <h3 className="mt-10 text-xl font-medium text-white leading-relaxed">
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
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b] leading-tight">
              Why Choose Our{" "}
              <span className="font-bold">
                Bookkeeping & Financial Management Services
              </span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-cyan-400 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item.title}</p>
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
                Take Control Of Your
                <br />
                Finances <span className="font-bold">Today</span>
              </h2>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <p className="text-gray-200 text-lg">
                  Professional bookkeeping and financial management are just a
                  click away. Reduce errors, save time, and gain complete
                  clarity on your business finances.
                </p>
                <p className="mt-4 text-cyan-400 font-bold text-lg">
                  Talk to Our Financial Experts
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

export default Bookkeeping_Financial_Management;
