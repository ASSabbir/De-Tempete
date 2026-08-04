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

const VirtualCFO = () => {
    const text = ['Your Strategic Virtual CFO/Fractional CFO Partner', 'Empowering Growth with Expert Financial Leadership — Virtually', 'Get access to professional CFO expertise without the overhead cost of a full-time hire. Our virtual CFO services help you make smarter financial decisions, improve profitability, and scale confidently.', 'Book An Appointment With CFO']
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


    return (
        <div>
            <VirtualBanner img={img1} text={text}></VirtualBanner>
            <WhyVCFO></WhyVCFO>
            <VirtualCFOServices></VirtualCFOServices>
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