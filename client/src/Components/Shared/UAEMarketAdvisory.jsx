import React from 'react';
import { BarChart3 } from 'lucide-react';

const UAEMarketAdvisory = () => {
  const features = [
    {
      title: "Accurate and up-to-date financial records",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "End-to-end support — from setup to residency",
      description: "Deep knowledge of UAE business, legal & banking landscape"
    },
    {
      title: "Tailored solutions for startups, SMEs & global investors",
      description: "Deep knowledge of UAE business, legal & banking landscape"
    },
    {
      title: "Transparent processes and ongoing compliance focus",
      description: "Deep knowledge of UAE business, legal & banking landscape"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our UAE Market <span className="font-bold">Expansion Advisory</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex gap-4">
                <BarChart3 className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UAEMarketAdvisory;