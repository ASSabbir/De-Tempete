import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92084.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyDue from './WhyDue';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import DueFaq from './DueFaq';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import DueDiligenceServices from './Duediligenceservices';

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

const title = "Ready to Make Confident Business Decisions?";

const des =
  "Our due diligence experts provide thorough assessments to identify risks, validate opportunities, and give you the clarity needed for successful investments, acquisitions, and strategic partnerships.";
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyDue></WhyDue>
            <DueDiligenceServices></DueDiligenceServices>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <DueFaq></DueFaq>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
        </div>
    );
};

export default Due;