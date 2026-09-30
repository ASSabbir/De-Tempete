import { COUNTRY_CODES } from "./options";

export function PhoneInput({ label = "Phone / WhatsApp Number", required = true, code, number, onCodeChange, onNumberChange, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-white/80 text-sm font-medium">
        {label}{required && <span className="text-red-400"> *</span>}
      </label>
      <div className="flex gap-2">
        <select
          value={code} onChange={onCodeChange}
          className="px-2 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] w-28 shrink-0"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.dial + c.label} value={c.dial} className="text-black">{c.dial} {c.label}</option>
          ))}
        </select>
        <input
          type="tel" required={required} value={number} onChange={onNumberChange} placeholder="501234567"
          className="flex-1 px-4 py-2.5 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4]"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
        />
      </div>
    </div>
  );
}