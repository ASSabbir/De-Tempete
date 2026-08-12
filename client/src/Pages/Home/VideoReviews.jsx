import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { FaTimes, FaPlay } from "react-icons/fa";

// Import your custom thumbnails here — adjust paths/filenames to match your project
import thumb1 from "../../asstes/img_temp/review/1r.png";
import thumb2 from "../../asstes/img_temp/review/2r.png";
import thumb3 from "../../asstes/img_temp/review/3r.png";
import thumb4 from "../../asstes/img_temp/review/4r.png";
import thumb5 from "../../asstes/img_temp/review/5r.png";


// Pair each YouTube video ID with its custom thumbnail image
const videoLinks = [
  { id: "05aSfaUbqfQ", thumbnail: thumb1 },
  { id: "rwyywkgYnR0", thumbnail: thumb2 },
  { id: "4uDcV8azY7o", thumbnail: thumb3 },
  { id: "1ZK4B_isoJ8", thumbnail: thumb4 },
  { id: "OxmOyTkwjOk", thumbnail: thumb5 },
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

const VideoCard = ({ videoId, thumbnail, onPlay }) => {
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
      {/* Custom thumbnail, imported locally — no YouTube fetch */}
      <img
        src={thumbnail}
        alt="Client review thumbnail"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Darken slightly so the play button reads clearly on any thumbnail */}
      <div className="absolute inset-0 bg-black/20" />

      <button
        onClick={() => onPlay(videoId)}
        aria-label="Play video"
        className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
      >
        <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <FaPlay className="text-dark-blue text-lg sm:text-xl ml-1" />
        </span>
      </button>
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
          {videoLinks.map(({ id, thumbnail }) => (
            <SwiperSlide key={id} className="h-auto py-2">
              <VideoCard videoId={id} thumbnail={thumbnail} onPlay={setActiveVideo} />
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