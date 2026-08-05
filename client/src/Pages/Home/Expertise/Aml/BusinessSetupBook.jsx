import img1 from '../../../../asstes/img_temp/aml-gude.webp'
import DownloadButtonGuide from '../../../../Components/Shared/DownloadbuttonGuide';
const BusinessSetupBook = () => {
  return (
    <section className="bg-[#ffffff] pt-24">
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
      The UAE
    </span>

    <span className="block text-5xl 2xl:text-6xl font-bold">
      AML Compliance
    </span>

    <span className="block text-4xl 2xl:text-5xl font-light">
      Guide 2026
    </span>
  </h2>

  <p className="mt-8 text-xl text-[#4B5563] leading-7">
    Your essential guide to meeting UAE Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and sanctions compliance requirements.
  </p>

  <div className="text-[#14224A] text-base">
    <p className="font-bold">
      The UAE AML Compliance Guide 2026
    </p>

    <p>
      <span className="font-bold">Download</span> our complete UAE AML Compliance Guide (PDF) for expert insights on goAML, TFS registration, KYC, AML policies, regulatory reporting, inspections, and ongoing compliance requirements.
    </p>
  </div>

  <DownloadButtonGuide
    guideKey="aml-guide-2026"
    label="Download Now"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default BusinessSetupBook;