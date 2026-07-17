const express = require('express');
const NewsEvent = require('../models/NewsEvent');
const { protect } = require('../middleware/auth');

const router = express.Router();

const slugify = (str) =>
  str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

// GET /api/news-events/admin/all — protected
router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      NewsEvent.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      NewsEvent.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/news-events — public list
router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;
    const filter = { isActive: true };

    const [items, total] = await Promise.all([
      NewsEvent.find(filter).sort({ eventDate: -1 }).skip(skip).limit(limit).lean(),
      NewsEvent.countDocuments(filter),
    ]);
    res.set('Cache-Control', 'public, max-age=60');
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/news-events/recent — for sidebar, excludes current slug
router.get('/recent', async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.exclude) filter.slug = { $ne: req.query.exclude };
    const items = await NewsEvent.find(filter).sort({ eventDate: -1 }).limit(5).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/news-events/:slug — public single
router.get('/:slug', async (req, res) => {
  try {
    const item = await NewsEvent.findOne({ slug: req.params.slug, isActive: true }).lean();
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, excerpt, description, coverImage, galleryImages, eventDate } = req.body;
    if (!title || !excerpt || !description || !coverImage || !eventDate) {
      return res.status(400).json({ message: 'title, excerpt, description, coverImage, eventDate required' });
    }
    let slug = slugify(title);
    let suffix = 1;
    while (await NewsEvent.findOne({ slug })) {
      slug = `${slugify(title)}-${suffix++}`;
    }
    const item = await NewsEvent.create({
      title, excerpt, description, coverImage, eventDate, slug,
      galleryImages: Array.isArray(galleryImages) ? galleryImages.filter(Boolean) : [],
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { title, excerpt, description, coverImage, galleryImages, eventDate, isActive } = req.body;
    const update = { title, excerpt, description, coverImage, eventDate, isActive };
    if (Array.isArray(galleryImages)) update.galleryImages = galleryImages.filter(Boolean);

    const item = await NewsEvent.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await NewsEvent.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;