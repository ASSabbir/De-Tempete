const mongoose = require('mongoose');

const AREA_OF_INTEREST_OPTIONS = [
  'Accounting & Bookkeeping', 'Audit & Assurance', 'Tax & Compliance', 'Corporate & Business Setup',
  'Business Advisory & Consulting', 'Finance & Virtual CFO', 'HR & Payroll', 'Sales & Business Development',
  'Marketing & Content', 'Technology & Digital Transformation', 'Operations & Administration',
  'Legal & Regulatory Support', 'Other',
];
const QUALIFICATION_OPTIONS = ['ACCA', 'ACA', 'CA', 'CMA', 'CPA', 'CIMA', 'MBA', 'Other', 'None'];
const SKILL_OPTIONS = ['Xero', 'QuickBooks', 'Odoo', 'Zoho Books', 'Microsoft Excel', 'TallyPrime', 'Sage', 'FreshBooks', 'Wave', 'SAP', 'Oracle NetSuite', 'Other'];
const OPPORTUNITY_TYPES = ['Full-time', 'Part-time', 'Internship'];
const TIMEZONES = ['UAE', 'KSA', 'Bangladesh', 'UK', 'Estonia', 'Open to Multiple Locations'];
const WORK_ARRANGEMENTS = ['On-site', 'Hybrid', 'Remote', 'Flexible'];
const EMPLOYMENT_STATUSES = [
  'Employed – Full-Time', 'Employed – Part-Time', 'Self-Employed / Freelancer',
  'Business Owner / Entrepreneur', 'Student', 'Intern / Trainee', 'Unemployed',
];
const HEARD_FROM_OPTIONS = ['LinkedIn', 'Facebook', 'Website', 'Employee Referral', 'University', 'Job Portal', 'Event', 'Other'];

const careerApplicationSchema = new mongoose.Schema({
  // Personal
  fullName: { type: String, required: true, trim: true, maxlength: 150 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  currentLocationCity: { type: String, required: true, trim: true, maxlength: 100 },
  currentResidenceCountry: { type: String, required: true, trim: true, maxlength: 100 },
  nationality: { type: String, required: true, trim: true, maxlength: 100 },
  linkedinUrl: { type: String, required: true, trim: true, maxlength: 300 },
  // Opportunity & location
  opportunityType: { type: String, required: true, enum: OPPORTUNITY_TYPES },
  preferredTimezone: { type: String, required: true, enum: TIMEZONES },
  preferredWorkingArrangement: { type: String, enum: [...WORK_ARRANGEMENTS, ''], default: '' },
  // Professional
  areaOfInterest: { type: [String], default: [] },
  otherAreaOfInterest: { type: String, trim: true, maxlength: 150 },
  yearsExperience: { type: String, required: true, trim: true, maxlength: 50 },
  highestEducation: { type: String, required: true, trim: true, maxlength: 150 },
  institutionName: { type: String, required: true, trim: true, maxlength: 150 },
  professionalQualifications: { type: [String], default: [] },
  otherQualification: { type: String, trim: true, maxlength: 150 },
  technicalSkills: { type: [String], default: [] },
  otherTechnicalSkill: { type: String, trim: true, maxlength: 150 },
  // Employment
  employmentStatus: { type: String, required: true, enum: EMPLOYMENT_STATUSES },
  currentJobTitle: { type: String, trim: true, maxlength: 150 },
  currentEmployer: { type: String, trim: true, maxlength: 150 },
  earliestJoiningDate: { type: Date, required: true },
  currentSalary: { type: String, trim: true, maxlength: 100 },
  expectedSalary: { type: String, trim: true, maxlength: 100 },
  // Candidate profile
  whyJoin: { type: String, required: true, trim: true, maxlength: 2000 },
  suitabilityExperience: { type: String, required: true, trim: true, maxlength: 2000 },
  pressureSituation: { type: String, required: true, trim: true, maxlength: 2000 },
  deadlineManagement: { type: String, required: true, trim: true, maxlength: 2000 },
  keyExpertise: { type: String, required: true, trim: true, maxlength: 2000 },
  languagesSpoken: { type: String, trim: true, maxlength: 300 },
  howHeard: { type: String, required: true, enum: HEARD_FROM_OPTIONS },
  // Documents — just a pasted link, no file upload
  cvLink: { type: String, required: true, trim: true, maxlength: 500 },
  consent: { type: Boolean, required: true },
}, { timestamps: true });

careerApplicationSchema.index({ createdAt: -1 });
Object.assign(careerApplicationSchema.statics, {
  AREA_OF_INTEREST_OPTIONS, QUALIFICATION_OPTIONS, SKILL_OPTIONS, OPPORTUNITY_TYPES,
  TIMEZONES, WORK_ARRANGEMENTS, EMPLOYMENT_STATUSES, HEARD_FROM_OPTIONS,
});

module.exports = mongoose.model('CareerApplication', careerApplicationSchema);