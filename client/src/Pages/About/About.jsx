import React from 'react';
import AboutBanner from '../About/AboutBanner'
import ForwardSection from './ForwardSection';
import TrustedPartner from './TrustedPartner';
import GrowthPartners from './Growthpartners';
import LogoMarqueeRows from './Logomarqueerows';
import SharedButton from '../../Components/Shared/SharedButton';
import LastSection from './LastSection';
import img1 from '../../asstes/img_temp/industry.webp'

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <ForwardSection></ForwardSection>
            <TrustedPartner></TrustedPartner>
            <GrowthPartners></GrowthPartners>
            <section className="pb-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
                    <img
                        src={img1}
                        alt="Industries We Serve"
                        className="w-full h-full object-cover rounded-3xl shadow-lg"
                    />
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl leading-tight text-[#16244b] font-light">
                            Industries <span className="font-bold">We Serve</span>
                        </h2>
                        <p className="mt-6 text-base leading-8 text-gray-500 font-semibold">
                            Trusted across sectors, tailored to your industry's needs.
                        </p>
                        <p className="mt-3 text-base leading-8 text-gray-500">
                            From aerospace and healthcare to e-commerce and hospitality, our
                            team brings deep sector expertise to every engagement. We
                            understand the regulatory, financial, and operational nuances
                            unique to each industry, allowing us to deliver advice and
                            support that's practical, relevant, and built around how your
                            business actually works.
                        </p>
                    </div>
                </div>
            </section>
            <div className=' max-w-7xl mx-auto pb-20' >
                <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-3xl'>We’re a Global Accounting Outsourcing & Business Advisory Firm.</h1>
                    <SharedButton text={'Get Started Now'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <h2 className="text-3xl text-center  leading-tight text-dark-blue sm:text-5xl">
                <span className="font-extrabold">Trusted</span> Clients
            </h2>
            <LogoMarqueeRows></LogoMarqueeRows>
            <LastSection></LastSection>
        </div>
    );
};

export default About;