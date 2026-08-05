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
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import tableau from "../../../../asstes/img_temp/New folder/9-1.webp";
import sage from "../../../../asstes/img_temp/New folder/3-2.webp";
import a from "../../../../asstes/img_temp/New folder/11-1.webp";
import b from "../../../../asstes/img_temp/New folder/12-1-934x1024.webp";
import c from "../../../../asstes/img_temp/New folder/7-2.webp";
import d from "../../../../asstes/img_temp/New folder/8.webp";
import e from "../../../../asstes/img_temp/New folder/13-1.webp";
import f from "../../../../asstes/img_temp/New folder/6-1.webp";
import g from "../../../../asstes/img_temp/New folder/2.webp";
const logos = [tableau, sage, a, b, c, d, e, f, g];

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
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import businessAutomationImg from '../../../../asstes/img_temp/servics/Bd/Business-Process-Automation.webp'
import AccountingSoftwareImplementation from "../../../../Components/Shared/Accountingsoftwareimplementation";

const usaFeatures = [
  {
    title: "Software selection",
    description: "QuickBooks, Xero, Sage Intacct, or NetSuite based on your business requirements.",
  },
  {
    title: "Chart of accounts setup",
    description: "Design a structured chart of accounts for accurate financial management.",
  },
  {
    title: "Payroll module setup",
    description: "Configure payroll processing, employee records, and tax settings.",
  },
  {
    title: "Data migration",
    description: "Migrate opening balances and historical transactions from legacy accounting systems.",
  },
  {
    title: "User access controls",
    description: "Establish secure user roles, permissions, and approval workflows.",
  },
  {
    title: "Staff training & handover",
    description: "Deliver software training and comprehensive handover documentation.",
  },
];

const TechnologyUSA = () => {
  const servicesData = [
    {
      title: "Cloud Accounting",
      description:
        "Modern cloud-based accounting solutions on platforms like QuickBooks Online and Xero for smarter, real-time financial management.",
      icon: FaCloud,
    },
    {
      title: "ERP & Workflow Systems",
      description:
        "Streamlined ERP and workflow systems, including Odoo implementation, designed to improve operational efficiency.",
      icon: FaProjectDiagram,
    },
    {
      title: "Financial Software",
      description:
        "Technology-driven financial tools, including Zoho Books, that support business growth, reporting, and multi-entity accounting.",
      icon: FaChartLine,
    },
    {
      title: "Business Management Tools",
      description:
        "Integrated software solutions for managing daily business operations across accounting, sales, and operations teams.",
      icon: FaBriefcase,
    },
    {
      title: "Reporting Systems",
      description:
        "Automated reporting systems that provide accurate real-time business insights across your accounting platforms.",
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
      <SevicsBanner
        bgImage={bgimg}
        alt="USA Cloud Accounting & Technology Advisory"
        description="Modernize your business operations with our cloud accounting, ERP, and digital operations advisory services. From platform selection to full software implementation across QuickBooks Online, Odoo, Xero, and Zoho Books, we help US businesses reduce manual work, automate operations, and run on systems built for growth."
        title1={"Cloud Accounting & ERP"}
        title2={"Advisory For Modern US Businesses"}
      ></SevicsBanner>

      
      {/* ===================== What We Offer ===================== */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl leading-tight text-[#16244b]">
              <span className="font-light">Software Solutions For</span>{" "}
              <span className="font-bold">Businesses</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 max-w-4xl mx-auto">
              We help businesses implement and optimize modern software
              solutions, including cloud accounting platforms, ERP systems,
              and operational tools that improve efficiency and reduce
              manual work. Our team supports implementation and ongoing
              management across QuickBooks Online, Odoo, Xero, and Zoho
              Books.
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

                  <p className="text-gray-600 text-base leading-8">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Business Process Automation ===================== */}

      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}

            <div>
              <h2 className="text-5xl leading-tight text-[#16244b] mb-4">
                <span className="font-light">Business Process</span>
                <br />
                <span className="font-bold">Automation</span>
              </h2>

              <p className="text-base leading-8 text-gray-600 mb-6 max-w-xl">
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
                src={businessAutomationImg}
                alt="Business Process Automation Dashboard"
                className="w-full scale-110 origin-center"
              />
            </div>
          </div>
        </div>
      </section>
      <AccountingSoftwareImplementation features={usaFeatures}></AccountingSoftwareImplementation>

      

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-dark-blue">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl text-white">
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
                desc: "Smooth setup and support across QuickBooks Online, Odoo, Xero, and Zoho Books.",
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
                className="bg-gray-700/40 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Technological Partner Section */}

      <section className="pt-15 bg-white overflow-hidden">
        <div className=" mx-auto max-w-7xl px-6">
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
<ConsultationCTA
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
      
    </div>
  );
};

export default TechnologyUSA;