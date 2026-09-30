import { useState } from "react";
import API from "../../../api/axios";
import { TextInput, TextArea, SelectInput, CheckboxGroup, ConsentCheckbox } from "./fields";
import { PhoneInput } from "./PhoneInput";
import { useAntiSpam } from "./useAntiSpam";
import { MARKET_OPTIONS, HELP_OPTIONS, CONTACT_METHODS, COUNTRIES } from "./options";

const EMPTY = {
  fullName: "", companyName: "", workEmail: "", countryOfResidence: "",
  message: "", preferredContactMethod: "", consent: false,
};

export default function ClientForm() {
  const [form, setForm] = useState(EMPTY);
  const [phoneCode, setPhoneCode] = useState("+971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [markets, setMarkets] = useState([]);
  const [otherMarket, setOtherMarket] = useState("");
  const [help, setHelp] = useState([]);
  const [otherHelp, setOtherHelp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { formLoadedAt, gotcha, HoneypotField } = useAntiSpam();

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const toggle = (arr, setArr, val) => setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) { setError("Please accept the Terms & Conditions and Privacy Policy"); return; }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/contact-forms/client", {
        ...form,
        phone: `${phoneCode} ${phoneNumber}`,
        marketInterest: markets, otherMarket,
        helpNeeded: help, otherHelp,
        formLoadedAt, _gotcha: gotcha,
      });
      setSubmitted(true);
      setForm(EMPTY); setPhoneNumber(""); setMarkets([]); setHelp([]); setOtherMarket(""); setOtherHelp("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <p className="text-white font-semibold text-xl mb-2">Thank You for Reaching Out</p>
        <p className="text-white/70 text-sm max-w-md mx-auto">
          Thank you for contacting de tempête. We have received your enquiry and our team will review your requirements and get in touch with you shortly.
        </p>
        <p className="text-white/70 text-sm mt-2">Together, let's explore how your business can Grow Beyond.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-[#1a9fd4] font-semibold text-sm underline">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {HoneypotField}
      {error && <div className="text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-sm">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput label="Full Name" required value={form.fullName} onChange={set("fullName")} />
        <TextInput label="Work Email" type="email" required value={form.workEmail} onChange={set("workEmail")} />
        <TextInput label="Company / Organization Name" value={form.companyName} onChange={set("companyName")} />
        <PhoneInput code={phoneCode} number={phoneNumber} onCodeChange={(e) => setPhoneCode(e.target.value)} onNumberChange={(e) => setPhoneNumber(e.target.value)} />
        <SelectInput label="Country of Residence" value={form.countryOfResidence} onChange={set("countryOfResidence")} options={COUNTRIES} />
        <SelectInput label="Preferred Contact Method" value={form.preferredContactMethod} onChange={set("preferredContactMethod")} options={CONTACT_METHODS} />
      </div>

      <CheckboxGroup label="Market You're Interested In" required options={MARKET_OPTIONS} selected={markets}
        onToggle={(v) => toggle(markets, setMarkets, v)} otherValue={otherMarket} onOtherChange={(e) => setOtherMarket(e.target.value)} />
      <CheckboxGroup label="How Can We Help?" required options={HELP_OPTIONS} selected={help}
        onToggle={(v) => toggle(help, setHelp, v)} otherValue={otherHelp} onOtherChange={(e) => setOtherHelp(e.target.value)} />
      <TextArea label="Briefly Tell Us What You Need" required rows={4} value={form.message} onChange={set("message")} />
      <ConsentCheckbox checked={form.consent} onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))} />

      <button type="submit" disabled={submitting}
        className="w-full sm:w-auto sm:self-start px-10 py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#1a9fd4]/30 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #1a9fd4, #0d7faa)" }}>
        {submitting ? "Sending..." : "Talk to Our Team"}
      </button>
    </form>
  );
}