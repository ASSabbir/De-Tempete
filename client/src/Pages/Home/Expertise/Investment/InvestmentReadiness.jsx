import React from 'react';
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import img from '../../../../asstes/img_temp/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92078-scaled.webp'
import WhyInvestment from './WhyInvestment';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import InvestmentFAQ from './InvestmentFAQ';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import InvestmentReadinessServices from './Investmentreadinessservices';
const InvestmentReadiness = () => {
    const text=['Prepare Your Business for Investment Success','Attract the Right Investors with Confidence and Clarity','Our Investment Readiness services ensure your business is fully prepared to meet investors’ expectations, present your growth potential, and secure the funding you need to scale','Get Investment Ready Today']
    const benefits = [
        "Attract investors aligned with your mission and values",
        "Present credible financials and growth projections",
        "Streamline due diligence for faster funding",
        "Enhance negotiation outcomes and investor confidence",
        "Optimize fundraising strategy for long-term business growth",
        "Build investor trust with transparent financial insights",
    ];
    const keyBenefittext=['Unlock the Right ','Investment Opportunities']
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyInvestment></WhyInvestment>
            <InvestmentReadinessServices></InvestmentReadinessServices>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <InvestmentFAQ></InvestmentFAQ>
            <GetStarted></GetStarted>
            <Awards></Awards>
        </div>
    );
};

export default InvestmentReadiness;