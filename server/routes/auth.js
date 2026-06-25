const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/auth');

const router = express.Router();

const signTokens = (id) => ({
  access: jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '15m' }),
  refresh: jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' }),
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const { access, refresh } = signTokens(admin._id);
    res.json({ accessToken: access, refreshToken: refresh, name: admin.name });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /api/auth/refresh
router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const { access, refresh } = signTokens(decoded.id);
    res.json({ accessToken: access, refreshToken: refresh });
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

// POST /api/auth/seed — one-time admin creation, header-guarded
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
    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ message: 'Admin created', id: admin._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/create-admin — protected route for creating more admins from dashboard
router.post('/create-admin', protect, async (req, res) => {
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
    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ message: 'Admin created', id: admin._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;