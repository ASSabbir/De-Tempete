import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { ShieldCheck, Users, DollarSign } from "lucide-react";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
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

  return (
    <div className="w-full">
      <HeroSection
        bgImage="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
        alt="Bangladesh Business Setup"
        heading={
          <>
            Upskill Your Workforce
            <br />
            <span className="text-light-blue">
              Training & Mentorship Programs
            </span>
            <br />
            For Bangladesh Businesses
          </>
        }
        description={
          <>
            Empower your team with{" "}
            <strong>
              professional training and mentorship programs in Bangladesh
            </strong>{" "}
            designed to enhance skills, improve productivity, and build
            long-term organizational capacity. <strong>de tempête</strong>{" "}
            delivers structured learning solutions tailored to your business
            needs, helping individuals and teams perform better, adapt faster,
            and grow confidently.
          </>
        }
        ctaText="Request Training Consultation"
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

      {/* About Our Training & Mentorship Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl font-bold text-[#16244b] mb-6">
              About Our Training & Mentorship Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-8">
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
              Why Choose Us For Training, Mentorship & Capacity Building?
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
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

      <RecentBlogs blogs={blogPosts} />
    </div>
  );
};

export default Training;
