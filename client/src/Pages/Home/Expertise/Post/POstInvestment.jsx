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
import ServiceGrid from '../../../../Components/Shared/Servicegrid';
import {
  TbChartLine,
  TbShieldCheck,
  TbChartPie,
  TbReceiptTax,
  TbArrowsExchange,
  TbChartBar,
  TbChecklist,
  TbHeadset,
  TbNews,
  TbPercentage,
  TbDoorExit,
} from "react-icons/tb";


const POstInvestment = () => {
  const text = ['Post-Investment Monitoring That Protects & Grows Your Capital', 'Stay in Control. Stay Informed. Stay Ahead.', 'Post-investment monitoring isn’t just reporting — it’s long-term financial stewardship. de tempête ensures your capital is managed wisely, risks are minimized, performance is optimized, and every decision drives measurable growth and stability.', 'Get a Free Post-Investment Monitoring Consultation']
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
  const services = [
  {
    title: "Portfolio Monitoring & Analysis",
    description:
      "We track market movements, evaluate performance indicators, and identify opportunities to optimize your portfolio's growth.",
    icon: (
      
        <TbChartLine />
      
    ),
  },
  {
    title: "Risk Management",
    description:
      "Our team identifies risk exposure and implements mitigation strategies to safeguard your investments without compromising growth.",
    icon: (
      
        <TbShieldCheck />
      
    ),
  },
  {
    title: "Diversification Strategies",
    description:
      "Reduce concentration risk through smart, data-driven asset diversification and portfolio balancing.",
    icon: (
      
        <TbChartPie />
      
    ),
  },
  {
    title: "Tax Optimization",
    description:
      "We help structure your investments tax-efficiently, increasing your net returns and long-term gains.",
    icon: (
      
        <TbReceiptTax />
      
    ),
  },
  {
    title: "Rebalancing Plans",
    description:
      "We systematically rebalance your portfolio to maintain alignment with your financial goals and risk appetite.",
    icon: (
      
        <TbArrowsExchange />
      
    ),
  },
  {
    title: "Performance Reporting",
    description:
      "Receive transparent, easy-to-understand performance reports tracking returns, growth, risks, and overall portfolio health.",
    icon: (
      
        <TbChartBar />
      
    ),
  },
  {
    title: "Financial Planning Updates",
    description:
      "Your financial objectives evolve — and so should your investments. We refine your strategy regularly to keep it on track.",
    icon: (
      
        <TbChecklist />
      
    ),
  },
  {
    title: "Access to Expert Advice",
    description:
      "Our financial specialists are always available to discuss concerns, strategies, or new opportunities.",
    icon: (
      
        <TbHeadset />
      
    ),
  },
  {
    title: "Education & Insights",
    description:
      "Stay informed with market insights, trends, and expert commentary to make smarter financial decisions.",
    icon: (
      
        <TbNews />
      
    ),
  },
  {
    title: "Dividend & Interest Management",
    description:
      "We manage distribution cycles for income-generating assets with precision and transparency.",
    icon: (
      
        <TbPercentage />
      
    ),
  },
  {
    title: "Liquidation & Exit Strategies",
    description:
      "When it's time to exit, we ensure a smooth process that minimizes disruption, protects value, and considers all tax implications.",
    icon: (
      
        <TbDoorExit />
      
    ),
  },
];

  const des =
    "Our post-investment monitoring services provide continuous performance tracking, risk assessment, and strategic guidance to help your investment achieve sustainable growth and long-term success.";
  return (
    <div>
      <VirtualBanner img={img} text={text}></VirtualBanner>
      <WhyPost></WhyPost>
      <div className=' max-w-7xl mx-auto ' >
        <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
          <h1 className='text-3xl'>Stay Audit-Ready and Stress-Free With Professionally Managed Books</h1>
          <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
        </div>
      </div>
     
      <ServiceGrid
             description={<> Post-Investment support to help your business stay compliant, protected, and inspection-ready.</>}
             heading={<>Post-Investment <span className="font-extrabold">Monitoring</span></>}
             services={services}></ServiceGrid>
      
      <KeyBenefits benefits={benefits} keyBenefittext={['',<><span className="">Key Benefits of <span className='italic font-bold'>de tempête</span></span> Post Investment Monitoring Service</>]}></KeyBenefits>
      <PostFaq></PostFaq>
      <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
      <Awards></Awards>

    </div>
  );
};

export default POstInvestment;