// File: MarketExpansionUSA.jsx
import { useState, useEffect } from "react";
import {
    CalendarDays,
    Globe,
    Handshake,
    Medal,
    ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaBuilding } from "react-icons/fa";
import {
    LuTarget,
    LuChartLine,
    LuShieldCheck,
    LuTriangleAlert,
    LuHandshake,
    LuFlag,
} from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img3 from '../../../../asstes/img_temp/servics/freepik__workforce-compliance-advisory-for-website-section-__26469.webp'
import img2 from '../../../../asstes/img_temp/servics/freepik__vat-registration-mtdcompliant-filing-image-for-web__26471.webp'
import img1 from '../../../../asstes/img_temp/servics/BG-Build-Strong-Strategic-Alliances-Partnerships-Networking-Support_-1.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
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

const setupTypes = [
    {
        title: "Business Formation",
        image:
            img1,
        items: [
            "LLC & C-Corp formation",
            "State selection strategy",
            "Registered Agent setup",
            "Articles of Organization/Incorporation",
            "Operating Agreement guidance",
            "Fast and compliant registration",
            "Support for international founders",
        ],
    },
    {
        title: "Business Infrastructure",
        image:
            img2,
        items: [
            "EIN (IRS) application support",
            "US business bank account setup",
            "Payment gateway integration",
            "Business address solutions",
            "Compliance-ready documentation",
            "Cross-border business structuring",
            "Scalable business foundation",
        ],
    },
    {
        title: "Market Expansion",
        image:
            img3,
        items: [
            "Go-to-market strategy",
            "US market entry planning",
            "Trade & export readiness",
            "Business growth consulting",
            "Expansion roadmap",
            "Operational setup support",
            "Long-term growth advisory",
        ],
    },
];

const goToMarket = [
    {
        icon: LuTarget,
        title: "US Market Research & Entry Strategy",
        desc: "Evaluate market demand, customer segments, industry trends, and competition to build a successful US market entry plan.",
    },
    {
        icon: LuChartLine,
        title: "Business Structure & Expansion Planning",
        desc: "Choose the right business structure, state of incorporation, and expansion roadmap to support long-term growth.",
    },
    {
        icon: LuShieldCheck,
        title: "Compliance & Business Readiness",
        desc: "Prepare your business for US operations with EIN registration, regulatory compliance, banking, and payment infrastructure.",
    },
    {
        icon: LuTriangleAlert,
        title: "Risk Assessment & Market Analysis",
        desc: "Identify operational, financial, and regulatory risks while developing strategies to minimize challenges and maximize opportunities.",
    },
    {
        icon: LuFlag,
        title: "Go-to-Market Strategy",
        desc: "Develop pricing, positioning, sales channels, and customer acquisition strategies tailored to the US business environment.",
    },
    {
        icon: LuHandshake,
        title: "Cross-Border Growth & Partnerships",
        desc: "Build strategic partnerships, optimize cross-border operations, and prepare your business for sustainable expansion across the United States.",
    },
];

const exportItems = [
    {
        title: "Evaluate Your US Market Entry Readiness",
        desc: "Assess your business model, operational capacity, financial resources, and expansion goals before entering the United States market.",
    },
    {
        title: "Understand US Trade & Regulatory Requirements",
        desc: "Navigate federal and state regulations, import/export requirements, licensing, and compliance obligations for doing business in the US.",
    },
    {
        title: "Build Cross-Border Business & Risk Strategies",
        desc: "Develop effective risk management frameworks, cross-border structures, and compliance strategies to support international business operations.",
    },
    {
        title: "Optimize Banking, Payments & Logistics",
        desc: "Establish efficient banking, payment gateway, documentation, customs, and logistics processes to support seamless US operations.",
    },
    {
        title: "Scale Your Business for Sustainable US Growth",
        desc: "Create a long-term expansion roadmap with scalable operations, strategic partnerships, and market growth initiatives across the United States.",
    },
];

const visaCards = [
    "US Company Formation (LLC & C-Corp)",
    "EIN (IRS) Application Support",
    "US Bank Account & Payment Gateway Setup",
    "Cross-Border Structuring & Go-to-Market Strategy",
];

const whyChoose = [
    {
        title: "End-to-End US Market Entry Support",
        desc: "From company formation and state selection to banking, compliance, and market expansion, we manage every step of your US business journey.",
    },
    {
        title: "Expert Guidance on US Business Structures",
        desc: "Receive strategic advice on choosing the right entity, selecting the best state, and building a compliant foundation for long-term success.",
    },
    {
        title: "Cross-Border Expansion Expertise",
        desc: "We help businesses from Bangladesh, the UAE, KSA, and other markets establish and grow their presence in the United States.",
    },
    {
        title: "Scalable Solutions for Sustainable Growth",
        desc: "Our tailored strategies support startups, SMEs, and global enterprises with market entry, operational readiness, and future expansion.",
    },
];

const MarketExpansionUSA = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const toggleAccordion = (idx) =>
        setExpandedItem(expandedItem === idx ? null : idx);

    return (
        <div className="w-full">
            <SevicsBanner
                bgImage={bgimg}
                alt="USA Market Expansion & Business Setup"
                description="Launch and expand your business in the United States with confidence through our end-to-end market expansion and business setup advisory services. From selecting the right business structure and state of incorporation to obtaining an EIN, setting up US banking and payment solutions, and developing a go-to-market strategy, we help entrepreneurs and global businesses establish a strong, compliant, and scalable presence in the US market."
                title1={"Expand Your Business"}
                title2={"Into The United States With Confidence"}
            ></SevicsBanner>



            {/* Business Setup & Registration */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold text-[#13264d]">
                            US Market Entry &{" "}
                            <span className="font-extrabold">Business Setup</span>
                        </h2>

                        <p className="mt-5 text-gray-500 font-semibold">
                            Establish and expand your business in the United States with expert guidance tailored to your goals.
                        </p>

                        <p className="mt-7 text-lg text-gray-600 leading-8">
                            We help entrepreneurs, startups, and international companies select the right business structure, choose the ideal state for incorporation, obtain an EIN, establish US banking and payment solutions, and build a strong foundation for long-term success in the American market.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mt-16">
                        {setupTypes.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover"
                                        alt={item.title}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-6">
                                        <div className="w-14 h-14 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg">
                                            <FaBuilding className="text-white text-2xl" />
                                        </div>
                                    </div>
                                    <h3 className="absolute bottom-5 left-24 text-white text-2xl font-bold">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {item.items.map((text, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-4 text-gray-600 leading-7"
                                            >
                                                <FaCheckCircle className="text-cyan-400 text-lg mt-1 shrink-0" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Go-To-Market Strategy */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            <span className="font-bold">US Market Expansion</span> Strategy &
                            Business Growth
                        </h2>

                        <p className="mt-6 text-gray-500 leading-7">
                            Expanding into the United States requires more than company formation.
                            Success depends on choosing the right market entry strategy, establishing
                            a compliant business structure, understanding customer behavior, and
                            building the operational foundation needed for sustainable growth. Our
                            experts guide you through every stage of your US expansion journey.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {goToMarket.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index}>
                                    <Icon className="text-4xl bg-light-blue text-white p-2 rounded-sm mb-4" />

                                    <h3 className="text-lg font-bold text-[#16244b] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            

            {/* Bank Account & Trademark */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 space-y-16">

                    {/* US Banking */}
                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        <img
                            src="/src/asstes/img_temp/servics/Dubai-bank.webp"
                            alt="US Business Banking"
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />

                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#16244b]">
                                US Business{" "}
                                <span className="font-light">Banking & Payment Solutions</span>
                            </h2>

                            <p className="mt-5 text-gray-500 leading-7">
                                We help businesses establish a reliable financial infrastructure
                                by assisting with US business bank accounts and payment gateway
                                setup, ensuring you're ready to operate, receive payments, and
                                scale confidently in the American market.
                            </p>

                            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                                Our support includes:
                            </h4>

                            <div className="space-y-3">
                                {[
                                    "US business bank account guidance",
                                    "Payment gateway setup assistance",
                                    "Business documentation preparation",
                                    "Compliance support throughout the process",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cross Border */}
                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">

                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#16244b]">
                                Cross-Border{" "}
                                <span className="font-light">Business Expansion Strategy</span>
                            </h2>

                            <p className="mt-5 text-gray-500 leading-7">
                                Expand into the United States with a strategic approach. We help
                                businesses structure international operations, select the right
                                market entry strategy, and build a scalable foundation for
                                sustainable growth across borders.
                            </p>

                            <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                                Our advisory covers:
                            </h4>

                            <div className="space-y-3">
                                {[
                                    "Cross-border business structuring",
                                    "Go-to-market strategy development",
                                    "Trade & export readiness",
                                    "Long-term US expansion planning",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                                        <span className="text-gray-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <img
                            src="/src/asstes/img_temp/servics/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646.webp"
                            alt="US Market Expansion"
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Investor Visa */}
            <section className="bg-[#16244B] py-24">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl font-light text-white">
                            End-to-End <span className="font-bold">US Market Expansion</span>{" "}
                            Support
                        </h2>

                        <p className="mt-6 text-slate-300 leading-7">
                            Expanding into the United States involves more than company
                            registration. We provide comprehensive support throughout your
                            expansion journey—from business formation and regulatory setup to
                            banking, payment solutions, and strategic market entry—helping
                            your business establish a strong and compliant presence in the US.
                        </p>

                        <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
                        {visaCards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                                    <LuChartLine className="text-white text-4xl" />
                                </div>

                                <h3 className="mt-8 text-lg font-medium text-white leading-relaxed">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-light text-[#16244b]">
                            Why Choose Our{" "}
                            <span className="font-bold">US Market Expansion & Setup Advisory</span>
                        </h2>

                        <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-5 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                                    <LuChartLine className="text-cyan-400 text-2xl" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#16244b] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-6">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationCTA
                heading={
                    <>
                        Expand Into the
                        <br />
                        <span className="font-bold">United States</span> with Confidence
                    </>
                }
                subheading="Launch your US business with expert guidance on company formation, market entry, banking, compliance, and long-term growth."
                commitmentItems={[
                    "Free initial business expansion consultation",
                    "Expert guidance on LLC & C-Corp formation",
                    "End-to-end support for US market entry and compliance",
                    "Tailored strategies for sustainable business growth",
                ]}
            />
            <section className="py-20 px-6 bg-[#F5F6F8]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            US Market Entry, Trade
                            <span className="block">& Cross-Border Expansion Advisory</span>
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
                            Successfully expanding into the United States requires careful planning,
                            regulatory compliance, and operational readiness. We help businesses
                            establish compliant structures, streamline cross-border operations, and
                            develop strategies for sustainable growth in the US market.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {exportItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={logo} alt="de-tempete" className="w-10" />

                                        <span className="font-semibold text-gray-900">
                                            {item.title}
                                        </span>
                                    </div>

                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-600 transition-transform ${expandedItem === idx ? "rotate-180" : ""
                                            }`}
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

export default MarketExpansionUSA;
