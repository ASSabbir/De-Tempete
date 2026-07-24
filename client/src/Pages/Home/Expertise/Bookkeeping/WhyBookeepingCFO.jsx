import React from 'react';
import img1 from '../../../../asstes/img_temp/Home/freepik__professional-corporate-bookkeeping-setup-stacked-f__92073.webp'

const WhyBookeepingCFO = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-16 items-center">


        <div className=' '>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Why Does Your Business Need
            <br className="hidden sm:block" />
            <span className="font-extrabold">Professional Bookkeeping? </span>
          </h2>

          <div className="space-y-5 text-base font-inter text-gray-600 ">
            <p>
              Managing finances manually or irregularly can lead to costly errors, compliance issues, and missed growth insights. Professional bookkeeping ensures accuracy, transparency, and data you can trust.
            </p>
            <p className='font- text-dark-blue text-xl'>
              With <span className='italic font-bold'>de tempête’s</span> experts, you get:
            </p>
            <div className='space-y-1'>
              <div className='flex items-center  gap-2'>
                  <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                  <h1>Clean, organized, and audit-ready financial records</h1>
                </div>
                <div className='flex items-center  gap-2'>
                  <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                  <h1>Better control over cash flow and expenses</h1>
                </div>
                <div className='flex items-center  gap-2'>
                  <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                  <h1>Real-time insights for faster, smarter business decisions</h1>
                </div>
            </div>
          </div>
        </div>


        <div className="relative  w-full select-none">
          <div className="flex justify-center items-center h-96 ">
            <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyBookeepingCFO;