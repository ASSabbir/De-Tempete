import React from 'react';
import img from '../../../../asstes/img_temp/aml.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyAml from './WhyAml';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import AmlFaq from './AmlFaq';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import AmlServices from './AmlServices';
import BusinessSetupBook from './BusinessSetupBook';

const Aml = () => {
    const text = [
        'UAE AML Compliance Services',
        'Stay Compliant. Build Trust. Operate With Confidence.',
        'At de tempête, we help businesses in the UAE meet their anti-money laundering, counter-terrorist financing, sanctions and regulatory obligations with confidence.',
        'Get Compliance Ready Today'
    ]
    const benefits = [
        "Stay fully aligned with UAE FIU, goAML and TFS requirements",
        "Reduce regulatory and reputational risk with a risk-based AML framework",
        "Pass Ministry of Economy inspections with confidence",
        "Access experienced MLRO and compliance oversight on demand",
        "Automate sanctions, PEP and adverse-media screening",
        "Keep robust, audit-ready KYC and CDD records",
    ];
    const keyBenefittext = ['Build a Compliance Framework ', 'You Can Trust']
    const commitments = [
        "Free initial AML compliance consultation — no obligation",
        "100% confidential handling of all business and customer information",
        "Full-scope support across registration, policy, screening and reporting",
        "Clear, actionable guidance to stay inspection-ready year-round",
    ];

    const title = "Ready to Strengthen Your AML Compliance?";
    const des =
        "Our compliance specialists provide end-to-end AML support — from goAML and TFS registration to policy design, screening, training and audits — so your business stays protected, compliant and inspection-ready.";

    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyAml></WhyAml>
            <AmlServices></AmlServices>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <AmlFaq></AmlFaq>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
            <BusinessSetupBook></BusinessSetupBook>
        </div>
    );
};

export default Aml;