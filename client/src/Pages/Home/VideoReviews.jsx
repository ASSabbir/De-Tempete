import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { FaTimes } from "react-icons/fa";

// Just paste video IDs here — the part after "v=" or after "youtu.be/"
const videoLinks = [
  "05aSfaUbqfQ",
  "rwyywkgYnR0",
  "4uDcV8azY7o",
  "1ZK4B_isoJ8",
  "ufmOhdiHUvE",
];

const VideoModal = ({ videoId, onClose }) => {
  const overlayRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
    );

    const handleKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    gsap.to(boxRef.current, { opacity: 0, scale: 0.85, y: 30, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div ref={boxRef} className="relative w-full max-w-3xl">
        <button
          onClick={handleClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 sm:top-0 sm:-right-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        >
          <FaTimes className="text-lg" />
        </button>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Client review video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ videoId, onPlay }) => {
  const cardRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, { scale: 1.03, duration: 0.35, ease: "power2.out" });
  };
  const handleLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.35, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-black"
    >
      <iframe
        className="absolute inset-0 w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1`}
        title="Client review preview"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />
      {/* transparent click layer to open the modal (iframe above blocks clicks otherwise) */}
      <button
        onClick={() => onPlay(videoId)}
        aria-label="Play video"
        className="absolute inset-0 w-full h-full cursor-pointer"
      />
    </div>
  );
};

const VideoReviews = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl 2xl:text-[2.5vw] 2xl:text-3xl font-bold text-dark-blue mt-3">
            Hear it from our clients
          </h2>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="!pb-14 video-reviews-swiper"
        >
          {videoLinks.map((id) => (
            <SwiperSlide key={id} className="h-auto py-2">
              <VideoCard videoId={id} onPlay={setActiveVideo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <style>{`
        .video-reviews-swiper .swiper-pagination-bullet {
          background: var(--color-dark-blue, #081B57);
          opacity: 0.3;
        }
        .video-reviews-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default VideoReviews;