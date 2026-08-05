const express = require('express');
const Blog = require('../models/Blog');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const slugify = (str) =>
  str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

// GET /api/blogs/admin/all — protected, never rate-limited
router.get('/admin/all', protect, authorize('superadmin', 'blog'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const [items, total] = await Promise.all([
      Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/blogs — public
router.get('/', publicLimiter, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;
    const filter = { isActive: true, status: 'published' };

    const [items, total] = await Promise.all([
      Blog.find(filter).sort({ publishedDate: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments(filter),
    ]);
    res.set('Cache-Control', 'public, max-age=60');
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/blogs/recent — public. Optional ?limit= (default 5, capped at 10)
router.get('/recent', publicLimiter, async (req, res) => {
  try {
    const limit = Math.min(10, Math.max(1, parseInt(req.query.limit) || 5));
    const filter = { isActive: true, status: 'published' };
    if (req.query.exclude) filter.slug = { $ne: req.query.exclude };
    const items = await Blog.find(filter).sort({ publishedDate: -1 }).limit(limit).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/blogs/:slug — public
router.get('/:slug', publicLimiter, async (req, res) => {
  try {
    const item = await Blog.findOne({ slug: req.params.slug, isActive: true, status: 'published' }).lean();
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, authorize('superadmin', 'blog'), async (req, res) => {
  try {
    const { title, shortDescription, description, title2, description2, coverImage, publishedDate } = req.body;
    if (!title || !description || !coverImage || !publishedDate) {
      return res.status(400).json({ message: 'title, description, coverImage, publishedDate required' });
    }
    let slug = slugify(title);
    let suffix = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${slugify(title)}-${suffix++}`;
    }
    const status = req.admin.role === 'superadmin' ? 'published' : 'pending';
    const item = await Blog.create({
      title, shortDescription, description, title2, description2, coverImage, publishedDate, slug, status,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, authorize('superadmin', 'blog'), async (req, res) => {
  try {
    const { title, shortDescription, description, title2, description2, coverImage, publishedDate, isActive } = req.body;
    const update = { title, shortDescription, description, title2, description2, coverImage, publishedDate, isActive };
    if (req.admin.role !== 'superadmin') update.status = 'pending';

    const item = await Blog.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
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
    const item = await Blog.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, authorize('superadmin', 'blog'), async (req, res) => {
  try {
    const item = await Blog.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;