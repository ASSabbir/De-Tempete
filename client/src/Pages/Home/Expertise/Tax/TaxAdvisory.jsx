import React from 'react';
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import img from '../../../../asstes/img_temp/Home/freepik__expand-__25358-scaled.webp'
import WhyTCFO from './WhyTCFO';
import HireTaxRegion from './HireTaxregion';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import TaxFAQ from './TaxFAQ';
const TaxAdvisory = () => {
    const text = ['Expert Tax Advisory Services for Smart, Compliant Growth', 'Navigate Tax Complexity with Confidence', 'Stay ahead of changing tax laws and compliance challenges. Our Tax Advisory services help your business minimize tax risks, optimize savings, and remain fully compliant across jurisdictions, ensuring your growth stays strategic and stress-free.', 'Book a Tax Consultation']
    const benefits = [
        "Reduce financial costs with expert strategic guidance",
        "Make confident business decisions backed by financial insights",
        "Improve cash flow and maximize long-term profitability",
        "Ensure accurate reporting and complete financial transparency",
        "Minimize compliance risks with proactive financial management",
        "Scale your business with growth-focused financial strategies",
    ];
    const keyBenefittext = ['Key Benefits', 'Of Professional Tax Advisor']
    const commitments = [
  "Free initial tax advisory consultation — no obligation",
  "100% confidential handling of your financial and tax information",
  "Proactive tax planning to minimize liabilities and maximize savings",
  "Expert guidance tailored to your business and personal tax needs",
];

const title = "Ready to Optimize Your Tax Strategy?";

const des =
  "From strategic tax planning to ongoing compliance, we help you reduce tax risks, maximize efficiency, and make informed financial decisions with confidence.";
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyTCFO></WhyTCFO>
            <HireTaxRegion></HireTaxRegion>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <TaxFAQ></TaxFAQ>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>

        </div>
    );
};

export default TaxAdvisory;