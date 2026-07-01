import { useState } from "react";
import { motion } from "framer-motion";

const commitments = [
  "Free initial tax consultation — no obligation",
  "100% confidentiality and secure handling of data",
  "Region-specific tax experts",
  "Transparent and practical advice tailored to your needs",
];

export default function GetStarted() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  return (
    <section className="w-full py-16 lg:py-24" style={{ background: "#0a1840" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Get <span className="font-extrabold">Started</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#1a9fd4] font-semibold text-base sm:text-lg leading-snug">
              Ready to Simplify Your Taxes and Strengthen Compliance?
            </p>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base italic leading-relaxed max-w-md">
              Let's build a tax strategy that protects your business and maximizes efficiency.
            </p>

            {/* Commitment card */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <h3 className="text-white font-bold text-base">Our Commitment</h3>
              <ul className="flex flex-col gap-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    {/* Teal check circle */}
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#1a9fd4" }}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — Form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl"
          >
            <h3 className="text-[#0d1e4a] font-extrabold text-xl sm:text-2xl mb-7">
              Book a Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1e4a] text-sm font-medium">Name</label>
                <input
                  type="text" name="name" placeholder="Name"
                  value={form.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1e4a] text-sm font-medium">Email</label>
                <input
                  type="email" name="email" placeholder="Email"
                  value={form.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#0d1e4a] text-sm font-medium">Message</label>
                <textarea
                  name="message" placeholder="Write your message..."
                  rows={5} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 placeholder-gray-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#1a9fd4]/30 mt-1"
                style={{ background: "linear-gradient(135deg, #1a9fd4, #22d3ee)" }}
              >
                Send
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}