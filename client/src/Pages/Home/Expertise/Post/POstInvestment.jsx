import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92080.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyPost from './WhyPost';
import SharedButton from '../../../../Components/Shared/SharedButton';
import PostInvestmentMonitoring from './Postinvestmentmonitoring';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import PostFaq from './PostFaq';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
const POstInvestment = () => {
    const text=['Post-Investment Monitoring That Protects & Grows Your Capital','Stay in Control. Stay Informed. Stay Ahead.','Post-investment monitoring isn’t just reporting — it’s long-term financial stewardship. de tempête ensures your capital is managed wisely, risks are minimized, performance is optimized, and every decision drives measurable growth and stability.','Get a Free Post-Investment Monitoring Consultation']
    const benefits = [
        "Protect Your Investments with Expert Oversight",
        "Gain Clear Insights and Transparent Reporting",
        "Identify Risks Early and Safeguard Returns",
        "Maximize Long-Term Growth and Stability",
        "Ensure Compliance and Financial Accuracy",
        "Optimize Portfolio Performance with Strategic Guidance",
    ];
    const keyBenefittext=['Key Benefits of de tempête','Post Investment Monitoring']
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyPost></WhyPost>
            <div className=' max-w-7xl mx-auto pb-30' >
                <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-3xl'>Stay Audit-Ready and Stress-Free With Professionally Managed Books</h1>
                    <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <PostInvestmentMonitoring></PostInvestmentMonitoring>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <PostFaq></PostFaq>
            <GetStarted></GetStarted>
            <Awards></Awards>
            
        </div>
    );
};

export default POstInvestment;