// shared/ConsultationCTA.jsx
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import API from "../../api/axios";

const EMPTY_FORM = { name: "", email: "", message: "" };

export const ConsultationCTA = ({
  heading,
  subheading,
  commitmentTitle = "Our Commitment",
  commitmentItems = [],
  highlightText,
  bodyText,
  commitmentTitleOnly = false,
  source = "Consultation CTA",
}) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Name and email are required");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/contact", { ...form, source });
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#16244B] py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-20 2xl:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl  2xl:text-5xl leading-tight font-light text-white">
              {heading}
            </h2>
             {subheading && (
              <p className="mt-8 text-light-blue text-base  2xl:text-xl font-semibold leading-7 max-w-xl">{subheading}</p>
            )}
            {bodyText && (
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <p className="text-gray-200 text-base">{bodyText}</p>
                {highlightText && <p className="mt-4 text-light-blue font-bold text-base">{highlightText}</p>}
              </div>
            )}
            {highlightText && !bodyText && (
              <p className="mt-4 text-light-blue font-bold text-base">{highlightText}</p>
            )}
             {(commitmentItems.length > 0 || commitmentTitleOnly) && (
              <div className="mt-10 bg-[#37456B] rounded-2xl p-8 max-w-xl">
                <h3 className="text-xl font-bold text-white mb-4">{commitmentTitle}</h3>
                {commitmentItems.length > 0 && (
                <div className="space-y-3">
                  {commitmentItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-light-blue text-base shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </div>
                 ))}
                </div>
                )}
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h3 className="text-4xl font-bold text-[#16244B] mb-8">
                Book a Free Consultation
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <p className="text-[#16244B] font-bold text-xl mb-2">Thank you!</p>
                  <p className="text-gray-500">We've received your request and will be in touch shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-light-blue font-semibold underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Write your message..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-light-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-light-blue hover:bg-light-blue text-white font-semibold py-4 rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};