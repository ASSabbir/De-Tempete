import Marquee from "react-fast-marquee";
import img1 from '../../asstes/Images/about/up/1.png'
import img2 from '../../asstes/Images/about/up/2.png'
import img3 from '../../asstes/Images/about/up/3.jpg'
import img4 from '../../asstes/Images/about/up/4.jpeg'
import img5 from '../../asstes/Images/about/up/5.png'
import img6 from '../../asstes/Images/about/up/6.png'
import img7 from '../../asstes/Images/about/up/7.png'
import img8 from '../../asstes/Images/about/up/8.png'
import img9 from '../../asstes/Images/about/up/9.png'
import img10 from '../../asstes/Images/about/up/10.png'
import img11 from '../../asstes/Images/about/up/11.jpg'
import img12 from '../../asstes/Images/about/up/12.jpg'
import img13 from '../../asstes/Images/about/up/13.png'
import img14 from '../../asstes/Images/about/up/14.png'
import img15 from '../../asstes/Images/about/up/15.png'
import img16 from '../../asstes/Images/about/up/16.png'
import img18 from '../../asstes/Images/about/up/18.png'
import img19 from '../../asstes/Images/about/up/19.png'
import img20 from '../../asstes/Images/about/up/20.png'
import img21 from '../../asstes/Images/about/up/21.png'
import img22 from '../../asstes/Images/about/up/22.png'
import img23 from '../../asstes/Images/about/up/23.png'
import img24 from '../../asstes/Images/about/up/24.png'
import img25 from '../../asstes/Images/about/up/25.png'
import img26 from '../../asstes/Images/about/up/26.png'
import img27 from '../../asstes/Images/about/up/27.png'
import img28 from '../../asstes/Images/about/up/28.jpeg'
import img29 from '../../asstes/Images/about/up/29.jpg'
import img30 from '../../asstes/Images/about/up/30.jpg'
import img31 from '../../asstes/Images/about/up/31.jpg'
import img32 from '../../asstes/Images/about/up/32.png'
import img33 from '../../asstes/Images/about/up/33.png'

const ALL_LOGOS = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16,
  img18, img19, img20, img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30, img31, img32, img33,
];

// Split the 32 logos into 4 even rows of 8
const ROWS = [
  { items: ALL_LOGOS.slice(0, 8), direction: "left" },
  { items: ALL_LOGOS.slice(8, 16), direction: "right" },
  { items: ALL_LOGOS.slice(16, 24), direction: "left" },
  { items: ALL_LOGOS.slice(24, 32), direction: "right" },
];

function LogoCard({ icon }) {
  return (
    <div className="mx-6 flex h-20 w-32 shrink-0 items-center justify-center">
      <img
        src={icon}
        alt=""
        className="max-h-12 w-auto max-w-[110px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

/**
 * One infinite horizontal strip.
 * - `autoFill` tells react-fast-marquee to clone the children as many times
 *   as needed to fill the track, so the loop never shows a gap regardless
 *   of how many logos are passed in.
 * - `pauseOnHover={false}` + `gradient={false}` keep it moving non-stop,
 *   matching what you asked for (no pausing, no fade overlay).
 */
function MarqueeRow({ items, direction, speed = 40 }) {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      autoFill
      pauseOnHover={false}
      gradient={false}
    >
      {items.map((icon, i) => (
        <LogoCard key={i} icon={icon} />
      ))}
    </Marquee>
  );
}

export default function LogoMarqueeRows() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        {ROWS.map((row, idx) => (
          <MarqueeRow key={idx} items={row.items} direction={row.direction} />
        ))}
      </div>
    </section>
  );
}