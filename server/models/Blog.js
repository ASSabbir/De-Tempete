const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    title2: { type: String, trim: true },
    description2: { type: String },
    coverImage: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    slug: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

blogSchema.index({ slug: 1 });
blogSchema.index({ isActive: 1, publishedDate: -1 });

module.exports = mongoose.model('Blog', blogSchema);