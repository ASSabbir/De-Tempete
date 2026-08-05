import React from 'react';
import img1 from '../../../../asstes/img_temp/al.webp'

const WhyAml = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-normal text-[#0d1e4a] leading-tight mb-6">
            Stay Compliant. Build Trust.
            <br className="hidden sm:block" />
            <span className="font-extrabold">Operate With Confidence.</span>
          </h2>

          <div className="space-y-5 text-base font-inter text-gray-600">
            <p>
              At de tempête, we help businesses in the UAE meet their anti-money laundering, counter-terrorist financing, sanctions and regulatory obligations with confidence. From registration and risk assessment to regulatory reporting, independent review and compliance technology, our specialists provide end-to-end support that protects your business and keeps it inspection-ready.
            </p>
            <p>
              Whether you need goAML and TFS registration, a risk-based AML policy, KYC and screening support, or an outsourced compliance officer, de tempête tailors every engagement to your industry, customer base and regulatory exposure — so you can operate with full confidence.
            </p>
          </div>
        </div>

        <div className="relative w-full select-none">
          <div className="flex justify-center items-center h-96">
            <img src={img1} alt="" className="object-center object-cover w-full h-full rounded-3xl" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyAml;