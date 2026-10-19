const mongoose = require('mongoose');

const newsEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    description2: { type: String },
    description3: { type: String },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0 && arr.length <= 7,
        message: 'images must have between 1 and 7 items',
      },
    },
    // Optional YouTube video, stored as a clean https://www.youtube.com/watch?v=ID link.
    videoUrl: { type: String, trim: true, default: '' },
    // No longer entered in the admin panel. New items get today's date automatically
    // (used for ordering); old items keep the date they already have.
    eventDate: { type: Date, default: Date.now },
    // Old items keep their time in the database; it is not collected for new ones.
    eventTime: { type: String },
    // Only false for items created without a date, so the site can hide the date for them.
    // Old items don't have this field and keep showing their date.
    showDate: { type: Boolean },
    slug: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    status: { type: String, enum: ['pending', 'published'], default: 'pending' },
  },
  { timestamps: true }
);

newsEventSchema.index({ status: 1 });

module.exports = mongoose.model('NewsEvent', newsEventSchema);