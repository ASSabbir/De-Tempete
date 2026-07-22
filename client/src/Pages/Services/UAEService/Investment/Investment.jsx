// File: Investment.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";

import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

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

const dueDiligenceCards = [
  {
    title: "Financial & Operational Assessment",
    desc: "Analyze financial statements, cash flow, and business performance to ensure investment viability.",
    image:
      "/src/asstes/img_temp/servics/UK/Global-business-strategy-in-focus.webp",
  },
  {
    title: "Risk & Compliance Checks",
    desc: "Evaluate legal, regulatory, and operational risks for informed decision-making.",
    image:
      "/src/asstes/img_temp/servics/UK/UK-tax-compliance-workspace-concept.webp",
  },
  {
    title: "Post-Investment Monitoring",
    desc: "Track KPIs, profitability, and growth strategies to maintain investment performance.",
    image:
      "/src/asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp",
  },
];

const bprItems = [
  {
    title: "Process Mapping & Optimization",
    desc: "Identify inefficiencies and redesign workflows for smoother operations.",
  },
  {
    title: "Operational Audits",
    desc: "Comprehensive evaluation of systems, controls, and performance.",
  },
  {
    title: "Performance Improvement Plans",
    desc: "Implement measurable improvements to enhance profitability and scalability.",
  },
];

const financeAdvisoryItems = [
  {
    title: "M&A Advisory",
    desc: "Support for mergers, acquisitions, and joint ventures, including valuation and negotiations.",
  },
  {
    title: "Fundraising Readiness",
    desc: "Prepare businesses for investor meetings, pitch decks, and funding strategies.",
  },
  {
    title: "Financial Planning & Strategy",
    desc: "Build sustainable financial models, cash flow projections, and ROI assessments.",
  },
];

const whyChoose = [
  {
    title: "Market Expertise",
    desc: "In-depth knowledge of UAE business, legal, and financial environments.",
  },
  {
    title: "Comprehensive Advisory",
    desc: "Support throughout due diligence, investment, and post-investment monitoring.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized strategies for SMEs, startups, and global investors.",
  },
  {
    title: "Transparent Processes",
    desc: "Clear, compliant workflows with ongoing performance tracking.",
  },
];

const Investment = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Investment Advisory UAE"
        heading="Invest With Confidence."
        description={
          <>
            <span className="block text-light-blue font-semibold text-xl md:text-2xl mb-4">
              Make Your Capital Work Smarter in the UAE.
            </span>
            The UAE continues to attract global investors with its dynamic
            markets, tax-friendly policies, and strategic location. Our
            Investment Advisory services help you navigate due diligence,
            corporate finance, and operational efficiency—ensuring that your
            investments are secure, compliant, and optimized for growth.
          </>
        }
        ctaText="Get Expert Investment Advice"
      />

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 847,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 3, label: "Awards Received" },
        ]}
      />

      {/* Due Diligence */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-[#16244b]">
              Due Diligence & Post-{" "}
              <span className="font-bold">Investment Monitoring</span>
            </h2>
            <p className="mt-4 text-cyan-500 font-semibold">
              Mitigate Risks and Maximize Returns
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              Successful investments start with informed decisions. We perform
              in-depth due diligence to identify potential risks, verify
              financial and operational health, and assess growth potential.
              Post-investment, we monitor performance and implement corrective
              actions to protect your capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {dueDiligenceCards.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-5 text-white text-lg font-bold">
                    {item.title}
                  </h3>
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
            <p className="mt-4 text-gray-600 font-semibold">
              Streamline Operations. Boost Efficiency.
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              We help portfolio companies optimize processes, reduce costs, and
              enhance productivity. Through operational audits and business
              process reengineering, we ensure that businesses perform at peak
              efficiency while aligning with investor objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 mt-16">
            {bprItems.map((item, index) => (
              <div key={index} className="text-center">
                <LuChartNoAxesCombined className="text-4xl text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Corporate Finance Advisory */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#16244b]">
              Corporate Finance Advisory, M&A Support & Fundraising Readiness
            </h2>
            <p className="mt-4 text-gray-600 font-semibold">
              Drive Growth with Expert Financial Guidance
            </p>
            <p className="mt-4 text-gray-500 leading-7">
              Our corporate finance advisory services guide investors and businesses through mergers, acquisitions, fundraising, and strategic growth initiatives. We help you make data-driven decisions to secure funding, optimize valuations, and achieve sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-x-16 gap-y-10 mt-16">
            {financeAdvisoryItems.map((item, index) => (
              <div key={index} className="text-center">
                <LuChartNoAxesCombined className="text-4xl text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
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
              Why Choose Our{" "}
              <span className="font-bold">Investment Advisory</span>
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

      <ConsultationCTA
        heading={
          <>
            Start Your UAE
            <br />
            Expansion <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert guidance, avoid costly delays, and build your UAE presence with confidence."
        commitmentItems={[
          "Free initial tax consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "Region-specific tax experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />

      <RecentBlogs
        blogs={[
          {
            id: 1,
            image: "/src/asstes/img_temp/New folder/council-tax.webp",
            title:
              "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
            desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
          },
          {
            id: 2,
            image:
              "/src/asstes/img_temp/New folder/self-assessment-tax-return.webp",
            title:
              "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
            desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
          },
          {
            id: 3,
            image: "/src/asstes/img_temp/New folder/Virtual-CFO-2048x1366.webp",
            title:
              "The Role and Benefits of a Virtual CFO in Modern Businesses",
            desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
          },
        ]}
      />
    </div>
  );
};

export default Investment;
