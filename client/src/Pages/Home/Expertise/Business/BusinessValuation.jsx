import React from 'react';

import img from '../../../../asstes/img_temp/Home/finalhero.webp'
import WhyPValuation from './WhyPValuation';
import BusinessValuationServices from './Businessvaluationservices';
import BKeyBenefits from './BKeybenefits';
import BFAQ from './BFAQ';
import Awards from '../../Awards';
import  { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import SharedFullButton from '../../../../Components/Shared/SharedFullButton';
import GetStarted from '../../../../Components/Shared/GetStarted';
import SecondSection from '../../../../Components/Shared/SecondSection';

import {
  TbUsersGroup,
  TbChartLine,
  TbChartBar,
  TbScale,
  TbCalculator,
  TbShieldExclamation,
  TbAdjustmentsHorizontal,
  TbRocket,
  TbReportAnalytics,
  TbDoorExit,
  TbFileReport,
  TbGavel,
} from "react-icons/tb";
import ServiceGrid from '../../../../Components/Shared/Servicegrid';

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};
const services = [
  {
    title: "Valuation Consulting",
    description:
      "Expert guidance to help startups understand value drivers, financial assumptions, and investor expectations.",
    Icon: TbUsersGroup,
  },
  {
    title: "Financial Modelling",
    description:
      "Detailed financial projections covering revenue, expenses, and cash flow — built to evaluate growth and profitability potential.",
    Icon: 
      
        TbChartLine
      
    ,
  },
  {
    title: "Market & Industry Analysis",
    description:
      "Comprehensive assessment of market size, trends, growth opportunities, and competitive positioning.",
    Icon: 
      
        TbChartBar
      
    ,
  },
  {
    title: "Comparable Company Analysis (CCA)",
    description:
      "Benchmarking with similar startups to provide realistic and investor-approved valuation insights.",
    Icon: 
    
        TbScale
      
    ,
  },
  {
    title: "Valuation Method Analysis",
    description:
      "Use of multiple valuation models, revenue multiples, asset-based models, risk-adjusted methods, and more, to ensure accuracy.",
    Icon: 
      
        TbCalculator
      
    ,
  },
  {
    title: "Risk Evaluation",
    description:
      "Assessment of operational, financial, technological, and regulatory risks that may impact valuation.",
    Icon: 
      
        TbShieldExclamation
    ,
  },
  {
    title: "Scenario & Sensitivity Analysis",
    description:
      "Evaluation of best-case, worst-case, and realistic scenarios to understand how different factors influence valuation outcomes.",
    Icon: 
      
        TbAdjustmentsHorizontal
      
    ,
  },
  {
    title: "Pre-Investment Valuation",
    description:
      "Helps founders negotiate equity, funding amounts, and investor terms confidently.",
    Icon: 
      
        TbRocket
      
    ,
  },
  {
    title: "Post-Funding Assessment",
    description:
      "Updated valuation after fundraising to reflect growth, new financials, and market shifts.",
    Icon: 
      
        TbReportAnalytics
      
    ,
  },
  {
    title: "Exit Strategy Valuation",
    description:
      "Valuation for mergers, acquisitions, IPO planning, or founder exit preparation.",
    Icon: TbDoorExit
    ,
  },
  {
    title: "Reporting & Documentation",
    description:
      "Clear, transparent, and audit-ready valuation reports with all assumptions, methodologies, and conclusions documented.",
    Icon: 
      
        TbFileReport 
      
    ,
  },
  {
    title: "Expert Testimony",
    description:
      "Professional representation for disputes, legal processes, or investor-related clarifications.",
    Icon: TbGavel
    ,
  },
];

const BusinessValuation = () => {
const commitments = [
  "Free initial business valuation consultation — no obligation",
  "100% confidential financial and business information handling",
  "Accurate, data-driven valuation reports you can trust",
  "Expert insights to support investment, fundraising, mergers, and strategic decisions",
];

const title = "Ready to Discover Your Business’s True Value?";

const des =
  "Whether you're raising investment, planning a merger or acquisition, preparing for a sale, or making strategic decisions, our business valuation services deliver accurate, reliable, and actionable insights with confidence.";


   
    return (
        <div>
            <VirtualBanner></VirtualBanner>
            <WhyPValuation></WhyPValuation>
            <ServiceGrid
             
             heading={<>Business Valuation <span className="font-extrabold">Services</span></>} 
             services={services}></ServiceGrid>

            

            <BKeyBenefits></BKeyBenefits>
            <BFAQ></BFAQ>
             <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            <Awards></Awards>
        </div>
    );
};
const VirtualBanner = () => {
    
    return (
        <div >
            <section className="relative w-full overflow-hidden md:h-[80vh]" >

                {/* BG Image — swap div for img when ready */}
                {/* <img src={cfoBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" /> */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('${img}')`,
                    }}
                />

                {/* Dark overlay — stronger on left, fades right */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(10,24,60,0.92) 0%, rgba(10,24,60,0.75) 45%, rgba(10,24,60,0.35) 100%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:h-[80vh]" >
                    <div className="w-full lg:w-3/4 py-20 flex flex-col gap-5">

                        {/* Title */}
                        <motion.h1
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-4xl 2xl:text-[3vw] font-extrabold text-white leading-tight"
                        >
                            Accurate. Insightful. Investor-Ready Business Valuation Services
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.15}
                            className="text-[#1a9fd4] font-semibold text-sm 2xl:text-[1.3vw] leading-snug"
                        >
                             Know Your True Worth Before You Raise Funding or Scale
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                            className="text-white/75 text-sm 2xl:text-[1vw] leading-relaxed max-w-md"
                        >
                            <span className='font-bold italic'>de tempête</span> startup valuation services help you understand where your business stands today, and what its future potential truly looks like. We assess your market, financials, risks, and competitive position to deliver a valuation that investors trust.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.45}
                        >
                            
                            <SharedFullButton text={'Get a Free Business Valuation Consultation'} path={'/contact'}></SharedFullButton>
                        </motion.div>

                    </div>
                </div>
            </section>
            <SecondSection></SecondSection>
        </div>
    );
}

export default BusinessValuation;