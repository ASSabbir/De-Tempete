const Why_Business = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[#14224A] text-5xl font-light leading-tight">
            Why Start A
            <br />
            <span className="font-bold">Business In The UAE?</span>
          </h2>

          <p className="mt-8 text-[#39425B] text-lg text-justify">
            The United Arab Emirates (UAE) is one of the world's leading
            destinations for entrepreneurs, startups, and international
            investors looking to establish and expand their businesses.
            Known for its tax-efficient environment, strategic global
            location, and world-class infrastructure, the UAE offers
            exceptional opportunities for companies across industries.
            With access to international markets, investor-friendly
            regulations, advanced banking systems, and a rapidly growing
            economy, the UAE has become a global hub for trade,
            innovation, and business growth. Whether you are launching a
            new startup, opening a branch office, or expanding
            internationally, the UAE provides a secure, modern, and highly
            competitive environment for long-term business success.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-5">

          <div className="bg-[#43ADCD] rounded-tl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-3xl font-medium">
              100%
              <span className="text-lg font-normal">
                {" "}foreign ownership
              </span>
              <br />
              <span className="text-lg font-normal">
                in many sectors
              </span>
            </h3>
          </div>

          <div className="bg-white rounded-tr-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-3xl font-medium">
              0%
              <span className="text-lg font-normal">
                {" "}corporate tax for
              </span>
              <br />
              <span className="text-lg font-normal">
                qualifying free-zone businesses
              </span>
            </h3>
          </div>

          <div className="bg-white rounded-bl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Simple digital registration and visa processes
            </h3>
          </div>

          <div className="bg-[#43ADCD] rounded-br-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Access to global markets and skilled professionals
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Why_Business;