import React from 'react';
import img1 from '../../../../asstes/Images/Home/freepik__candid-i-with-natural-textures-and-highly-realisti__92088-scaled.webp'

const WhyPost = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Why Does Investors Need
            <br className="hidden sm:block" />
            <span className="font-extrabold">Post-Investment Monitoring</span>
          </h2>

          <div className="space-y-5 text-base font-inter text-gray-600 ">
            <p>
              Investing is only the beginning; what happens afterward determines your true returns. Most businesses lose value not because of bad investments, but due to weak oversight, unmanaged risks, unclear reporting, and the absence of strategic adjustments. de tempête ensures your capital is protected and performing by keeping your investments aligned with long-term goals, identifying risks early, and providing transparent performance tracking.

Our post-investment financial management includes monitoring financial performance, tracking cash flow and expenses, controlling budgets, reporting to stakeholders, ensuring regulatory compliance, and making strategic decisions that maximize returns. Choosing the right post-investment partner is critical and de tempête
            </p>
            <p className=''>
              offers the expertise, discipline, and strategic insight your portfolio needs to grow safely and consistently.
            </p>

          </div>
        </div>


        <div className="relative w-full select-none">
          <div className="flex justify-center items-center h-120 ">
            <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyPost;