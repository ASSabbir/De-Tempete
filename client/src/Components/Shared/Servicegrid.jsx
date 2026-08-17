import { motion } from "framer-motion";

// Icon wrapper — color adapts depending on whether the card is a "blue" or "white" tile
const IconWrap = ({ children, isDark }) => (
  <div
    className={`w-12 h-12 rounded-sm flex items-center justify-center text-2xl ${
      isDark ? "bg-white/15 text-white" : "bg-light-blue/20 text-light-blue"
    }`}
  >
    {children}
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.12, ease: "easeOut" },
  }),
};

/**
 * ServiceGrid — shareable 3-column "chessboard" service section.
 *
 * Usage (from any parent page):
 *
 *   import ServiceGrid from "@/components/ServiceGrid";
 *   import { TbTargetArrow, TbReportMoney } from "react-icons/tb";
 *
 *   const cfoServices = [
 *     { title: "Developing Financial Strategy", description: "...", Icon: TbTargetArrow },
 *     { title: "Financial Reporting", description: "...", Icon: TbReportMoney },
 *     // ...
 *   ];
 *
 *   <ServiceGrid
 *     eyebrow="de tempête"
 *     heading={<>Virtual CFO <span className="font-extrabold">Services</span></>}
 *     description="provide comprehensive financial oversight to help you make confident, data driven decisions."
 *     services={cfoServices}
 *   />
 *
 * Only `services` is required. Everything else (heading/description/section bg)
 * has a sensible default so existing call sites still work with minimal changes.
 */
export default function ServiceGrid({
  services = [],
  heading,
  description,
  sectionClassName = "bg-[#f4f6fb] w-full py-16 lg:py-24",
}) {
  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading — only rendered if the parent passed something */}
        {(heading || description) && (
          <div className="mb-10 lg:mb-14">
            {heading && (
              <h2 className="text-4xl 2xl:text-5xl text-[#0d1e4a] font-normal mb-3">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-gray-500 text-sm 2xl:text-[1vw]">
                
                {description}
              </p>
            )}
          </div>
        )}

        {/* 3x3 Chessboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
          {services.map((service, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            // Alternate like a chessboard: (row + col) even -> blue tile, odd -> white tile
            const isDark = (row + col) % 2 === 0;

            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`flex p-10 flex-col hover:shadow-2xl duration-300 gap-4 ${
                  isDark ? "bg-light-blue" : "bg-white"
                }`}
              >
                {/* Icon */}
                <div className="w-fit">
                  <IconWrap isDark={isDark}>
                    {service.Icon ? <service.Icon /> : service.icon}
                  </IconWrap>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl 2xl:text-[1.1vw] leading-snug text-[#0d1e4a]">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed text-justify ${
                    isDark ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}