import { HiChartBar } from "react-icons/hi"; 
import { motion } from "framer-motion";


export default function KeyBenefits({benefits,keyBenefittext}) {
  return (
    <section className="w-full py-16 lg:py-24" style={{ background: "#0a1840" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
            <span className="font-extrabold">{keyBenefittext[0]}</span> {keyBenefittext[1]}
          </h2>
        </div>

        {/* Teal divider line */}
        <div className="flex justify-center mb-12">
          <div
            className="h-0.5 w-24 rounded-full"
            style={{ background: "linear-gradient(to right, #1a9fd4, #22d3ee)" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group flex items-center justify-center gap-3 px-6 py-7 rounded-xl cursor-default transition-all duration-300 "
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              
            >
              <div className="text-4xl p-2 text-white rounded-xl bg-light-blue">
                <HiChartBar />
              </div>
              <p className="text-white  font-inter text-sm sm:text-base leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}