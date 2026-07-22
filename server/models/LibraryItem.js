const mongoose = require('mongoose');

const AUTHORITY_OPTIONS = [
  'Ministry of Finance',
  'National Board of Revenue (NBR)',
  'Bangladesh Bank',
  'Financial Reporting Council',
  'Federal Tax Authority',
  'Other',
];

const libraryItemSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 300 },
  description: { type: String, trim: true, maxlength: 1000 },
  issuingAuthority: {
    type: String,
    required: true,
    trim: true,
    enum: AUTHORITY_OPTIONS,
    maxlength: 150,
  },
  customAuthority: { type: String, trim: true, maxlength: 150 }, // used only when issuingAuthority === 'Other'
  category: { type: String, required: true, trim: true, maxlength: 100 },
  issueDate: { type: Date, required: true },
  downloadUrl: { type: String, required: true, trim: true, maxlength: 2048 },
  region: {
    type: String, required: true,
    enum: ['UAE', 'KSA', 'UK', 'BD'],
    default: 'UAE',
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

libraryItemSchema.index({ region: 1, isActive: 1, issueDate: -1 });
libraryItemSchema.index({ region: 1, category: 1 });
libraryItemSchema.index({ region: 1, issuingAuthority: 1 });

libraryItemSchema.statics.AUTHORITY_OPTIONS = AUTHORITY_OPTIONS;

module.exports = mongoose.model('LibraryItem', libraryItemSchema);