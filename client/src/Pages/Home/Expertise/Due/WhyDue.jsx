import React from 'react';
import img1 from '../../../../asstes/img_temp/Home/freepik__create-a-hyperrealistic-cinematic-hero-image-repre__92087-scaled.webp'

const WhyDue = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Why Does Investors Need
            <br className="hidden sm:block" />
            <span className="font-extrabold">due diligence</span>
          </h2>

          <div className="space-y-5 text-base font-inter text-gray-600 ">
            <p>
              Prior to an investment due diligence is a process that involves research and analysis to ascertain the financial integrity and compliance of the subject of the due diligence as well as the existence of any significant problem areas or potential issues. Before making an investment, a potential buyer or investor must gather all relevant data. Securing a decent bargain and avoiding mistakes are also crucial.
            </p>
            <p className=''>
              If you are looking to carry out a due diligence inspection but are not sure as to how it works, you can get in touch with de tempête for due diligence services and financial due diligence solutions.

              These services involve a thorough and comprehensive examination of financial, operational, legal, and other relevant aspects to ensure that investors have a clear understanding of what they are investing in.
            </p>

          </div>
        </div>


        <div className="relative w-full select-none">
          <div className="flex justify-center items-center h-96 ">
            <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyDue;