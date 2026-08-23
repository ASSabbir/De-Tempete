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
import aboutHrImg from '../../../../asstes/img_temp/servics/usa37.webp'
import payrollProcessingImg from '../../../../asstes/img_temp/servics/freepik__hr-outsourcing-image-for-website-section__98146.webp'
import multiStatePayrollImg from '../../../../asstes/img_temp/servics/Payroll-Services.webp'
import hrComplianceImg from '../../../../asstes/img_temp/servics/Bd/financial-governance.webp'
import { motion } from "framer-motion";
import logo from '../../../../asstes/img_temp/logo.webp'



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
  const id = 'services-usa-hrpayroll'
  return (
    <div className="w-full">
      <SevicsBanner
        id={id}
        bgImage={bgimg}
        alt="USA HR & Payroll Solutions"
        description="Simplify workforce management with our comprehensive HR and payroll solutions built for US businesses. From accurate payroll processing to full HR outsourcing, we help you manage your team efficiently, stay compliant across every state, and reduce the administrative burden that comes with growing a workforce."
        title1={"HR & Payroll Support"}
        title2={"Built For Growing US Businesses"}
      ></SevicsBanner>


      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <img
            src={aboutHrImg}
            alt="About Our HR & Payroll"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#16244b]">
              About Our <span className="font-light">HR & Payroll</span>
            </h2>
            <p className="mt-5 text-gray-500 text-justify leading-7">
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
      <section className="pb-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#16244b]">
              Payroll Processing &{" "}
              <span className="font-light">HR Outsourcing</span>
            </h2>
            <p className="mt-5 text-gray-500 text-justify leading-7">
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
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
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
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#16244b]">
              Multi-State{" "}
              <span className="font-light">Payroll Compliance</span>
            </h2>
            <p className="mt-5 text-gray-500 text-justify leading-7">
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
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
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
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#16244b]">
              HR <span className="font-light">Compliance Advisory</span>
            </h2>
            <p className="mt-5 text-gray-500 text-justify leading-7">
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
                  <FaCheckCircle className="text-light-blue text-base shrink-0" />
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
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-[#16244b]">
        Why Choose <span className="italic font-bold">de tempête</span> For{" "}
        <span>HR & Payroll Solutions?</span>
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {whyChoose.map((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: (index % 3) * 0.12,
              ease: "easeOut",
            }}
            className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
              isDark ? "bg-light-blue" : "bg-white"
            }`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 p-2 rounded-sm flex items-center justify-center ${
                isDark
                  ? "bg-white/15 text-white"
                  : "bg-light-blue/20 text-light-blue"
              }`}
            >
              <img src={logo} alt="" />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {item.desc}
            </p>
          </motion.div>
        );
      })}

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: (whyChoose.length % 3) * 0.12,
          ease: "easeOut",
        }}
        className="flex rounded-2xl p-10 flex-col justify-center gap-4 bg-[#16244B] duration-300 hover:shadow-2xl"
      >
        <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-white">
          Get Started Now
        </h3>

        <button className="bg-light-blue hover:bg-[#0d1e4a] text-white font-semibold py-3 px-6 rounded-sm transition duration-300">
          Book a Consultation
        </button>
      </motion.div>
    </div>
  </div>
</section>

      <ConsultationCTA
      id={id}
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