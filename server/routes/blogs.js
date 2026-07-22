const express = require('express');
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');

const router = express.Router();

const slugify = (str) =>
  str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

// GET /api/blogs/admin/all — protected
router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      Blog.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Blog.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/blogs — public list
router.get('/', async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;
    const filter = { isActive: true };

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

// GET /api/blogs/recent
router.get('/recent', async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.exclude) filter.slug = { $ne: req.query.exclude };
    const items = await Blog.find(filter).sort({ publishedDate: -1 }).limit(5).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/blogs/:slug — public single
router.get('/:slug', async (req, res) => {
  try {
    const item = await Blog.findOne({ slug: req.params.slug, isActive: true }).lean();
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, description, title2, description2, coverImage, publishedDate } = req.body;
    if (!title || !description || !coverImage || !publishedDate) {
      return res.status(400).json({ message: 'title, description, coverImage, publishedDate required' });
    }
    let slug = slugify(title);
    let suffix = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${slugify(title)}-${suffix++}`;
    }
    const item = await Blog.create({
      title, description, title2, description2, coverImage, publishedDate, slug,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { title, description, title2, description2, coverImage, publishedDate, isActive } = req.body;
    const update = { title, description, title2, description2, coverImage, publishedDate, isActive };

    const item = await Blog.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await Blog.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;