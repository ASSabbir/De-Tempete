const express = require('express');
const BusinessSetupLead = require('../models/businessSetupLeads');
const BusinessSetupGuide = require('../models/BusinessSetupGuide');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// POST /api/business-setup-leads — public, rate-limited to prevent form spam.
// CHANGED: added status: 'published' to the lookup filter, so a pending guide
// can't be downloaded until Super Admin publishes it.
router.post('/', publicLimiter, async (req, res) => {
  try {
    const { name, email, phone, guide } = req.body;

    if (!name || !email || !phone || !guide) {
      return res.status(400).json({ message: 'Name, email, phone and guide are required' });
    }

    const guideDoc = await BusinessSetupGuide.findOne({
      guideKey: guide,
      isActive: true,
      status: 'published',
    }).lean();
    if (!guideDoc) {
      return res.status(400).json({ message: 'Unknown guide' });
    }

    await BusinessSetupLead.create({ name, email, phone, guide });

    res.status(201).json({ downloadUrl: guideDoc.downloadUrl });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Internal server error' });
  }
});

// GET /api/business-setup-leads/admin/all — protected, never rate-limited. UNCHANGED.
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

// GET /api/business-setup-leads/guides/admin/all — UNCHANGED. Shows every guide
// regardless of status, so admins can see pending ones waiting for approval.
router.get('/guides/admin/all', protect, authorize('superadmin', 'resource'), async (_req, res) => {
  try {
    const guides = await BusinessSetupGuide.find().sort({ createdAt: -1 }).lean();
    res.json(guides);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /api/business-setup-leads/guides — create a new guide link.
// CHANGED: status is now set by role — Super Admin's own creations publish
// immediately, Resource User's creations start pending.
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
    const status = req.admin.role === 'superadmin' ? 'published' : 'pending';
    const guide = await BusinessSetupGuide.create({ guideKey, label, downloadUrl, isActive, status });
    res.status(201).json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/business-setup-leads/guides/:id — update a guide link.
// CHANGED: edits made by anyone other than Super Admin reset status to pending,
// same re-approval rule as your other content types.
router.put('/guides/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const { guideKey, label, downloadUrl, isActive } = req.body;
    const update = { guideKey, label, downloadUrl, isActive };
    if (req.admin.role !== 'superadmin') update.status = 'pending';

    const guide = await BusinessSetupGuide.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );
    if (!guide) return res.status(404).json({ message: 'Not found' });
    res.json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH /api/business-setup-leads/guides/:id/status — NEW. Super Admin only —
// this is what the "Publish" button in the admin panel calls.
router.patch('/guides/:id/status', protect, authorize('superadmin'), async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'published'].includes(status)) {
      return res.status(400).json({ message: 'status must be pending or published' });
    }
    const guide = await BusinessSetupGuide.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!guide) return res.status(404).json({ message: 'Not found' });
    res.json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/business-setup-leads/guides/:id — UNCHANGED.
router.delete('/guides/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const guide = await BusinessSetupGuide.findByIdAndDelete(req.params.id);
    if (!guide) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/business-setup-leads/guides/:guideKey — public.
// CHANGED: added status: 'published' to the filter, same reasoning as POST / above.
router.get('/guides/:guideKey', publicLimiter, async (req, res) => {
  try {
    const guide = await BusinessSetupGuide.findOne({
      guideKey: req.params.guideKey.toLowerCase().trim(),
      isActive: true,
      status: 'published',
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