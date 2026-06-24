const BannerUSA = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/asstes/Images/New folder/Business-set-up-in-USA.webp"
        alt="USA Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0d2f67]/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Business Setup in USA
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Start Your Company with{" "}
          <span className="italic">de tempête</span>
        </h2>

        {/* Description */}
        <p className="max-w-5xl mx-auto text-lg md:text-2xl leading-relaxed text-gray-100">
          Launch your business in the United States with structured company
          formation, compliance support, and operational guidance tailored for
          international founders.{" "}
          <span className="italic font-semibold">de tempête</span> assists
          non-resident entrepreneurs with USA company registration, EIN
          applications, banking readiness, and cross-border business setup
          support designed for foreign-owned companies.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 text-lg md:text-2xl font-semibold tracking-wide">
          <span>LLC</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>C-CORP</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>NON-RESIDENT COMPANY SETUP</span>
        </div>

        {/* Button */}
        <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default BannerUSA;