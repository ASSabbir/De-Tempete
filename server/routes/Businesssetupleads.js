const express = require('express');
const BusinessSetupLead = require('../models/businessSetupLeads');
const { protect } = require('../middleware/auth');

const router = express.Router();

// One entry per country guide. Add a new line here whenever a new guide goes live —
// no schema or route changes needed, the frontend just passes the matching guideKey.
const GUIDES = {
  'uae-guide-2026': 'https://drive.google.com/file/d/1wR0hbrioeHwYQyXwiRgRSygNQ32cIJd0/view',
  // 'ksa-guide-2026': 'https://drive.google.com/...',
  // 'usa-guide-2026': 'https://drive.google.com/...',
};

// POST /api/business-setup-leads — public, saves the lead, returns the file link
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, guide } = req.body;

    if (!name || !email || !phone || !guide) {
      return res.status(400).json({ message: 'Name, email, phone and guide are required' });
    }

    const downloadUrl = GUIDES[guide];
    if (!downloadUrl) {
      return res.status(400).json({ message: 'Unknown guide' });
    }

    await BusinessSetupLead.create({ name, email, phone, guide });

    res.status(201).json({ downloadUrl });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Internal server error' });
  }
});

// GET /api/business-setup-leads/admin/all — protected, for the admin panel
router.get('/admin/all', protect, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      BusinessSetupLead.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      BusinessSetupLead.countDocuments(),
    ]);

    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;