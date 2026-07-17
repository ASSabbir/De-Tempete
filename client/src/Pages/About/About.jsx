import React from 'react';
import AboutBanner from '../About/AboutBanner'
import ForwardSection from './ForwardSection';
import TrustedPartner from './TrustedPartner';
import GrowthPartners from './Growthpartners';
import LogoMarqueeRows from './Logomarqueerows';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <ForwardSection></ForwardSection>
            <TrustedPartner></TrustedPartner>
            <GrowthPartners></GrowthPartners>
            {/* <LogoMarqueeRows></LogoMarqueeRows> */}
        </div>
    );
};

export default About;