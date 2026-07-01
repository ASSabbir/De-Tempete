import { useState, useEffect } from "react";
import { BarChart3, PieChart, TrendingUp, Award } from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

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
            Simplify Tax Management &
            <br />
            <span className="text-light-blue">
              Stay Compliant in Bangladesh
            </span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
            de tempête provides taxation and compliance support services in
            Bangladesh, helping businesses manage tax obligations, maintain
            accurate financial records, and reduce regulatory risks through
            structured tax solutions.
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
                          <FaCheckCircle className="text-cyan-500 text-lg flex-shrink-0" />
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

      {/* Get Started Section */}
      <section className="bg-[#16244B] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-5xl leading-tight font-light text-white">
                Build Smarter Digital Systems in Bangladesh
                <br />
                <span className="font-bold">Today</span>
              </h2>

              {/* Commitment Card */}
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get expert guidance and transform your business with the right
                  digital and technology solutions.{" "}
                </h3>
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
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message..."
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

      {/* Recent Blogs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-[#16244b]">
              Recent
              <span className="font-bold"> Blogs</span>
            </h2>

            <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Blog Cards */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                image: "/src/asstes/Images/New folder/council-tax.webp",
                title:
                  "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
                desc: "Council tax can sometimes become a financial burden. Learn practical ways to create a manageable arrangement plan and avoid unnecessary penalties.",
              },
              {
                id: 2,
                image:
                  "/src/asstes/Images/New folder/self-assessment-tax-return.webp",
                title:
                  "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
                desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process.",
              },
              {
                id: 3,
                image:
                  "/src/asstes/Images/New folder/Virtual-CFO-2048x1366.webp",
                title:
                  "The Role and Benefits of a Virtual CFO in Modern Businesses",
                desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual CFO.",
              },
            ].map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 duration-500"
                  />
                </div>

                {/* Content */}

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-[#16244b] leading-snug mb-4 group-hover:text-cyan-500 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-lg leading-8 mb-8">
                    {blog.desc}
                  </p>

                  <a
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-cyan-500 font-semibold hover:gap-4 duration-300"
                  >
                    Read More
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Taxation;
