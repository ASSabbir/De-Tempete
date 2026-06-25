const express = require('express');
const Publication = require('../models/Publication');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      Publication.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Publication.countDocuments(),
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
    const items = await Publication.find(filter).sort({ createdAt: -1 }).lean();
    res.set('Cache-Control', 'public, max-age=60');
    res.json(items);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, fileFormat, imageUrl, downloadUrl, region } = req.body;
    if (!title || !imageUrl || !downloadUrl || !region) {
      return res.status(400).json({ message: 'title, imageUrl, downloadUrl, region required' });
    }
    const item = await Publication.create({ title, fileFormat: fileFormat || 'PDF', imageUrl, downloadUrl, region });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const { title, fileFormat, imageUrl, downloadUrl, region, isActive } = req.body;
    const item = await Publication.findByIdAndUpdate(
      req.params.id,
      { title, fileFormat, imageUrl, downloadUrl, region, isActive },
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
    const item = await Publication.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;