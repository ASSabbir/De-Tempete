import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../../../asstes/img_temp/logo1.webp'

const LoadingScreen = ({ onComplete }) => {
    const containerRef = useRef(null);
    const dotsRef = useRef([]);
    const logoRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // hold briefly on full breath, then fade the whole screen out
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    onComplete: () => onComplete && onComplete(),
                });
            },
        });

        // logo entrance
        tl.fromTo(
            logoRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );

        // breathing dots loop
        tl.to(
            dotsRef.current,
            {
                y: -10,
                opacity: 1,
                duration: 0.45,
                ease: 'power1.inOut',
                stagger: {
                    each: 0.15,
                    repeat: 5, // repeats + stagger ~= total loading time
                    yoyo: true,
                },
            },
            '-=0.2'
        );

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1530]"
        >
            <div ref={logoRef} className="mb-8 text-white text-2xl sm:text-3xl font-dmSans tracking-wide">
                 <img src={logo} alt="" className='h-30' />
            </div>

            <div className="flex items-center gap-3">
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        ref={(el) => (dotsRef.current[i] = el)}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-light-blue opacity-40"
                    />
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;