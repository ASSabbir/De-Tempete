const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  issuingAuthority: { type: String, required: true, trim: true, maxlength: 150 },
  downloadUrl: { type: String, required: true, trim: true, maxlength: 2048 },
  region: {
    type: String, required: true,
    enum: ['UAE', 'KSA', 'UK', 'BD'],
    default: 'UAE',
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

formSchema.index({ region: 1, isActive: 1 });

module.exports = mongoose.model('Form', formSchema);