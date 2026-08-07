const express = require('express');
const BusinessSetupLead = require('../models/businessSetupLeads');
const BusinessSetupGuide = require('../models/BusinessSetupGuide');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// POST /api/business-setup-leads — public, rate-limited to prevent form spam.
// Looks up the guide's downloadUrl from the database now, instead of the old
// hardcoded GUIDES object. The client sends the exact same `guide` value as before.
router.post('/', publicLimiter, async (req, res) => {
  try {
    const { name, email, phone, guide } = req.body;

    if (!name || !email || !phone || !guide) {
      return res.status(400).json({ message: 'Name, email, phone and guide are required' });
    }

    const guideDoc = await BusinessSetupGuide.findOne({ guideKey: guide, isActive: true }).lean();
    if (!guideDoc) {
      return res.status(400).json({ message: 'Unknown guide' });
    }

    await BusinessSetupLead.create({ name, email, phone, guide });

    res.status(201).json({ downloadUrl: guideDoc.downloadUrl });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Internal server error' });
  }
});

// GET /api/business-setup-leads/admin/all — protected, never rate-limited.
// Unchanged — this still returns who downloaded what, for the leads table + CSV export.
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

// ───────────────────────────────────────────
// Guide link management — Super Admin + Resource User only
// ───────────────────────────────────────────

// GET /api/business-setup-leads/guides/admin/all — list every guide for the admin panel
router.get('/guides/admin/all', protect, authorize('superadmin', 'resource'), async (_req, res) => {
  try {
    const guides = await BusinessSetupGuide.find().sort({ createdAt: -1 }).lean();
    res.json(guides);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /api/business-setup-leads/guides — create a new guide link
router.post('/guides', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { guideKey, label, downloadUrl, isActive } = req.body;
    if (!guideKey || !label || !downloadUrl) {
      return res.status(400).json({ message: 'guideKey, label and downloadUrl are required' });
    }
    const exists = await BusinessSetupGuide.findOne({ guideKey: guideKey.toLowerCase().trim() });
    if (exists) {
      return res.status(400).json({ message: 'A guide with this key already exists' });
    }
    const guide = await BusinessSetupGuide.create({ guideKey, label, downloadUrl, isActive });
    res.status(201).json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/business-setup-leads/guides/:id — update a guide link (usually just the URL)
router.put('/guides/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { guideKey, label, downloadUrl, isActive } = req.body;
    const guide = await BusinessSetupGuide.findByIdAndUpdate(
      req.params.id,
      { guideKey, label, downloadUrl, isActive },
      { new: true, runValidators: true }
    );
    if (!guide) return res.status(404).json({ message: 'Not found' });
    res.json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/business-setup-leads/guides/:id — remove a guide link
router.delete('/guides/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const guide = await BusinessSetupGuide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/guides/:guideKey', publicLimiter, async (req, res) => {
  try {
    const guide = await BusinessSetupGuide.findOne({
      guideKey: req.params.guideKey.toLowerCase().trim(),
      isActive: true,
    }).lean();

    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }

    res.json({ guideKey: guide.guideKey, label: guide.label, downloadUrl: guide.downloadUrl });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;