const express = require('express');
const { PRIVATE_DIR, verifyLink } = require('../utils/files');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// GET /api/files/:token/:name  (visitors reach this as files.detempete.uk/d/:token/:name via Nginx)
// The token is created only after the visitor fills the form, and it expires.
router.get('/:token{/:name}', publicLimiter, (req, res) => {
  let payload;
  try {
    payload = verifyLink(req.params.token);
  } catch {
    return res
      .status(410)
      .send('This download link has expired. Please go back to the website and request the file again.');
  }

  const downloadName = payload.f.replace(/^[a-f0-9]{8}__/, '');

  res.sendFile(
    payload.f,
    {
      root: PRIVATE_DIR,
      headers: {
        'Content-Disposition': `inline; filename*=UTF-8''${encodeURIComponent(downloadName)}`,
        'X-Content-Type-Options': 'nosniff',
        'X-Robots-Tag': 'noindex',
        'Cache-Control': 'private, no-store',
      },
    },
    (err) => {
      if (err && !res.headersSent) res.status(404).send('File not found');
    }
  );
});

module.exports = router;