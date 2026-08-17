import React from 'react';
import VirtualBanner from './VirtualBanner';
import WhyVCFO from './WhyVCFO';
import VirtualCFOServices from './Virtualcfoservices';
import CFOAdvantage from './CFOadvantage';
import HireCFORegion from './HireCFOregion';
import KeyBenefits from './Keybenefits';
import VIrtualFAQ from './VIrtualFAQ';
import img1 from '../../../../asstes/img_temp/Home/freepik__virtual-cfo__20675.webp'
import Awards from '../../Awards';
import GetStarted from '../../../../Components/Shared/GetStarted';
import ServiceGrid from '../../../../Components/Shared/Servicegrid';
import {
  TbTargetArrow,
  TbReportMoney,
  TbCashBanknote,
  TbUsersGroup,
  TbCoins,
  TbChartLine,
  TbBulb,
  TbShieldCheck,
  TbShieldLock,
} from "react-icons/tb";

const VirtualCFO = () => {
    const text = ['Your Strategic Virtual CFO/Fractional CFO Partner', 'Empowering Growth with Expert Financial Leadership — Virtually', 'Get access to industry specialized professional CFO expertise without the overhead cost of a full-time hire. Our virtual CFO services help you make smarter financial decisions, improve profitability, and scale confidently.', 'Book An Appointment With CFO']
    const benefits = [
        "Cost-effective access to executive-level financial expertise",
        "Strategic decision-making support without full-time overhead",
        "Improved cash flow and profitability management",
        "Streamlined reporting and financial transparency",
        "Reduced compliance and financial risk",
        "Scalable financial strategy aligned with your growth",
    ];
    const keyBenefittext=['Key Benefits','Of Hiring A Virtual CFO']
    const commitments = [
  "Free initial Virtual CFO consultation — no obligation",
  "100% confidential financial and business data handling",
  "Strategic financial planning tailored to your business goals",
  "Expert guidance to improve profitability, cash flow, and growth",
];

const title = "Ready to Elevate Your Financial Strategy?";

const des =
  "From financial planning and cash flow management to budgeting, forecasting, and strategic decision-making, our Virtual CFO services provide the financial expertise you need to grow with confidence.";
const services = [
  {
    title: "Developing Financial Strategy",
    description:
      "We align your financial goals with your overall business objectives from capital allocation to investment planning and growth opportunities, ensuring your financial roadmap supports sustainable expansion.",
    Icon: TbTargetArrow,
  },
  {
    title: "Financial Reporting",
    description:
      "Our CFOs ensure accurate, timely, and compliant financial reporting, giving you a clear picture of your company's performance while maintaining accounting standards.",
    Icon: TbReportMoney,
  },
  {
    title: "Cash Flow & Accounting Management",
    description:
      "We manage budgeting, forecasting, scenario analysis, and pricing strategies — helping you maintain healthy cash flow and long-term financial stability.",
    Icon: TbCashBanknote,
  },
  {
    title: "Maintaining Investor Relations",
    description:
      "We communicate your financial performance and growth potential to investors, fostering trust, confidence, and strong relationships with key stakeholders.",
    Icon: TbUsersGroup,
  },
  {
    title: "Capital Management",
    description:
      "Our experts optimize your company's capital structure by balancing equity and debt, managing liquidity, and ensuring you have the resources to grow efficiently.",
    Icon: TbCoins,
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "We handle budgeting, forecasting, and performance analysis, empowering you with insights that drive better decisions and financial resilience.",
    Icon: TbChartLine,
  },
  {
    title: "Company Insights",
    description:
      "Our virtual CFOs identify cost-saving opportunities, streamline operations, and provide benchmarking and performance analytics to help you stay competitive.",
    Icon: TbBulb,
  },
  {
    title: "Compliance & Governance",
    description:
      "We ensure your organization adheres to all financial regulations and reporting standards, protecting you from legal risks and penalties.",
    Icon: TbShieldCheck,
  },
  {
    title: "Risk Management",
    description:
      "We assess financial risks, implement preventive strategies, and establish internal controls to safeguard your business against fraud and errors.",
    Icon: TbShieldLock,
  },
];

    return (
        <div>
            <VirtualBanner img={img1} text={text}></VirtualBanner>
            <WhyVCFO></WhyVCFO>
            
            <ServiceGrid description={<><span className="font-bold italic text-[#0d1e4a]">de tempête</span> provide comprehensive
            financial oversight to help you make confident, data driven decisions.</>} heading={<>Virtual CFO <span className="font-extrabold">Services</span></>} services={services}></ServiceGrid>
            <CFOAdvantage></CFOAdvantage>
            <HireCFORegion></HireCFORegion>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <VIrtualFAQ></VIrtualFAQ>
             <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>

        </div>
    );
};

export default VirtualCFO;