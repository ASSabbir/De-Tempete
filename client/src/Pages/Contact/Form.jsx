import { useState } from "react";
import API from "../../api/axios";

// Flag emojis used as circle flags — replace with your actual flag images if needed
import uk from '../../asstes/img_temp/Contact/197374.webp';
import uae from '../../asstes/img_temp/Contact/323301.webp';
import bd from '../../asstes/img_temp/Contact/8362826.webp';
import ee from '../../asstes/img_temp/Contact/ee-circle-01.webp';
import sa from '../../asstes/img_temp/Contact/5111777.webp';
const offices = [
  {
    flag: uk,
    name: "UK ",
    phone: "+447831848639",
    address: "115 London Road, Morden, SM4 5HP, UK",
  },
  {
    flag: uae,
    name: "UAE ",
    phone: "+971566994282",
    address: "Office 601/31, Business Village Block B - Port Saeed - Deira - Dubai - United Arab Emirates",
  },
  {
    flag: bd,
    name: "Bangladesh ",
    phone: "+88 0195 333 5155",
    address: "Bashati Xclusive, Flat - B4, House - 06, Road - 07, Niketon, Dhaka 1212, Bangladesh",
  },
  {
    flag: ee,
    name: "Estonia ",
    phone: "+372 5781 8653",
    address: "Volume 20/3, Tallinn 13516, Estonia",
  },
  {
    flag: sa,
    name: "KSA ",
    phone: "+966 55 949 3954",
    address: "Office # 303, Al Mohamdia Tower, Custodian of the two Holy Mosques Road, Al Aqrabiyah City Al Khobar, Ash Sharqiyah, Saudia Arabia",
  },
];

const socials = [
  {
    label: "Facebook",
    path: "https://www.facebook.com/detempete",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/detempetelimited",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    path: "https://x.com/DeTempeteHQ",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    path: "https://www.linkedin.com/company/14612088/admin/dashboard/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    path: "https://www.youtube.com/@detempete",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-[#1a9fd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-[#1a9fd4] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Form() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Name and email are required");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/contact", { ...formData, source: "Contact Page" });
      setSubmitted(true);
      setFormData(EMPTY_FORM);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white w-full py-16 lg:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Office Cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 lg:mb-20">
          {offices.map((office) => (
            <div key={office.name} className="flex p-[3vw] duration-300 hover:shadow-xl flex-col gap-3">
              {/* Flag circle */}

              <img className="w-30  rounded-full " src={office.flag} alt="" />

              {/* Name */}
              <h3 className="text-[#0d1e4a] font-bold text-base">{office.name}</h3>

              {/* Phone */}
              <a
                href={`tel:${office.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-gray-500 text-xs hover:text-[#1a9fd4] transition-colors"
              >
                <PhoneIcon />
                {office.phone}
              </a>

              {/* Address */}
              <div className="flex items-start gap-1.5 text-gray-500 text-xs leading-relaxed">
                <PinIcon />
                <span>{office.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Get In Touch + Form ── */}
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Get In Touch */}
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#0d1e4a] mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-base">We simplify business growth</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1a9fd4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[#0d1e4a] font-semibold text-base">Email us</p>
                <a href="mailto:info@detempete.com" className="text-gray-500 text-base hover:text-[#1a9fd4] transition-colors">
                  info@detempete.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-500 text-base font-medium mb-3">Follow our social network</p>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.path}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-[#0d1e4a] text-white flex items-center justify-center hover:bg-[#1a9fd4] transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Form (Name / Email / Message only) */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ background: "#0d1e4a" }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 70% 60%, #1a9fd4 0%, transparent 60%)`,
              }}
            />

            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-5">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-10">
                  <p className="text-white font-semibold text-lg mb-2">Thank you!</p>
                  <p className="text-white/70 text-sm">We've received your message and will be in touch shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#1a9fd4] font-semibold text-sm underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {error && (
                    <div className="text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-sm">
                      {error}
                    </div>
                  )}

                  <input
                    type="text" name="name" placeholder="Name"
                    value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />

                  <input
                    type="email" name="email" placeholder="Email"
                    value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />

                  <textarea
                    name="message" placeholder="Message" rows={5}
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#1a9fd4]/30 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #1a9fd4, #0d7faa)" }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}