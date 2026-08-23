import React from 'react';
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import img from '../../../../asstes/img_temp/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92078-scaled.webp'
import WhyInvestment from './WhyInvestment';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import InvestmentFAQ from './InvestmentFAQ';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import InvestmentReadinessServices from './Investmentreadinessservices';
import ServiceGrid from '../../../../Components/Shared/Servicegrid';
import {
  TbClipboardText,
  TbChartLine,
  TbSearch,
  TbScale,
  TbGavel,
  TbPresentation,
  TbWallet,
  TbUsersGroup,
  TbNetwork,
  TbFileSearch,
  TbBriefcase,
  TbTarget,
} from "react-icons/tb";

const InvestmentReadiness = () => {
    const services = [
  {
    title: "Business Plan Review & Development",
    description:
      "We refine your business plan to clearly communicate your value proposition, market opportunity, competitive advantage, and growth strategy.",
    icon: (
      
        <TbClipboardText />
      
    ),
  },
  {
    title: "Financial Analysis & Projections",
    description:
      "Create accurate financial projections, including revenue, expenses, cash flow, and ROI, helping investors understand your potential returns and risks.",
    icon: (
      
        <TbChartLine />
      
    ),
  },
  {
    title: "Market Research & Analysis",
    description:
      "Gain in-depth insights into industry trends, target audience, and competitive landscape to strengthen your investment case.",
    icon: (
      
        <TbSearch />
      
    ),
  },
  {
    title: "Valuation Services",
    description:
      "Determine your business's fair value using trusted methodologies, ensuring transparency and credibility with investors.",
    icon: (
      
        <TbScale />
      
    ),
  },
  {
    title: "Legal & Compliance Guidance",
    description:
      "Our experts review contracts, intellectual property, and legal matters to minimize risk and enhance investor confidence.",
    icon: (
      
        <TbGavel />
      
    ),
  },
  {
    title: "Pitch Deck Creation",
    description:
      "Design visually compelling, content-rich pitch decks that highlight your business and investment opportunities.",
    icon: (
      
        <TbPresentation />
      
    ),
  },
  {
    title: "Investment Financial Planning",
    description:
      "Show potential investors exactly how their capital will be deployed and the expected return on investment.",
    icon: (
      
        <TbWallet />
      
    ),
  },
  {
    title: "Team Evaluation & Enhancement",
    description:
      "Assess your leadership team, recommend improvements, and ensure you have the right talent to execute your vision.",
    icon: (
      
        <TbUsersGroup />
      
    ),
  },
  {
    title: "Networking & Investor Introductions",
    description:
      "Leverage our network to connect with potential investors who align with your strategic goals.",
    icon: (
      
        <TbNetwork />
      
    ),
  },
  {
    title: "Due Diligence Support",
    description:
      "Prepare all necessary documentation and assist with investor due diligence for a smooth fundraising process.",
    icon: (
      
        <TbFileSearch />
      
    ),
  },
  {
    title: "Strategic Advisory",
    description:
      "Ongoing strategic guidance to refine growth plans, identify challenges, and adapt to market changes.",
    icon: (
      
        <TbBriefcase />
      
    ),
  },
  {
    title: "Market Fit & Product Analysis",
    description:
      "Continuously evaluate your product-market alignment and adjust offerings to maximize investor confidence.",
    icon: (
      
        <TbTarget />
      
    ),
  },
];
    const text = ['Prepare Your Business for Investment Success', 'Attract the Right Investors with Confidence and Clarity', 'Our Investment Readiness services ensure your business is fully prepared to meet investors’ expectations, present your growth potential, and secure the funding you need to scale', 'Get Investment Ready Today']
    const benefits = [
        "Attract investors aligned with your mission and values",
        "Present credible financials and growth projections",
        "Streamline due diligence for faster funding",
        "Enhance negotiation outcomes and investor confidence",
        "Optimize fundraising strategy for long-term business growth",
        "Build investor trust with transparent financial insights",
    ];
    const commitments = [
        "Free initial investment readiness consultation — no obligation",
        "100% confidential handling of all business and financial information",
        "Investor-focused assessment to strengthen your funding readiness",
        "Clear, actionable strategies to prepare your business for investment and growth",
    ];
    const keyBenefittext = ['Unlock the Right ', 'Investment Opportunities']
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyInvestment></WhyInvestment>
            
            <ServiceGrid
                description={<>We provide comprehensive financial oversight to help you make confident, data-driven decisions.</>}
                heading={<>Investment Readiness <span className="font-extrabold">Services</span></>}
                services={services}></ServiceGrid>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <InvestmentFAQ></InvestmentFAQ>
            <GetStarted commitments={commitments}></GetStarted>
            <Awards></Awards>
        </div>
    );
};

export default InvestmentReadiness;