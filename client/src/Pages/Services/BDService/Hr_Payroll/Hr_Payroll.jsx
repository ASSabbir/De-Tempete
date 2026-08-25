import { useState, useEffect } from "react";
import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { ShieldCheck, DollarSign } from "lucide-react";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
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

const Hr_Payroll = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const servicesData = [
    {
      title: "Payroll Processing & HR Outsourcing",
      icon: BarChart3,
      description:
        "End-to-end payroll services in Bangladesh including salary processing, payslips, tax deductions, and employee record management. Ensure accurate, timely, and compliant payroll aligned with Bangladesh labor law and income tax regulations.",
    },
    {
      title: "Employer of Record (EOR) & PEO Services",
      icon: ShieldCheck,
      description:
        "Hire employees in Bangladesh without a local entity through our EOR services in Bangladesh. We manage employment contracts, onboarding, payroll, and statutory compliance for smooth and legal workforce expansion.",
    },
    {
      title: "Workforce Compliance & HR Advisory",
      icon: DollarSign,
      description:
        "Stay fully compliant with Bangladesh labor laws and HR regulations. We help structure contracts, HR policies, and compliance processes to reduce risks and ensure audit-ready operations.",
    },
  ];

  const benefitsData = [
    {
      title: "Full Compliance Assurance",
      icon: FaCheckCircle,
    },
    {
      title: "Time & Cost Savings",
      icon: FaCheckCircle,
    },
    {
      title: "Error-Free Payroll Processing",
      icon: FaCheckCircle,
    },
    {
      title: "Faster Team Expansion",
      icon: FaCheckCircle,
    },
    {
      title: "Structured HR Management",
      icon: FaCheckCircle,
    },
  ];
  const id = 'services-bd-hr'

  return (
    <div className="w-full">
      <HeroSection
      id={id}
        bgImage={bg}
        alt="Bangladesh Business Setup"
        heading={
          <>
            Streamline Your HR & Payroll
            <br />
            <span className="text-light-blue">Solutions In Bangladesh</span>
          </>
        }
        description={
          <>
            Managing HR and payroll in Bangladesh involves dealing with evolving
            labor laws, Tax regulations, and administrative complexities.{" "}
            <strong><i>de tempête</i></strong> provides{" "}
            <strong>end-to-end HR and payroll services</strong> that simplify
            workforce management, ensure compliance with Bangladesh labor laws,
            and deliver accurate payroll processing. Focus on growing your
            business while we handle your HR operations efficiently.
          </>
        }
      />

      <SecondSection></SecondSection>

      {/* What We Offer Section */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-[#13264d] mb-4">
              What We Offer
            </h2>

            <p className="text-base text-gray-600 leading-8">
              Managing employees, payroll, and compliance in Bangladesh can be
              challenging without the right expertise.{" "}
              <strong><i>de tempête</i></strong> offers{" "}
              <strong>complete HR and payroll solutions</strong> designed to
              streamline operations, minimize risks, and ensure your workforce
              is managed effectively and compliantly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {servicesData.map((service, index) => {
    const Icon = service.icon;

    const row = Math.floor(index / 3);
    const col = index % 3;
    const isDark = (row + col) % 2 === 0;

    return (
      <div
        key={index}
        className={`flex flex-col items-center text-center p-10 min-h-[300px] justify-center gap-4 duration-300 hover:shadow-2xl ${
          isDark ? "bg-light-blue" : "bg-white"
        }`}
      >
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-sm flex items-center justify-center mb-2 ${
            isDark ? "bg-white/15" : "bg-light-blue/20"
          }`}
        >
          <Icon
            className={`text-4xl ${
              isDark ? "text-white" : "text-light-blue"
            }`}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl 2xl:text-[1.1vw] font-bold text-[#16244b] leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p
          className={`text-base leading-7 ${
            isDark ? "text-gray-700" : "text-gray-600"
          }`}
        >
          {service.description}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-white">What You Gain</h2>
            <div className="w-24 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-8 text-center hover:bg-[#43507d] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img src={logo} alt="" />
                </div>

                <h3 className="text-xl font-semibold text-white leading-snug">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl 2xl:text-5xl font-bold text-[#16244b]">
        Why Choose Our HR & Payroll
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          title: "Local Compliance Expertise",
          desc: "Strong understanding of Bangladesh labor laws, payroll regulations, and tax requirements.",
        },
        {
          title: "Accurate & Timely Payroll",
          desc: "Error-free salary processing with proper deductions and reporting.",
        },
        {
          title: "Cost-Effective HR Solutions",
          desc: "Reduce overhead by outsourcing HR and payroll operations.",
        },
        {
          title: "Scalable Support",
          desc: "Flexible solutions for startups, SMEs, and growing companies.",
        },
        {
          title: "End-to-End Service",
          desc: "From hiring and onboarding to payroll and compliance.",
        },
        {
          title: "Reliable & Transparent",
          desc: "Clear processes, consistent support, and full visibility.",
        },
      ].map((feature, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const isDark = (row + col) % 2 === 0;

        return (
          <div
            key={index}
            className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${
              isDark ? "bg-light-blue" : "bg-white"
            }`}
          >
            {/* Logo */}
            <div
              className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                isDark ? "bg-white/15" : "bg-light-blue/20"
              }`}
            >
              <img
                src={logo}
                alt=""
                className={`w-8 h-8 object-contain ${
                  isDark ? "brightness-0 invert" : ""
                }`}
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed text-justify ${
                isDark ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {feature.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <ConsultationCTA
      id={id}
        heading={
          <>
            Streamline Your HR &<br />
            Payroll <span className="font-bold">Today</span>
          </>
        }
        subheading="Let us handle your HR and payroll complexities so you can focus on growth. Contact us for customised HR solutions tailored to your Bangladesh operations."
      />

      
    </div>
  );
};

export default Hr_Payroll;
