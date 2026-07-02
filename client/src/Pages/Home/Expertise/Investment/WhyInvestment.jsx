import React from 'react';
import img1 from '../../../../asstes/Images/Home/freepik__the-style-is-candid-image-photography-with-natural__92081-scaled.webp'

const WhyInvestment = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Why does Business needs
            <br className="hidden sm:block" />
            <span className="font-extrabold">Investment Readiness? </span>
          </h2>

          <div className="space-y-5 text-base font-inter text-gray-600 ">
            <p>
              Raising investment is challenging,  investors see hundreds of pitches and only back businesses that are fully prepared. Investment readiness ensures your business is organized, financially clear, and attractive to the right investors.
            </p>
            <p className='font-bold text-dark-blue text-xl'>
              De Tempête guides you to:
            </p>
            <div className='space-y-1'>
              <div className='flex items-center  gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                <h1>Identify investors whose values align with your vision.</h1>
              </div>
              <div className='flex items-center  gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                <h1>Prepare clear, persuasive, and accurate financial and strategic information.
</h1>
              </div>
              <div className='flex items-center  gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/875/875636.png" className='h-6' alt="" />
                <h1>Develop a targeted strategy that increases your chance of securing funding.</h1>
              </div>
            </div>
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

export default WhyInvestment;