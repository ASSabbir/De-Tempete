import { useState } from "react";
import API from "../../../api/axios";
import { TextInput, TextArea, SelectInput, CheckboxGroup, ConsentCheckbox } from "./fields";
import { PhoneInput } from "./PhoneInput";
import { useAntiSpam } from "./useAntiSpam";
import {
  COUNTRIES, AREA_OF_INTEREST_OPTIONS, QUALIFICATION_OPTIONS, SKILL_OPTIONS,
  OPPORTUNITY_TYPES, TIMEZONES, WORK_ARRANGEMENTS, EMPLOYMENT_STATUSES, HEARD_FROM_OPTIONS,
} from "./options";

const EMPTY = {
  fullName: "", email: "", currentLocationCity: "", currentResidenceCountry: "", nationality: "",
  linkedinUrl: "", opportunityType: "", preferredTimezone: "", preferredWorkingArrangement: "",
  yearsExperience: "", highestEducation: "", institutionName: "",
  employmentStatus: "", currentJobTitle: "", currentEmployer: "", earliestJoiningDate: "",
  currentSalary: "", expectedSalary: "",
  whyJoin: "", suitabilityExperience: "", pressureSituation: "", deadlineManagement: "",
  keyExpertise: "", languagesSpoken: "", howHeard: "", cvLink: "", consent: false,
};

const sectionTitle = (t) => (
  <h4 className="text-white/90 font-semibold text-base mt-4 mb-1 border-t border-white/10 pt-6 first:border-0 first:pt-0 first:mt-0">{t}</h4>
);

export default function CareerForm() {
  const [form, setForm] = useState(EMPTY);
  const [phoneCode, setPhoneCode] = useState("+971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [areas, setAreas] = useState([]); const [otherArea, setOtherArea] = useState("");
  const [quals, setQuals] = useState([]); const [otherQual, setOtherQual] = useState("");
  const [skills, setSkills] = useState([]); const [otherSkill, setOtherSkill] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { formLoadedAt, gotcha, HoneypotField } = useAntiSpam();

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));
  const toggle = (arr, setArr, val) => setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) { setError("Please confirm the consent checkbox"); return; }
    if (!form.cvLink) { setError("Please paste a link to your CV / Resume"); return; }
    setSubmitting(true);
    setError("");
    try {
      await API.post("/contact-forms/career", {
        ...form,
        phone: `${phoneCode} ${phoneNumber}`,
        areaOfInterest: areas, otherAreaOfInterest: otherArea,
        professionalQualifications: quals, otherQualification: otherQual,
        technicalSkills: skills, otherTechnicalSkill: otherSkill,
        formLoadedAt, _gotcha: gotcha,
      });
      setSubmitted(true);
      setForm(EMPTY); setPhoneNumber(""); setAreas([]); setQuals([]); setSkills([]);
      setOtherArea(""); setOtherQual(""); setOtherSkill("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <p className="text-white font-semibold text-xl mb-2">Thank You for Your Interest in de tempête</p>
        <p className="text-white/70 text-sm max-w-md mx-auto">
          Your application has been successfully submitted. Our team will review your profile and contact you if your experience and interests align with a current or future opportunity.
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-[#1a9fd4] font-semibold text-sm underline">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {HoneypotField}
      {error && <div className="text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-sm">{error}</div>}

      {sectionTitle("1. Personal Information")}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput label="Full Name" required value={form.fullName} onChange={set("fullName")} />
        <TextInput label="Email Address" type="email" required value={form.email} onChange={set("email")} />
        <PhoneInput code={phoneCode} number={phoneNumber} onCodeChange={(e) => setPhoneCode(e.target.value)} onNumberChange={(e) => setPhoneNumber(e.target.value)} />
        <TextInput label="Current Location (City)" required value={form.currentLocationCity} onChange={set("currentLocationCity")} />
        <SelectInput label="Current Residence (Country)" required value={form.currentResidenceCountry} onChange={set("currentResidenceCountry")} options={COUNTRIES} />
        <SelectInput label="Nationality" required value={form.nationality} onChange={set("nationality")} options={COUNTRIES} />
        <TextInput label="LinkedIn Profile URL" type="url" required value={form.linkedinUrl} onChange={set("linkedinUrl")} className="md:col-span-2" />
      </div>

      {sectionTitle("2. Opportunity & Location")}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectInput label="Type of Opportunity" required value={form.opportunityType} onChange={set("opportunityType")} options={OPPORTUNITY_TYPES} />
        <SelectInput label="Preferred Time Zone" required value={form.preferredTimezone} onChange={set("preferredTimezone")} options={TIMEZONES} />
        <SelectInput label="Preferred Working Arrangement" value={form.preferredWorkingArrangement} onChange={set("preferredWorkingArrangement")} options={WORK_ARRANGEMENTS} className="md:col-span-2" />
      </div>

      {sectionTitle("3. Professional Area")}
      <CheckboxGroup label="Area of Interest" required options={AREA_OF_INTEREST_OPTIONS} selected={areas}
        onToggle={(v) => toggle(areas, setAreas, v)} otherValue={otherArea} onOtherChange={(e) => setOtherArea(e.target.value)} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput label="Total Years of Professional Experience" required value={form.yearsExperience} onChange={set("yearsExperience")} />
        <TextInput label="Highest Educational Qualification" required value={form.highestEducation} onChange={set("highestEducation")} />
        <TextInput label="Institution Name" required value={form.institutionName} onChange={set("institutionName")} className="md:col-span-2" />
      </div>
      <CheckboxGroup label="Professional Qualification(s)" options={QUALIFICATION_OPTIONS} selected={quals}
        onToggle={(v) => toggle(quals, setQuals, v)} otherValue={otherQual} onOtherChange={(e) => setOtherQual(e.target.value)} />
      <CheckboxGroup label="Relevant Accounting Software & Technical Skills" required options={SKILL_OPTIONS} selected={skills}
        onToggle={(v) => toggle(skills, setSkills, v)} otherValue={otherSkill} onOtherChange={(e) => setOtherSkill(e.target.value)} />

      {sectionTitle("4. Employment & Availability")}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectInput label="Current Employment Status" required value={form.employmentStatus} onChange={set("employmentStatus")} options={EMPLOYMENT_STATUSES} />
        <TextInput label="Earliest Available Joining Date" type="date" required value={form.earliestJoiningDate} onChange={set("earliestJoiningDate")} />
        <TextInput label="Current Job Title" value={form.currentJobTitle} onChange={set("currentJobTitle")} />
        <TextInput label="Current Employer" value={form.currentEmployer} onChange={set("currentEmployer")} />
        <TextInput label="Current Salary / Compensation (optional)" value={form.currentSalary} onChange={set("currentSalary")} />
        <TextInput label="Expected Salary / Compensation (optional)" value={form.expectedSalary} onChange={set("expectedSalary")} />
      </div>

      {sectionTitle("5. Candidate Profile")}
      <TextArea label="Why are you interested in joining de tempête?" required rows={3} value={form.whyJoin} onChange={set("whyJoin")} />
      <TextArea label="Briefly describe the experience and skills that make you suitable for this opportunity" required rows={3} value={form.suitabilityExperience} onChange={set("suitabilityExperience")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextArea label="Describe a situation where you handled responsibility or pressure" required rows={3} value={form.pressureSituation} onChange={set("pressureSituation")} />
        <TextArea label="How do you manage deadlines and multiple tasks?" required rows={3} value={form.deadlineManagement} onChange={set("deadlineManagement")} />
      </div>
      <TextArea label="What are your key areas of expertise?" required rows={3} value={form.keyExpertise} onChange={set("keyExpertise")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <TextInput label="Languages Spoken" value={form.languagesSpoken} onChange={set("languagesSpoken")} />
        <SelectInput label="How did you hear about de tempête?" required value={form.howHeard} onChange={set("howHeard")} options={HEARD_FROM_OPTIONS} />
      </div>

      {sectionTitle("6. Documents")}
      <div>
        <TextInput label="CV / Resume — paste your Google Drive share link" type="url" required
          value={form.cvLink} onChange={set("cvLink")} placeholder="https://drive.google.com/..." />
        <p className="text-white/40 text-xs mt-1.5">Make sure link sharing is set to "Anyone with the link can view".</p>
      </div>

      <ConsentCheckbox variant="career" checked={form.consent} onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))} />

      <button type="submit" disabled={submitting}
        className="w-full sm:w-auto sm:self-start px-10 py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#1a9fd4]/30 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #1a9fd4, #0d7faa)" }}>
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}