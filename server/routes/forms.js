const express = require('express');
const Form = require('../models/Form');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// GET /api/forms/admin/all — protected, never rate-limited
router.get('/admin/all', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const [items, total] = await Promise.all([
      Form.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Form.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/forms — public
router.get('/', publicLimiter, async (req, res) => {
  try {
    const filter = { isActive: true, status: 'published' };
    if (req.query.region) filter.region = req.query.region;
    const items = await Form.find(filter).sort({ createdAt: -1 }).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { title, issuingAuthority, downloadUrl, region } = req.body;
    if (!title || !issuingAuthority || !downloadUrl || !region) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const status = req.admin.role === 'superadmin' ? 'published' : 'pending';
    const item = await Form.create({ title, issuingAuthority, downloadUrl, region, status });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { title, issuingAuthority, downloadUrl, region, isActive } = req.body;
    const update = { title, issuingAuthority, downloadUrl, region, isActive };
    if (req.admin.role !== 'superadmin') update.status = 'pending';

    const item = await Form.findByIdAndUpdate(
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
    const item = await Form.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const item = await Form.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;