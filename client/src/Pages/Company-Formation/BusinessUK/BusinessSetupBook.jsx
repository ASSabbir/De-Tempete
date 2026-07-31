import img1 from '../../../asstes/img_temp/UK-Business-guide-1024x682.webp'
import DownloadButtonGuide from '../../../Components/Shared/DownloadbuttonGuide';
const BusinessSetupBook = () => {
  return (
    <section className="bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Book Image */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Business Setup Guide"
              className="w-full max-w-[550px] object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="max-w-xl">
            <h2 className="text-[#14224A] leading-tight">
              <span className="block text-4xl 2xl:text-5xl font-light">
                The UK
              </span>

              <span className="block text-4xl 2xl:text-6xl font-bold">
                Business Setup
              </span>

              <span className="block text-4xl 2xl:text-5xl font-light">
                Guide 2026
              </span>
            </h2>

            <p className="mt-8 text-xl text-[#4B5563] leading-7">
              Your quick guide to starting and growing a business in the UK.
            </p>

            <div className=" text-[#14224A] text-base">
              <p className="font-bold">
                The UK Business Setup Guide 2026
              </p>

              <p>
                <span className="font-bold">Download</span> our Full UK
                Business Setup Guide/publication (PDF) for complete details.
              </p>
            </div>

            {/* Download Button */}
            
            <DownloadButtonGuide guideKey="uk-guide-2026" label="Download Now"></DownloadButtonGuide>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessSetupBook;