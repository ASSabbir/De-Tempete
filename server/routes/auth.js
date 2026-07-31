const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { protect, authorize } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const signTokens = (id, role) => ({
  access: jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '15m' }),
  refresh: jwt.sign({ id, role }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' }),
});

// POST /api/auth/login
router.post('/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const { access, refresh } = signTokens(admin._id, admin.role);
    res.json({ accessToken: access, refreshToken: refresh, name: admin.name, role: admin.role });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /api/auth/refresh
router.post('/refresh', authLimiter, (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const { access, refresh } = signTokens(decoded.id, decoded.role);
    res.json({ accessToken: access, refreshToken: refresh });
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

// POST /api/auth/seed — one-time admin creation, header-guarded, always superadmin
router.post('/seed', async (req, res) => {
  if (process.env.SEED_DISABLED === 'true') {
    return res.status(403).json({ message: 'Seed disabled' });
  }
  if (req.headers['x-seed-secret'] !== process.env.SEED_SECRET) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email, password required' });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password min 8 chars' });
    }
    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Admin already exists' });
    const admin = await Admin.create({ name, email, password, role: 'superadmin' });
    res.status(201).json({ message: 'Admin created', id: admin._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/create-admin — Super Admin only. Creates a user with a chosen role.
router.post('/create-admin', protect, authorize('superadmin'), async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'name, email, password, role required' });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: 'Password min 8 chars' });
    }
    if (!Admin.ROLES.includes(role)) {
      return res.status(400).json({ message: `role must be one of: ${Admin.ROLES.join(', ')}` });
    }
    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Admin already exists' });
    const admin = await Admin.create({ name, email, password, role });
    res.status(201).json({ message: 'Admin created', id: admin._id, role: admin.role });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/auth/roles — exposes the fixed role list for the "create user" dropdown
router.get('/roles', protect, authorize('superadmin'), (_req, res) => {
  res.json(Admin.ROLES);
});

// GET /api/auth/admins — Super Admin only. Lists all admin users for the Users page.
router.get('/admins', protect, authorize('superadmin'), async (_req, res) => {
  try {
    const admins = await Admin.find().sort({ createdAt: -1 }).lean();
    res.json(admins);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /api/auth/admins/:id — Super Admin only. Can't delete your own account.
router.delete('/admins/:id', protect, authorize('superadmin'), async (req, res) => {
  try {
    if (req.params.id === req.admin.id) {
      return res.status(400).json({ message: "You can't delete your own account" });
    }
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;