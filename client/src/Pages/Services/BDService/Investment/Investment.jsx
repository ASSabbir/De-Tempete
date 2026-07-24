import { useState, useEffect } from "react";
import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

import { ShieldCheck, DollarSign } from "lucide-react";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";

import tableau from "../../../../asstes/img_temp/New folder/9-1.webp";
import sage from "../../../../asstes/img_temp/New folder/3-2.webp";
import a from "../../../../asstes/img_temp/New folder/11-1.webp";
import b from "../../../../asstes/img_temp/New folder/12-1-934x1024.webp";
import c from "../../../../asstes/img_temp/New folder/7-2.webp";
import d from "../../../../asstes/img_temp/New folder/8.webp";
import e from "../../../../asstes/img_temp/New folder/13-1.webp";
import f from "../../../../asstes/img_temp/New folder/6-1.webp";
import g from "../../../../asstes/img_temp/New folder/2.webp";
import bg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import SecondSection from "../../../../Components/Shared/SecondSection";
const logos = [tableau, sage, a, b, c, d, e, f, g];

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

const Investment = () => {
  const servicesData = [
    {
      title: "Investment Advisory & Facilitation in Bangladesh",
      icon: BarChart3,
      description:
        "Identify and secure the right investment opportunities in Bangladesh. We guide you through market entry, investor connections, and strategic planning for business growth.",
    },
    {
      title: "Strategic Partnership Development",
      icon: ShieldCheck,
      description:
        "Build strong business partnerships in Bangladesh with reliable local and international partners to expand operations and unlock new opportunities.",
    },
    {
      title: "Market Entry & Business Networking",
      icon: DollarSign,
      description:
        "Facilitate smooth market entry in Bangladesh through local insights, networking, and connections that accelerate your business expansion.",
    },
  ];

  const benefitsData = [
    {
      title: "Access To Verified Investors",
      icon: FaCheckCircle,
    },
    {
      title: "Strong Business Partnerships",
      icon: FaCheckCircle,
    },
    {
      title: "Faster Market Entry",
      icon: FaCheckCircle,
    },
    {
      title: "Strategic Growth Opportunities",
      icon: FaCheckCircle,
    },
    {
      title: "Reduced Business Risks",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        bgImage={bg}
        alt="Bangladesh Business Setup"
        heading={
          <>
            Expand Through Strategic <br />
            <span className="text-light-blue">Partnerships in Bangladesh</span>
          </>
        }
        description={
          <>
            Unlock growth opportunities with investment and partnership
            facilitation services in Bangladesh. <strong>de tempête</strong>{" "}
            connects businesses with the right investors, partners, and market
            opportunities, helping you expand, collaborate, and scale with
            confidence in Bangladesh's growing economy.
          </>
        }
        ctaText="Request Consultation"
      />

      <SecondSection></SecondSection>

      {/* What We Offer Section */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[#13264d] mb-4">
              About Our Investment & Partnership{" "}
              <span className="text-light-blue">Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Entering new markets or scaling operations requires the right
              connections and strategy. Our investment and partnership
              facilitation services in Bangladesh help businesses identify
              opportunities, build strong partnerships, and secure strategic
              investments for sustainable growth.
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
                  <div className="w-16 h-16 rounded-xl bg-[#e0f4ff] flex items-center justify-center mb-6">
                    <Icon className="text-light-blue text-4xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#16244b] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-7">
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
            <h2 className="text-5xl font-bold text-white">What You Gain</h2>
            <div className="w-24 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-8 text-center hover:bg-[#43507d] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-light-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white text-3xl" />
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
            <h2 className="text-5xl font-bold text-[#16244b]">
              Why Choose us for Investment in Bangladesh?
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strong Market Insights",
                desc: "Deep understanding of Bangladesh business landscape",
              },
              {
                title: "Verified Network Access",
                desc: "Connect with reliable investors and partners",
              },
              {
                title: "Strategic Growth Approach",
                desc: "Focus on long-term, sustainable expansion",
              },
              {
                title: "Tailored Opportunities",
                desc: "Solutions aligned with your business goals",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#f8fbff] to-white rounded-2xl p-8 border border-[#e0f4ff] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center mb-6">
                  <FaCheckCircle className="text-white text-xl" />
                </div>

                <h3 className="text-xl font-bold text-[#16244b] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA
        heading={
          <>
            Grow Your Business In
            <br />
            <span className="font-bold">Bangladesh Today</span>
          </>
        }
        subheading="Get expert guidance, connect with the right partners, and expand your business with confidence."
        commitmentTitle="Why Partner With Us"
        commitmentItems={[
          "Free initial consultation with investment experts",
          "Access to trusted investors and strategic partners",
          "End-to-end support for investment and partnership facilitation",
          "Local market insights and regulatory guidance",
          "Tailored solutions aligned with your business goals",
        ]}
      />

      

      {/* Technological Partner Section */}

      <section className="py-24  bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-light text-[#16244B] mb-20">
            Technological <span className="font-bold">Partner</span>
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex items-center"
              style={{
                animation: "scrollLeft 35s linear infinite",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="shrink-0 ">
                  <img
                    src={logo}
                    alt="Partner"
                    className="h-45 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
      @keyframes scrollLeft {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>
        </div>
      </section>
    </div>
  );
};

export default Investment;
