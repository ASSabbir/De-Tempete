import React from 'react';
import VirtualBanner from './VirtualBanner';
import WhyVCFO from './WhyVCFO';
import VirtualCFOServices from './Virtualcfoservices';
import CFOAdvantage from './CFOadvantage';
import HireCFORegion from './HireCFOregion';

const VirtualCFO = () => {
    return (
        <div>
            <VirtualBanner></VirtualBanner>
            <WhyVCFO></WhyVCFO>
            <VirtualCFOServices></VirtualCFOServices>
            <CFOAdvantage></CFOAdvantage>
            <HireCFORegion></HireCFORegion>
            
        </div>
    );
};

export default VirtualCFO;