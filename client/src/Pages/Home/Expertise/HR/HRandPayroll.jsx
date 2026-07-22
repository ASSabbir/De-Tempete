import React from 'react';
import img from '../../../../asstes/img_temp/Home/HR-Payroll-Hero-section-1.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyHr from './WhyHr';
import HrAdvantage from './Hradvantage';
import HireHRregion from './HireHRregion';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import HRFaq from './HRFaq';
import GetStarted from '../../../../Components/Shared/GetStarted'
import Awards from '../../Awards'
const HRandPayroll = () => {
    const text =['Reliable, Compliant, Hassle-Free HR & Payroll Management Services','Empowering Growth with Expert Financial Leadership — Virtually','Simplify workforce management with structured HR processes and accurate payroll systems, ensuring compliance, employee satisfaction, and operational efficiency. ','Get a Free HR Consultation']
    const benefits=['Accurate and error-free payroll processing','Full compliance with local labor laws','Improved employee satisfaction and trust','Reduced administrative workload','Streamlined HR operations and processes','Better workforce management and control']
    const keyBenefittext=['Key Benefits ','Of Choosing Professional HR & Payroll']

    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyHr></WhyHr>
            <HrAdvantage></HrAdvantage>
            <HireHRregion></HireHRregion>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <HRFaq></HRFaq>
            <GetStarted></GetStarted>
            <Awards></Awards>
            
        </div>
    );
};

export default HRandPayroll;