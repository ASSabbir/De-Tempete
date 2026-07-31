import img1 from '../../../asstes/img_temp/New folder/Business-set-up-in-BD.webp'
import SharedButton from '../../../Components/Shared/SharedButton';

const BannerBD = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <img
        src={img1}
        alt="Bangladesh Business Setup"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0d2f67]/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 animate-[fadeUp_1s_ease-out]">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl  2xl:text-7xl font-bold leading-tight transition-all duration-500 hover:tracking-wide">
          Business Setup in Bangladesh
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-light leading-snug">
          Start Your Company with{" "}
          <span className="italic transition-all font-black duration-300 hover:text-light-blue">
            de tempête
          </span>
        </h2>

        {/* Categories */}
        <div className="flex mb-10 flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-8 mt-8 text-base sm:text-base 2xl:text-2xl font-semibold tracking-wider">
          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            PRIVATE LIMITED
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            BRANCH OFFICE
          </span>

          <span className="hidden sm:block text-gray-300">|</span>

          <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            LIAISON OFFICE
          </span>
        </div>

        {/* Button */}
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

export default BannerBD;