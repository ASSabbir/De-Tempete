const mongoose = require('mongoose');

const businessSetupLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    guide: { type: String, required: true }, // e.g. "uae-guide-2026", "ksa-guide-2026"
  },
  { timestamps: true }
);

module.exports = mongoose.model('BusinessSetupLead', businessSetupLeadSchema);