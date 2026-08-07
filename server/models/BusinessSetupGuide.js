const mongoose = require('mongoose');

const businessSetupGuideSchema = new mongoose.Schema(
  {
    // Matches the `guide` value the client already sends, e.g. "uae-guide-2026" —
    // must stay identical to the guideKey prop used in DownloadButtonGuide across the site.
    guideKey: { type: String, required: true, unique: true, trim: true, lowercase: true },
    label: { type: String, required: true, trim: true }, // e.g. "UAE Business Setup Guide 2026" — admin panel only
    downloadUrl: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BusinessSetupGuide', businessSetupGuideSchema);