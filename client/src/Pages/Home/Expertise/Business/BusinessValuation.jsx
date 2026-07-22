import React from 'react';
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import img from '../../../../asstes/img_temp/Home/finalhero.webp'
import WhyPValuation from './WhyPValuation';
import BusinessValuationServices from './Businessvaluationservices';
import BKeyBenefits from './BKeybenefits';
import BFAQ from './BFAQ';
import Awards from '../../Awards';
const BusinessValuation = () => {
    const text=['Accurate. Insightful. Investor-Ready Startup Valuation Services','Know Your True Worth Before You Raise Funding or Scale','de tempête startup valuation services help you understand where your business stands today, and what its future potential truly looks like. We assess your market, financials, risks, and competitive position to deliver a valuation that investors trust.','Get a Free Startup Valuation Consultation']
    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyPValuation></WhyPValuation>
            <BusinessValuationServices></BusinessValuationServices>
            <BKeyBenefits></BKeyBenefits>
            <BFAQ></BFAQ>
            <Awards></Awards>
        </div>
    );
};

export default BusinessValuation;