import React from 'react';
import img1 from '../../../../asstes/img_temp/servics/KSA/freepik__create-image-for-twhy-business-need-virtual-cfo-se__20677.webp'

const WhyVCFO = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
                  {/* Left — Text */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
                      Why Your Business Needs a 
                      <br className="hidden sm:block" />
                       <span className="font-extrabold">Virtual CFO</span>
                    </h2>
        
                    <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
                      <p>
                         Building a business from the ground up is rewarding — but managing its finances as it grows can be overwhelming. Most growing companies need experienced financial leadership, yet hiring a full-time CFO can be costly.
                      </p>
                      <p>
                        A <span className="font-bold italic text-[#0d1e4a]">Virtual CFO </span>bridges that gap — offering strategic financial management on a flexible, part-time, or project basis. You get the same executive-level expertise at a fraction of the cost.
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
              </div>
    );
};

export default WhyVCFO;