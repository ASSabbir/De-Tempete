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
        validator: (arr) => arr.length > 0 && arr.length <= 5,
        message: 'images must have between 1 and 5 items',
      },
    },
    eventDate: { type: Date, required: true },
    eventTime: { type: String },
    slug: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('NewsEvent', newsEventSchema);