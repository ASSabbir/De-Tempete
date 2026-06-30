// File: Tax_Planning_Advisory.jsx
import React, { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { LuChartColumnBig } from "react-icons/lu";

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

const whyChoose = [
  "Tailored tax planning for individuals and businesses",
  "Full compliance with HMRC regulations",
  "Proactive strategies to reduce liabilities",
  "Strong support for audits and investigations",
  "Clear, transparent guidance from experienced advisors",
];

const Tax_Planning_Advisory = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Tax Planning & Advisory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smart Tax Planning.
            <br />
            <span className="text-[#4AC4DE]">Stronger Financial Outcomes.</span>
          </h1>
          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            From corporate tax strategy to personal tax optimisation, our Tax Planning & Advisory services ensure
            full compliance, reduced liabilities, and a clear roadmap for long-term financial efficiency. Whether
            you're a business, investor, or individual, we help you navigate complex tax regulations with clarity
            and confidence.
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

      {/* Corporate Tax Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/UK/freepik__corporate-tax-planning-compliance-image-unique-con__88847.webp"
            alt="Corporate Tax Planning & Compliance"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Corporate Tax Planning</span><br />& Compliance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              Minimise liabilities, stay compliant, and optimise your overall tax position.
            </p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We design efficient corporate tax strategies tailored to your business structure, industry, and
              long-term goals. From compliance and filing to strategic planning and risk reduction, our experts ensure
              your business meets all regulatory requirements while maximising tax efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Tax Planning */}
      <section className="py-12 bg-white">
         <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">Personal <span className="font-light">Tax Planning</span></h2>
            <p className="mt-5 text-gray-500 font-semibold">Reduce your tax burden with proactive planning.</p>
            <p className="mt-3 text-gray-500 leading-7">
              Our personal tax advisory helps you manage income, investments, and assets more efficiently. We build
              tailored tax plans that ensure compliance while reducing unnecessary liabilities, giving you clarity
              and peace of mind throughout the financial year.
            </p>
          </div>
         <img
            src="/src/asstes/Images/servics/UK/freepik__personal-tax-planningimage-for-website-section-no-__88846.webp"
            alt="Personal Tax Planning"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Capital Gains Tax */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/UK/freepik__capital-gains-tax-cgt-advisory-image-unique-concep__88848.webp"
            alt="Capital Gains Tax Advisory"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Capital Gains Tax</span><br />(CGT) Advisory
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">Keep more of what you earn.</p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We help you understand your CGT obligations and implement strategies to reduce your overall liability.
              Whether you're selling property, shares, or business assets, our advisors ensure accurate
              calculations, smart planning, and timely compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Inheritance Tax */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">Inheritance</span><br />Tax Planning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">Secure your assets for the next generation.</p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Our inheritance tax planning ensures your wealth is transferred efficiently and tax-effectively. We
              create structured plans that minimise tax exposure, protect your beneficiaries, and align with your
              long-term family goals.
            </p>
          </div>
         <img
            src="/src/asstes/Images/servics/UK/freepik__inheritance-tax-planning-image-unique-but-clear-co__88850.webp"
            alt="Inheritance Tax Planning"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* R&D Tax Credit */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
         <img
            src="/src/asstes/Images/servics/UK/freepik__rd-tax-credit-claims-image-unique-but-clear-concep__88851.webp"
            alt="R&D Tax Credit Claims"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">R&D Tax</span><br />Credit Claims
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">Claim what you're eligible for, without complexity.</p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              We help innovative businesses reclaim a portion of their R&D expenditure through eligible tax credits.
              Our team manages the full claim process, documentation, technical justification, and submission,
              ensuring accuracy, compliance, and maximum benefit.
            </p>
          </div>
        </div>
      </section>

      {/* HMRC Investigation Support */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl leading-tight text-[#16244b] font-light">
              <span className="font-bold">HMRC Investigation</span><br />Support & Dispute Resolution
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 font-semibold">Expert support to resolve disputes quickly and compliantly.</p>
            <p className="mt-3 text-lg leading-8 text-gray-500">
              Facing an HMRC investigation can be overwhelming. Our specialists handle communication, documentation,
              and negotiations or settlement discussions—ensuring your case is managed professionally and your
              rights are fully protected.
            </p>
          </div>
           <img
            src="/src/asstes/Images/servics/UK/freepik__hmrc-investigation-support-dispute-resolution-imag__88852.webp"
            alt="HMRC Investigation Support & Dispute Resolution"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>
      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Our <span className="font-bold">Tax Planning & Advisory Services</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-20">
            {whyChoose.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <LuChartColumnBig className="text-cyan-400 text-3xl mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">{item}</p>
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
                Plan Smarter. Save<br />More. <span className="font-bold">Stay Compliant.</span>
              </h2>
             <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <p className="text-gray-200 text-lg">
                  Get expert tax guidance designed to protect your income, assets, and long-term financial goals.
                </p>
                <p className="mt-4 text-cyan-400 font-bold text-lg">Speak to Our Tax Experts</p>
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

export default Tax_Planning_Advisory;