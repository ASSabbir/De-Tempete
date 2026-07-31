const express = require('express');
const NewsEvent = require('../models/NewsEvent');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const MAX_IMAGES = 5;

const slugify = (str) =>
  str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

// GET /api/news-events/admin/all — protected, never rate-limited
router.get('/admin/all', protect, authorize('superadmin', 'news'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const [items, total] = await Promise.all([
      NewsEvent.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      NewsEvent.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/news-events — public
router.get('/', publicLimiter, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;
    const filter = { isActive: true, status: 'published' };

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

// GET /api/news-events/recent — public
router.get('/recent', publicLimiter, async (req, res) => {
  try {
    const filter = { isActive: true, status: 'published' };
    if (req.query.exclude) filter.slug = { $ne: req.query.exclude };
    const items = await NewsEvent.find(filter).sort({ eventDate: -1 }).limit(5).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/news-events/:slug — public
router.get('/:slug', publicLimiter, async (req, res) => {
  try {
    const item = await NewsEvent.findOne({ slug: req.params.slug, isActive: true, status: 'published' }).lean();
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, authorize('superadmin', 'news'), async (req, res) => {
  try {
    const { title, description, description2, description3, images, eventDate, eventTime } = req.body;

    if (!title || !description || !Array.isArray(images) || images.length === 0 || !eventDate) {
      return res.status(400).json({ message: 'title, description, images, eventDate required' });
    }
    if (images.length > MAX_IMAGES) {
      return res.status(400).json({ message: `Maximum ${MAX_IMAGES} images allowed` });
    }

    let slug = slugify(title);
    let suffix = 1;
    while (await NewsEvent.findOne({ slug })) {
      slug = `${slugify(title)}-${suffix++}`;
    }
    const status = req.admin.role === 'superadmin' ? 'published' : 'pending';
    const item = await NewsEvent.create({
      title, description, description2, description3, images, eventDate, eventTime, slug, status,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, authorize('superadmin', 'news'), async (req, res) => {
  try {
    const { title, description, description2, description3, images, eventDate, eventTime, isActive } = req.body;

    if (images && (!Array.isArray(images) || images.length === 0)) {
      return res.status(400).json({ message: 'images must have at least 1 item' });
    }
    if (images && images.length > MAX_IMAGES) {
      return res.status(400).json({ message: `Maximum ${MAX_IMAGES} images allowed` });
    }

    const update = { title, description, description2, description3, images, eventDate, eventTime, isActive };
    if (req.admin.role !== 'superadmin') update.status = 'pending';

    const item = await NewsEvent.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id/status', protect, authorize('superadmin'), async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'published'].includes(status)) {
      return res.status(400).json({ message: 'status must be pending or published' });
    }
    const item = await NewsEvent.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, authorize('superadmin', 'news'), async (req, res) => {
  try {
    const item = await NewsEvent.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;