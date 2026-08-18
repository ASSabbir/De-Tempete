import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__the-style-is-candid-image-photography-with-natural__92072-scaled.webp'

import WhyBookeepingCFO from './WhyBookeepingCFO';
import SharedButton from '../../../../Components/Shared/SharedButton';

import BookFAQ from './BookFAQ';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import BookkeepingServices from './Bookkeepingservics';
import { HiChartBar } from "react-icons/hi";
import { motion } from "framer-motion";
import  { useEffect, useRef, useState } from 'react';

import { Link } from "react-router";
import SharedFullButton from '../../../../Components/Shared/SharedFullButton';
import SecondSection from '../../../../Components/Shared/SecondSection';
import ServiceGrid from '../../../../Components/Shared/Servicegrid';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import { TbBook, TbBuildingBank, TbCertificate, TbChartAreaLine, TbCircleCheck, TbClock, TbFileDollar, TbFileInvoice, TbNotebook, TbPigMoney, TbReceipt, TbReceiptTax, TbReportMoney, TbSearch } from "react-icons/tb";

const services = [
  {
    title: "Recording Transactions",
    description:
      "We record all financial transactions, sales, purchases, expenses, and income, in the appropriate ledgers or accounting software for complete accuracy.",
    icon: (
      
        <TbNotebook />
      
    ),
  },
  {
    title: "Accounts Receivable",
    description:
      "Track and manage customer payments, ensuring invoices are collected promptly and cash flow remains steady.",
    icon: (
      
        <TbFileInvoice />
      
    ),
  },
  {
    title: "Accounts Payable",
    description:
      "Monitor supplier and vendor payments to maintain strong relationships and avoid late fees.",
    icon: (
      
        <TbFileDollar />
      
    ),
  },
  {
    title: "Bank Reconciliation",
    description:
      "We regularly reconcile your accounts to identify and resolve discrepancies between your books and bank statements.",
    icon: (
      
        <TbBuildingBank />
      
    ),
  },
  {
    title: "Expense Tracking",
    description:
      "Systematic classification and monitoring of company expenses, including rent, utilities, payroll, and operational costs.",
    icon: (
      
        <TbReceipt />
      
    ),
  },
  {
    title: "Financial Reporting",
    description:
      "Monthly and quarterly reports, including balance sheets, profit & loss, and cash flow statements, to give you a clear financial picture.",
    icon: (
      
        <TbReportMoney />
      
    ),
  },
  {
    title: "General Ledger Maintenance",
    description:
      "We maintain a comprehensive record of every financial transaction to ensure your books are complete and audit-ready.",
    icon: (
      
        <TbBook />
      
    ),
  },
  {
    title: "Tax Preparation",
    description:
      "Organize and present financial data for tax filing, ensuring accuracy, compliance, and on-time submission.",
    icon: (
      
        <TbReceiptTax />
      
    ),
  },
  {
    title: "Data Accuracy & Integrity",
    description:
      "All financial data is securely recorded, verified, and stored, ensuring reliable information for critical decisions.",
    icon: (
      
       
        <TbReceiptTax />
      
    ),
  },
  {
    title: "Financial Analysis",
    description:
      "We interpret financial data to help you identify trends, strengths, and areas for improvement.",
    icon: (
      
        <TbChartAreaLine />
      
    ),
  },
  {
    title: "Budgeting Support",
    description:
      "Assist in creating and managing budgets to optimize resources, control spending, and plan for growth.",
    icon: (
      
        <TbPigMoney />
      
    ),
  },
  {
    title: "Reduced Errors",
    description:
      "Our skilled professionals minimize mistakes in financial recording and reporting through proven best practices.",
    icon: (
      
        <TbCircleCheck />
      
    ),
  },
  {
    title: "Time Savings",
    description:
      "Outsource your bookkeeping tasks to free up time for strategic planning and business development.",
    icon: (
      
        <TbClock />
      
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Stay fully compliant with accounting and tax laws as our experts stay updated with the latest regulations.",
    icon: (
      
        <TbCertificate />
      
    ),
  },
  {
    title: "Audit Support",
    description:
      "We prepare all necessary documentation and information for smooth external audits when required.",
    icon: (
      
        <TbSearch />
      
    ),
  },
];
 

const Bookkeeping = () => {
    const text = ['Accurate. Transparent. Stress-Free Bookkeeping Services', 'Keep Your Finances Organized and Your Business Focused', 'de tempête’s bookkeeping services give you real-time financial clarity — from daily transactions to monthly reporting. We handle your books so you can focus on scaling, not spreadsheets.', 'Get a Free Bookkeeping Consultation']
    const benefits = [
        "Accurate and up-to-date financial records",
        "Reduced human error and compliance risk",
        "Faster and smarter business decision-making",
        "Seamless audit and tax preparation",
        "Scalable solutions for startups and established businesses alike",
        "Save time and resources by outsourcing your bookkeeping to trusted experts",
    ];
    const commitments = [
  "Free initial bookkeeping consultation — no obligation",
  "100% confidential financial data handling",
  "Accurate, timely, and compliant bookkeeping services",
  "Tailored bookkeeping solutions to support your business growth",
];

const title = "Ready to Simplify Your Bookkeeping?";

    const keyBenefittext = ['',<><span className="font-">Key Benefits</span> of Choosing <span className='italic font-black text-li'>de tempête</span> Bookkeeping</>]

const des =
  "From recording daily transactions to maintaining accurate financial records, we help keep your books organized, compliant, and ready for smarter business decisions.";
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyBookeepingCFO></WhyBookeepingCFO>
            <div className='px-6 max-w-7xl mx-auto pb-30' >
                <div className='flex flex-col md:flex-row gap-5 bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-xl md:text-2xl '>Stay Audit-Ready and Stress-Free With Professionally <br/> Managed Books</h1>
                    <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
                </div>
            </div>
           
            
            <ServiceGrid description={<><span className="font-bold italic text-[#0d1e4a]">de tempête</span> provides seamless bookkeeping services to make reservations simple, efficient, and hassle-free.</>} heading={<>Bookkeeping <span className="font-extrabold">Services</span></>} services={services}></ServiceGrid>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>

            
            <BookFAQ></BookFAQ>
             <GetStarted commitments={commitments} title={title} des={des}></GetStarted>
            
            <Awards></Awards>
        </div>
    );
};


const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};


const VirtualBanner = ({img,text}) => {
    
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
                            className="text-3xl md:text-4xl 2xl:text-[3vw] font-extrabold text-white leading-tight"
                        >
                            {text[0]}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.15}
                            className="text-[#1a9fd4] font-semibold text-xl md:text-2xl 2xl:text-[1.3vw] leading-snug"
                        >
                             {text[1]}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                            className="text-white/75 text-sm md:text-sm 2xl:text-[1vw] leading-relaxed max-w-xl"
                        >
                             <span className='italic font-bold'>de tempête</span>’s bookkeeping services give you real-time financial clarity — from daily transactions to monthly reporting. We handle your books so you can focus on scaling, not spreadsheets.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.45}
                        >
                            
                            <SharedFullButton text={text[3]} path={'/contact'}></SharedFullButton>
                        </motion.div>

                    </div>
                </div>
            </section>
            {/* ── Stats Bar ── */}
            <SecondSection></SecondSection>
        </div>
    );
}


export default Bookkeeping;