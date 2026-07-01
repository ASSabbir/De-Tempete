// shared/BlogHero.jsx
export const BlogHero = ({ title }) => (
  <section className="pt-40 pb-20 relative text-white overflow-hidden">
    <img
      src="/src/asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp"
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0d2f67]/80" />
    <div className="relative z-10 max-w-[1600px] mx-auto px-6">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">{title}</h1>
    </div>
  </section>
);