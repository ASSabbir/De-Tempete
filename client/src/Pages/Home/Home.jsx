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
import { blogPosts } from "@/Components/Shared/blogPosts";
import EventBlogPartners from './Eventblogpartners';
import SharedButton from '../../Components/Shared/SharedButton';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <WhatWeDo></WhatWeDo>
            <ReadyToStublish></ReadyToStublish>
            <HireBased></HireBased>
            <Resources></Resources>

            <div className='bg-gray-100 py-30 py-20'>
                <div className=' max-w-7xl mx-auto'>
                    <h1 className='text-[1vw] text-[#0d1e4a] font-normal  text-center mb-10'>Testimonial</h1>
                    <Reviews></Reviews>
                </div>
            </div>
            <Awards></Awards>
            <div className='px-10  pb-30' >
                <div className='flex max-w-7xl mx-auto bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                    <h1 className='text-[1.5vw]'>We’re a Global Accounting Outsourcing & Business Advisory Firm.</h1>
                    <SharedButton text={'Get Started Now'} path={'/contact'}></SharedButton>
                </div>
            </div>
            <FAQ></FAQ>
            <EventBlogPartners></EventBlogPartners>
            <RecentBlogs blogs={blogPosts} />


        </div>
    );
};

export default Home;