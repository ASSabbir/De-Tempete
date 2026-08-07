const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  fileFormat: { type: String, required: true, trim: true, default: 'PDF', maxlength: 20 },
  imageUrl: { type: String, required: true, trim: true, maxlength: 2048 },
  downloadUrl: { type: String, required: true, trim: true, maxlength: 2048 },
  region: {
    type: String, required: true,
    enum: ['UAE', 'KSA', 'UK', 'BD','Estonia','USA'],
    default: 'UAE',
  },
  isActive: { type: Boolean, default: true },
  status: { type: String, enum: ['pending', 'published'], default: 'pending' },
}, { timestamps: true });

publicationSchema.index({ region: 1, isActive: 1 });
publicationSchema.index({ status: 1 });

module.exports = mongoose.model('Publication', publicationSchema);