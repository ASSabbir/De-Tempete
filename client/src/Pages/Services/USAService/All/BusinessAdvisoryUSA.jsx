// File: BusinessAdvisoryUSA.jsx
import { useState } from "react";
import {
    CalendarDays,
    Globe,
    Handshake,
    Medal,
    ChevronDown,
} from "lucide-react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import {
    LuChartNoAxesCombined,
    LuTarget,
    LuHandshake as LuHandshakeIcon,
    LuUsers,
    LuPuzzle,
} from "react-icons/lu";
import { FaLightbulb, FaChartLine, FaBalanceScale, FaFileSignature } from "react-icons/fa";
import { HeroSection } from "@/Components/Shared/HeroSection";
import { StatsSection } from "@/Components/Shared/StatsSection";
import { ConsultationCTA } from "@/Components/Shared/ConsultationCTA";
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import { blogPosts } from "@/Components/Shared/blogPosts";
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import bgimg from '../../../../asstes/img_temp/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import img1 from '../../../../asstes/img_temp/servics/freepik__tax-return-image-for-website-section-no-text__26470.webp'
import img2 from '../../../../asstes/img_temp/servics/freepik__vat-registration-mtdcompliant-filing-image-for-web__26471.webp'
import img3 from '../../../../asstes/img_temp/servics/freepik__workforce-compliance-advisory-for-website-section-__26469.webp'
import img4 from '../../../../asstes/img_temp/servics/BG-Build-Strong-Strategic-Alliances-Partnerships-Networking-Support_-1.webp'
import img5 from '../../../../asstes/img_temp/servics/freepik__plain-blank-closeup-of-trademark-certificate-gold-__58646.webp'
import logo from '../../../../asstes/img_temp/logo.webp'
const advisoryCards = [
    {
        title: "Business Plan Development",
        desc: "Build a clear, investor-ready business plan that defines your model, market position, and financial roadmap from day one.",
    },
    {
        title: "Feasibility Studies & Market Validation",
        desc: "Test new ideas, products, or markets against real data before committing capital, reducing risk and guesswork.",
    },
    {
        title: "Financial Modeling & Forecasting",
        desc: "Build dynamic financial models and forecasts that support funding conversations, budgeting, and long-term planning.",
    },
    {
        title: "Growth & Expansion Strategy",
        desc: "Develop practical roadmaps for scaling operations, entering new markets, or launching new product lines.",
    },
    {
        title: "Mergers & Acquisitions Advisory",
        desc: "Get support through due diligence, valuation, and deal structuring for acquisitions, mergers, or exits.",
    },
    {
        title: "Business Restructuring & Turnaround",
        desc: "Realign underperforming operations with practical restructuring plans built around cash flow and long-term stability.",
    },
];

const ctFeatures = [
    {
        icon: FaLightbulb,
        title: "Strategic Planning",
        desc: "Turn long-term goals into a structured, actionable plan that aligns leadership, resources, and priorities.",
    },
    {
        icon: FaChartLine,
        title: "Fundraising & Investor Readiness",
        desc: "Prepare pitch decks, financial models, and data rooms that give investors confidence in your business.",
    },
    {
        icon: FaBalanceScale,
        title: "Risk Management Advisory",
        desc: "Identify operational, financial, and market risks early, with clear mitigation strategies built in.",
    },
    {
        icon: LuChartNoAxesCombined,
        title: "Performance Benchmarking",
        desc: "Compare your business against industry standards to uncover gaps and opportunities for improvement.",
    },
    {
        icon: LuUsers,
        title: "Board & Leadership Advisory",
        desc: "Support leadership teams and boards with objective guidance on governance and major decisions.",
    },
    {
        icon: FaFileSignature,
        title: "Exit & Succession Planning",
        desc: "Plan ownership transitions, buyouts, or exits well ahead of time, protecting value and continuity.",
    },
];

const feasibilityPerfectFor = [
    "Founders launching a new venture",
    "Businesses entering a new US market",
    "Companies evaluating a new product line",
    "Investors assessing acquisition targets",
];

const growthFeatures = [
    "Market opportunity & competitive analysis",
    "Revenue model & pricing strategy review",
    "Scalable operating structure design",
    "Milestone-based growth roadmap",
];

const maFeatures = [
    "Buy-side and sell-side due diligence",
    "Business valuation support",
    "Deal structuring & negotiation guidance",
    "Post-merger integration planning",
];

const fundraisingFeatures = [
    "Investor-ready pitch deck development",
    "Financial model & cap table preparation",
    "Data room organization & documentation",
    "Investor outreach strategy support",
];

const deliverables = [
    "Business Plan & Financial Model",
    "Growth & Expansion Roadmap",
    "Risk Assessment Report",
    "Investor Pitch Deck",
];

const processItems = [
    {
        title: "Discovery & Business Assessment",
        desc: "We start by understanding your business model, financials, goals, and challenges through a structured discovery process.",
    },
    {
        title: "Strategic Planning & Roadmap Development",
        desc: "We translate findings into a clear strategic roadmap with defined priorities, milestones, and timelines.",
    },
    {
        title: "Financial Modeling & Projections",
        desc: "We build detailed financial models and projections that support decision-making, funding, and long-term planning.",
    },
    {
        title: "Implementation Support & Monitoring",
        desc: "We stay involved through execution, tracking progress against the plan and adjusting strategy as your business evolves.",
    },
];

const whyChoose = [
    "Practical strategy grounded in financial reality",
    "Hands-on support from discovery through execution",
    "Experience across startups, SMEs, and growth-stage companies",
    "Transparent, fixed-fee advisory engagements",
    "Objective guidance focused on long-term value",
];

const BusinessAdvisoryUSA = () => {
    const [expandedItem, setExpandedItem] = useState(null);
    const toggleAccordion = (idx) =>
        setExpandedItem(expandedItem === idx ? null : idx);

    return (
        <div className="w-full">
            <SevicsBanner
                bgImage={bgimg}
                alt="USA Business Advisory Services"
                description="Make confident, well-informed business decisions with expert advisory support built for US businesses. We help you plan, grow, and structure your business the right way — from business plans and feasibility studies to growth strategy, M&A advisory, fundraising support, and restructuring — so every decision is backed by clear thinking and solid numbers."
                title1={'Strategic Business Advisory '}
                title2={'Built For Smarter US Decisions'}
            ></SevicsBanner>

            {/* Problem Statement */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-light-blue font-semibold">
                        THE ADVISORY GAP
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#14224A] mt-2">
                        Growing Without a Plan Is Risky
                    </h2>
                    <p className="mt-4 text-light-blue font-semibold text-base">
                        Good Instincts Aren't Enough — Big Decisions Need Real Numbers.
                    </p>
                    <p className="mt-6 text-gray-600 leading-8">
                        From launching a new venture to raising capital, expanding into
                        new markets, or preparing for an exit — every major business
                        decision carries risk without the right financial modeling,
                        planning, and strategic guidance behind it.
                    </p>
                    <p className="mt-8 font-semibold text-[#14224A]">
                        Common challenges businesses face
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                        {[
                            "No clear financial model to support decisions",
                            "Growth plans built on assumptions, not data",
                            "Difficulty preparing for investor conversations",
                            "Uncertainty during mergers, acquisitions, or exits",
                            "No structured plan for scaling operations",
                            "Limited visibility into business risk exposure",
                        ].map((t, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-light-blue text-base mt-1 shrink-0" />
                                <span className="text-gray-600">{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Advisory Services */}
            <section className="py-24 bg-[#16244B] text-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold text-">
                            Core Business{" "}
                            <span className="font-extrabold">Advisory Services</span>
                        </h2>
                        <div className="inline-block mt-5 px-5 py-1 rounded bg-light-blue  font-semibold text-base">
                            Strategy Backed By Numbers
                        </div>
                        <p className="mt-7 text-base text-gray-200 leading-8">
                            Every business decision deserves clear thinking and solid
                            financial grounding. We work alongside you from planning
                            through execution, so your strategy is practical, accurate,
                            and built to hold up under real conditions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {advisoryCards.map((c, i) => (
                            <div
                                key={i}
                                className="bg-[#39446B] border border-white/10  rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {c.title}
                                </h3>
                                <p className="text-gray-400 leading-7">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Advisory Support */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-5xl  leading-tight font-light text-[#16244b]">
                            <span className="font-bold">Strategic Advisory</span> Support
                        </h2>
                        <p className="mt-8 text-base text-gray-500 leading-7 max-w-4xl mx-auto">
                            Strategic guidance that goes beyond generic advice. From
                            day-to-day planning to major transactions, our advisors work
                            as an extension of your leadership team, bringing structure
                            and clarity to complex decisions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3  mt-24">
                        {ctFeatures.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="2xl:p-16 p-6 hover:bg-gray-200  rounded-3xl duration-300"
                                >
                                    <Icon className="text-5xl text-light-blue rounded-sm bg-light-blue/20 p-2 mb-6" />
                                    <h3 className="text-xl font-bold text-[#16244b] leading-snug mb-5">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-base leading-8">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Business Plan & Feasibility Studies */}
            <section className="pb-20 bg-white">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <img
                        src={img1}
                        alt="Business Plan & Feasibility Studies"
                        className="w-full h-full  object-cover rounded-2xl shadow-lg"
                    />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                            <span className="font-bold">Business Plan</span>
                            <br />
                            & Feasibility Studies
                        </h2>
                        <p className="mt-8 text-xl leading-7 text-gray-500">
                            A Clear, Data-Backed Plan Before You Commit Capital. We build
                            detailed business plans and feasibility studies that validate
                            your idea, model, or expansion against real market conditions
                            — so decisions are made with confidence, not guesswork.
                        </p>
                        <h4 className="mt-8 mb-5 italic font-bold text-[#16244b] text-base">
                            Perfect for:
                        </h4>
                        <div className="space-y-4">
                            {feasibilityPerfectFor.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <FaCheckCircle className="text-light-blue text-2xl shrink-0" />
                                    <span className="text-gray-600 text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth & Expansion Strategy */}
            <section className="pb-20 bg-white">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                            <span className="font-bold">Growth & Expansion </span>
                            Strategy
                        </h2>
                        <p className="mt-6 text-base leading-8 text-gray-500">
                            A Practical Roadmap For Scaling With Confidence. Growth without
                            structure leads to strain on cash flow and operations. We
                            build growth strategies grounded in your numbers, market
                            position, and operational capacity.
                        </p>
                        <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                            Our growth strategy includes:
                        </h4>
                        <div className="space-y-4">
                            {growthFeatures.map((item, i) => (
                                <div key={i} className="flex items-center  gap-4">
                                    <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img
                        src={img2}
                        alt="Growth & Expansion Strategy"
                        className="w-full h-full max-h-130 object-cover object-center rounded-2xl "
                    />
                </div>
            </section>



            {/* Fundraising & Investor Readiness */}
            <section className="pb-20 bg-white">
                <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <img
                        src={img4}
                        alt="Fundraising & Investor Readiness"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                            <span className="font-bold">Fundraising</span>
                            <br />
                            & Investor Readiness
                        </h2>
                        <p className="mt-6 text-base leading-8 text-gray-500">
                            Walk Into Investor Conversations Fully Prepared. Raising
                            capital takes more than a good idea. We help you build the
                            financial models, pitch materials, and documentation investors
                            expect to see.
                        </p>
                        <h4 className="mt-6 mb-4 italic font-bold text-[#16244b]">
                            Our support covers:
                        </h4>
                        <div className="space-y-4">
                            {fundraisingFeatures.map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <FaCheckCircle className="text-light-blue text-xl shrink-0" />
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Advisory Deliverables */}
            <section className="bg-[#16244B] py-24">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-5xl md:text-6xl leading-tight text-white font-light">
                            Key Advisory{" "}
                            <span className="font-bold">Deliverables</span>
                        </h2>
                        <p className="mt-8 text-xl text-slate-300 leading-7 max-w-4xl mx-auto">
                            What You Walk Away With. Every advisory engagement is built
                            around clear, usable deliverables your team can act on
                            immediately.
                        </p>
                        <div className="w-44 h-1 bg-light-blue rounded-full mx-auto mt-10"></div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
                        {deliverables.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#39446B] border border-white/10 rounded-2xl py-12 px-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#43507d] hover:shadow-2xl"
                            >
                                <div className="w-20 h-20 bg-light-blue rounded-xl flex items-center justify-center mx-auto">
                                    <LuChartNoAxesCombined className="text-white text-5xl" />
                                </div>
                                <h3 className="mt-10 text-xl font-medium text-white leading-relaxed">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Process Accordion */}
            <section className="py-20 px-6 bg-[#F5F6F8]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl 2xl:text-5xl  text-gray-900 mb-2">
                            Frequently Asked {" "}
                            <span className="font-bold">Questions</span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
                            A structured advisory process, from discovery to execution. We
                            take the time to understand your business before building a
                            plan you can actually implement.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {processItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => toggleAccordion(idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition text-left"
                                ><div className="flex items-center gap-2">
                                        <img src={logo} alt="" className="w-10"/>
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
                                        <p className="text-gray-600 text-base">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-light text-[#16244b] leading-tight">
                            Why Choose Our{" "}
                            <span className="font-bold">USA Business Advisory</span>
                        </h2>
                        <div className="w-28 h-1 bg-light-blue rounded-full mx-auto mt-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-6 mt-20">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <FaBalanceScale className="text-light-blue text-3xl mx-auto mb-4" />
                                <p className="text-gray-700 font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ConsultationCTA
                heading={
                    <>
                        Start Your Business
                        <br />
                        Advisory <span className="font-bold">Journey Today</span>
                    </>
                }
                subheading="Get expert guidance, avoid costly missteps, and make every major business decision with confidence and clarity."
                commitmentItems={[
                    "Free initial advisory consultation — no obligation",
                    "100% confidentiality and secure handling of data",
                    "US business strategy and finance experts",
                    "Transparent and practical advice tailored to your needs",
                ]}
            />

        </div>
    );
};

export default BusinessAdvisoryUSA;