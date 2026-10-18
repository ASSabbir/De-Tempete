const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const { protect, authorize } = require('../middleware/auth');
const { PUBLIC_DIR, PRIVATE_DIR, FILES_BASE_URL, isLocalRef, signLink } = require('../utils/files');

const router = express.Router();

const DOC_EXT = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.zip'];
const IMG_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const MAX_DOC_MB = 50;
const MAX_IMG_MB = 8;

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'file';

// Saves as "<8 random hex>__<clean-original-name>.<ext>" so names never clash
const makeUploader = (dir, allowedExt, maxMB) =>
  multer({
    storage: multer.diskStorage({
      destination: (_req, _file, cb) => cb(null, dir),
      filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const base = slug(path.basename(file.originalname, ext));
        cb(null, `${crypto.randomBytes(4).toString('hex')}__${base}${ext}`);
      },
    }),
    limits: { fileSize: maxMB * 1024 * 1024, files: 1 },
    fileFilter: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (!allowedExt.includes(ext)) {
        return cb(new Error(`File type "${ext || 'unknown'}" is not allowed. Allowed: ${allowedExt.join(', ')}`));
      }
      cb(null, true);
    },
  });

const docUpload = makeUploader(PRIVATE_DIR, DOC_EXT, MAX_DOC_MB);
const imgUpload = makeUploader(PUBLIC_DIR, IMG_EXT, MAX_IMG_MB);

// Turns multer errors into normal JSON responses the admin panel can show
const handle = (uploader) => (req, res, next) =>
  uploader.single('file')(req, res, (err) => {
    if (err) {
      const message = err.code === 'LIMIT_FILE_SIZE' ? 'File is too large' : err.message;
      return res.status(400).json({ message });
    }
    if (!req.file) return res.status(400).json({ message: 'No file received' });
    next();
  });

// POST /api/uploads/image: any admin role (blogs, news, publications cover images)
router.post(
  '/image',
  protect,
  authorize('superadmin', 'resource', 'news', 'blog'),
  handle(imgUpload),
  (req, res) => {
    res.status(201).json({ url: `${FILES_BASE_URL}/img/${req.file.filename}` });
  }
);

// POST /api/uploads/document: library, forms, publications, business setup guides
router.post(
  '/document',
  protect,
  authorize('superadmin', 'resource'),
  handle(docUpload),
  (req, res) => {
    res.status(201).json({
      ref: `local:${req.file.filename}`,
      name: req.file.filename.replace(/^[a-f0-9]{8}__/, ''),
    });
  }
);

// POST /api/uploads/sign: lets admins preview an uploaded document (10-minute link)
router.post('/sign', protect, authorize('superadmin', 'resource'), (req, res) => {
  const { ref } = req.body;
  if (!isLocalRef(ref)) return res.status(400).json({ message: 'Not an uploaded file' });
  res.json({ url: signLink(ref, 10) });
});

module.exports = router;