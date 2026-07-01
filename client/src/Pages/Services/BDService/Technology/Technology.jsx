import { useState, useEffect } from "react";
import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";

import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {
  FiFileText,
  FiGitPullRequest,
  FiDatabase,
  FiBarChart2,
  FiRepeat,
} from "react-icons/fi";

const automationFeatures = [
  {
    icon: FiFileText,
    title: "Automated Invoicing",
    description:
      "Generate, manage, and track invoices automatically with improved accuracy.",
  },
  {
    icon: FiRepeat,
    title: "Workflow Automation",
    description:
      "Simplify approvals, operational tasks, and internal business workflows.",
  },
  {
    icon: FiDatabase,
    title: "Data Synchronization",
    description:
      "Keep your business data connected and updated across multiple platforms.",
  },
  {
    icon: FiGitPullRequest,
    title: "Approval Systems",
    description:
      "Create structured approval flows for faster and more controlled operations.",
  },
  {
    icon: FiBarChart2,
    title: "Reporting Automation",
    description:
      "Access real-time reports and valuable business insights automatically.",
  },
];

import {
  FaCloud,
  FaProjectDiagram,
  FaChartLine,
  FaBriefcase,
  FaChartBar,
} from "react-icons/fa";

import tableau from "/src/asstes/Images/New folder/9-1.webp";
import sage from "/src/asstes/Images/New folder/3-2.webp";
import a from "/src/asstes/Images/New folder/11-1.webp";
import b from "/src/asstes/Images/New folder/12-1-934x1024.webp";
import c from "/src/asstes/Images/New folder/7-2.webp";
import d from "/src/asstes/Images/New folder/8.webp";
import e from "/src/asstes/Images/New folder/13-1.webp";
import f from "/src/asstes/Images/New folder/6-1.webp";
import g from "/src/asstes/Images/New folder/2.webp";

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

const Technology = () => {
  const servicesData = [
    {
      title: "Cloud Accounting",
      description:
        "Modern cloud-based accounting solutions for smarter financial management.",
      icon: FaCloud,
    },
    {
      title: "Workflow Systems",
      description:
        "Streamlined workflow systems designed to improve operational efficiency.",
      icon: FaProjectDiagram,
    },
    {
      title: "Financial Software",
      description:
        "Technology-driven financial tools that support business growth and reporting.",
      icon: FaChartLine,
    },
    {
      title: "Business Management Tools",
      description:
        "Integrated software solutions for managing daily business operations.",
      icon: FaBriefcase,
    },
    {
      title: "Reporting Systems",
      description:
        "Automated reporting systems that provide accurate real-time business insights.",
      icon: FaChartBar,
    },
  ];

  const benefitsData = [
    {
      title: "System Monitoring",
      description: "Real-time monitoring for stable business operations.",
      icon: FaCheckCircle,
    },
    {
      title: "Software Updates",
      description: "Keeping systems optimized, secure, and up to date.",
      icon: FaCheckCircle,
    },
    {
      title: "Issue Troubleshooting",
      description: "Quick resolution of technical and operational issues.",
      icon: FaCheckCircle,
    },
    {
      title: "Technical Assistance",
      description: "Continuous support for day-to-day system needs.",
      icon: FaCheckCircle,
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
            Expand Through Strategic <br />
            <span className="text-light-blue">Partnerships in Bangladesh</span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Unlock growth opportunities with investment and partnership
            facilitation services in Bangladesh. <strong>de tempête</strong>{" "}
            connects businesses with the right investors, partners, and market
            opportunities, helping you expand, collaborate, and scale with
            confidence in Bangladesh’s growing economy.
          </p>

          <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-light-blue hover:border-light-blue hover:text-black duration-300">
            Request Consultation
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10">
        <div className="max-w-9xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Heading */}
            <div>
              <h2 className="text-[#14224A] text-2xl lg:text-3xl font-bold">
                Why Choose Us?
              </h2>
            </div>

            {/* Stat 1 */}
            <div className="flex items-center gap-5">
              <BarChart3 size={70} className="text-[#14224A] stroke-[1.2]" />

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
              <PieChart size={70} className="text-[#14224A] stroke-[1.2]" />

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
              <TrendingUp size={70} className="text-[#14224A] stroke-[1.2]" />

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
              <Award size={70} className="text-[#14224A] stroke-[1.2]" />

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

      {/* ===================== What We Offer ===================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl leading-tight text-[#16244b]">
              <span className="font-light">Software Solutions For</span>{" "}
              <span className="font-bold">Businesses</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
              We help businesses implement and optimize modern software
              solutions, including cloud accounting platforms, workflow systems,
              and operational tools that improve efficiency and reduce manual
              work.
            </p>
          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border border-gray-200 rounded-xl overflow-hidden">
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-8 border-r border-b lg:border-b-0 last:border-r-0 border-gray-200 hover:bg-[#f8fbff] duration-300"
                >
                  {/* Icon */}

                  <div className="mb-8">
                    <Icon className="text-light-blue text-5xl" />
                  </div>

                  {/* Title */}

                  <h3 className="text-[28px] font-bold leading-snug text-[#16244b] mb-5">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-600 text-lg leading-8">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Business Process Automation ===================== */}

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}

            <div>
              <h2 className="text-5xl leading-tight text-[#16244b] mb-4">
                <span className="font-light">Business Process</span>
                <br />
                <span className="font-bold">Automation</span>
              </h2>

              <p className="text-lg leading-8 text-gray-600 mb-6 max-w-xl">
                We help businesses eliminate repetitive work, automate everyday
                operations, and improve productivity through intelligent digital
                workflows and cloud-based business solutions.
              </p>

              {/* Features */}

              <div className="space-y-5">
                {automationFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-start gap-3">
                      {/* Icon */}

                      <div className="w-16 h-16 rounded-xl bg-[#f5f9ff] border border-[#dce9ff] flex items-center justify-center shrink-0">
                        <Icon className="text-light-blue text-3xl" />
                      </div>

                      {/* Text */}

                      <div>
                        <h3 className="text-2xl font-bold text-[#16244b] ">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side */}

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/src/asstes/Images/servics/Bd/Business-Process-Automation.webp"
                alt="Business Dashboard"
                className="w-full scale-110 origin-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white">
              Continuous Support
            </h2>
            <div className="w-30 h-0.5 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#39446B] border border-white/10 rounded-2xl py-10 px-8 hover:bg-[#43507d] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-8 h-8 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-white text-xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-7 text-base">
                  {benefit.description}
                </p>
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
            <h2 className="text-6xl text-[#16244b]">
              Why choose our{" "}
              <span className="text-light-blue font-extrabold">
                technology services?
              </span>
            </h2>
            <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Practical Business Automation",
                desc: "Helping businesses reduce manual work and improve daily operations.",
              },
              {
                title: "Reliable Software Implementation",
                desc: "Smooth setup and support for modern business and accounting software.",
              },
              {
                title: "Improved Operational Efficiency",
                desc: "Technology solutions designed to save time and increase accuracy.",
              },
              {
                title: "Cloud Accounting Expertise",
                desc: "Experience with leading cloud accounting and financial software platforms.",
              },
              {
                title: "Ongoing Technical Support",
                desc: "Continuous assistance to ensure systems run smoothly and efficiently.",
              },
              {
                title: "Business-Centered Approach",
                desc: "Technology solutions tailored to real operational and business needs.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-[#f8fbff] to-white rounded-2xl p-8 border border-[#e0f4ff] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center flex-shrink-0">
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

      {/* Get Started Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-5xl leading-tight font-light text-white">
                Transform Your Business with
                <br />
                <span className="font-bold">Systems Smart Technology</span>
              </h2>

              {/* Commitment Card */}
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Our Commitment
                </h3>

                <div className="">
                  {[
                    "Free initial consultation — no obligation",
                    "Tailored digital & technology solutions",
                    "Scalable and automation-ready systems",
                    "Expert support and strategic guidance",
                    "Transparent and efficient process",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <FaCircleCheck className="text-light-blue text-xl shrink-0" />
                      <span className="text-gray-200 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-4xl font-bold text-[#16244B] mb-8">
                  Book a Free Consultation
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder=""
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-light-blue"
                    />
                  </div>

                  <button className="w-full bg-light-blue hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technological Partner Section */}

      <section className="pt-15 bg-white overflow-hidden">
        <div className=" mx-auto px-6">
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
                    className="h-60 object-contain"
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

export default Technology;
