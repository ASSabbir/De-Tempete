import React from 'react';
import img from '../../../../asstes/Images/Home/HR-Payroll-Hero-section-1.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyHr from './WhyHr';
import HrAdvantage from './Hradvantage';

const HRandPayroll = () => {
    const text =['Reliable, Compliant, Hassle-Free HR & Payroll Management Services','Empowering Growth with Expert Financial Leadership — Virtually','Simplify workforce management with structured HR processes and accurate payroll systems, ensuring compliance, employee satisfaction, and operational efficiency. ','Get a Free HR Consultation']
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyHr></WhyHr>
            <HrAdvantage></HrAdvantage>
            
        </div>
    );
};

export default HRandPayroll;