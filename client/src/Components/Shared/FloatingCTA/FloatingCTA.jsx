import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaCommentDots } from 'react-icons/fa';

const PHONE_NUMBER = '+971503919790';       // <-- replace with real number
const WHATSAPP_NUMBER = '+971566994282';     // <-- replace, no + or spaces

const FloatingCTA = () => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const mainBtnRef = useRef(null);
    const optionsRef = useRef([]);
    const tlRef = useRef(null);

    // entrance animation on mount
    useEffect(() => {
        gsap.fromTo(
            wrapperRef.current,
            { opacity: 0, scale: 0.6, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)', delay: 0.2 }
        );

        // gentle idle pulse to draw attention
        gsap.to(mainBtnRef.current, {
            boxShadow: '0 0 0 12px rgba(59,130,246,0)',
            repeat: -1,
            duration: 1.8,
            ease: 'power1.out',
            keyframes: [
                { boxShadow: '0 0 0 0 rgba(59,130,246,0.35)' },
                { boxShadow: '0 0 0 14px rgba(59,130,246,0)' },
            ],
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                optionsRef.current,
                { opacity: 0, y: 16, scale: 0.7 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'back.out(2)',
                    stagger: 0.08,
                }
            );
        }
    }, [isOpen]);

    const toggleOpen = () => {
        if (isOpen) {
            gsap.to(optionsRef.current, {
                opacity: 0,
                y: 16,
                scale: 0.7,
                duration: 0.25,
                ease: 'power1.in',
                stagger: 0.05,
                onComplete: () => setIsOpen(false),
            });
        } else {
            setIsOpen(true);
        }

        gsap.to(mainBtnRef.current, {
            rotate: isOpen ? 0 : 45,
            duration: 0.35,
            ease: 'power2.inOut',
        });
    };

    return (
        <div
            ref={wrapperRef}
            className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[9998] flex flex-col items-end gap-3"
        >
            {/* Options */}
            {isOpen && (
                <div className="flex flex-col items-end gap-3">
                    <a
                        ref={(el) => (optionsRef.current[0] = el)}
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                    >
                        <span className="bg-white text-[#16244b] text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">
                            WhatsApp
                        </span>
                        <span className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                            <FaWhatsapp className="text-white text-xl" />
                        </span>
                    </a>

                    <a
                        ref={(el) => (optionsRef.current[1] = el)}
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex items-center gap-3 group"
                    >
                        <span className="bg-white text-[#16244b] text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">
                            Call Us
                        </span>
                        <span className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                            <FaPhoneAlt className="text-white text-lg" />
                        </span>
                    </a>
                </div>
            )}

            {/* Main toggle button */}
            <button
                ref={mainBtnRef}
                onClick={toggleOpen}
                aria-label="Contact us"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#16244b] flex items-center justify-center shadow-xl hover:bg-light-blue transition-colors duration-300"
            >
                {isOpen ? (
                    <FaTimes className="text-white text-xl" />
                ) : (
                    <FaCommentDots className="text-white text-2xl" />
                )}
            </button>
        </div>
    );
};

export default FloatingCTA;