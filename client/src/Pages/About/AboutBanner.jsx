import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import img from '../../asstes/img_temp/de-tempete.webp'
import SecondSection from '../../Components/Shared/SecondSection';
const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};




const AboutBanner = ({ text }) => {
    
    return (
        <div >
            <section className="relative w-full overflow-hidden  h-[80vh]" >

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
                <div className="relative z-10 max-w-6xl mx-auto px-4 h-full sm:px-6 lg:px-8 flex items-center md:h-[80vh]" >
                    <div className="w-full border-l-3 pl-5 border-gray-500 lg:w-3/4  flex flex-col gap-5">

                        
                        {/* Title */}
                        <motion.h1
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-3xl sm:text-4xl 2xl:text-6xl font-extrabold text-white t"
                        >
                             Your Trusted Partner in Accounting, Compliance & Business Growth
                        </motion.h1>



                        {/* Description */}
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                            className="text-white/75 text-base sm:text-base leading-relaxed max-w-2xl"
                        >
                            Need to change: Comprehensive finance and business advisory services—from Virtual CFO, accounting and tax to valuation, UAE AML compliance, due diligence and investment advisory—helping businesses stay compliant, make better decisions and grow with confidence.
                        </motion.p>



                    </div>
                </div>
            </section>
            {/* ── Stats Bar ── */}
            <SecondSection></SecondSection>
        </div>
    );
}

export default AboutBanner;