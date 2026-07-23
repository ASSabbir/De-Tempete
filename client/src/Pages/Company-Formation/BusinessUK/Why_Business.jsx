const Why_Business = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[#14224A] text-5xl font-light leading-tight">
            Why Start A
            <br />
            <span className="font-bold">Business In The UK?</span>
          </h2>

          <p className="mt-8 text-[#39425B] text-lg text-justify leading-8">
            The United Kingdom remains one of the world's leading destinations
            for entrepreneurs, startups, and international businesses due to
            its strong legal framework, stable economy, and globally recognized
            business environment. With access to international markets,
            advanced financial systems, and a highly developed digital and
            professional services sector, the UK provides excellent
            opportunities for business growth and expansion across multiple
            industries. The country is known for its transparent regulations,
            investor confidence, innovation-driven economy, and strong support
            for startups and foreign investment. From technology and
            e-commerce to consulting, finance, healthcare, and retail, the UK
            offers a competitive and scalable environment for companies
            looking to establish a credible global presence and achieve
            long-term success.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-light-blue rounded-tl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-3xl font-medium">
              24-Hour
              <br />
              <span className="text-lg font-normal">
                Online Company Registration
              </span>
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-tr-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-3xl font-medium">
              Global
              <br />
              <span className="text-lg font-normal">
                Market Access from the UK
              </span>
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-bl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-3xl font-medium">
              19%
              <br />
              <span className="text-lg font-normal">
                Starting Corporation Tax
              </span>
            </h3>
          </div>

          {/* Card 4 */}
          <div className="bg-light-blue rounded-br-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              World-Class Banking &
              <br />
              Financial Stability
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Why_Business;