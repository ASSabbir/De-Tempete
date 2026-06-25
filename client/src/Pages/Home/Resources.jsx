import { Link } from "react-router";

// Replace these with your actual image imports
import pub1 from "../../asstes/Images/New folder/Publication.webp";
import lib1 from "../../asstes/Images/New folder/Library.webp";
import form1 from "../../asstes/Images/New folder/Forms.webp";

const cards = [
  {
    number: "01",
    title: "Publications",
    description:
      "Read our latest business insights, reports, and expert articles.",
    image: pub1, // replace with: pub1
    links: [
      { label: "UK", path: "/resources/publications/uk" },
      { label: "UAE", path: "/resources/publications/uae" },
      { label: "KSA", path: "/resources/publications/ksa" },
      { label: "Bangladesh", path: "/resources/publications/bd" },
    ],
  },
  {
    number: "02",
    title: "Library",
    description:
      "Access practical tools, guides, and templates to boost your business efficiency.",
    image: lib1, // replace with: lib1
    links: [
      { label: "UK", path: "/resources/library/uk" },
      { label: "UAE", path: "/resources/library/uae" },
      { label: "KSA", path: "/resources/library/ksa" },
      { label: "Bangladesh", path: "/resources/library/bd" },
    ],
  },
  {
    number: "03",
    title: "Form",
    description:
      "Download essential compliance, registration, and finance forms instantly.",
    image: form1, // replace with: form1
    links: [
      { label: "UK", path: "/resources/forms/uk" },
      { label: "UAE", path: "/resources/forms/uae" },
      { label: "KSA", path: "/resources/forms/ksa" },
      { label: "Bangladesh", path: "/resources/forms/bd" },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function Resources() {
  return (
    <section className="bg-white w-full py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-5xl sm:text-7xl lg:text-[7rem] font-black text-[#0d1e4a] tracking-tight leading-none mb-10 lg:mb-14 uppercase">
          Resources
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 bg-dark-blue sm:grid-cols-3  overflow-hidden ">
          {cards.map((card, i) => (
            <div
              key={card.number}
              className={`group relative overflow-hidden flex flex-col ${i < cards.length - 1 ? "sm:border-r border-b sm:border-b-0 border-gray-200" : ""}`}
              style={{ minHeight: "560px" }}
            >
              {/* ── Image area (top half) ── */}
              <div className="relative flex-none  ">
                {/* Replace the div below background color with your image */}
                <div className="">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-130"
                    />
                  ) : (
                    /* Placeholder — remove once you add images */
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#0d1e4a] to-[#1a3a6b]">
                      <span className="text-white/20 text-6xl font-black">
                        {card.number}
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute flex-1 h-150 bg-dark-blue/80  top-90 z-20 flex group-hover:-translate-y-90 duration-500  flex-col gap-4 p-7 lg:p-8">
                  {/* Content */}
                  <div className=" z-10  flex flex-col gap-4 ">
                    {/* Number + Title */}
                    <div>
                      <span className="text-white/50 text-sm font-semibold tracking-widest group-hover:text-white/80 transition-colors duration-300">
                        {card.number}
                      </span>
                      <h3 className="text-white text-2xl lg:text-3xl font-extrabold mt-0.5 leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {card.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-col gap-2 mt-auto">
                      {card.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="flex items-center gap-2 text-[#1a9fd4] group-hover:text-white text-sm font-semibold transition-colors duration-300 hover:gap-3 w-fit"
                        >
                          <ArrowIcon />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Always-on dark gradient at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#0d1e4a] to-transparent" />
              </div>

              {/* ── Content area (bottom half) — dark bg ── */}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .group:hover .hover-overlay {
          clip-path: inset(0% 0 0 0);
        }
      `}</style>
    </section>
  );
}
