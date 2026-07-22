import React from 'react';
import SevicsBanner from '../../../../Components/Shared/SevicsBanner';
import img1 from '../../../../asstes/Images/freepik__the-style-is-candid-image-photography-with-natural__92079.webp'
import { FaCircleCheck } from 'react-icons/fa6';
import img2 from '../../../../asstes/Images/servics/Bd/freepik__financial-governance-controls-investor-readiness-b__1408.webp'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, BadgeCheck, FileStack, ShieldCheck } from "lucide-react";
import EstoniaBusinessServices from './EstoniaBusinessServices';
import EstoniaFAQ from './Estoniafaq';
 
gsap.registerPlugin(ScrollTrigger);


const CompanyFormation = () => {
    return (
        <div>
            <SevicsBanner bgImage={img1} alt="Bangladesh Business Setup"
                description="Estonia is one of Europe's most advanced digital economies, making it easier than ever to establish and manage your business remotely. Whether you're a startup, entrepreneur, or growing international company, our Estonia Company Formation services guide you through every stage—from e-Residency and registration to accounting, taxation, and ongoing compliance—with efficiency, transparency, and confidence."
                title1={'Establish Your Business Presence'}
                title2={'In Estonia The Smart Way'}

            ></SevicsBanner>
            <section className="py-24 bg-white">
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl leading-tight text-[#16244b] font-light">
                                <span className="font-bold">Estonia Company Formation </span>
                                <br />
                                <span className="font-bold">(OÜ – Private Limited Company)</span>
                                <br />
                                Readiness
                            </h2>
                            <p className="mt-8 text-xl leading-9 text-gray-600 text-justify">
                                The OÜ (Private Limited Company) is Estonia's most popular business structure for international entrepreneurs, offering 100% foreign ownership, limited liability, and the flexibility to operate entirely online. With no local sponsor required, minimal capital requirements, and access to the EU Single Market, an OÜ provides a secure, scalable, and tax-efficient foundation for startups, SMEs, and global businesses looking to expand into Europe
                            </p>
                            
                        </div>
                        <div>
                            <img
                                src={img2}
                                alt="Financial Governance"
                                className="w-full h-107.5 object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <EMTAKCodeSelection></EMTAKCodeSelection>
            <EstoniaBusinessServices></EstoniaBusinessServices>
            <EstoniaFAQ></EstoniaFAQ>

        </div>
    );
};


const features = [
  {
    icon: Search,
    title: "Code Lookup",
    description:
      "We search the official EMTAK register to find the code that matches what your business actually does, not just the closest-sounding option.",
  },
  {
    icon: BadgeCheck,
    title: "Accurate Classification",
    description:
      "Your core activity is matched to the right EMTAK code, so your registration reflects your real business from day one.",
  },
  {
    icon: FileStack,
    title: "Registration Filing",
    description:
      "The correct code is submitted with your e-Business Register application, with no back-and-forth corrections after submission.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Review",
    description:
      "We revisit your code as your business evolves, since an outdated classification can complicate banking checks and future filings.",
  },
];
 
 function EMTAKCodeSelection() {
  const sectionRef = useRef(null);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".emtak-eyebrow, .emtak-heading, .emtak-subtitle", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
 
      gsap.from(".emtak-card", {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".emtak-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="emtak-eyebrow text-xl font-semibold tracking-widest text-slate-400 uppercase mb-4">
          Company Registration
        </p>
 
        <h2 className="emtak-heading text-3xl md:text-5xl text-slate-800 leading-snug mb-5">
          Choosing the Right{" "}
          <span className="font-bold text-dark-blue">
            EMTAK Activity Code
          </span>
        </h2>
 
        <p className="emtak-subtitle text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Every Estonian company registration requires an EMTAK activity
          code — the classification that tells the e-Business Register what
          your business does. Getting it right affects your registration,
          banking checks, and compliance from day one, so we handle the
          lookup and filing for you.
        </p>
 
        <div className="emtak-grid grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="emtak-card group flex flex-col text-xl items-center">
              <Icon
                className="w-8 h-8 mb-5  text-light-blue transition-colors duration-300 "
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-slate-800 mb-3">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
 
       
      </div>
    </section>
  );
}

export default CompanyFormation;