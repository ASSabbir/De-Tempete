export const COUNTRIES = [
  "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States", "Estonia", "Bangladesh",
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria", "Bahrain", "Belgium", "Brazil",
  "Bulgaria", "Canada", "China", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Egypt", "Finland", "France",
  "Germany", "Ghana", "Greece", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Japan", "Jordan", "Kenya", "Kuwait", "Latvia", "Lebanon", "Lithuania", "Luxembourg", "Malaysia",
  "Malta", "Mexico", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman", "Pakistan",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Singapore", "Slovakia", "Slovenia",
  "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Tunisia", "Turkey",
  "Ukraine", "Vietnam", "Yemen", "Other",
];

// Dial code + short label — covers the company's core markets plus the most
// common countries. Extend as needed; it's just data, no API involved.
export const COUNTRY_CODES = [
  { dial: "+971", label: "UAE" }, { dial: "+966", label: "KSA" }, { dial: "+44", label: "UK" },
  { dial: "+1", label: "US/CA" }, { dial: "+372", label: "Estonia" }, { dial: "+880", label: "Bangladesh" },
  { dial: "+91", label: "India" }, { dial: "+92", label: "Pakistan" }, { dial: "+94", label: "Sri Lanka" },
  { dial: "+977", label: "Nepal" }, { dial: "+20", label: "Egypt" }, { dial: "+27", label: "South Africa" },
  { dial: "+31", label: "Netherlands" }, { dial: "+32", label: "Belgium" }, { dial: "+33", label: "France" },
  { dial: "+34", label: "Spain" }, { dial: "+39", label: "Italy" }, { dial: "+40", label: "Romania" },
  { dial: "+46", label: "Sweden" }, { dial: "+49", label: "Germany" }, { dial: "+60", label: "Malaysia" },
  { dial: "+61", label: "Australia" }, { dial: "+62", label: "Indonesia" }, { dial: "+63", label: "Philippines" },
  { dial: "+65", label: "Singapore" }, { dial: "+81", label: "Japan" }, { dial: "+82", label: "South Korea" },
  { dial: "+86", label: "China" }, { dial: "+90", label: "Turkey" }, { dial: "+962", label: "Jordan" },
  { dial: "+963", label: "Syria" }, { dial: "+964", label: "Iraq" }, { dial: "+965", label: "Kuwait" },
  { dial: "+968", label: "Oman" }, { dial: "+973", label: "Bahrain" }, { dial: "+974", label: "Qatar" },
];

export const MARKET_OPTIONS = ["UAE", "KSA", "UK", "USA", "Estonia", "Bangladesh", "Multiple Markets", "Other"];
export const HELP_OPTIONS = [
  "Company Formation & Market Entry", "Accounting & Finance", "Tax & Compliance", "Regulatory & AML",
  "HR & Payroll", "Technology & Automation", "Business & Growth Advisory", "Investment & Partnership", "Other",
];
export const CONTACT_METHODS = ["Phone", "WhatsApp", "Email", "Video Meeting"];

export const PARTNERSHIP_INTEREST_OPTIONS = [
  "Referral Partnership", "Channel Partnership", "Service Partnership", "Strategic Alliance",
  "Technology Partnership", "Investment & Business Opportunities", "Event or Community Collaboration", "Other",
];

export const AREA_OF_INTEREST_OPTIONS = [
  "Accounting & Bookkeeping", "Audit & Assurance", "Tax & Compliance", "Corporate & Business Setup",
  "Business Advisory & Consulting", "Finance & Virtual CFO", "HR & Payroll", "Sales & Business Development",
  "Marketing & Content", "Technology & Digital Transformation", "Operations & Administration",
  "Legal & Regulatory Support", "Other",
];
export const QUALIFICATION_OPTIONS = ["ACCA", "ACA", "CA", "CMA", "CPA", "CIMA", "MBA", "Other", "None"];
export const SKILL_OPTIONS = ["Xero", "QuickBooks", "Odoo", "Zoho Books", "Microsoft Excel", "TallyPrime", "Sage", "FreshBooks", "Wave", "SAP", "Oracle NetSuite", "Other"];
export const OPPORTUNITY_TYPES = ["Full-time", "Part-time", "Internship"];
export const TIMEZONES = ["UAE", "KSA", "Bangladesh", "UK", "Estonia", "Open to Multiple Locations"];
export const WORK_ARRANGEMENTS = ["On-site", "Hybrid", "Remote", "Flexible"];
export const EMPLOYMENT_STATUSES = [
  "Employed – Full-Time", "Employed – Part-Time", "Self-Employed / Freelancer",
  "Business Owner / Entrepreneur", "Student", "Intern / Trainee", "Unemployed",
];
export const HEARD_FROM_OPTIONS = ["LinkedIn", "Facebook", "Website", "Employee Referral", "University", "Job Portal", "Event", "Other"];