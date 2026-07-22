// File: HRPayrollUSA.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Globe, Handshake, Medal } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import aboutHrImg from '../../../../asstes/img_temp/servics/freepik__creat-image-for-wesite-section-iso-standards-advis__80760.webp'
import payrollProcessingImg from '../../../../asstes/img_temp/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp'
import multiStatePayrollImg from '../../../../asstes/img_temp/servics/freepik__employe-recorder-peo-services-for-website-section-__98148.webp'
import hrComplianceImg from '../../../../asstes/img_temp/servics/freepik__workforce-compliance-advisory-for-website-section-__26469.webp'


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
    title: "US-Focused Expertise",
    desc: "Deep understanding of federal and state labor laws and payroll regulations.",
  },
  {
    title: "Multi-State Reach",
    desc: "Manage employees across every state with compliant, coordinated payroll and HR support.",
  },
  {
    title: "Cost & Time Efficiency",
    desc: "Reduce administrative burden and operational costs of running payroll and HR in-house.",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized payroll and HR outsourcing for startups, SMEs, and growing corporates.",
  },
  {
    title: "Transparent & Reliable",
    desc: "Clear guidance and actionable solutions you can trust, backed by dedicated specialists.",
  },
];

const HRPayrollUSA = () => {
  return (
    <div className="w-full">
      <SevicsBanner
        bgImage={bgimg}
        alt="USA HR & Payroll Solutions"
        description="Simplify workforce management with our comprehensive HR and payroll solutions built for US businesses. From accurate payroll processing to full HR outsourcing, we help you manage your team efficiently, stay compliant across every state, and reduce the administrative burden that comes with growing a workforce."
        title1={"HR & Payroll Support"}
        title2={"Built For Growing US Businesses"}
      ></SevicsBanner>


      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={aboutHrImg}
            alt="About Our HR & Payroll"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              About Our <span className="font-light">HR & Payroll</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Managing HR and payroll across US states can be complex, with
              varying wage laws, tax withholding rules, and compliance
              requirements at every level. We provide end-to-end HR and
              payroll solutions that simplify operations, reduce risk, and
              ensure your workforce is managed efficiently, so you can focus
              on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Payroll Processing & HR Outsourcing */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Payroll Processing &{" "}
              <span className="font-light">HR Outsourcing</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Ensure accurate and timely payroll while offloading
              administrative tasks to a dedicated team. We handle everything
              from wage calculations to benefits administration, so your
              employees are paid correctly and on time, every time.
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
            src={payrollProcessingImg}
            alt="Payroll Processing & HR Outsourcing"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Multi-State Payroll Compliance */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={multiStatePayrollImg}
            alt="Multi-State Payroll Compliance"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              Multi-State{" "}
              <span className="font-light">Payroll Compliance</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Employ your team across multiple states with confidence. We
              manage state-specific withholding, unemployment insurance
              registration, and wage reporting requirements so your payroll
              stays compliant wherever your employees are located.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Manage payroll across every state you employ in",
                "State withholding and unemployment insurance handled",
                "Consistent, compliant payroll no matter where you hire",
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

      {/* HR Compliance Advisory */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#16244b]">
              HR <span className="font-light">Compliance Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-7">
              Stay fully compliant with federal and state labor laws. Our
              advisory ensures that contracts, policies, and HR processes
              meet regulatory requirements and protect your business from
              fines or disputes.
            </p>
            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
              Benefits:
            </h4>
            <div className="space-y-3">
              {[
                "Navigate federal and state labor regulations with confidence",
                "Audit-ready HR policies and documentation",
                "Avoid legal risks and compliance penalties",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={hrComplianceImg}
            alt="HR Compliance Advisory"
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
        subheading="Partner with us and ensure your workforce is managed efficiently, compliantly, and stress-free across every state."
        commitmentItems={[
          "Free initial consultation — no obligation",
          "100% confidentiality and secure handling of data",
          "US payroll and labor law experts",
          "Transparent and practical advice tailored to your needs",
        ]}
      />

      
    </div>
  );
};

export default HRPayrollUSA;