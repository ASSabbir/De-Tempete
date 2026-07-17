// shared/HeroSection.jsx
export const HeroSection = ({
  bgImage,
  alt,
  heading,
  description,
  ctaText = "Book a Consultation",
  minHeight = "min-h-screen",
  overlay = "bg-[#0d2f67]/70",
}) => (
  <section className={`pt-40 pb-24 relative ${minHeight} flex items-center justify-center text-white overflow-hidden`}>
    <img src={bgImage} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    <div className={`absolute inset-0 ${overlay}`}></div>
    <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold ">{heading}</h1>
      <p className="max-w-4xl mx-auto mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
        {description}
      </p>
      <button className="mt-12 border-2 border-white rounded-xl px-10 py-4 text-xl font-semibold hover:bg-light-blue hover:border-light-blue hover:text-black duration-300">
        {ctaText}
      </button>
    </div>
  </section>
);