const Why_Business = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[#14224A] text-5xl font-light leading-tight">
            Why Start A
            <br />
            <span className="font-bold">Business In Bangladesh?</span>
          </h2>

          <p className="mt-8 text-[#39425B] text-lg text-justify">
            Bangladesh is one of South Asia’s fastest-growing emerging markets,
            offering strong opportunities for entrepreneurs, investors, and
            international businesses across manufacturing, trading, technology,
            and service industries. With a large and growing consumer population,
            competitive operational costs, expanding infrastructure, and a
            rapidly developing economy, Bangladesh has become an attractive
            destination for business growth and long-term investment. The
            country provides significant advantages for export-oriented
            industries, textile and garment manufacturing, e-commerce,
            logistics, and outsourcing services. With the right business
            structure, regulatory compliance, and strategic planning,
            companies can scale efficiently while benefiting from a
            cost-effective operating environment and increasing regional
            and global trade opportunities.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-5">

          <div className="bg-cyan-400 rounded-tr-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Large workforce with
              <br />
              competitive labor cost
            </h3>
          </div>

          <div className="bg-white rounded-tl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Strong growth in
              <br />
              consumer and service sectors
            </h3>
          </div>

          <div className="bg-white rounded-bl-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Expanding outsourcing and
              <br />
              business ecosystem
            </h3>
          </div>

          <div className="bg-cyan-400 rounded-br-3xl p-10 h-56 flex items-center justify-center text-center shadow-xl">
            <h3 className="text-[#14224A] text-xl font-medium leading-relaxed">
              Cost-effective operating base
              <br />
              for regional expansion
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Why_Business;