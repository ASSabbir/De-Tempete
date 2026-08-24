import { motion } from "framer-motion";
import {
  FiFileText,
  FiGitPullRequest,
  FiDatabase,
  FiBarChart2,
  FiRepeat,
} from "react-icons/fi";
import { HeroSection } from "@/Components/Shared/HeroSection";

import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { FaBoxes } from "react-icons/fa";
import logo from '../../../../asstes/img_temp/logo.webp'
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
import img1 from '../../../../asstes/img_temp/servics/UK/Business-Process-Automation.png'
import SecondSection from "../../../../Components/Shared/SecondSection";
import AccountingSoftwareImplementation from "../../../../Components/Shared/Accountingsoftwareimplementation";
const logos = [tableau, sage, a, b, c, d, e, f, g];
const bangladeshFeatures = [
  {
    title: "Software selection",
    description: "Tally Prime, QuickBooks, Xero, Odoo, or Zoho tailored to your business needs.",
  },
  {
    title: "Chart of accounts setup",
    description: "Customized account structure designed for accurate financial reporting.",
  },
  {
    title: "Payroll module setup",
    description: "Configure payroll processes, employee records, and salary calculations.",
  },

  {
    title: "Data migration",
    description: "Transfer opening balances and historical transactions from existing systems.",
  },
  {
    title: "Automated Reporting & Dashboards",
    description: "Set up real-time financial reports and dashboards for faster, data-driven decisions.",
  },
  {
    title: "User access controls",
    description: "Set up secure user roles, permissions, and approval workflows.",
  },
  {
    title: "Staff training & handover",
    description: "Provide practical training and documentation for smooth adoption.",
  },
  {
    title: "Customized Software Solutions",
    description: "Tailored accounting software features, workflows, and integrations designed around your specific business needs.",
  },
   {
    title: "Third-Party Software Integration",
    description:
      "Connect accounting systems with CRM, ERP, e-commerce, payment, and other business platforms.",
  },

];
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
    {
      title: "Inventory Management Software",
      description:
        "Smart inventory management solutions for tracking stock, orders, and business operations efficiently.",
      icon: FaBoxes,
    },
  ];

  const IconWrap = ({ children, isDark }) => (
    <div
      className={`w-12 h-12 rounded-sm flex items-center justify-center text-2xl ${isDark
          ? "bg-white/15 text-white"
          : "bg-light-blue/20 text-light-blue"
        }`}
    >
      {children}
    </div>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: (i % 3) * 0.12,
        ease: "easeOut",
      },
    }),
  };
  const id = 'services-bd-tech'

  return (
    <div className="w-full">
      <HeroSection
        id={id}
        bgImage={bg}
        alt="Bangladesh Business Setup"
        heading={
          <>
            Transform Your Business with  <br />
            <span className="text-light-blue">Smarter Technology</span>
          </>
        }
        description={
          <>
            <strong><i>de tempête</i></strong>{" "} provides <strong>digital transformation and business technology solutions in Bangladesh,</strong> helping startups, SMEs and growing businesses streamline operations, automate processes and improve decision-making. From <strong>ERP and accounting software implementation to cloud solutions, workflow automation and system integration,</strong> we combine technology with business expertise to build efficient, scalable and future-ready operations.
          </>
        }
        ctaText="Request Consultation"
      />

      <SecondSection></SecondSection>
      {/* ===================== What We Offer ===================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b]">
              <span className="font-light">Software Solutions For</span>{" "}
              <span className="font-bold">Businesses</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 text-justify max-w-4xl mx-auto">
              We help businesses implement and optimize modern software
              solutions, including cloud accounting platforms, workflow systems,
              and operational tools that improve efficiency and reduce manual
              work.
            </p>
          </div>

          {/* Signature Chessboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              const row = Math.floor(index / 3);
              const col = index % 3;

              // Blue / White chessboard pattern
              const isDark = (row + col) % 2 === 0;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`flex p-10 flex-col gap-4 duration-300 hover:shadow-2xl ${isDark ? "bg-light-blue" : "bg-white"
                    }`}
                >
                  {/* Icon */}
                  <div className="w-fit">
                    <IconWrap isDark={isDark}>
                      <Icon />
                    </IconWrap>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#16244b]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed text-justify ${isDark ? "text-gray-700" : "text-gray-500"
                      }`}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Business Process Automation ===================== */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}

            <div>
              <h2 className="text-4xl 2xl:text-5xl leading-tight text-[#16244b] mb-4">
                <span className="font-light">Business Process</span>
                <br />
                <span className="font-bold">Automation</span>
              </h2>

              <p className="text-base text-justify leading-8 text-gray-600 mb-6 max-w-xl">
                We help businesses eliminate repetitive work, automate everyday
                operations, and improve productivity through intelligent digital
                workflows and cloud based business solutions.
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

                        <p className="text-gray-600 text-base">
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
                src={img1}
                alt="Business Dashboard"
                className="w-full scale-110 origin-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <AccountingSoftwareImplementation features={bangladeshFeatures}></AccountingSoftwareImplementation>

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl 2xl:text-6xl text-[#16244b]">
        Why choose our{" "}
        <span className="text-dark-blue font-extrabold">
          technology services?
        </span>
      </h2>

      <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8" />
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      ].map((feature, index) => {
        // Chessboard pattern:
        // Row 1 → Blue, White, Blue
        // Row 2 → White, Blue, White
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
      <section className="pt-5 bg-white overflow-hidden">
        <div className=" mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl 2xl:text-5xl font-light text-[#16244B] mb-20">
            Technological <span className="font-bold">Partner</span>
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex items-center"
              style={{
                animation: "scrollLeft1 10s linear infinite",
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
      @keyframes scrollLeft1 {
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

      <ConsultationCTA
        id={id}
        heading={
          <>
            Transform Your Business with
            <br />
            <span className="font-bold">Systems Smart Technology</span>
          </>
        }
        commitmentItems={[
          "Free initial consultation — no obligation",
          "Tailored digital & technology solutions",
          "Scalable and automation-ready systems",
          "Expert support and strategic guidance",
          "Transparent and efficient process",
        ]}
      />

      {/* Technological Partner Section */}


    </div>
  );
};

export default Technology;
