const express = require('express');
const LibraryItem = require('../models/LibraryItem');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const CACHE_DURATION = 60; // seconds

const SORT_OPTIONS = {
  newest: { issueDate: -1 },
  oldest: { issueDate: 1 },
  'title-asc': { title: 1 },
  'title-desc': { title: -1 },
};

const RANGE_DAYS = {
  '1m': 30,
  '3m': 90,
  '6m': 180,
  '1y': 365,
};

// GET /api/library/admin/all — protected, never rate-limited
router.get('/admin/all', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const [items, total] = await Promise.all([
      LibraryItem.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      LibraryItem.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/library/categories — public
router.get('/categories', publicLimiter, async (req, res) => {
  try {
    const filter = { isActive: true, status: 'published' };
    if (req.query.region) filter.region = req.query.region;
    const cats = await LibraryItem.distinct('category', filter);
    res.set('Cache-Control', `public, max-age=${CACHE_DURATION}`);
    res.json(cats);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/library/authorities — public
router.get('/authorities', publicLimiter, async (_req, res) => {
  res.set('Cache-Control', `public, max-age=${CACHE_DURATION * 60}`);
  res.json(LibraryItem.AUTHORITY_OPTIONS);
});

// GET /api/library — public
router.get('/', publicLimiter, async (req, res) => {
  try {
    const { q, region, category, authority, range, sort } = req.query;
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;

    const filter = { isActive: true, status: 'published' };
    if (region) filter.region = region;
    if (category) filter.category = category;
    if (authority) filter.issuingAuthority = authority;

    if (range && RANGE_DAYS[range]) {
      const since = new Date();
      since.setDate(since.getDate() - RANGE_DAYS[range]);
      filter.issueDate = { $gte: since };
    }

    if (q) {
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'i');
      filter.$or = [
        { title: regex },
        { description: regex },
        { issuingAuthority: regex },
        { category: regex },
      ];
    }

    const sortOpt = SORT_OPTIONS[sort] || SORT_OPTIONS.newest;

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

// POST /api/library — protected, never rate-limited
router.post('/', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { title, description, issuingAuthority, customAuthority, category, issueDate, downloadUrl, region } = req.body;
    if (!title || !issuingAuthority || !category || !issueDate || !downloadUrl || !region) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const status = req.admin.role === 'superadmin' ? 'published' : 'pending';
    const item = await LibraryItem.create({
      title, description, issuingAuthority, customAuthority, category, issueDate, downloadUrl, region, status,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { title, description, issuingAuthority, customAuthority, category, issueDate, downloadUrl, region, isActive } = req.body;
    const update = { title, description, issuingAuthority, customAuthority, category, issueDate, downloadUrl, region, isActive };
    if (req.admin.role !== 'superadmin') update.status = 'pending';

    const item = await LibraryItem.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );
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
    const item = await LibraryItem.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const item = await LibraryItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;