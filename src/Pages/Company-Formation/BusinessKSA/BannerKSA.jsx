const BannerKSA = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/asstes/Images/New folder/Business-set-up-in-kSA.webp"
        alt="KSA Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Business Setup in KSA
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Start Your Company with <span className="italic">de tempête</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 text-lg md:text-2xl font-semibold">
          <span>LIMITED LIABILITY COMPANY (LLC)</span>
          <span className="hidden md:block text-gray-300">|</span>

          <span>JOINT STOCK COMPANY (JSC)</span>
          <span className="hidden md:block text-gray-300">|</span>

          <span>FOREIGN BRANCH OFFICE</span>
          <span className="hidden md:block text-gray-300">|</span>

          <span>REPRESENTATIVE OFFICE</span>
          <span className="hidden md:block text-gray-300">|</span>

          <span>SOLE ESTABLISHMENT</span>
        </div>

        {/* Button */}
        <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-[#4AC4DE] hover:border-[#4AC4DE] hover:text-black duration-300">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default BannerKSA;