const mongoose = require('mongoose');

const libraryItemSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 300 },
  issuingAuthority: { type: String, required: true, trim: true, maxlength: 150 },
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

module.exports = mongoose.model('LibraryItem', libraryItemSchema);