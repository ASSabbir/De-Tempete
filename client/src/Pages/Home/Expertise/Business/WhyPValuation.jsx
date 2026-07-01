import React from 'react';
import img1 from '../../../../asstes/Images/Home/bv.webp'
import SharedButton from '../../../../Components/Shared/SharedButton';

const WhyPValuation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Why Your Startup Needs a
            <br className="hidden sm:block" />
            <span className="font-extrabold">Professional Valuation?</span>
          </h2>

          <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
            <p>
              Startups operate in uncertainty, fluctuating markets, evolving customer needs, and no guarantee of revenue timelines. That’s exactly why a reliable valuation matters
            </p>
            <p>
              With expert valuation, you get:
              <ul className='list-disc list-inside mt-3'>
                <li>A clear picture of your startup’s market value</li>
                <li>Strong negotiation power when raising funding</li>
                <li>Insight to plan expansion, build strategies, and mitigate risk</li>
                <li>Credibility when speaking to lenders and investors</li>
              </ul>
            </p>
            <p>
              Our experienced CFOs collaborate closely with your leadership team to optimize cash flow, manage risks, enhance profitability, and create long-term value for your business.
            </p>
          </div>
        </div>


        <div className="relative w-full select-none">
          <div className="flex justify-center items-center h-96 ">
            <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
          </div>
        </div>

      </div>
      <div className='flex bg-dark-blue font-semibold rounded-2xl mt-20 text-white justify-between items-center p-10'>
                <h1 className='text-2xl'>Get a Powerful, Investor-Ready Valuation That Accelerates Your Funding Journey</h1>
                <SharedButton text={'Start Today'} path={'/contact'}></SharedButton>
            </div>
    </div>
  );
};

export default WhyPValuation;