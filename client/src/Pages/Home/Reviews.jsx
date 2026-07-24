import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from '../../asstes/img_temp/review/1.png'
import img2 from '../../asstes/img_temp/review/2.jpg'
import img3 from '../../asstes/img_temp/review/3.png'
import img4 from '../../asstes/img_temp/review/4.png'
import img5 from '../../asstes/img_temp/review/5.png'
import img6 from '../../asstes/img_temp/review/6.png'

const reviews = [
  {
    name: "Bernard Keenan",
    role: "Director, Skull Rocket, United Kingdom",
    img: img1,
    quote:
      "It was a great experience working with Mohsena and her team. They are highly professional, thoroughly competent, and extremely fast. I'm looking forward to working with them again. Very highly recommended!",
  },
  {
    name: "Ahmed Gouda",
    role: "Director & Secretary, FURSANMEDIA LTD, Egypt",
    img: img2,
    quote:
      "De Tempete handled my requirements in a highly professional manner and ensured everything was properly prepared before submission. Their attention to detail was impressive, and I would gladly hire them again in the future.",
  },
  {
    name: "Hamza Zegriri",
    role: "Founder & CEO, HV Inc., Canada",
    img: img4,
    quote:
      "Mohsena did a fantastic job as our Virtual CFO. She was professional, efficient, and delivered excellent results. I will definitely work with her again and highly recommend her services.",
  },
  {
    name: "Sarmad Khan",
    role: "Director, Sarmad Global Accountancy Services Ltd, UK",
    img: img5,
    quote:
      "I've been working with De Tempete for quite some time, and I genuinely couldn't manage without them. They expertly handle our back office operations across both the UK and UAE with accuracy and reliability, giving me complete peace of mind so I can focus on growing my business.",
  },
  {
    name: "Minh Nguyen (Viet)",
    role: "Director, Rabitan Limited",
    img: img6,
    quote:
      "I've worked with Mohsena and the De Tempete team on multiple Companies House identity verifications, and every experience has been outstanding. Their professionalism, responsiveness, and attention to detail have been exceptional. I've already referred friends and will continue to do so.",
  },
  {
    name: "Dr. Hafsa Al Idrissi",
    role: "Director, Health Pillar LLC",
    img: img3,
    quote:
      "De Tempete has managed our accounts with outstanding professionalism, accuracy, and efficiency for the past two years. Their prompt communication, attention to detail, and commitment to excellence have given us complete confidence and peace of mind.",
  },
  {
    name: "Sunil Degawekar",
    role: "Freelance Consultant, UAE Corporate Research Project, India",
    img: "https://prdcdn.acuityanalytics.com/wp-content/uploads/2026/05/06133048/Dr-Sunil-K-Singh-2.webp",
    quote:
      "Mohsena and her team delivered excellent work on a challenging project. Their communication was clear and professional, deadlines were consistently met, and their technical expertise made the entire collaboration smooth and highly satisfactory.",
  },
  {
    name: "Hamza Zegriri",
    role: "CEO, HealV Inc.",
    img: "https://www.albalaghacademy.org/wp-content/uploads/2024/07/Ustadh-Hamza-Andreas-Tzortzis.jpg",
    quote:
      "Working with De Tempete Accounts Company has been an excellent experience. Their team is responsive, organized, and genuinely committed to getting everything right. They've helped us stay on top of our financial operations, allowing us to focus on growing our company. I highly recommend them to other founders and businesses.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const ReviewCard = ({ name, role, quote,img }) => (
  <div className="min-h-110 flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm border border-black/5">
    <div>
      <svg
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        className="text-light-blue mb-4"
      >
        <path
          d="M0 24V13.5C0 6 4.5 1 12 0L13.5 3.5C8.5 5 6.5 8 6.5 12H13V24H0ZM18.5 24V13.5C18.5 6 23 1 30.5 0L32 3.5C27 5 25 8 25 12H31.5V24H18.5Z"
          fill="currentColor"
        />
      </svg>
      <p className="text-sm md:text-base italic text-gray-700 leading-relaxed">
        {quote}
      </p>
    </div>

    <div className="flex items-center gap-3 mt-8">
      <div className="h-11 w-11 shrink-0 rounded-full  text-white flex items-center justify-center font-semibold text-sm">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <div>
        <h3 className="font-semibold text-dark-blue leading-tight">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  return (
    <section className="py-24  bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-light-blue font-semibold uppercase tracking-wide text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mt-3">
            What our clients say
          </h2>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="!pb-14 reviews-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name} className="h-auto py-2">
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .reviews-swiper .swiper-pagination-bullet {
          background: var(--color-dark-blue, #081B57);
          opacity: 0.3;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Reviews;