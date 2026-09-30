const mongoose = require('mongoose');

const MARKET_OPTIONS = ['UAE', 'KSA', 'UK', 'USA', 'Estonia', 'Bangladesh', 'Multiple Markets', 'Other'];
const HELP_OPTIONS = [
  'Company Formation & Market Entry', 'Accounting & Finance', 'Tax & Compliance',
  'Regulatory & AML', 'HR & Payroll', 'Technology & Automation',
  'Business & Growth Advisory', 'Investment & Partnership', 'Other',
];
const CONTACT_METHODS = ['Phone', 'WhatsApp', 'Email', 'Video Meeting'];

const clientEnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 150 },
  companyName: { type: String, trim: true, maxlength: 200 },
  workEmail: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  countryOfResidence: { type: String, trim: true, maxlength: 100 },
  marketInterest: { type: [String], default: [] },
  otherMarket: { type: String, trim: true, maxlength: 150 },
  helpNeeded: { type: [String], default: [] },
  otherHelp: { type: String, trim: true, maxlength: 150 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  preferredContactMethod: { type: String, enum: [...CONTACT_METHODS, ''], default: '' },
  consent: { type: Boolean, required: true },
}, { timestamps: true });

clientEnquirySchema.index({ createdAt: -1 });
Object.assign(clientEnquirySchema.statics, { MARKET_OPTIONS, HELP_OPTIONS, CONTACT_METHODS });

module.exports = mongoose.model('ClientEnquiry', clientEnquirySchema);