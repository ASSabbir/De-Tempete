const mongoose = require('mongoose');

const PARTNERSHIP_INTEREST_OPTIONS = [
  'Referral Partnership', 'Channel Partnership', 'Service Partnership', 'Strategic Alliance',
  'Technology Partnership', 'Investment & Business Opportunities', 'Event or Community Collaboration', 'Other',
];

const partnershipEnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 150 },
  companyName: { type: String, required: true, trim: true, maxlength: 200 },
  jobTitle: { type: String, trim: true, maxlength: 150 },
  businessEmail: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  countryMarket: { type: String, required: true, trim: true, maxlength: 100 },
  websiteOrLinkedin: { type: String, trim: true, maxlength: 300 },
  partnershipInterest: { type: [String], default: [] },
  otherPartnershipInterest: { type: String, trim: true, maxlength: 150 },
  marketsOperatedIn: { type: String, trim: true, maxlength: 300 },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  consent: { type: Boolean, required: true },
}, { timestamps: true });

partnershipEnquirySchema.index({ createdAt: -1 });
partnershipEnquirySchema.statics.PARTNERSHIP_INTEREST_OPTIONS = PARTNERSHIP_INTEREST_OPTIONS;

module.exports = mongoose.model('PartnershipEnquiry', partnershipEnquirySchema);