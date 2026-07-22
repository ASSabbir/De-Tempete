const BusinessSetupBook = () => {
  return (
    <section className="bg-[#ffffff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Book Image */}
          <div className="flex justify-center">
            <img
              src="/src/asstes/img_temp/KSA-Brochure-2048x1374.webp"
              alt="Business Setup Guide"
              className="w-full max-w-[550px] object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="max-w-xl">
            <h2 className="text-[#14224A] leading-tight">
              <span className="block text-5xl font-light">
                The USA
              </span>

              <span className="block text-6xl font-bold">
                Business Setup
              </span>

              <span className="block text-5xl font-light">
                Guide 2026
              </span>
            </h2>

            <p className="mt-8 text-xl text-[#4B5563] leading-9">
              Your quick guide to starting and growing a business in the USA.
            </p>

            <div className=" text-[#14224A] text-lg">
              <p className="font-bold">
                The USA Business Setup Guide 2026
              </p>

              <p>
                <span className="font-bold">Download</span> our Full USA
                Business Setup Guide/publication (PDF) for complete details.
              </p>
            </div>

            {/* Download Button */}
            <button className="mt-12 bg-[#081B57] text-white px-10 py-5 rounded-xl text-lg font-medium hover:bg-[#10297c] transition duration-300 shadow-lg">
              Download Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessSetupBook;