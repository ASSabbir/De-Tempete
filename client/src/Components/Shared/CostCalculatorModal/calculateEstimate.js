// File: src/Components/Shared/CostCalculatorModal/calculateEstimate.js

// This is a simple illustrative rules engine. Replace the base figures
// and multipliers with your actual pricing once finalized — the shape
// of the returned object is what the result screen renders.
const BASE_FEES = {
  uae: { govt: 8000, professional: 3500, currency: "USD", timeline: "5–10 business days" },
  ksa: { govt: 12000, professional: 5000, currency: "USD", timeline: "3–6 weeks" },
  uk: { govt: 300, professional: 1200, currency: "USD", timeline: "3–7 business days" },
  estonia: { govt: 500, professional: 1000, currency: "USD", timeline: "1–3 business days" },
  usa: { govt: 800, professional: 1500, currency: "USD", timeline: "3–10 business days" },
  bangladesh: { govt: 1500, professional: 2000, currency: "USD", timeline: "3–6 weeks" },
};

export function calculateEstimate(country, formData) {
  const base = BASE_FEES[country] || BASE_FEES.usa;
  let govt = base.govt;
  let professional = base.professional;
  const included = [];
  const optional = [];

  // Visa / employee-driven adjustments
  const visaFields = ["uae_owner_visas", "uae_employee_visas", "us_employee_count", "ksa_foreign_employees", "ksa_saudi_employees"];
  visaFields.forEach((f) => {
    const val = parseInt(formData[f], 10);
    if (!isNaN(val) && val > 0) {
      govt += val * 400;
      included.push(`Visa/immigration processing (${val})`);
    }
  });

  // Common flags across countries that add professional fee
  const addOnFlags = {
    uae_vat: "VAT registration", uae_corp_tax: "Corporate Tax registration", uae_ongoing_compliance: "Ongoing accounting & compliance",
    ksa_vat: "VAT registration", ksa_zakat_tax: "Zakat / Corporate Tax registration", ksa_ongoing_compliance: "Ongoing accounting & compliance",
    uk_vat: "VAT registration", uk_corp_tax: "Corporation Tax registration", uk_paye: "PAYE & payroll registration", uk_ongoing_compliance: "Bookkeeping & annual accounts",
    ee_vat: "VAT registration", ee_oss_ioss: "OSS/IOSS registration", ee_ongoing_accounting: "Monthly accounting & annual report filing",
    us_sales_tax: "Sales tax registration", us_tax_filing: "Federal & state tax filing support", us_bookkeeping_payroll: "Bookkeeping & payroll services", us_ein: "EIN application",
    bd_tin: "TIN registration", bd_vat_bin: "VAT/BIN registration", bd_ongoing_support: "Ongoing accounting, payroll & audit support",
  };
  Object.entries(addOnFlags).forEach(([field, label]) => {
    if (formData[field] === "Yes") {
      professional += 400;
      included.push(label);
    } else if (formData[field] === "Not sure") {
      optional.push(label);
    }
  });

  // Common additional services (multi-select)
  const extras = formData.common_additional_services || [];
  extras.forEach((item) => {
    if (item !== "None") {
      professional += 300;
      included.push(item);
    }
  });

  return {
    govtFees: `${base.currency} ${govt.toLocaleString()}`,
    professionalFees: `${base.currency} ${professional.toLocaleString()}`,
    totalEstimate: `${base.currency} ${(govt + professional).toLocaleString()}`,
    timeline: base.timeline,
    servicesIncluded: [...new Set(included)],
    optionalServices: [...new Set(optional)],
  };
}