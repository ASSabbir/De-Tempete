const mongoose = require('mongoose');

const newsEventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true, maxlength: 220 },
  excerpt: { type: String, required: true, trim: true, maxlength: 300 },
  description: { type: String, required: true, trim: true },
  coverImage: { type: String, required: true, trim: true, maxlength: 2048 },
  galleryImages: { type: [String], default: [] },
  eventDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

newsEventSchema.index({ isActive: 1, eventDate: -1 });

module.exports = mongoose.model('NewsEvent', newsEventSchema);