const mongoose = require('mongoose');

const businessSetupCalculatorSubmissionSchema = new mongoose.Schema({
  country: { type: String, required: true, trim: true },
  name: { type: String, trim: true, maxlength: 100 },
  email: { type: String, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, trim: true, maxlength: 30 },
  answers: { type: mongoose.Schema.Types.Mixed, required: true }, // raw formData, for reference
  // Same data as `answers` but with the actual question labels the user saw —
  // this is what the admin panel displays/exports instead of raw field ids.
  readableAnswers: { type: [{ label: String, value: String }], default: [] },
  emailSent: { type: Boolean, default: false },
}, { timestamps: true });

businessSetupCalculatorSubmissionSchema.index({ createdAt: -1 });

module.exports = mongoose.model('BusinessSetupCalculatorSubmission', businessSetupCalculatorSubmissionSchema);