// File: src/Components/Shared/CostCalculatorModal/CostCalculatorModal.jsx
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";
import {
  countryOptions,
  countryQuestions,
  commonQuestions,
  contactFields,
  progressBuckets,
} from "./countryQuestions";
import API from "../../../api/axios";

const CostCalculatorModal = ({ isOpen, onClose }) => {
  const [country, setCountry] = useState(null);
  const [stepIndex, setStepIndex] = useState(0); // 0 = country select
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const countrySections = country ? countryQuestions[country] : [];
  // Full step list: [countrySection1, countrySection2, ..., commonQuestions, contactFields]
  const allSteps = [...countrySections, commonQuestions, contactFields];
  const currentSection = allSteps[stepIndex - 1]; // stepIndex 0 is the country picker

  const bucketForStep = () => {
    if (stepIndex === 0) return 0;
    if (stepIndex === allSteps.length) return 5; // contact
    if (stepIndex === allSteps.length - 1) return 4; // common questions
    // country sections spread across buckets 1-3 proportionally
    const ratio = stepIndex / (allSteps.length - 2 || 1);
    return Math.min(3, Math.max(1, Math.ceil(ratio * 3)));
  };

  const updateField = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const toggleMulti = (id, option) => {
    setFormData((prev) => {
      const current = prev[id] || [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [id]: next };
    });
  };

  const visibleFields = (fields) =>
    fields.filter((f) => !f.showIf || f.showIf(formData));

  const canGoNext = () => {
    if (stepIndex === 0) return !!country;
    const fields = visibleFields(currentSection.fields);
    return fields.every((f) => {
      const val = formData[f.id];
      if (f.type === "multi") return Array.isArray(val) && val.length > 0;
      return val !== undefined && val !== "" && val !== null;
    });
  };

  const handleNext = () => {
    if (stepIndex === allSteps.length) {
      handleSubmit();
      return;
    }
    setStepIndex((s) => s + 1);
  };

  const handleBack = () => {
    if (stepIndex === 0) return;
    setStepIndex((s) => s - 1);
  };

  // Turns the raw formData into a [{label, value}] list using the actual
  // question labels the user saw, for a readable email — not just field ids.
  const buildReadableAnswers = () => {
    const rows = [];
    allSteps.forEach((section) => {
      visibleFields(section.fields).forEach((field) => {
        const raw = formData[field.id];
        if (raw === undefined || raw === "" || raw === null) return;
        const value = Array.isArray(raw) ? raw.join(", ") : String(raw);
        rows.push({ label: field.label, value });
      });
    });
    return rows;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const countryLabel = countryOptions.find((c) => c.id === country)?.label || country;
      await API.post("/business-setup-calculator", {
        country: countryLabel,
        name: formData.contact_full_name,
        email: formData.contact_email,
        phone: formData.contact_phone,
        answers: formData,
        readableAnswers: buildReadableAnswers(),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err.response?.data?.message ||
        "We couldn't submit your request right now. Please try again, or contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    onClose();
    // reset after a short delay so any closing animation isn't affected
    setTimeout(() => {
      setCountry(null);
      setStepIndex(0);
      setFormData({});
      setSubmitted(false);
      setSubmitError(null);
    }, 200);
  };

  const renderField = (field) => {
    const value = formData[field.id];

    if (field.type === "single") {
      return (
        <div className="flex flex-wrap gap-3">
          {field.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => updateField(field.id, opt)}
              className={`px-4 py-2 rounded-lg border text-base font-medium transition-all duration-200 ${
                value === opt
                  ? "bg-light-blue border-light-blue text-white"
                  : "border-gray-200 text-gray-600 hover:border-light-blue"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }

    if (field.type === "multi") {
      const current = value || [];
      return (
        <div className="flex flex-wrap gap-3">
          {field.options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => toggleMulti(field.id, opt)}
              className={`px-4 py-2 rounded-lg border text-base font-medium transition-all duration-200 ${
                current.includes(opt)
                  ? "bg-light-blue border-light-blue text-white"
                  : "border-gray-200 text-gray-600 hover:border-light-blue"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }

    if (field.type === "number") {
      return (
        <input
          type="number"
          min="0"
          value={value || ""}
          onChange={(e) => updateField(field.id, e.target.value)}
          className="w-full max-w-xs px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none text-gray-700"
        />
      );
    }

    // default: text
    return (
      <input
        type="text"
        value={value || ""}
        placeholder={field.placeholder || ""}
        onChange={(e) => updateField(field.id, e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-light-blue focus:outline-none text-gray-700"
      />
    );
  };

  const isLastStep = stepIndex === allSteps.length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={resetAndClose}
      />

      {/* Panel */}
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-[#16244B]">
          <h2 className="text-white font-bold text-base md:text-xl">
            Business Setup Cost Calculator
          </h2>
          <button
            onClick={resetAndClose}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress indicator */}
        {!submitted && (
          <div className="px-6 pt-5 pb-2 bg-[#F5F6F8] border-b border-gray-100">
            <div className="flex items-center justify-between">
              {progressBuckets.map((label, i) => (
                <div key={label} className="flex-1 flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full shrink-0 ${
                      bucketForStep() >= i ? "bg-light-blue" : "bg-gray-300"
                    }`}
                  />
                  {i < progressBuckets.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-1 ${
                        bucketForStep() > i ? "bg-light-blue" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {progressBuckets[bucketForStep()]}
            </p>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-8 overflow-y-auto flex-1">
          {/* Step 0: Country selection */}
          {!submitted && stepIndex === 0 && (
            <div>
              <h3 className="text-xl font-bold text-[#16244b] mb-2">
                Which country would you like to set up your business in?
              </h3>
              <p className="text-gray-500 text-base mb-6">
                We'll only show you the questions relevant to your chosen jurisdiction.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {countryOptions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCountry(c.id)}
                    className={`text-left px-5 py-4 rounded-xl border-2 font-semibold transition-all duration-200 ${
                      country === c.id
                        ? "border-light-blue bg-cyan-50 text-[#16244b]"
                        : "border-gray-200 text-gray-600 hover:border-light-blue"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Steps 1..N: question sections */}
          {!submitted && stepIndex > 0 && currentSection && (
            <div>
              <h3 className="text-xl font-bold text-[#16244b] mb-6">
                {currentSection.title}
              </h3>
              <div className="space-y-8">
                {visibleFields(currentSection.fields).map((field) => (
                  <div key={field.id}>
                    <label className="block text-base font-semibold text-gray-700 mb-3">
                      {field.label}
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submission error */}
          {submitError && (
            <p className="mt-6 text-base text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              {submitError}
            </p>
          )}

          {/* Thank-you screen */}
          {submitted && (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle2 className="text-light-blue mb-5" size={56} />
              <h3 className="text-2xl font-bold text-[#16244b] mb-3">
                Thank you!
              </h3>
              <p className="text-gray-600 text-base max-w-md">
                We've received your request. Our team will review your details
                and reach you shortly.
              </p>
            </div>
          )}
        </div>

        {/* Footer / Navigation */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 py-5 border-t border-gray-100">
            <button
              type="button"
              onClick={handleBack}
              disabled={stepIndex === 0}
              className="flex items-center gap-2 text-gray-500 font-medium disabled:opacity-0 hover:text-[#16244b] transition-colors"
            >
              <ChevronLeft size={18} /> Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext() || submitting}
              className="flex items-center gap-2 bg-light-blue hover:bg-light-blue disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Submitting...
                </>
              ) : isLastStep ? (
                "Submit"
              ) : (
                <>
                  Next <ChevronRight size={18} />
                </>
              )}
            </button>
          </div>
        )}

        {submitted && (
          <div className="flex items-center justify-end px-6 py-5 border-t border-gray-100">
            <button
              type="button"
              onClick={resetAndClose}
              className="bg-[#16244B] hover:bg-[#1d2e5c] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculatorModal;