import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { ShieldCheck, Users, DollarSign } from "lucide-react";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";

import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
import logo from '../../../../asstes/img_temp/logo.webp'
const servicesData = [
  {
    title: "Corporate Training Programs in Bangladesh",
    icon: BarChart3,
    description:
      "Customized employee training programs in Bangladesh focused on practical skills, productivity, and performance improvement. We design sessions aligned with your business goals and workforce needs.",
  },
  {
    title: "Mentorship & Professional Development",
    icon: ShieldCheck,
    description:
      "Structured mentorship programs in Bangladesh to guide individuals and teams in career growth, leadership, and skill development for long-term success.",
  },
  {
    title: "Capacity Building & Skill Development",
    icon: DollarSign,
    description:
      "End-to-end capacity building services in Bangladesh to strengthen organizational capabilities, improve team efficiency, and support sustainable business growth.",
  },
];

const Training = () => {
  const benefitsData = [
    {
      title: "Skilled & Productive Workforce",
      icon: FaCheckCircle,
    },
    {
      title: "Stronger Team Performance",
      icon: FaCheckCircle,
    },
    {
      title: "Long-Term Business Growth",
      icon: FaCheckCircle,
    },
    {
      title: "Improved Employee Confidence",
      icon: FaCheckCircle,
    },
    {
      title: "Scalable Learning Systems",
      icon: FaCheckCircle,
    },
  ];
const id = 'services-bd-tranning'
  return (
    <div className="w-full">
      <HeroSection
      id={id}
        bgImage={bg}
        alt="Bangladesh Business Setup"
        heading={
          <>
            Upskill Your Workforce
            <br />
            <span className="text-light-blue">
              Training & Mentorship Programs
            </span>
            
          </>
        }
        description={
          <>
            Empower your team with{" "}
            <strong>
              professional training and mentorship programs in Bangladesh
            </strong>{" "}
            designed to enhance skills, improve productivity, and build
            long-term organizational capacity.<br/> <strong><i>de tempête</i></strong>{" "}
            delivers structured learning solutions tailored to your business
            needs, helping individuals and teams perform better, adapt faster,
            and grow confidently.
          </>
        }
        ctaText="Request Training Consultation"
      />

      <SecondSection></SecondSection>

      {/* About Our Training & Mentorship Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl 2xl:text-5xl font-bold text-[#16244b] mb-6">
              About Our Training & Mentorship Solutions
            </h2>
            <p className="text-base text-gray-600 leading-8">
              Building a skilled workforce is essential for business success.
              Our{" "}
              <strong>
                training and capacity building services in Bangladesh
              </strong>{" "}
              focus on developing practical skills, strengthening leadership,
              and improving team performance through structured mentorship and
              learning programs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 border border-gray-100"
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#e0f4ff] flex items-center justify-center shrink-0">
                      <Icon className="text-light-blue text-2xl" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#16244b]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-7">
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
        Why Choose Us For Training, Mentorship & Capacity Building?
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        {
          title: "Industry-Relevant Training",
          desc: "Practical, real-world learning aligned with market needs.",
        },
        {
          title: "Customized Programs",
          desc: "Tailored training based on your business goals.",
        },
        {
          title: "Experienced Mentors",
          desc: "Guidance from skilled professionals and trainers.",
        },
        {
          title: "Performance-Focused Approach",
          desc: "Improve productivity and team efficiency.",
        },
        {
          title: "Measurable Learning Outcomes",
          desc: "Clear objectives and practical outcomes that deliver lasting business impact.",
        },
        {
          title: "Hands-On & Practical Learning",
          desc: "Interactive sessions focused on real business challenges and practical application.",
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
            Build Your Skilled Workforce In Bangladesh
            <br />
            <span className="font-bold">Today</span>
          </>
        }
        subheading="Get expert training, structured mentorship, and build a high-performing team with confidence."
        commitmentItems={[
          "Free initial training consultation — no obligation",
          "Customized programs tailored to your business needs",
          "Practical, results-driven learning approach",
          "Ongoing mentorship and expert guidance",
          "Transparent process with measurable outcomes",
        ]}
      />

      
    </div>
  );
};

export default Training;
