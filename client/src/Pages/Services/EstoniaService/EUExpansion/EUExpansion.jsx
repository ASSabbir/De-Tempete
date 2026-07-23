// File: EUExpansion.jsx
import { useState } from "react";
import {
    CalendarDays,
    Globe,
    Handshake,
    Medal,
    ChevronDown,
    LucideLineChart,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import {
    LuBuilding,
    LuShoppingCart,
    LuStethoscope,
    LuHouse,
    LuUtensils,
    LuBriefcase,
    LuChartNoAxesCombined,
    LuGlobe,
    LuNetwork,
    LuBadgeDollarSign,
    LuBuilding2,
    LuPlaneTakeoff,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from "../../../../Components/Shared/SevicsBanner";
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/UK/Whether-expanding-into.webp'
const industries = [
    {
        icon: LuGlobe,
        title: "EU Market Expansion",
        items: [
            "Market entry strategy",
            "Business establishment planning",
            "Expansion roadmap development",
            "Ongoing growth advisory",
        ],
    },
    {
        icon: LuNetwork,
        title: "Cross-Border Business Structuring",
        items: [
            "Corporate structure planning",
            "Holding company advisory",
            "Cross-border operations support",
            "International compliance guidance",
        ],
    },
    {
        icon: LuBadgeDollarSign,
        title: "International Tax Coordination",
        items: [
            "Cross-border tax coordination",
            "Double taxation considerations",
            "International reporting support",
            "Tax-efficient business structures",
        ],
    },
    {
        icon: LuBuilding,
        title: "Group Company Support",
        items: [
            "Parent & subsidiary accounting",
            "Intercompany reconciliations",
            "Consolidated financial reporting",
            "Shared finance processes",
        ],
    },
    {
        icon: LuBuilding2,
        title: "Finance Function Outsourcing",
        items: [
            "Shared finance teams",
            "Management reporting",
            "Financial planning support",
            "Process optimization",
        ],
    },
    {
        icon: LuPlaneTakeoff,
        title: "Business Relocation to Estonia",
        items: [
            "Company relocation planning",
            "Operational transition support",
            "Regulatory compliance assistance",
            "Long-term business advisory",
        ],
    },
];

const servicesItems = [
    {
        title: "EU Market Expansion Advisory",
        desc: "Develop market entry strategies, evaluate opportunities, and create practical expansion roadmaps for successful growth across the European Union.",
    },
    {
        title: "Cross-Border Business Structuring",
        desc: "Design efficient corporate structures that support international operations, regulatory compliance, and sustainable business growth.",
    },
    {
        title: "International Tax Coordination Support",
        desc: "Coordinate tax obligations across multiple jurisdictions while supporting efficient cross-border financial and tax management.",
    },
    {
        title: "Group Company Accounting",
        desc: "Manage accounting processes for parent companies, subsidiaries, and international group structures with accurate financial reporting.",
    },
    {
        title: "Foreign Subsidiary Support",
        desc: "Assist with the financial administration, compliance requirements, and ongoing operational support for overseas subsidiaries.",
    },
    {
        title: "International Financial Reporting",
        desc: "Prepare management reports and financial statements that provide clear visibility across international business operations.",
    },
    {
        title: "Shared Finance Function Outsourcing",
        desc: "Provide dedicated finance and accounting support that integrates seamlessly with your existing international business operations.",
    },
    {
        title: "Business Relocation to Estonia",
        desc: "Support businesses relocating to Estonia with company transition planning, financial setup, compliance guidance, and long-term operational advisory.",
    },
];

const frameworks = [
    "EU Market Entry Strategy",
    "Cross-Border Business Structuring",
    "International Finance & Reporting",
    "Business Relocation to Estonia",
];

const benefits = [
    {
        title: "Improved compliance",
        desc: "Stay aligned with UK regulations and industry standards while minimising legal and financial risks.",
    },
    {
        title: "Reduced tax exposure",
        desc: "Optimise your tax position through efficient structuring and strategic planning.",
    },
    {
        title: "Better financial forecasting",
        desc: "Make informed decisions with clear, data-driven financial projections.",
    },
    {
        title: "Accurate benchmarking",
        desc: "Measure performance against industry standards to identify strengths and improvement areas.",
    },
];

const blogs = [
    {
        id: 1,
        image: "/src/asstes/img_temp/New folder/council-tax.webp",
        title:
            "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
        desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
    },
    {
        id: 2,
        image: "/src/asstes/img_temp/New folder/self-assessment-tax-return.webp",
        title:
            "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
        desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
    },
    {
        id: 3,
        image: "/src/asstes/img_temp/New folder/Virtual-CFO-2048x1366.webp",
        title: "The Role and Benefits of a Virtual CFO in Modern Businesses",
        desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
    },
];

const EUExpansion = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const toggleAccordion = (idx) =>
        setExpandedItem(expandedItem === idx ? null : idx);

    return (
        <div className="w-full">
            <SevicsBanner
                bgImage={bgimg}
                title1={"Strategic EU Expansion"}
                title2={"Starts In Estonia"}

                description="Leverage Estonia's business-friendly ecosystem as your gateway to the European Union. Our specialists provide end-to-end support for market expansion, international business structuring, cross-border compliance, financial reporting, and ongoing operational advisory."
            />



            {/* Why Industry Expertise Matters */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                            Why Expand Your Business{" "}
                            <span className="font-bold">

                                <br />
                                Through Estonia?
                            </span>
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-500">
                            Estonia offers one of Europe's most business-friendly environments,
                            making it an ideal gateway for companies looking to expand across the
                            European Union. From cross-border business structuring to international
                            finance and regulatory support, we help you establish a scalable,
                            compliant foundation that enables seamless growth into new markets.
                        </p>
                        <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                            We help you with:
                        </h4>
                        <div className="space-y-3">
                            {[
                                "EU market expansion planning",
                                "Cross-border business structuring",
                                "International tax coordination support",
                                "Group company accounting",
                                "Business relocation to Estonia",
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
                        alt="EU market expansion planning"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Industries We Support */}
            <section className="py-24 bg-[#F5F6F8]">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            Our <span className="font-bold">International Business Services</span>
                        </h2>
                        <p className="mt-5 text-gray-500 leading-7">
                            From EU market entry and cross-border structuring to international finance
                            and business relocation, we provide the strategic support businesses need
                            to expand confidently across Europe.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-16">
                        {industries.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index}>
                                    <Icon className="text-4xl text-white bg-light-blue rounded-sm p-2 mb-5" />
                                    <h3 className="text-xl font-bold text-[#16244b] mb-4">
                                        {item.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {item.items.map((li, i) => (
                                            <li key={i} className="text-gray-500 text-sm leading-6">
                                                - {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            {/* Customised Financial Frameworks */}
            <section className="bg-[#16244B] py-24">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-light text-white">
                            Customised Financial <span className="font-bold">Frameworks</span>
                        </h2>
                        <p className="mt-4 text-slate-300">
                            We don't apply one-size-fits-all systems. We build financial
                            structures tailored to your
                        </p>
                        <div className="w-20 h-1 bg-light-blue rounded-full mx-auto mt-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
                        {frameworks.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                                    <LuChartNoAxesCombined className="text-white text-4xl" />
                                </div>
                                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            End-to-End <span className="font-bold">International Business Support</span>
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-5xl mx-auto">
                            From EU market entry to cross-border finance and international compliance,
                            we provide the strategic support businesses need to expand confidently
                            across Europe through Estonia.
                        </p>
                        <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <LuChartNoAxesCombined className="text-light-blue text-2xl shrink-0" />
                                    <h3 className="text-lg font-bold text-[#16244b]">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationCTA
    heading={
        <>
            Build Your
            <br />
            <span className="font-bold">European Presence</span>
        </>
    }
    subheading="From market entry and international business structuring to finance, compliance, and ongoing advisory, we help businesses expand into Europe with confidence through Estonia."
    commitmentItems={[
        "Free strategic consultation",
        "Cross-border expansion specialists",
        "International finance & reporting support",
        "Long-term partnership for sustainable growth",
    ]}
/>

            {/* Our Industry-Based Services */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-2">
                            Our <span className="font-bold">International Business</span> Services
                            <br />
                            Include
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
                            Comprehensive support to help businesses expand into the European Union,
                            manage cross-border operations, and establish a strong international
                            presence through Estonia.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {servicesItems.map((item, idx) => (
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

export default EUExpansion;
