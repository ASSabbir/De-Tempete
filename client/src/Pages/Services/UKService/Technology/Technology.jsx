// File: Technology.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";

import { LuSparkles, LuChartNoAxesCombined } from "react-icons/lu";

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

const softwareSolutions = [
  { title: "Digital Record Keeping", desc: "Maintain organised digital financial records for HMRC compliance." },
  { title: "VAT Filing Support", desc: "Simplify VAT submissions with MTD-compatible systems." },
  { title: "HMRC-Compatible Software", desc: "Setup and support for approved accounting platforms." },
  { title: "Digital Accounting Workflows", desc: "Reduce manual bookkeeping and reporting errors." },
];

const automationItems = [
  { title: "Automated Invoicing", desc: "Generate invoices automatically with faster and more accurate billing workflows." },
  { title: "Expense Tracking", desc: "Track business expenses efficiently through organised and automated financial systems." },
  { title: "Financial Reporting", desc: "Access real-time financial reports for improved business decision-making and visibility." },
  { title: "Workflow Automation", desc: "Simplify operational processes through smart and automated workflow management systems." },
  { title: "Real-Time Insights", desc: "Monitor financial performance instantly with live business reporting and analytics." },
];

const benefits = [
  "Reduce Manual\nBookkeeping Tasks",
  "Improve VAT\nReporting Accuracy",
  "Access Real-Time\nFinancial Insights",
  "Stay HMRC Compliant\nDigitally",
  "Save Time Through\nAutomation",
];

const whyChoose = [
  { title: "UK Compliance Focused", desc: "Built around HMRC and MTD requirements." },
  { title: "Practical Business Solutions", desc: "Technology aligned with operational needs." },
  { title: "Modern Accounting Expertise", desc: "Experience with leading cloud accounting systems." },
  { title: "Reliable Ongoing Support", desc: "Continuous assistance for smoother operations." },
];

const partners = ["QuickBooks", "Tableau", "Sage", "Zoho Books", "TallyPrime", "Taxcalc"];

const Technology = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Making Tax Digital & Cloud
            <br />
            <span className="text-[#4AC4DE]">Accounting For UK Businesses</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            At de tempête, we help UK businesses manage accounting, VAT submissions, and digital bookkeeping through
            HMRC-compliant cloud accounting systems designed for modern business operations.
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
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={9} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Globe size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={20} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Countries Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Handshake size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={30000} duration={3000} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Medal size={70} className="text-[#14224A] stroke-[1.2]" />
              <div>
                <h3 className="text-[#14224A] text-4xl font-bold"><AnimatedCounter end={120} duration={2500} />+</h3>
                <p className="text-[#14224A] text-xl font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Software Solutions For <span className="font-bold">Businesses</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              We help businesses implement and optimize modern software solutions, including cloud accounting
              platforms, workflow systems, and operational tools that improve efficiency and reduce manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {softwareSolutions.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
                <LuSparkles className="text-cyan-400 text-2xl mb-4" />
                <h3 className="text-lg font-bold text-[#14224A] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Process Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Business Process <span className="font-light">Automation</span></h2>
            <p className="mt-5 text-gray-500 leading-7">
              At de tempête, we help businesses eliminate manual tasks, streamline workflows, and improve operational
              efficiency through intelligent automation solutions.
            </p>
            <div className="space-y-5 mt-6">
              {automationItems.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-[#16244b]">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/UK/Business-Process-Automation.webp"
            alt="Business Process Automation"
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>
      </section>

      {/* Smarter Accounting & Business Benefits */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              Smarter Accounting & Business <span className="font-bold">Benefits</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mt-16">
            {benefits.map((item, index) => (
              <div key={index} className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl">
                <h3 className="text-lg font-medium text-white leading-relaxed whitespace-pre-line">{item}</h3>
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
              Why Choose Our <span className="font-bold">Technology Services?</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl mb-4" />
                <h3 className="font-bold text-[#16244b] mb-2">{item.title}</h3>
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
                Start Simplifying Your<br />Accounting With <span className="font-bold">Modern Digital Solutions</span>
              </h2>
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {[
                    "Free initial consultation — no obligation",
                    "Tailored digital & technology solutions",
                    "Scalable and automation-ready systems",
                    "Expert support and strategic guidance Transparent and efficient process",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">✓</span>
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

      {/* Technological Partner */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-[#16244b] mb-16">
            Technological <span className="font-bold">Partner</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center opacity-80">
            {partners.map((p, i) => (
              <span key={i} className="text-gray-500 font-semibold text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;