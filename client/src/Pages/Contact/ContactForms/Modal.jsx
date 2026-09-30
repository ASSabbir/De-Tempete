import { useEffect, useState } from "react";

export default function Modal({ open, onClose, title, subtitle, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(raf);
    }
    setShow(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${show ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* panel */}
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-200 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ background: "#0d1e4a" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle at 70% 60%, #1a9fd4 0%, transparent 60%)` }} />

        {/* sticky header so the close button and title stay visible while scrolling long forms */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 sm:px-10 pt-6 sm:pt-8 pb-4"
          style={{ background: "rgba(13,30,74,0.96)" }}
        >
          <div>
            <h3 className="text-white font-bold text-xl sm:text-2xl">{title}</h3>
            {subtitle && <p className="text-white/50 text-sm mt-1">{subtitle}</p>}
          </div>
          <button
            type="button" onClick={onClose} aria-label="Close"
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative z-10 px-6 sm:px-10 pb-8 sm:pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}