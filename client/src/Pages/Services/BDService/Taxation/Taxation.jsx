import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
const servicesData = [
  {
    title: "Corporate Tax Management Service",
    description:
      "Support for corporate tax preparation, documentation, filing coordination, and compliance management.",
    items: [
      "Corporate tax documentation",
      "Tax filing coordination",
      "Financial record reviews",
      "Tax compliance support",
      "Business tax structuring",
    ],
    imagePosition: "left",
    image: "/src/asstes/Images/servics/Bd/taxation-in-bangladesh.webp",
  },
  {
    title: "VAT & Indirect Tax Support",
    description:
      "Structured VAT management solutions to help businesses maintain proper reporting and compliance.",
    items: [
      "VAT registration support",
      "VAT documentation management",
      "VAT return coordination",
      "Transaction record reviews",
      "Indirect tax assistance",
    ],
    imagePosition: "right",
    image: "/src/asstes/Images/servics/Bd/VAT.webp",
  },
  {
    title: "Tax Planning & Advisory Service",
    description:
      "Strategic tax guidance to help businesses improve financial planning and manage tax obligations effectively.",
    items: [
      "Tax planning support",
      "Financial structuring guidance",
      "Risk reduction strategies",
      "Tax process organization",
      "Compliance advisory support",
    ],
    imagePosition: "left",
    image: "/src/asstes/Images/servics/Bd/Tax-planning-support.webp",
  },
];

const Taxation = () => {
  const benefitsData = [
    {
      title: "Strong Digital Presence",
      icon: FaCheckCircle,
    },
    {
      title: "Faster Business Operations",
      icon: FaCheckCircle,
    },
    {
      title: "Smart Automated Systems",
      icon: FaCheckCircle,
    },
    {
      title: "Scalable Growth Solutions",
      icon: FaCheckCircle,
    },
    {
      title: "Improved User Experience",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Bangladesh Business Setup"
        heading={
          <>
            Simplify Tax Management &<br />
            <span className="text-light-blue">
              Stay Compliant in Bangladesh
            </span>
          </>
        }
        description="de tempête provides taxation and compliance support services in Bangladesh, helping businesses manage tax obligations, maintain accurate financial records, and reduce regulatory risks through structured tax solutions."
        ctaText="Request Consultation"
      />

      <StatsSection
        bgColor="bg-white"
        maxWidth="max-w-9xl"
        stats={[
          { icon: BarChart3, end: 9, label: "Years of Experience" },
          { icon: PieChart, end: 20, label: "Countries Covered" },
          {
            icon: TrendingUp,
            end: 30000,
            duration: 3000,
            label: "Clients Served",
          },
          { icon: Award, end: 120, duration: 2500, label: "Awards Received" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl font-bold text-[#16244b] mb-6">
              Our Taxation Services In Bangladesh
            </h2>
            <p className="text-lg text-gray-600 leading-8 mb-4">
              de tempête delivers reliable and compliant taxation services in
              Bangladesh, helping businesses navigate the country's evolving tax
              framework with confidence. Our approach is aligned with the
              regulations of the National Board of Revenue (NBR), ensuring
              accurate tax handling across VAT, corporate tax, and statutory
              filings. From tax registration and documentation to ongoing
              compliance and reporting, we support businesses in maintaining
              structured, audit-ready financial records.
            </p>
            <p className="text-lg text-gray-600 leading-8">
              We help reduce tax-related risks, improve reporting accuracy, and
              streamline tax processes so your operations remain smooth and
              fully compliant. With a focus on clarity, efficiency, and
              long-term financial stability, de tempête ensures your business
              stays aligned with Bangladesh's regulatory requirements while
              supporting sustainable growth.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <div key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${service.imagePosition === "right" ? "lg:grid-cols-2" : ""}`}
                >
                  {/* Image Left */}
                  {service.imagePosition === "left" && (
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <h3 className="text-4xl font-bold text-[#16244b]">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {service.description}
                    </p>
                    <div className="space-y-1">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <FaCheckCircle className="text-cyan-500 text-lg shrink-0" />
                          <span className="text-gray-600 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Right */}
                  {service.imagePosition === "right" && (
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl text-[#16244b]">
              Why Choose Our{" "}
              <span className="text-light-blue font-extrabold">Taxation</span>{" "}
              Service?
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Tax Compliance Expertise",
                desc: "Support aligned with Bangladesh taxation laws, filing requirements, and business regulations.",
              },
              {
                title: "Accurate Tax Documentation",
                desc: "Structured tax records and reporting processes to reduce errors and compliance risks.",
              },
              {
                title: "Business-Focused Tax Support",
                desc: "Practical taxation solutions designed to support operational efficiency and financial clarity.",
              },
              {
                title: "End-to-End Coordination",
                desc: "From tax preparation to submission support, we help manage the complete taxation process.",
              },
              {
                title: "Efficient Financial Organization",
                desc: "Improved financial tracking and tax management systems for smoother business operations.",
              },
              {
                title: "Reliable Ongoing Assistance",
                desc: "Continuous support to help businesses stay updated with changing tax requirements.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#f8fbff] to-white rounded-2xl p-8 border border-[#e0f4ff] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>

                  <h3 className="text-xl font-bold text-[#16244b]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7">{feature.desc}</p>
              </div>
            ))}
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

      <ConsultationCTA
        heading={
          <>
            Build Smarter Digital Systems in Bangladesh
            <br />
            <span className="font-bold">Today</span>
          </>
        }
        commitmentTitle="Get expert guidance and transform your business with the right digital and technology solutions."
        commitmentTitleOnly
      />

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Taxation;
