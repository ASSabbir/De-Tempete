// shared/ConsultationCTA.jsx
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import API from "../../api/axios";

const COUNTRIES = [
  "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States", "Estonia", "Bangladesh",
  "India", "Pakistan", "Egypt", "Other",
];
const CONTACT_METHODS = ["Phone", "WhatsApp", "Email", "Video Meeting"];
const MARKET_OPTIONS = ["UAE", "KSA", "UK", "USA", "Estonia", "Bangladesh", "Multiple Markets", "Other"];
const HELP_OPTIONS = [
  "Company Formation & Market Entry", "Accounting & Finance", "Tax & Compliance", "Regulatory & AML",
  "HR & Payroll", "Technology & Automation", "Business & Growth Advisory", "Investment & Partnership", "Other",
];
const DIAL_CODES = ["+971", "+966", "+44", "+1", "+372", "+880", "+91", "+92", "+20"];

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-light-blue bg-white";

const EMPTY_FORM = {
  fullName: "", workEmail: "", companyName: "", countryOfResidence: "",
  preferredContactMethod: "", marketInterest: "", helpNeeded: "", message: "",
};

export const ConsultationCTA = ({
  id,
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
  const [dialCode, setDialCode] = useState("+971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Lightweight, no-key spam guard — mirrors the one used on the Contact page forms.
  const [formLoadedAt] = useState(() => Date.now());
  const [gotcha, setGotcha] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.workEmail || !phoneNumber) {
      setError("Name, email and phone number are required");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/contact-forms/client", {
        fullName: form.fullName,
        workEmail: form.workEmail,
        companyName: form.companyName,
        phone: `${dialCode} ${phoneNumber}`,
        countryOfResidence: form.countryOfResidence,
        preferredContactMethod: form.preferredContactMethod,
        marketInterest: form.marketInterest ? [form.marketInterest] : [],
        helpNeeded: form.helpNeeded ? [form.helpNeeded] : [],
        message: form.message,
        source,
        consent: true, // no visible consent checkbox on this CTA — implied by submitting the form
        formLoadedAt, _gotcha: gotcha,
      });
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setPhoneNumber("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id={id} className="bg-[#16244B] py-24">
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
                  <input
                    type="text" name="_gotcha" value={gotcha} onChange={(e) => setGotcha(e.target.value)}
                    autoComplete="off" tabIndex={-1}
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                    aria-hidden="true"
                  />

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Name</label>
                      <input
                        type="text" name="fullName" placeholder="Name"
                        value={form.fullName} onChange={handleChange} required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Email</label>
                      <input
                        type="email" name="workEmail" placeholder="Email"
                        value={form.workEmail} onChange={handleChange} required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Company Name</label>
                      <input
                        type="text" name="companyName" placeholder="Company Name"
                        value={form.companyName} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Phone / WhatsApp Number <span className="text-red-400">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={dialCode} onChange={(e) => setDialCode(e.target.value)}
                          className="px-2 py-3 rounded-lg border border-gray-300 outline-none focus:border-light-blue bg-white w-24 shrink-0"
                        >
                          {DIAL_CODES.map((code) => <option key={code} value={code}>{code}</option>)}
                        </select>
                        <input
                          type="tel" placeholder="501234567" required
                          value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                          className={`${inputClass} flex-1`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Country of Residence</label>
                      <select
                        name="countryOfResidence"
                        value={form.countryOfResidence} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Preferred Contact Method</label>
                      <select
                        name="preferredContactMethod"
                        value={form.preferredContactMethod} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        {CONTACT_METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Market You're Interested In</label>
                      <select
                        name="marketInterest"
                        value={form.marketInterest} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        {MARKET_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700">How Can We Help?</label>
                      <select
                        name="helpNeeded"
                        value={form.helpNeeded} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        {HELP_OPTIONS.map((h) => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea
                      name="message" rows={4} placeholder="Write your message..."
                      value={form.message} onChange={handleChange}
                      className={`${inputClass} resize-none`}
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