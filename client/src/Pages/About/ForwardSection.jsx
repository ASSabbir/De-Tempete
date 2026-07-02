import {
  FaAtom,
  FaEnvelopeOpenText,
  FaDesktop,
  FaAward,
} from "react-icons/fa";

import VisionCard from "./VisionCard";
import StrengthCard from "./StrengthCard";

import aboutImg from "../../asstes/Images/de-tempete.webp"; 
import img1 from '../../asstes/Images/about/datadualtone.webp'
import img2 from '../../asstes/Images/about/email-2dualtone.webp'
import img3 from '../../asstes/Images/about/connectdualtone.webp'
import img4 from '../../asstes/Images/about/successdualtone.webp'

const ForwardSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* =================== TOP =================== */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-10">
              What Drives Us <span className="text-dark-blue">Forward</span>
            </h2>

            <div className="space-y-8">

              <VisionCard
                title="Our Vision"
                text="We strive to be the preferred choice for companies seeking expert financial guidance, delivering cutting-edge solutions and consistently exceeding client expectations."
              />

              <VisionCard
                title="Our Mission"
                text="We empower organizations to achieve their objectives by delivering exceptional financial guidance and support through innovative, integrated solutions."
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src={aboutImg}
              alt=""
              className="rounded-xl w-full object-cover shadow-lg"
            />

          </div>

        </div>



        {/* =================== BOTTOM =================== */}

        <div className="grid lg:grid-cols-2 gap-16 mt-28 items-center">

          {/* Left */}

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-8">
              Our Key <span className="font-extrabold">Strength</span>
            </h2>

            <p className="text-gray-600 leading-8">
              At <span className="font-semibold italic">de tempête</span>, we
              understand that every business is unique, and so are its
              financial and operational needs. Our mission is to provide
              clarity, precision, and support at every step, helping you focus
              on growth while we handle the complexities of accounting,
              compliance, and business setup.
            </p>

            <button className="mt-10 px-8 py-3 rounded-lg bg-dark-blue text-white hover:bg-light-blue transition-all duration-300">
              Discover More
            </button>

          </div>


          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            <StrengthCard
              icon={img1}
              title="Precision-Driven Financial Expertise"
              text="We bring accuracy, transparency and attention to detail to every financial record."
            />

            <StrengthCard
              icon={img2}
              title="End-to-End Business Setup Support"
              text="From company formation to compliance, we streamline every step."
            />

            <StrengthCard
              icon={img3}
              title="Consistent, Reliable Communication"
              text="We stay connected, proactive and responsive keeping you updated."
            />

            <StrengthCard
              icon={img4}
              title="Scalable Solutions Built for Growth"
              text="Flexible services adapt to your needs helping you grow with confidence."
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default ForwardSection;