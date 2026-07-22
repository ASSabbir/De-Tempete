import React from 'react';
import img from '../../../../asstes/img_temp/Home/freepik__the-style-is-candid-image-photography-with-natural__92072-scaled.webp'
import VirtualBanner from '../VirtualCfo/VirtualBanner';
import WhyBookeepingCFO from './WhyBookeepingCFO';
import SharedButton from '../../../../Components/Shared/SharedButton';
import KeyBenefits from '../VirtualCfo/Keybenefits';
import BookFAQ from './BookFAQ';
import GetStarted from '../../../../Components/Shared/GetStarted';
import Awards from '../../Awards';
import BookkeepingServices from './Bookkeepingservics';


const Bookkeeping = () => {
    const text=['Accurate. Transparent. Stress-Free Bookkeeping Services','Keep Your Finances Organized and Your Business Focused','de tempête’s bookkeeping services give you real-time financial clarity — from daily transactions to monthly reporting. We handle your books so you can focus on scaling, not spreadsheets.','Get a Free Bookkeeping Consultation']
    const benefits = [
        "Accurate and up-to-date financial records",
        "Reduced human error and compliance risk",
        "Faster and smarter business decision-making",
        "Seamless audit and tax preparation",
        "Scalable solutions for startups and established businesses alike",
        "Save time and resources by outsourcing your bookkeeping to trusted experts",
    ];
    const keyBenefittext=['Key Benefits','of Choosing de tempête Bookkeeping']


    return (
        <div>
            <VirtualBanner img={img} text={text}></VirtualBanner>
            <WhyBookeepingCFO></WhyBookeepingCFO>
            <div className=' max-w-7xl mx-auto pb-30' >
                <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-3xl'>Stay Audit-Ready and Stress-Free With Professionally Managed Books</h1>
                    <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <BookkeepingServices></BookkeepingServices>
            <KeyBenefits benefits={benefits} keyBenefittext={keyBenefittext}></KeyBenefits>
            <BookFAQ></BookFAQ>
            <GetStarted></GetStarted>
            <Awards></Awards>
        </div>
    );
};

export default Bookkeeping;