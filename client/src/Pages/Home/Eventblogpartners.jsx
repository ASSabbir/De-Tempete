import { Link } from "react-router";

import img1 from "../../asstes/img_temp/New folder/11-1.webp";
import img2 from "../../asstes/img_temp/New folder/12-1-934x1024.webp";
import img3 from "../../asstes/img_temp/New folder/10-2.webp";
import img4 from "../../asstes/img_temp/New folder/9-1.webp";
import img5 from "../../asstes/img_temp/New folder/8.webp";
import img6 from "../../asstes/img_temp/New folder/6-1.webp";
import img7 from "../../asstes/img_temp/New folder/5-1.webp";
import img8 from "../../asstes/img_temp/New folder/4-1.webp";
import img9 from "../../asstes/img_temp/New folder/3-2.webp";
import img10 from "../../asstes/img_temp/New folder/13-1.webp";


const blogs = [
  {
    title:
      "How to Make an Arrangement Plan for Council Tax: A Step-by-Step Guide",
    excerpt:
      "Council tax, a local taxation system in the UK, can sometimes become a...",
    path: "/blogs/council-tax-arrangement-plan",
  },
  {
    title:
      "Self-Assessment Tax Return Process for Businesses: Navigating the Complexity",
    excerpt:
      "Welcome to de tempête, where we simplify the intricate world of tax return...",
    path: "/blogs/self-assessment-tax-return",
  },
  {
    title: "The Role and Benefits of a Virtual CFO in Modern Businesses",
    excerpt:
      "Welcome to de tempête, where we redefine financial management for the modern business...",
    path: "/blogs/virtual-cfo-role-benefits",
  },
];

const partners = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

// Double the array for seamless loop
const marqueeItems = [...partners, ...partners];

export default function EventBlogPartners() {
  return (
    <section className="bg-white w-full py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Latest Event + Blogs ── */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
         
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0d1e4a] font-normal mb-5">
              Latest <span className="font-extrabold">Event</span>
            </h2>

            <Link
              to="/events/why-dubai-roundtable"
              className="group relative block rounded-2xl overflow-hidden shadow-md"
              style={{ minHeight: "320px" }}
            >
              
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(160deg, #b0bec5 0%, #0d1e4a 100%)",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1e4a]/90 via-[#0d1e4a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold text-[#0d1e4a] bg-[#1a9fd4] w-fit">
                  Event
                </span>
                <h3 className="text-white text-xl font-bold leading-snug group-hover:text-[#1a9fd4] transition-colors duration-200">
                  Why Dubai? Roundtable
                </h3>
              </div>
            </Link>
          </div>

          
          <div>
            <h2 className="text-2xl sm:text-3xl text-[#0d1e4a] font-normal mb-5">
              Our <span className="font-extrabold">Blogs</span>
            </h2>

            <div className="flex flex-col gap-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.path}
                  to={blog.path}
                  className="group flex gap-4 items-start rounded-xl border border-gray-100 p-4 hover:border-[#1a9fd4]/30 hover:shadow-md transition-all duration-200"
                >
                  
                  <div
                    className="shrink-0 rounded-lg overflow-hidden"
                    style={{ width: "88px", height: "72px" }}
                  >
                    <div className="w-full h-full bg-linear-to-br from-[#1a9fd4]/20 to-[#0d1e4a]/30 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#1a9fd4]/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#0d1e4a] text-sm font-bold leading-snug mb-1 group-hover:text-[#1a9fd4] transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div> */}

        {/* ── Technological Partner ── */}
        <div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-[#0d1e4a] font-normal mb-10">
            Technological <span className="font-extrabold">Partner</span>
          </h2>

          {/* Pure CSS infinite marquee */}
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            />
            {/* Right fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, white, transparent)",
              }}
            />

            <div className="flex marquee-track">
              {marqueeItems.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-4 shrink-0"
                >
                  <img
                    src={logo}
                    alt={`partner-${i + 1}`}
                    className="h-44 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
