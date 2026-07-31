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
const blogPosts = [
  {
    id: 1,
    slug: "council-tax-arrangement-plan",
    image: img1,
    title: "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
    desc: "Council tax, a local taxation system in the UK, can sometimes become a financial burden for residents. If you find yourself struggling to meet council tax payments, it's essential to",
  },
  {
    id: 2,
    slug: "self-assessment-tax-return-process",
    image: img2,
    title: "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
    desc: "Welcome to de tempête, where we simplify the intricate world of tax return processes for businesses. In this comprehensive guide, we will walk you through the self-assessment tax return process,",
  },
  {
    id: 3,
    slug: "virtual-cfo-role-benefits",
    image: img3,
    title: "The Role and Benefits of a Virtual CFO in Modern Businesses",
    desc: "Welcome to de tempête, where we redefine financial management for the modern business landscape. In this blog post, we unravel the vital role and numerous benefits of having a Virtual",
  },
];
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
                <div className=' max-w-7xl mx-auto'>
                    <h1 className='text-6xl font-bold text-[#0d1e4a]   text-center mb-10'>Testimonial</h1>
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
            {/* <RecentBlogs blogs={blogPosts} /> */}


        </div>
    );
};

export default Home;