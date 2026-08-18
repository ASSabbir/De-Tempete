import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import SharedFullButton from '../../../../Components/Shared/SharedFullButton';
import SecondSection from '../../../../Components/Shared/SecondSection';

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
                <div className="relative py-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:h-[80vh]" >
                    <div className="w-full lg:w-3/4 py-20 flex flex-col gap-5">

                        {/* Title */}
                        <motion.h1
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-2xl lg:text-4xl 2xl:text-[3vw] font-extrabold text-white leading-tight"
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
                            className="text-[#1a9fd4] font-semibold text-sm 2xl:text-[1.3vw] leading-snug"
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
                             {text[2]}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.45}
                            className='mt-5'
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

export default VirtualBanner;