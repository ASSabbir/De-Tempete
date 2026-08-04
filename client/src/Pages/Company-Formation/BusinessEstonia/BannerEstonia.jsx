import img1 from '../../../asstes/img_temp/Estonia.webp'
import SharedButton from "../../../Components/Shared/SharedButton";

const BannerEstonia = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden py-24 md:pt-32">
      {/* Background Image */}
      <img
        src={img1}
        alt="UAE Banner"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-[fadeUp_1s_ease-out]">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl 2xl:text-7xl font-bold leading-tight transition-all duration-500 hover:tracking-wide">
          Business Setup in Estonia
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-light leading-snug">
          Start Your Company with{" "}
          <span className="italic transition-all font-bold duration-300 text-light-blue">
            de tempête
          </span>
        </h2>



        {/* Categories */}
        <div className="flex mb-10 flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 mt-8 text-base 2xl:text-lg  font-semibold tracking-wider">
          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            PRIVATE LIMITED COMPANY (OÜ)
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            PUBLIC LIMITED COMPANY (AS)
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            GENERAL PARTNERSHIP (TÜ)
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            LIMITED PARTNERSHIP (UÜ)
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            COMMERCIAL ASSOCIATION
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            SOLE PROPRIETORSHIP (FIE)
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            BRANCH OF A FOREIGN COMPANY
          </span>
        </div>
        <SharedButton text={'Start Now →'} path={'/contact'}></SharedButton>


      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default BannerEstonia;