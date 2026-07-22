import React from 'react';
import img1 from '../../../../asstes/img_temp/Home/HR-Payroll-Hire-based-activity.webp'

const WhyHr = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-16 items-center">
        
                  
                  <div className='order-1 md:order-2 '>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
                      Why Your Business 
                      <br className="hidden sm:block" />
                       <span className="font-extrabold">Needs Professional HR & Payroll?</span>
                    </h2>
        
                    <div className="space-y-5 text-[15px] text-gray-600 leading-relaxed">
                      <p>
                         Managing employees is more than just salaries, it requires structured processes, compliance, and accuracy. Poor HR and payroll management can lead to legal risks, employee dissatisfaction, and operational inefficiencies. 
                      </p>
                      <p className='font-bold'>
                       With de tempête, you get:
                      </p>
                      <p>
                        <ul className='list-disc list-inside'>
                          <li>Accurate and timely payroll processing</li>
                          <li>Full compliance with labor laws and regulations</li>
                          <li>Streamlined HR processes and documentation</li>
                          <li>Reduced administrative burden and errors</li>
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

export default WhyHr;