const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  phone: { type: String, trim: true, maxlength: 30 },
  company: { type: String, trim: true, maxlength: 150 },
  designation: { type: String, trim: true, maxlength: 100 },
  service: { type: String, trim: true, maxlength: 150 },
  message: { type: String, trim: true, maxlength: 2000 },
  source: { type: String, trim: true, maxlength: 100 }, // which form/page it came from
  emailSent: { type: Boolean, default: false },
}, { timestamps: true });

contactSubmissionSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);