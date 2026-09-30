import { useState } from "react";
import API from "../../../api/axios";
import { TextInput, TextArea, SelectInput, CheckboxGroup, ConsentCheckbox } from "./fields";
import { PhoneInput } from "./PhoneInput";
import { useAntiSpam } from "./useAntiSpam";
import { PARTNERSHIP_INTEREST_OPTIONS, COUNTRIES } from "./options";

const EMPTY = {
  fullName: "", companyName: "", jobTitle: "", businessEmail: "", countryMarket: "",
  websiteOrLinkedin: "", marketsOperatedIn: "", message: "", consent: false,
};

export default function PartnershipForm() {
  const [form, setForm] = useState(EMPTY);
  const [phoneCode, setPhoneCode] = useState("+971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState([]);
  const [otherInterest, setOtherInterest] = useState("");
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
      await API.post("/contact-forms/partnership", {
        ...form,
        phone: `${phoneCode} ${phoneNumber}`,
        partnershipInterest: interests, otherPartnershipInterest: otherInterest,
        formLoadedAt, _gotcha: gotcha,
      });
      setSubmitted(true);
      setForm(EMPTY); setPhoneNumber(""); setInterests([]); setOtherInterest("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <p className="text-white font-semibold text-xl mb-2">Thank You for Your Interest in Partnering With Us</p>
        <p className="text-white/70 text-sm max-w-md mx-auto">
          We have received your partnership enquiry. Our team will review your organization and proposed collaboration and get in touch where there is a potential fit.
        </p>
        <p className="text-white/70 text-sm mt-2">We look forward to exploring how we can Grow Beyond—together.</p>
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
        <TextInput label="Company / Organization" required value={form.companyName} onChange={set("companyName")} />
        <TextInput label="Job Title" value={form.jobTitle} onChange={set("jobTitle")} />
        <TextInput label="Business Email" type="email" required value={form.businessEmail} onChange={set("businessEmail")} />
        <PhoneInput code={phoneCode} number={phoneNumber} onCodeChange={(e) => setPhoneCode(e.target.value)} onNumberChange={(e) => setPhoneNumber(e.target.value)} />
        <SelectInput label="Country / Market" required value={form.countryMarket} onChange={set("countryMarket")} options={COUNTRIES} />
        <TextInput label="Company Website / LinkedIn" type="url" value={form.websiteOrLinkedin} onChange={set("websiteOrLinkedin")} />
        <TextInput label="Markets / Countries You Operate In" value={form.marketsOperatedIn} onChange={set("marketsOperatedIn")} />
      </div>

      <CheckboxGroup label="Partnership Interest" required options={PARTNERSHIP_INTEREST_OPTIONS} selected={interests}
        onToggle={(v) => toggle(interests, setInterests, v)} otherValue={otherInterest} onOtherChange={(e) => setOtherInterest(e.target.value)} />
      <TextArea label="Tell Us About Your Organization & Partnership Idea" required rows={4} value={form.message} onChange={set("message")} />
      <ConsentCheckbox checked={form.consent} onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))} />

      <button type="submit" disabled={submitting}
        className="w-full sm:w-auto sm:self-start px-10 py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#1a9fd4]/30 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #1a9fd4, #0d7faa)" }}>
        {submitting ? "Sending..." : "Explore Partnership"}
      </button>
    </form>
  );
}