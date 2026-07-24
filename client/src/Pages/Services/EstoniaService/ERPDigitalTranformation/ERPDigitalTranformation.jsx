// File: ERPDigitalTranformation.jsx
import { useState, useEffect } from "react";
import {
    CalendarDays,
    Globe,
    Handshake,
    Medal,
    ChevronDown,
    Building2,
    LineChart,

    Blocks,
    BookOpenText,
    Megaphone,
    HandCoins,
    ShoppingBag,
    Sparkles,
    Briefcase,
} from "lucide-react";

import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from "../../../../Components/Shared/SevicsBanner";
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/BG-Build-Strong-Strategic-Alliances-Partnerships-Networking-Support_-1.webp'
import KeyBenefits from "../../../Home/Expertise/VirtualCfo/Keybenefits";
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
            } else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration]);
    return count;
};

const sectors = [
    {
        icon: Building2,
        title: "Finance & Accounting",
        desc: "Automate financial reporting, budgeting, accounts payable and receivable, and gain real-time visibility into your business performance.",
    },
    {
        icon: LineChart,
        title: "Sales & CRM",
        desc: "Centralize customer information, streamline sales pipelines, and improve customer engagement with integrated CRM solutions.",
    },
    {
        icon: Blocks,
        title: "Inventory & Supply Chain",
        desc: "Optimize inventory levels, procurement, warehouse management, and supply chain operations through connected ERP workflows.",
    },
    {
        icon: BookOpenText,
        title: "Human Resources",
        desc: "Digitize employee records, payroll, attendance, leave management, and performance tracking within a unified platform.",
    },
    {
        icon: Megaphone,
        title: "Project Management",
        desc: "Manage projects, resources, budgets, and timelines with real-time collaboration and performance tracking tools.",
    },
    {
        icon: HandCoins,
        title: "Procurement",
        desc: "Simplify purchasing processes, supplier management, approvals, and procurement workflows with intelligent automation.",
    },
    {
        icon: ShoppingBag,
        title: "Manufacturing & Operations",
        desc: "Improve production planning, resource allocation, quality control, and operational efficiency through integrated ERP systems.",
    },
    {
        icon: Sparkles,
        title: "Business Intelligence",
        desc: "Transform business data into actionable insights with interactive dashboards, analytics, and performance reporting.",
    },
    {
        icon: Briefcase,
        title: "Digital Strategy",
        desc: "Develop a comprehensive digital transformation roadmap that aligns technology investments with your long-term business objectives.",
    },
];
const marketingItems = [
  {
    title: "ERP Strategy & Planning",
    desc: "Assess business requirements, define implementation roadmaps, and select the right ERP solution for your organization.",
  },
  {
    title: "ERP Implementation",
    desc: "Deploy and configure ERP systems with minimal disruption while ensuring seamless adoption across your business.",
  },
  {
    title: "Business Process Automation",
    desc: "Automate repetitive workflows to improve efficiency, reduce manual effort, and increase operational productivity.",
  },
  {
    title: "System Integration & Data Migration",
    desc: "Integrate existing business applications and securely migrate data to create a unified digital ecosystem.",
  },
  {
    title: "Training & Ongoing Support",
    desc: "Empower your teams with user training, continuous optimization, and dedicated support for long-term ERP success.",
  },
];

const whyChoose = [
    {
        title: "Strategic Digital Roadmaps",
        desc: "Develop tailored ERP and digital transformation strategies aligned with your organization's objectives.",
    },
    {
        title: "Technology-Driven Efficiency",
        desc: "Automate business processes and optimize workflows to improve productivity and operational performance.",
    },
    {
        title: "Enterprise-Wide Integration",
        desc: "Connect core business functions through a unified ERP ecosystem for seamless collaboration and data accuracy.",
    },
    {
        title: "Actionable Business Intelligence",
        desc: "Leverage real-time dashboards and analytics to support informed decision-making across your organization.",
    },
    {
        title: "Scalable Digital Infrastructure",
        desc: "Build a flexible technology foundation that adapts to evolving business requirements and future growth.",
    },
    {
        title: "Trusted Implementation Partner",
        desc: "Benefit from experienced consultants who ensure smooth deployment, user adoption, and continuous optimization.",
    },
];
const benefits = [
    "Streamlined business processes through ERP automation",
    "Improved operational efficiency across every department",
    "Real-time visibility into business performance and KPIs",
    "Enhanced collaboration with integrated business systems",
    "Scalable ERP solutions tailored to your business growth",
    "Reduced manual work, increased accuracy, and smarter decision-making",
];

const keyBenefittext = [
    "Key Benefits",
    "of Choosing de tempête ERP & Digital Transformation",
];

const ERPDigitalTranformation = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const toggleAccordion = (idx) =>
        setExpandedItem(expandedItem === idx ? null : idx);

    return (
        <div className="w-full">

            <SevicsBanner bgImage={bgimg} alt="Bangladesh Business Setup"
                description="Modernize your business with integrated ERP and digital transformation solutions designed to improve efficiency, automate workflows, and deliver real-time insights. We help organizations streamline operations, enhance collaboration, and build a scalable digital foundation for sustainable growth."
                title1={'Transform Business Operations'}
                title2={'With Smart ERP Solutions'}

            ></SevicsBanner>


            {/* Strategic Alliances */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#16244b]">
                            Accelerate Your{" "}
                            <span className="font-light">
                                ERP & Digital Transformation Journey
                            </span>
                        </h2>

                        <p className="mt-5 text-gray-500 leading-7">
                            Modern businesses need connected systems to stay competitive. We help
                            organizations implement ERP solutions, automate business processes, and
                            integrate digital technologies that improve efficiency, enhance
                            collaboration, and provide real-time visibility across every department.
                        </p>

                        <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                            Our expertise includes:
                        </h4>

                        <div className="space-y-3">
                            {[
                                "ERP Selection & Implementation",
                                "Business Process Automation",
                                "System Integration & Data Migration",
                                "Digital Strategy & Change Management",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-light-blue text-lg shrink-0" />
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <img
                        src={img1}
                        alt="ERP & Digital Transformation"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/*  Business Functions We Transform */}
            <section className="py-24 bg-[#F5F6F8]">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            Business Functions We <span className="font-bold">Transform</span>
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Integrated ERP solutions designed to streamline operations, improve collaboration, and accelerate digital transformation across your organization.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {sectors.map((item, index) => (
                            <div key={index}>
                                <item.icon className=" bg-light-blue p-2 text-white rounded-2xl mb-3" size={32} strokeWidth={1.5} />
                                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>




            {/* Why Choose */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            Why Choose Our{" "}
                            <span className="font-bold">ERP & Digital Transformation Services?</span>
                        </h2>
                        <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mt-16">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <LuChartNoAxesCombined className="text-light-blue text-2xl mb-3" />
                                <h3 className="text-lg font-bold text-[#16244b] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationCTA
                heading={
                    <>
                        Ready To Build A
                        <br />
                        <span className="font-bold">Smarter Business?</span>
                    </>
                }
                subheading="Discover how ERP and digital transformation can simplify operations, connect your teams, and unlock greater efficiency across your organization."
                commitmentItems={[
                    "Personalized ERP readiness assessment",
                    "Expert implementation and migration support",
                    "Business process optimization and automation",
                    "Ongoing training, support, and system enhancement",
                ]}
            />

            {/* Marketing Strategy Accordion */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-gray-900 mb-2">
    ERP Implementation &
    <span className="block">Digital Transformation Solutions</span>
  </h2>

  <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm font-semibold">
    Transform Operations. Improve Efficiency. Drive Growth.
  </p>

  <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm">
    We help businesses modernize their operations through ERP implementation,
    business process automation, system integration, and digital transformation
    strategies that improve productivity, enhance collaboration, and enable
    smarter, data-driven decision-making.
  </p>
</div>

                    <div className="space-y-4">
                        {marketingItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-md bg-linear-to-br from-blue-400 to-light-blue flex items-center justify-center text-white text-sm">
                                            ✦
                                        </div>
                                        <span className="font-semibold text-gray-900">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {expandedItem === idx && (
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ERPDigitalTranformation;
