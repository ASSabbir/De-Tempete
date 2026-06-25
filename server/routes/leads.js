const express = require('express');
const Lead = require('../models/Lead');
const LibraryItem = require('../models/LibraryItem');
const Publication = require('../models/Publication');
const Form = require('../models/Form');
const { protect } = require('../middleware/auth');

const router = express.Router();

const MODEL_MAP = { library: LibraryItem, publication: Publication, form: Form };

// POST /api/leads — public, captures lead + returns downloadUrl
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, designation, resourceType, resourceId } = req.body;
    if (!name || !email || !phone || !resourceType || !resourceId) {
      return res.status(400).json({ message: 'name, email, phone, resourceType, resourceId required' });
    }
    const Model = MODEL_MAP[resourceType];
    if (!Model) return res.status(400).json({ message: 'Invalid resourceType' });

    const resource = await Model.findById(resourceId).lean();
    if (!resource || !resource.isActive) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    await Lead.create({
      name, email, phone, company, designation,
      resourceType, resourceId,
      resourceTitle: resource.title,
      region: resource.region,
      downloadUrl: resource.downloadUrl,
    });

    res.status(201).json({ downloadUrl: resource.downloadUrl });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/leads/admin/all — protected
router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;
    const filter = {};
    if (req.query.resourceType) filter.resourceType = req.query.resourceType;
    if (req.query.region) filter.region = req.query.region;

    const [items, total] = await Promise.all([
      Lead.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Lead.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;