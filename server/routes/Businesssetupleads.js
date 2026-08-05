const express = require('express');
const BusinessSetupLead = require('../models/businessSetupLeads');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const GUIDES = {
  'uae-guide-2026': 'https://drive.google.com/drive/folders/1JWSP27GbI3IH57VEoIRBCEQecJBmujQW',
  'uk-guide-2026': 'https://drive.google.com/drive/folders/1lWaKDsXRwCJg5AbVDm-ixXyYYQKCsFG8',
  'bd-guide-2026': 'https://drive.google.com/drive/folders/1-z4BbEEYDg2azVSih8SMIfyoixN2rCSF',
  'ksa-guide-2026': 'https://drive.google.com/drive/folders/1VljQgR_oc6MubiczmFdM5iAm73GKldPf',
  'usa-guide-2026': 'https://drive.google.com/drive/folders/1SIcca04SfKWGM7KmLcJyBS_XY0c41kW5',
  'estonia-guide-2026': 'https://drive.google.com/drive/folders/1HB09Xdl9XNvLf-edFhweCL14bfYmqgSp',
  'aml-guide-2026': 'https://drive.google.com/drive/folders/1E3j9rAvfLFWGpnuHRl2tZ3zKvOcDnmKG',
  
};

// POST /api/business-setup-leads — public, rate-limited to prevent form spam
router.post('/', publicLimiter, async (req, res) => {
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

// GET /api/business-setup-leads/admin/all — protected, never rate-limited
router.get('/admin/all', protect, authorize('superadmin', 'resource'), async (req, res) => {
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