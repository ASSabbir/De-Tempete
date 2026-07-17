// File: HR_Payroll_Solutions.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
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

const whyChoose = [
  {
    title: "UAE-Focused Expertise",
    desc: "Deep understanding of local labor laws and regulations.",
  },
  {
    title: "Global Reach",
    desc: "Manage employees anywhere with compliant EOR/PEO services.",
  },
  {
    title: "Cost & Time Efficiency",
    desc: "Reduce administrative burden and operational costs.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized payroll and HR solutions for startups, SMEs, and corporates.",
  },
  {
    title: "Transparent & Reliable",
    desc: "Clear guidance and actionable solutions you can trust.",
  },
];

const HR_Payroll_Solutions = () => {
  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="HR & Payroll Solutions"
        heading={
          <>
            Streamline Your HR &<br />
            <span className="text-light-blue">Payroll in the UAE</span>
          </>
        }
        description="Efficient, Compliant, And Hassle-Free Solutions For Payroll, Workforce Management, And Global Hiring."
        ctaText="Book a Consultation"
      />
      {/* NOTE: original CTA button style differs (bg-cyan-400 solid, not outline). HeroSection uses outline style — verify visually, add ctaVariant prop if mismatch matters. */}

      <StatsSection
        stats={[
          { icon: CalendarDays, end: 0, label: "Years of Experience" },
          { icon: Globe, end: 0, label: "Countries Covered" },
          {
            icon: Handshake,
            end: 1114,
            duration: 2500,
            label: "Clients Served",
          },
          { icon: Medal, end: 4, label: "Awards Received" },
        ]}
      />
      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__creat-image-for-wesite-section-iso-standards-advis__80760.webp"
            alt="About Our HR & Payroll"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              About Our <span className="font-light">HR & Payroll</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Managing HR and payroll in the UAE can be complex with constantly
              changing labor laws and compliance requirements. de tempête
              provides end-to-end HR and payroll solutions that simplify
              operations, reduce risks, and ensure your workforce is managed
              efficiently, so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Payroll Processing */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Payroll Processing &{" "}
              <span className="font-light">HR Outsourcing</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Ensure accurate and timely payroll while offloading administrative
              tasks. Our team handles everything from salary calculations to
              benefits management.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Accurate and timely payroll processing",
                "Complete HR administrative support",
                "Reduce errors and operational burden",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp"
            alt="Payroll Processing & HR Outsourcing"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* EOR / PEO */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src="/src/asstes/Images/servics/freepik__employe-recorder-peo-services-for-website-section-__98148.webp"
            alt="Employer Of Record (EOR) & PEO Services"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Employer Of Record{" "}
              <span className="font-light">(EOR) & PEO Services</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Hire employees in the UAE or globally without establishing a local
              entity. We manage contracts, visas, and benefits so you can expand
              effortlessly.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Hire locally or globally without a company setup",
                "Full management of contracts, visas, and benefits",
                "Quick and compliant onboarding process",
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

      {/* Workforce Compliance */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Workforce <span className="font-light">Compliance Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Stay fully compliant with UAE labor laws. Our advisory ensures
              that contracts, policies, and HR processes meet regulations and
              protect your business from fines or disputes.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Navigate UAE labor regulations with confidence",
                "Audit-ready HR policies and documentation",
                "Avoid legal risks and penalties",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/src/asstes/Images/servics/freepik__workforce-compliance-advisory-for-website-section-__26469.webp"
            alt="Workforce Compliance Advisory"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-light text-[#16244b]">
              Why Choose Us For{" "}
              <span className="font-bold">HR & Payroll Solutions?</span>
            </h2>
            <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <LuChartNoAxesCombined className="text-cyan-400 text-2xl mb-3" />
                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
            <div className="bg-[#16244B] rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Get Started Now
              </h3>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 rounded-lg transition duration-300">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Ready To Simplify Your
            <br />
            HR & <span className="font-bold">Payroll?</span>
          </>
        }
        subheading="Partner with de tempête and ensure your workforce is managed efficiently, compliantly, and stress-free."
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
            image: "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
            title:
              "The Role and Benefits of a Virtual CFO in Modern Businesses",
            desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
          },
        ]}
      />
    </div>
  );
};

export default HR_Payroll_Solutions;
