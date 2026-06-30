const BannerUK = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/asstes/Images/New folder/Business-set-up-in-UK.webp"
        alt="UK Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Business Setup in UK
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Start Your Company with <span className="italic">de tempête</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10 text-lg md:text-2xl font-semibold">
          <span>SOLE TRADER</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>PARTNERSHIP</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>LLP</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>LTD</span>

          <span className="hidden md:block text-gray-300">|</span>

          <span>PLC</span>
        </div>

        {/* Button */}
        <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-light-blue hover:border-light-blue hover:text-black duration-300">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default BannerUK;
