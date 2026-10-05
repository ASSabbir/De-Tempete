import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default ?? MarqueeModule;
import img1 from '../../asstes/img_temp/about/up/1.png'
import img2 from '../../asstes/img_temp/about/up/2.png'
import img3 from '../../asstes/img_temp/about/up/3.jpg'
import img4 from '../../asstes/img_temp/about/up/4.jpeg'
import img5 from '../../asstes/img_temp/about/up/5.png'
import img6 from '../../asstes/img_temp/about/up/6.png'
import img7 from '../../asstes/img_temp/about/up/7.png'
import img8 from '../../asstes/img_temp/about/up/8.png'
import img9 from '../../asstes/img_temp/about/up/9.png'
import img10 from '../../asstes/img_temp/about/up/10.png'
import img11 from '../../asstes/img_temp/about/up/11.JPG'
import img12 from '../../asstes/img_temp/about/up/12.JPG'
import img13 from '../../asstes/img_temp/about/up/13.png'
import img14 from '../../asstes/img_temp/about/up/14.png'
import img15 from '../../asstes/img_temp/about/up/15.png'
import img16 from '../../asstes/img_temp/about/up/16.png'
import img17 from '../../asstes/img_temp/about/up/17.png'
import img18 from '../../asstes/img_temp/about/up/18.png'
import img19 from '../../asstes/img_temp/about/up/19.png'
import img20 from '../../asstes/img_temp/about/up/20.png'
import img21 from '../../asstes/img_temp/about/up/21.png'
import img22 from '../../asstes/img_temp/about/up/22.png'
import img23 from '../../asstes/img_temp/about/up/23.png'
import img24 from '../../asstes/img_temp/about/up/24.png'
import img25 from '../../asstes/img_temp/about/up/25.png'
import img26 from '../../asstes/img_temp/about/up/26.png'
import img27 from '../../asstes/img_temp/about/up/27.png'
import img28 from '../../asstes/img_temp/about/up/28.jpeg'
import img29 from '../../asstes/img_temp/about/up/29.jpg'
import img30 from '../../asstes/img_temp/about/up/30.jpg'
import img31 from '../../asstes/img_temp/about/up/31.jpg'
import img32 from '../../asstes/img_temp/about/up/32.png'
import img33 from '../../asstes/img_temp/about/up/33.png'
import img34 from '../../asstes/img_temp/about/up/34.png'
import img35 from '../../asstes/img_temp/about/up/35.png'
import img36 from '../../asstes/img_temp/about/up/36.png'
import img37 from '../../asstes/img_temp/about/up/37.jpg'
import img38 from '../../asstes/img_temp/about/up/38.png'
import img39 from '../../asstes/img_temp/about/up/39.png'
import img40 from '../../asstes/img_temp/about/up/40.jpeg'
import img41 from '../../asstes/img_temp/about/up/41.jpg'
import img42 from '../../asstes/img_temp/about/up/42.jpg'
import img43 from '../../asstes/img_temp/about/up/43.jpg'
import img44 from '../../asstes/img_temp/about/up/44.jpg'
import img45 from '../../asstes/img_temp/about/up/45.jpg'

const LOGOS = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45,
];

function PartnerCard({ icon }) {
  return (
    <div className="mx-5 flex h-24 w-40 shrink-0 items-center justify-center px-4">
      <img src={icon} alt="" className="max-h-full max-w-full object-contain" />
    </div>
  );
}

export default function GrowthPartnersHome() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-20">
      {/* Copy */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold leading-tight text-dark-blue">
          <span className="font-normal">Our Eco </span>System
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-500">
          At <span className="italic font-bold text-gray-700">de tempête</span>, we believe
          sustainable business growth is built through strong connections and trusted
          collaboration. Our business ecosystem brings together trusted partners,
          professional associations, industry networks, and business communities
          collaboration to create opportunities and connect businesses across markets.
        </p>
      </div>

      {/* Single-row marquee */}
      <div className="mt-14">
        <Marquee
          direction="left"
          speed={40}
          gradient
          gradientColor="#ffffff"
          gradientWidth={120}
          
        >
          {LOGOS.map((logo, index) => (
            <PartnerCard key={index} icon={logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}