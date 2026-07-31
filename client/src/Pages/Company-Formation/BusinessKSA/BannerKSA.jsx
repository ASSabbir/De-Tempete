import img1 from '../../../asstes/img_temp/New folder/Business-set-up-in-kSA.webp'
import SharedButton from '../../../Components/Shared/SharedButton';
const BannerKSA = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden pt-24 md:pt-32">
      {/* Background Image */}
      <img
        src={img1}
        alt="KSA Banner"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 animate-[fadeUp_1s_ease-out]">
        {/* Heading */}
        <h1 className="text-[4vw] font-bold leading-tight transition-all duration-500 hover:tracking-wide">
          Business Setup in KSA
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-4 text-[2vw] font-light leading-snug">
          Start Your Company with{" "}
          <span className="italic transition-all font-bold duration-300 hover:text-light-blue">
            de tempête
          </span>
        </h2>

        {/* Categories */}
        <div className=" mb-10 space-y-8 mt-8 text-[1vw] font-semibold">
          <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-7 lg:gap-8'>
            <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
              LIMITED LIABILITY COMPANY (LLC)
            </span>

            <span className="hidden md:block text-gray-300">|</span>

            <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
              JOINT STOCK COMPANY (JSC)
            </span>
          </div>




          <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-7 lg:gap-8'><span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
            FOREIGN BRANCH OFFICE
          </span>

            <span className="hidden md:block text-gray-300">|</span>

            <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
              REPRESENTATIVE OFFICE
            </span>

            <span className="hidden md:block text-gray-300">|</span>

            <span className="transition-all duration-300 hover:text-light-blue hover:-translate-y-1 cursor-pointer">
              SOLE ESTABLISHMENT
            </span></div>
        </div>

        {/* Button */}
        <SharedButton text={'Start Now →'} path={'/contact'}></SharedButton>
      </div>

      {/* Animations */}
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

export default BannerKSA;