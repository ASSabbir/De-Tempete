const express = require('express');
const Form = require('../models/Form');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      Form.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Form.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.region) filter.region = req.query.region;
    const items = await Form.find(filter).sort({ createdAt: -1 }).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, issuingAuthority, downloadUrl, region } = req.body;
    if (!title || !issuingAuthority || !downloadUrl || !region) {
      return res.status(400).json({ message: 'All fields required' });
    }
    const item = await Form.create({ title, issuingAuthority, downloadUrl, region });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { title, issuingAuthority, downloadUrl, region, isActive } = req.body;
    const item = await Form.findByIdAndUpdate(
      req.params.id,
      { title, issuingAuthority, downloadUrl, region, isActive },
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
    const item = await Form.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;