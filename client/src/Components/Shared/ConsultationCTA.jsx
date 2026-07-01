// shared/ConsultationCTA.jsx
import { FaCheckCircle } from "react-icons/fa";

export const ConsultationCTA = ({
  heading,
  subheading,
  commitmentTitle = "Our Commitment",
  commitmentItems = [],
  highlightText,
  bodyText,
}) => (
  <section className="bg-[#16244B] py-24">
    <div className="max-w-[1600px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl leading-tight font-light text-white">
            {heading}
          </h2>
           {subheading && (
            <p className="mt-8 text-cyan-400 text-xl font-semibold leading-9 max-w-xl">{subheading}</p>
          )}
          {bodyText && (
            <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
              <p className="text-gray-200 text-lg">{bodyText}</p>
              {highlightText && <p className="mt-4 text-cyan-400 font-bold text-lg">{highlightText}</p>}
            </div>
          )}
          {highlightText && !bodyText && (
            <p className="mt-4 text-cyan-400 font-bold text-lg">{highlightText}</p>
          )}
          {commitmentItems.length > 0 && (
            <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                {commitmentTitle}
              </h3>
              <div className="space-y-3">
                {commitmentItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h3 className="text-4xl font-bold text-[#16244B] mb-8">
              Book a Free Consultation
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-lg transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
