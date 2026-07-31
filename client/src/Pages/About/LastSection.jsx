import React from 'react';
import * as MarqueeModule from "react-fast-marquee";
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
import img12 from '../../asstes/img_temp/about/up/12.JPG'
import img11 from '../../asstes/img_temp/about/up/11.JPG'
import img13 from '../../asstes/img_temp/about/up/13.png'
import img14 from '../../asstes/img_temp/about/up/14.png'
import img15 from '../../asstes/img_temp/about/up/15.png'
import img16 from '../../asstes/img_temp/about/up/16.png'
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

// react-fast-marquee is being double-wrapped by Vite's CJS/ESM interop:
// MarqueeModule = { default: { default: Marquee } }
// So we dig through default.default first, then fall back to the other shapes.
const MarqueeLib =
    MarqueeModule.default?.default ||
    MarqueeModule.default ||
    MarqueeModule.Marquee ||
    MarqueeModule;

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33]


const LastSection = () => {
    return (
        <div className="py-10 max-w-6xl mx-auto">
            <h2 className="text-3xl text-center  mb-15 py-10 leading-tight text-dark-blue sm:text-5xl">
                Growth <span className="font-extrabold">Partners</span> 
            </h2>
            <MarqueeLib speed={50} pauseOnHover={true}>
                {imgs.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="h-15 w-auto object-cover rounded-lg mx-3"
                    />
                ))}
            </MarqueeLib>
        </div>
    );
};

export default LastSection;