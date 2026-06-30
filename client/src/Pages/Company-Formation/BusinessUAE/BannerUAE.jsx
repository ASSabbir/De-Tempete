const BannerUAE = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/asstes/Images/New folder/Dubai-Business-set-up.webp"
        alt="UAE Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-5">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Business Setup in UAE
        </h1>

        <h2 className="text-3xl md:text-5xl font-light mb-8">
          Start Your Company with <span className="italic">de tempête</span>
        </h2>

        <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed text-gray-100">
          Launch your business in the UAE with full ownership, tax advantages,
          and expert guidance.
          <span className="italic font-semibold"> de tempête</span> offers
          end-to-end UAE company formation services for both local and foreign
          investors.
        </p>

        {/* Categories */}
        <div className="flex items-center justify-center gap-6 md:gap-12 mt-12 text-xl md:text-3xl font-semibold tracking-wider">
          <span>FREE ZONE</span>
          <span className="text-gray-300">|</span>
          <span>MAINLAND</span>
          <span className="text-gray-300">|</span>
          <span>OFFSHORE</span>
        </div>

        {/* Button */}
        <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-light-blue hover:border-light-blue hover:text-black duration-300">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default BannerUAE;
