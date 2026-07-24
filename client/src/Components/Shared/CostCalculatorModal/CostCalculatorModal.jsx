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
import { calculateEstimate } from "./calculateEstimate";

// TODO: point this at your real backend endpoint
const SUBMISSION_ENDPOINT = "/api/business-setup-calculator/submit";

const CostCalculatorModal = ({ isOpen, onClose }) => {
  const [country, setCountry] = useState(null);
  const [stepIndex, setStepIndex] = useState(0); // 0 = country select
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [result, setResult] = useState(null);

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
      if (!f.required) return true;
      const val = formData[f.id];
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

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    const payload = {
      country,
      answers: formData,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(SUBMISSION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setResult(calculateEstimate(country, formData));
    } catch (err) {
      setSubmitError(
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
      setResult(null);
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
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
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
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
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
          <h2 className="text-white font-bold text-lg md:text-xl">
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
        {!result && (
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
          {!result && stepIndex === 0 && (
            <div>
              <h3 className="text-xl font-bold text-[#16244b] mb-2">
                Which country would you like to set up your business in?
              </h3>
              <p className="text-gray-500 text-sm mb-6">
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
          {!result && stepIndex > 0 && currentSection && (
            <div>
              <h3 className="text-xl font-bold text-[#16244b] mb-6">
                {currentSection.title}
              </h3>
              <div className="space-y-8">
                {visibleFields(currentSection.fields).map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {field.label}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    {renderField(field)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submission error */}
          {submitError && (
            <p className="mt-6 text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              {submitError}
            </p>
          )}

          {/* Result screen */}
          {result && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-light-blue" size={32} />
                <h3 className="text-2xl font-bold text-[#16244b]">
                  Your Estimated Setup Cost
                </h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#F5F6F8] rounded-xl p-5 text-center">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Government Fees</p>
                  <p className="text-lg font-bold text-[#16244b]">{result.govtFees}</p>
                </div>
                <div className="bg-[#F5F6F8] rounded-xl p-5 text-center">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-2">Professional Fees</p>
                  <p className="text-lg font-bold text-[#16244b]">{result.professionalFees}</p>
                </div>
                <div className="bg-[#16244B] rounded-xl p-5 text-center">
                  <p className="text-xs text-light-blue font-semibold uppercase mb-2">Total Estimate</p>
                  <p className="text-lg font-bold text-white">{result.totalEstimate}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                <span className="font-semibold text-[#16244b]">Estimated Timeline: </span>
                {result.timeline}
              </p>

              {result.servicesIncluded.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-[#16244b] mb-3">Services Included</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.servicesIncluded.map((s) => (
                      <span key={s} className="px-3 py-1.5 bg-cyan-50 text-light-blue text-xs font-medium rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.optionalServices.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-[#16244b] mb-3">Optional Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.optionalServices.map((s) => (
                      <span key={s} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-400 leading-6 mt-8 border-t border-gray-100 pt-6">
                This estimate is based on the information provided and is intended for
                preliminary guidance only. Final fees may vary depending on the selected
                jurisdiction, business activity, ownership structure, government charges,
                regulatory approvals, office requirements, visa requirements and document
                review.
              </p>
            </div>
          )}
        </div>

        {/* Footer / Navigation */}
        {!result && (
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
              ) : stepIndex === allSteps.length ? (
                "Get My Estimate"
              ) : (
                <>
                  Next <ChevronRight size={18} />
                </>
              )}
            </button>
          </div>
        )}

        {result && (
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