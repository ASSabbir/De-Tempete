import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__the-style-is-candid-image-photography-with-natural__92072-scaled.webp'

import WhyBookeepingCFO from './WhyBookeepingCFO';
import SharedButton from '../../../../Components/Shared/SharedButton';
import KeyBenefits from '../VirtualCfo/Keybenefits';
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

const des =
  "From recording daily transactions to maintaining accurate financial records, we help keep your books organized, compliant, and ready for smarter business decisions.";
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyBookeepingCFO></WhyBookeepingCFO>
            <div className='px-6 max-w-7xl mx-auto pb-30' >
                <div className='flex flex-col md:flex-row gap-5 bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-xl md:text-3xl'>Stay Audit-Ready and Stress-Free With Professionally <br/> Managed Books</h1>
                    <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <BookkeepingServices></BookkeepingServices>

            <section className="w-full py-16 lg:py-24" style={{ background: "#0a1840" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                            <span className="font-extrabold">Key Benefits</span> of Choosing <span className='italic font-black text-li'>de tempête</span> Bookkeeping
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
                                <p className="text-white  font-inter text-base sm:text-base leading-snug">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
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