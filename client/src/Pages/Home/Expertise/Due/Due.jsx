import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92084.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyDue from './WhyDue';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import DueFaq from './DueFaq';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import DueDiligenceServices from './Duediligenceservices';
import ServiceGrid from '../../../../Components/Shared/Servicegrid';
import {
  TbChartBar,
  TbSettings,
  TbSearch,
  TbGavel,
  TbCalculator,
  TbCopyright,
  TbUsersGroup,
  TbUserCheck,
  TbServer,
  TbLeaf,
  TbPlugConnected,
  TbTrendingUp,
} from "react-icons/tb";

const Due = () => {
    const text=['Essential Guide to Investment Due Diligence','Ensuring Financial Integrity and Mitigating Risks Before Investment','Investment due diligence is a critical process that helps assess the financial health, compliance, and potential risks of a target investment.','Get Investment Ready Today']
    const benefits = [
        "Attract investors aligned with your mission and values",
        "Present credible financials and growth projections",
        "Streamline due diligence for faster funding",
        "Enhance negotiation outcomes and investor confidence",
        "Optimize fundraising strategy for long-term business growth",
        "Build investor trust with transparent financial insights",
    ];
    const keyBenefittext=['Unlock the Right ','Investment Opportunities']
    const commitments = [
  "Free initial due diligence consultation — no obligation",
  "100% confidential handling of all business and financial information",
  "Comprehensive risk assessment across financial, legal, and operational areas",
  "Clear, actionable insights to support confident business decisions",
];

const services = [
  {
    title: "Financial Analysis",
    description:
      "Evaluating the target company's financial statements, including balance sheets, income statements, and cash flow statements, to assess its financial health, profitability, and sustainability.",
    icon: (
      
        <TbChartBar />
      
    ),
  },
  {
    title: "Operational Assessment",
    description:
      "Reviewing the target company's operational processes, management structure, and overall business strategy to identify any operational inefficiencies or areas of improvement.",
    icon: (
      
        <TbSettings />
      
    ),
  },
  {
    title: "Market Analysis",
    description:
      "Analyzing the target company's position within its industry and market trends to gauge its competitiveness and growth potential.",
    icon: (
      
        <TbSearch />
      
    ),
  },
  {
    title: "Legal and Regulatory Compliance",
    description:
      "Ensuring that the target company adheres to all applicable laws, regulations, permits, licenses, and contracts. This helps identify any potential legal liabilities or risks.",
    icon: (
      
        <TbGavel />
      
    ),
  },
  {
    title: "Valuation Method Analysis",
    description:
      "This service concentrates on the business's ability by using different model such as multiplier methods, asset-based valuation, time revenue method, risk analysis.",
    icon: (
      
        <TbCalculator />
      
    ),
  },
  {
    title: "Intellectual Property (IP) Evaluation",
    description:
      "Assessing the target company's intellectual property portfolio, such as patents, trademarks, copyrights, and trade secrets, to determine their value and protection.",
    icon: (
      
        <TbCopyright />
      
    ),
  },
  {
    title: "Customer and Supplier Relationships",
    description:
      "Understanding the target company's customer base and supplier relationships to assess the stability of its revenue streams and potential dependencies.",
    icon: (
      
        <TbUsersGroup />
      
    ),
  },
  {
    title: "Human Resources and Employee Relations",
    description:
      "Examining the target company's workforce, employee contracts, and overall human resources practices to identify any potential labour-related issues or challenges.",
    icon: (
      
        <TbUserCheck />
      
    ),
  },
  {
    title: "Technology and IT Infrastructure",
    description:
      "Reviewing the target company's technology assets and IT infrastructure to assess their reliability, security, and potential for future growth.",
    icon: (
      
        <TbServer />
      
    ),
  },
  {
    title: "Environmental and Sustainability Considerations",
    description:
      "Evaluating the target company's environmental impact, sustainability practices, and compliance with environmental regulations.",
    icon: (
      
        <TbLeaf />
      
    ),
  },
  {
    title: "Synergy and Integration Potential",
    description:
      "If the investment involves a merger or acquisition, evaluating how well the target company's operations and culture align with those of the acquiring company.",
    icon: (
      
        <TbPlugConnected />
      
    ),
  },
  {
    title: "Financial Projections and Valuation",
    description:
      "Creating financial projections based on various scenarios and methodologies to estimate the potential returns and valuation of the investment.",
    icon: (
      
        <TbTrendingUp />
      
    ),
  },
];
const title = "Ready to Make Confident Business Decisions?";

const des =
  "Our due diligence experts provide thorough assessments to identify risks, validate opportunities, and give you the clarity needed for successful investments, acquisitions, and strategic partnerships.";
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyDue></WhyDue>
            
            <ServiceGrid
             description={<>  We provide comprehensive financial oversight to help you make confident, data-driven decisions.</>}
             heading={<> Due Diligence <span className="font-extrabold">Services</span></>}
             services={services}></ServiceGrid>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <DueFaq></DueFaq>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
        </div>
    );
};

export default Due;