import React, { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { ChevronDown } from "lucide-react";

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
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Market_Expansion = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const exportReadinessItems = [
    {
      title: "Export Readiness Assessment",
      description: "Align business operations and supply chain for compliance",
    },
    {
      title: "Trade Regulations Guidance",
      description:
        "Navigate Bangladesh export controls, customs, and compliance obligations",
    },
    {
      title: "Risk Management & Due Diligence",
      description: "Safeguard operations against partner and logistics risks",
    },
    {
      title: "Documentation & Logistics Optimization",
      description: "Streamline invoices, customs, and shipping processes",
    },
    {
      title: "Sustainable Export Systems",
      description: "Build scalable, compliant trade operations",
    },
  ];

  return (
    <div className="w-full"> 
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
          alt="Bangladesh Business Setup"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0d2f67]/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Expand With Confidence
            <br />
            Establish Your Business Presence
            <br />
            <span className="text-[#4AC4DE]">In Bangladesh The Right Way</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Bangladesh is one of the world's fastest-growing economies. Our
            expert team helps international companies establish their business
            presence in Bangladesh with confidence, supporting every step from
            registration to market entry.
          </p>

          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
            Get a Consultation
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F6F8] py-10">
        <div className="max-w-8xl mx-auto px-2">
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

      {/* Business Setup & Registration */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Setup & Registration
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Navigate the registration process smoothly with our comprehensive
              guidance and support services tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Private Limited Company",
                items: [
                  "Company registration & incorporation",
                  "Memorandum & Articles of Association",
                  "Tax ID registration & registration",
                  "Offshore company setup options",
                ],
              },
              {
                title: "Proprietorship",
                items: [
                  "Trade license registration",
                  "Tax identification number",
                  "Regulatory compliance setup",
                  "Business bank account opening",
                ],
              },
              {
                title: "Sole Proprietorship",
                items: [
                  "Business registration assistance",
                  "License & regulatory filings",
                  "Compliance documentation",
                  "Bank account opening support",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.items.map((subitem, sidx) => (
                      <li
                        key={sidx}
                        className="flex items-start gap-3 text-gray-700 text-sm"
                      >
                        <span className="text-cyan-500 mt-1">✓</span>
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-cyan-500 text-white rounded font-semibold hover:bg-cyan-600 transition">
              Explore Registration Options
            </button>
          </div>
        </div>
      </section>

      {/* Go-To-Market Strategy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Go-To-Market Strategy & Business Model Localization
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Develop a comprehensive market entry strategy tailored to
              Bangladesh's unique business landscape and regulatory environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Market & Competitive Analysis", icon: "◆" },
              { title: "Market Entry & Go-to-Market", icon: "◆" },
              { title: "Business & Operational Excellence", icon: "◆" },
              { title: "Risk & Regulatory Assessment", icon: "◆" },
              { title: "Local Localization Strategy", icon: "◆" },
              { title: "Launch Sequencing", icon: "◆" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg">
                <div className="text-cyan-400 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Readiness */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Export Readiness, Trade
            </h2>
            <p className="text-gray-600 text-lg font-semibold">
              Compliance & Logistics Advisory
            </p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              For smooth exports of merchandise and products from Bangladesh,
              obtain trade compliance and logistics advisory to ensure
              consistent growth and scalability.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {exportReadinessItems.map((item, idx) => (
              <div key={idx} className="border border-gray-200">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500 font-bold">☑</span>
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
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Account Opening Assistance */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bank Account Opening Assistance
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Expert guidance in establishing corporate bank accounts with
                premier Bangladesh banks, ensuring compliance with all
                regulatory requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end bank account setup",
                  "Document preparation & coordination",
                  "Banking relationship management",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >
                    <span className="text-cyan-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Trademark Registration & IP Protection */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-64 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trademark Registration & IP Protection
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Expert guidance in establishing corporate bank accounts with
                premier Bangladesh banks, ensuring compliance with all
                regulatory requirements.
              </p>
              <ul className="space-y-3">
                {[
                  "Trademark & patent registration",
                  "IP portfolio development",
                  "Brand IP consultation & strategy",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >
                    <span className="text-cyan-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Visa */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">
              Investor Visa & UAE Residency Support
            </h2>
            <p className="text-gray-300 text-sm">
              For Investment Attractiveness and Business Mobility
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Investor & Work Visaship",
              "Residency & Immigration Support",
              "Digitalization Documentation Support",
              "Investor Support Package",
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-lg">
                <div className="text-cyan-400 text-3xl mb-4">◆</div>
                <p className="font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Our Expansion Advisory Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Market Experience",
                desc: "Decade-long expertise in Bangladesh market dynamics and regulatory landscape",
              },
              {
                title: "Global Legal Expertise",
                desc: "International best practices combined with local regulatory knowledge",
              },
              {
                title: "Customized Solutions",
                desc: "Tailored strategies aligned with your unique business requirements",
              },
              {
                title: "Integrated Support",
                desc: "End-to-end services covering all aspects of business expansion",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border-l-4 border-cyan-500">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Start Your Bangladesh Expansion Today
              </h2>
              <p className="text-gray-300 mb-8 text-sm">
                Ready to establish your business presence in Bangladesh? Our
                expert team is here to guide you through every step of the
                expansion process.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized expansion strategy",
                  "Regulatory & compliance guidance",
                  "Market entry support & facilitation",
                  "Ongoing advisory & support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-200 text-sm"
                  >
                    <span className="text-cyan-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-cyan-500 text-white rounded font-semibold hover:bg-cyan-600 transition">
                Get a Free Consultation
              </button>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book a Free Consultation
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 text-sm"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-cyan-500 text-white rounded font-semibold hover:bg-cyan-600 transition text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Recent Blogs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "How to Start a Business Expansion in Bangladesh",
                excerpt:
                  "Discover the essential steps and strategies for successfully expanding your business into Bangladesh market.",
              },
              {
                id: 2,
                title: "Understanding Tax Compliance in Bangladesh",
                excerpt:
                  "Navigate Bangladesh's tax landscape with comprehensive compliance guide covering corporate tax and regulations.",
              },
              {
                id: 3,
                title:
                  "Why Bangladesh is the New Business Hub in Southeast Asia",
                excerpt:
                  "Learn why Bangladesh emerges as Southeast Asia's fastest-growing economy with emerging opportunities.",
              },
            ].map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500 to-slate-700"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-cyan-500 font-semibold text-sm hover:text-cyan-600"
                  >
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

export default Market_Expansion;
