import React from 'react';
import img1 from '../../../../asstes/Images/servics/KSA/freepik__create-image-for-twhy-business-need-virtual-cfo-se__20677.webp'

const WhyTCFO = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-16 items-center">
        
                  
                  <div className='order-1 md:order-2 '>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
                      Why Your Business Needs a 
                      <br className="hidden sm:block" />
                       <span className="font-extrabold">Tax Advisory</span>
                    </h2>
        
                    <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed">
                      <p>
                         Tax laws are constantly evolving, and missteps can be costly. Whether you’re expanding globally, restructuring, or managing day-to-day compliance, expert tax advisory ensures your business stays compliant while maximizing efficiency.
                      </p>
                      <p className='font-bold'>
                        De Tempête’s tax advisors help you:
                      </p>
                      <p>
                        <ul className='list-disc list-inside'>
                          <li>Identify opportunities for tax optimization and savings.</li>
                          <li>Maintain full compliance with local and international regulations.</li>
                          <li>Build a transparent, risk-free tax structure that supports long-term growth.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
        
                 
                  <div className="relative order-2 md:order-1 w-full select-none">
                    <div className="flex justify-center items-center h-96 ">
                         <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
                     </div>
                  </div>
        
                </div>
              </div>
    );
};

export default WhyTCFO;