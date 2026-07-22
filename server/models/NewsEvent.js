const mongoose = require('mongoose');

const newsEventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true, maxlength: 220 },
  description: { type: String, required: true, trim: true },
  description2: { type: String, trim: true },
  description3: { type: String, trim: true },
  coverImage: { type: String, required: true, trim: true, maxlength: 2048 },
  eventDate: { type: Date, required: true },
  eventTime: { type: String, trim: true, maxlength: 20 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

newsEventSchema.index({ isActive: 1, eventDate: -1 });

module.exports = mongoose.model('NewsEvent', newsEventSchema);