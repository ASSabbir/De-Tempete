const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  company: { type: String, trim: true, maxlength: 150 },
  designation: { type: String, trim: true, maxlength: 100 },
  resourceType: { type: String, required: true, enum: ['library', 'publication', 'form'] },
  resourceId: { type: mongoose.Schema.Types.ObjectId, required: true },
  resourceTitle: { type: String, required: true, trim: true },
  region: { type: String, required: true, enum: ['UAE', 'KSA', 'UK', 'BD'] },
  downloadUrl: { type: String, required: true },
}, { timestamps: true });

leadSchema.index({ createdAt: -1 });
leadSchema.index({ resourceType: 1, resourceId: 1 });

module.exports = mongoose.model('Lead', leadSchema);