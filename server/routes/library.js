const express = require('express');
const LibraryItem = require('../models/LibraryItem');
const { protect } = require('../middleware/auth');

const router = express.Router();

const CACHE_DURATION = 60; // seconds

// GET /api/library/admin/all — MUST be before /:id
router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      LibraryItem.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      LibraryItem.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/library/categories
router.get('/categories', async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.region) filter.region = req.query.region;
    const cats = await LibraryItem.distinct('category', filter);
    res.set('Cache-Control', `public, max-age=${CACHE_DURATION}`);
    res.json(cats);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/library — public
router.get('/', async (req, res) => {
  try {
    const { q, region, category } = req.query;
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;

   const filter = { isActive: true };
    if (region) filter.region = region;
    if (category) filter.category = category;
    if (q) {
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'i');
      filter.$or = [
        { title: regex },
        { issuingAuthority: regex },
        { category: regex },
      ];
    }

    const sortOpt = { issueDate: -1 };

    const [items, total] = await Promise.all([
      LibraryItem.find(filter)
        .sort(sortOpt)
        .skip(skip)
        .limit(limit)
        .lean(),
      LibraryItem.countDocuments(filter),
    ]);

    if (!q) res.set('Cache-Control', `public, max-age=${CACHE_DURATION}`);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, issuingAuthority, category, issueDate, downloadUrl, region } = req.body;
    if (!title || !issuingAuthority || !category || !issueDate || !downloadUrl || !region) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const item = await LibraryItem.create({ title, issuingAuthority, category, issueDate, downloadUrl, region });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { title, issuingAuthority, category, issueDate, downloadUrl, region, isActive } = req.body;
    const item = await LibraryItem.findByIdAndUpdate(
      req.params.id,
      { title, issuingAuthority, category, issueDate, downloadUrl, region, isActive },
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await LibraryItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;