import React, { useState } from "react";
import {
    CalendarDays,
    Globe,
    Handshake,
    Medal,
    ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight, FaBuilding } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { LuChartNoAxesCombined, LuFileSpreadsheet, LuReceipt, LuRefreshCcw, LuShieldCheck, LuShoppingCart } from "react-icons/lu";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import img1 from '../../../../asstes/img_temp/e-xomarc.webp'
import img2 from '../../../../asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp'


const businessData = [
    {
        title: "Company Formation",
        image:
            "/src/asstes/img_temp/servics/UK/company-formation.webp",
        items: [
            "UK Limited Company setup support",
            "Companies House registration guidance",
            "Business structure advisory",
            "Company name registration",
            "Incorporation documentation support",
            "Startup setup planning",
            "Expansion-focused structuring",
        ],
    },
    {
        title: "HMRC Registrations",
        image:
            "/src/asstes/img_temp/servics/UK/UK-tax-compliance-workspace-concept.webp",
        items: [
            "Corporation Tax registration guidance",
            "VAT registration preparation",
            "PAYE registration support",
            "HMRC compliance assistance",
            "Tax setup coordination",
            "Registration planning support",
            "Operational readiness guidance",
        ],
    },
    {
        title: "International Business Structuring",
        image:
            "/src/asstes/img_temp/servics/UK/Global-business-strategy-in-focus.webp",
        items: [
            "Non-resident founder guidance",
            "Shareholder structuring support",
            "Director & PSC planning",
            "International ownership advisory",
            "Compliance preparation support",
            "UK expansion planning",
            "Long-term scalability guidance",
        ],
    },
];

{
    /* Go-To-Market Strategy */
}
import {
    LuBadgeDollarSign,
    LuChartColumnBig,
    LuScale,
    LuBookOpen,
    LuMegaphone,
    LuHandCoins,
} from "react-icons/lu";
import SevicsBanner from "../../../../Components/Shared/SevicsBanner";
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'


const Ecommerce = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const exportReadinessItems = [
        {
            title: "Multi-Channel Sales Accounting",
            description:
                "Consolidate transactions from Shopify, WooCommerce, Amazon, Stripe, PayPal, and other platforms into accurate financial records.",
        },
        {
            title: "Recurring Revenue Management",
            description:
                "Track subscription billing, deferred revenue, renewals, churn, and recurring income with accounting tailored for SaaS companies.",
        },
        {
            title: "VAT & Cross-Border Tax Compliance",
            description:
                "Navigate Estonian and EU VAT requirements with expert guidance on registrations, filings, and international digital sales.",
        },
        {
            title: "Management Reporting & Financial Insights",
            description:
                "Access detailed financial reports, KPI dashboards, profitability analysis, and cash flow monitoring to support strategic growth.",
        },
        {
            title: "Annual Compliance & Advisory",
            description:
                "Stay compliant with year-end reporting, statutory obligations, and ongoing accounting advisory designed for digital businesses in Estonia.",
        },
    ];

    return (
        <div className="w-full">

            <SevicsBanner bgImage={bgimg}
                title1={"Simplify Accounting For"}
                title2={"E-commerce & SaaS Businesses"}

                description="Scale your Estonia-based e-commerce or SaaS business with accounting solutions tailored for digital companies. From bookkeeping and VAT compliance to subscription revenue tracking, financial reporting, and tax support, we help you maintain accurate financial records, stay compliant, and focus on growing your business."

            ></SevicsBanner>





            {/* ================= Go-To-Market Strategy ================= */}

            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    {/* Heading */}
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl leading-tight font-light text-[#16244b]">
                            <span className="font-bold">Accounting Solutions</span> For
                            <span className="font-semibold"> E-commerce & SaaS Businesses</span>
                        </h2>

                        <p className="mt-8 text-base text-gray-500  max-w-4xl mx-auto">
                            Digital businesses require specialized accounting that goes beyond traditional
                            bookkeeping. We help e-commerce stores and SaaS companies manage recurring
                            revenue, VAT compliance, financial reporting, and scalable accounting
                            processes that support sustainable growth.
                        </p>
                    </div>

                    {/* Features */}

                    <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16 mt-24">
                        {[
                            {
                                icon: LuShoppingCart,
                                title: "E-commerce Accounting",
                                desc: "Manage multi-channel sales, payment gateways, inventory transactions, and accurate financial records across your online business.",
                            },
                            {
                                icon: LuRefreshCcw,
                                title: "Subscription Revenue Management",
                                desc: "Track recurring subscriptions, deferred revenue, customer renewals, and revenue recognition for SaaS businesses.",
                            },
                            {
                                icon: LuReceipt,
                                title: "VAT & Tax Compliance",
                                desc: "Stay compliant with Estonian and EU VAT requirements through accurate tax reporting and filing support.",
                                highlight: true,
                            },
                            {
                                icon: LuFileSpreadsheet,
                                title: "Bookkeeping & Financial Reporting",
                                desc: "Maintain organized financial records with monthly bookkeeping, management reports, and year-end financial statements.",
                            },
                            {
                                icon: LuChartColumnBig,
                                title: "Cash Flow & Performance Insights",
                                desc: "Monitor key financial metrics, cash flow, profitability, and business performance with clear reporting and analysis.",
                            },
                            {
                                icon: LuShieldCheck,
                                title: "Compliance & Advisory",
                                desc: "Receive ongoing accounting guidance, regulatory support, and financial advice tailored to digital businesses operating in Estonia.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    className={`rounded-3xl transition-all duration-300 bg-white p-10  hover:shadow-2xl`}
                                >
                                    <Icon className="bg-light-blue p-2 text-white text-4xl rounded-full mb-6" />

                                    <h3 className="text-2xl font-bold text-[#16244b]  mb-5">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-base ">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>



            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 space-y-28">
                    {/* ===================== Bank Account Opening ===================== */}

                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        {/* Image */}

                        <div className="h-full">
                            <img
                                src={img1}
                                alt="Bank Account Opening"
                                className="w-full h-full object-cover rounded-3xl shadow-lg"
                            />
                        </div>

                        {/* Content */}

                        <div className="flex flex-col justify-center">
                            <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                                <span className="font-bold">E-commerce</span>
                                <br />
                                Accounting Solutions
                            </h2>

                            <p className="mt-8 text-xl leading-9 text-gray-500">
                                Running an online business requires accurate financial management across
                                multiple sales channels and payment platforms. We provide specialized
                                accounting services for e-commerce businesses, helping you maintain accurate
                                records, stay VAT compliant, and gain clear financial insights to support
                                sustainable growth.
                            </p>

                            <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                                Our services include:
                            </h4>

                            <div className="space-y-5">
                                {[
                                    "Amazon seller accounting",
                                    "Shopify accounting support",
                                    "Marketplace seller accounting",
                                    "E-commerce VAT compliance support",
                                    "Cross-border e-commerce accounting",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <FaCircleCheck className="text-light-blue text-2xl shrink-0" />

                                        <span className="text-gray-600 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ===================== Trademark ===================== */}

                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        {/* Content */}

                        <div className="flex flex-col justify-center">
                            <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                                <span className="font-bold">SaaS Accounting</span>
                                <span> & Financial</span>
                                <br />
                                Reporting
                            </h2>

                            <p className="mt-8 text-xl leading-9 text-gray-500">
                                SaaS businesses require accounting that reflects recurring revenue models,
                                subscription billing, and performance metrics. We deliver accounting and
                                financial reporting solutions that help you manage subscriptions, maintain
                                compliance, and make informed business decisions as your company grows.
                            </p>

                            <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-lg">
                                Our support includes:
                            </h4>

                            <div className="space-y-5">
                                {[
                                    "SaaS accounting & reporting",
                                    "Subscription revenue accounting",
                                    "Digital business accounting",
                                    "Monthly financial reporting",
                                    "Performance and cash flow insights",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <FaCircleCheck className="text-light-blue text-2xl shrink-0" />

                                        <span className="text-gray-600 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}

                        <div className="h-full">
                            <img
                                src={img2}
                                alt="Trademark Registration"
                                className="w-full h-full object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Investor Visa */}

            {/* ================= Investor Visa ================= */}
            <section className="bg-[#16244B] py-24">
                <div className="max-w-[1600px] mx-auto px-6">

                    {/* Heading */}

                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl leading-tight text-white font-light">
                            <span className="font-bold">Specialized Accounting</span> For
                            <span className="font-bold"> Digital Businesses</span>
                        </h2>

                        <p className="mt-8 text-base text-slate-300 leading-9 max-w-4xl mx-auto">
                            Our accounting solutions are designed specifically for e-commerce
                            businesses, SaaS companies, and digital entrepreneurs. We simplify
                            financial management, ensure tax compliance, and provide the insights
                            you need to grow with confidence.
                        </p>

                        <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
                    </div>

                    {/* Cards */}

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
                        {[
                            "E-commerce Bookkeeping",
                            "SaaS Revenue Accounting",
                            "VAT Compliance & Reporting",
                            "Cross-Border Accounting",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
                            >
                                <div className="w-20 h-20 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                                    <LuChartNoAxesCombined className="text-white text-5xl" />
                                </div>

                                <h3 className="mt-10 text-2xl font-medium text-white leading-relaxed">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            {/* ================= Why Choose Us ================= */}

            <section className="py-24 bg-white">
                <div className="max-w-325 mx-auto">

                    {/* Heading */}

                    <div className="text-center">
                        <h2 className="text-5xl md:text-6xl font-light text-[#16244b] leading-tight">
                            Why Choose Our
                            <span className="font-bold"> E-commerce & SaaS Accounting Services</span>
                        </h2>

                        <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
                    </div>

                    {/* Cards */}

                    <div className="max-w-7xl grid lg:grid-cols-2 gap-6 mt-20">
                        {[
                            {
                                title: "Accounting Built for Digital Businesses",
                                desc: "Specialized accounting solutions designed for e-commerce stores, SaaS companies, online marketplaces, and digital-first businesses.",
                            },
                            {
                                title: "VAT & Cross-Border Compliance",
                                desc: "Expert support for Estonian and EU VAT obligations, helping you stay compliant while selling across multiple countries and platforms.",
                            },
                            {
                                title: "Accurate Financial Reporting",
                                desc: "Receive timely bookkeeping, management reports, and financial statements that provide complete visibility into your business performance.",
                            },
                            {
                                title: "Scalable Long-Term Support",
                                desc: "As your business grows, we continue to support your accounting, compliance, subscription revenue management, and financial advisory needs.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-6 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                                    <LuChartNoAxesCombined className="text-light-blue text-3xl" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-[#16244b] mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-lg leading-8">
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
                        Ready To Scale Your
                        <br />
                        <span className="font-bold">Digital Business?</span>
                    </>
                }
                subheading="Partner with experienced accounting professionals who understand the financial needs of e-commerce stores and SaaS companies operating in Estonia."
                commitmentItems={[
                    "Free initial consultation",
                    "Accurate bookkeeping & financial reporting",
                    "VAT, tax & compliance support",
                    "Dedicated long-term accounting advisory",
                ]}
            />
            {/* Export Readiness */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-9xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl leading-tight font-light text-[#16244b]">
                            <span className="font-bold">End-to-End</span> Financial
                            <span className="font-semibold"> Management For Digital Businesses</span>
                        </h2>

                        <p className="mt-8 text-base text-gray-500  max-w-4xl mx-auto">
                            We deliver specialized accounting solutions that simplify financial
                            operations for e-commerce and SaaS businesses. Our services cover
                            bookkeeping, subscription revenue accounting, VAT compliance, management
                            reporting, and year-end financial statements, allowing you to focus on
                            growing your business.
                        </p>
                    </div>

                    <div className="max-w-5xl  mx-auto space-y-0">
                        {exportReadinessItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden my-4"
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/src/asstes/img_temp/New folder/imgi_7_admin-ajax.webp"
                                            alt="check"
                                            className="w-5 h-5 object-contain shrink-0"
                                        />

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
                                        <p className="text-gray-600 text-sm">{item.description}</p>
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

export default Ecommerce;
