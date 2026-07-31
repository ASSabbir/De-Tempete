import React from 'react';
import AboutBanner from '../About/AboutBanner'
import ForwardSection from './ForwardSection';
import TrustedPartner from './TrustedPartner';
import GrowthPartners from './Growthpartners';
import LogoMarqueeRows from './Logomarqueerows';
import SharedButton from '../../Components/Shared/SharedButton';
import LastSection from './LastSection';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <ForwardSection></ForwardSection>
            <TrustedPartner></TrustedPartner>
            <GrowthPartners></GrowthPartners>
            <div className=' max-w-7xl mx-auto pb-30' >
                <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-3xl'>We’re a Global Accounting Outsourcing & Business Advisory Firm.</h1>
                    <SharedButton text={'Get Started Now'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <h2 className="text-3xl text-center mt-15 leading-tight text-dark-blue sm:text-5xl">
                <span className="font-extrabold">Trusted</span> Clients
            </h2>
            <LogoMarqueeRows></LogoMarqueeRows>
            <LastSection></LastSection>
        </div>
    );
};

export default About;