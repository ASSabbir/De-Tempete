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
import { HiChartBar } from "react-icons/hi"; 
import { motion } from "framer-motion";
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
    
    const commitments = [
  "Free initial post-investment consultation — no obligation",
  "Confidential monitoring and reporting of investment performance",
  "Regular performance reviews with actionable insights",
  "Ongoing strategic support to maximize long-term investment value",
];

const title = "Ready to Maximize the Value of Your Investment?";

const des =
  "Our post-investment monitoring services provide continuous performance tracking, risk assessment, and strategic guidance to help your investment achieve sustainable growth and long-term success.";
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
            <section className="w-full py-16 lg:py-24" style={{ background: "#0a1840" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
            <span className="font-extrabold">Key Benefits of <span className='italic'>de tempête</span></span> Post Investment Monitoring
          </h2>
        </div>

        {/* Teal divider line */}
        <div className="flex justify-center mb-12">
          <div
            className="h-0.5 w-24 rounded-full"
            style={{ background: "linear-gradient(to right, #1a9fd4, #22d3ee)" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group flex items-center justify-center gap-3 px-6 py-7 rounded-xl cursor-default transition-all duration-300 "
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              
            >
              <div className="text-4xl p-2 text-white rounded-xl bg-light-blue">
                <HiChartBar />
              </div>
              <p className="text-white  font-inter text-sm sm:text-base leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
            <PostFaq></PostFaq>
            <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
            
        </div>
    );
};

export default POstInvestment;