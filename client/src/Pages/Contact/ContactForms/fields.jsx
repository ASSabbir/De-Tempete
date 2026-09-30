const inputStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export function TextInput({ label, required, type = "text", value, onChange, placeholder, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-white/80 text-sm font-medium">
        {label}{required && <span className="text-red-400"> *</span>}
      </label>
      <input
        type={type} required={required} value={value} placeholder={placeholder} onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all"
        style={inputStyle}
      />
    </div>
  );
}

export function TextArea({ label, required, value, onChange, placeholder, rows = 4, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-white/80 text-sm font-medium">
        {label}{required && <span className="text-red-400"> *</span>}
      </label>
      <textarea
        required={required} value={value} placeholder={placeholder} rows={rows} onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all resize-none"
        style={inputStyle}
      />
    </div>
  );
}

export function SelectInput({ label, required, value, onChange, options, placeholder = "Select...", className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-white/80 text-sm font-medium">
        {label}{required && <span className="text-red-400"> *</span>}
      </label>
      <select
        required={required} value={value} onChange={onChange}
        className="w-full px-4 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#1a9fd4] transition-all"
        style={inputStyle}
      >
        <option value="" className="text-black">{placeholder}</option>
        {options.map((opt) => <option key={opt} value={opt} className="text-black">{opt}</option>)}
      </select>
    </div>
  );
}

export function CheckboxGroup({ label, required, options, selected, onToggle, otherValue, onOtherChange, className = "" }) {
  const hasOther = selected.includes("Other");
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-white/80 text-sm font-medium">
        {label}{required && <span className="text-red-400"> *</span>}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-white/70 text-xs cursor-pointer">
            <input type="checkbox" checked={selected.includes(opt)} onChange={() => onToggle(opt)} className="accent-[#1a9fd4]" />
            {opt}
          </label>
        ))}
      </div>
      {hasOther && (
        <input
          type="text" value={otherValue} onChange={onOtherChange} placeholder="Please specify"
          className="mt-1 w-full max-w-sm px-4 py-2 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#1a9fd4]"
          style={inputStyle}
        />
      )}
    </div>
  );
}

export function ConsentCheckbox({ checked, onChange, variant = "enquiry", className = "" }) {
  const trailing = variant === "career"
    ? "I confirm that the information provided is correct, agree to the"
    : "I agree to de tempête's";
  const closing = variant === "career"
    ? "and consent to recruitment communications."
    : "and consent to enquiry-related and marketing communications.";
  return (
    <label className={`flex items-start gap-2 text-white/70 text-xs cursor-pointer ${className}`}>
      <input type="checkbox" required checked={checked} onChange={onChange} className="mt-0.5 accent-[#1a9fd4]" />
      <span>
        {trailing}{" "}
        <a href="/terms-conditions" target="_blank" rel="noreferrer" className="text-[#1a9fd4] underline">Terms & Conditions</a>
        {" "}and{" "}
        <a href="/privacy-policy" target="_blank" rel="noreferrer" className="text-[#1a9fd4] underline">Privacy Policy</a>
        {" "}{closing} *
      </span>
    </label>
  );
}