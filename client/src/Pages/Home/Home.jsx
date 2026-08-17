import React from 'react';
import Banner from './Banner';
import WhyChoose from './WhyChoose';
import WhatWeDo from './Whatwedo';
import ReadyToStublish from './ReadyToStublish';
import HireBased from './HireBased';
import Resources from './Resources';
import Awards from './Awards';
import Reviews from './Reviews';
import FAQ from './FAQ';
import { RecentBlogs } from "@/Components/Shared/RecentBlogs";
import img1 from '../../asstes/img_temp/New folder/council-tax.webp'
import img2 from '../../asstes/img_temp/New folder/self-assessment-tax-return.webp'

import img3 from '../../asstes/img_temp/New folder/Virtual-CFO-2048x1366.webp'

import EventBlogPartners from './Eventblogpartners';
import SharedButton from '../../Components/Shared/SharedButton';
import VideoReviews from './VideoReviews';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <WhatWeDo></WhatWeDo>
            <ReadyToStublish></ReadyToStublish>
            <HireBased></HireBased>
            <Resources></Resources>

            <div className='bg-gray-50 pt-30'>
                <div >
                <div className=' max-w-7xl mx-auto'>
                    <h1 className='text-4xl md:text-5xl font-bold text-[#0d1e4a]   text-center mb-10'>Feedback Inspire Us </h1>
                    <Reviews></Reviews>
                </div>
            </div>
            <VideoReviews></VideoReviews>
            </div>
            <Awards></Awards>
            <div className='px-10  pb-30' >
                <div className='flex flex-col md:flex-row gap-3 max-w-7xl mx-auto bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-sm md:text-2xl 2xl:text-[1.5vw]'>We’re a Global Accounting Outsourcing & Business Advisory Firm.</h1>
                    <SharedButton text={'Get Started Now'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <FAQ></FAQ>
            
            <RecentBlogs  />
            <EventBlogPartners></EventBlogPartners>


        </div>
    );
};

export default Home;