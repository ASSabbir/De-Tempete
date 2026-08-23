import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router";
import SharedButton from './SharedButton';
import SecondSection from './SecondSection';




const SevicsBanner = ({
    bgImage,
    title1,
   alt,
    title2,
    description,
    id,
}) => {
   
    return (
        <section >
            <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-32 pb-20">
                <img
                    src={bgImage}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0d1b3e]/75"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl 2xl:text-7xl font-bold leading-tight">
                        {title1}

                        <br />
                        <span className="text-light-blue">{title2}</span>

                    </h1>

                    <p className="max-w-4xl mx-auto mt-6 mb-10 text-base 2xl:text-xl text-gray-200 leading-relaxed">
                        {description}
                    </p>

                    
                        <SharedButton text={'Book a Consultation →'} path={`#${id}`}></SharedButton>
                </div>
            </section>
            <SecondSection></SecondSection>
        </section>
    );
};
export default SevicsBanner;