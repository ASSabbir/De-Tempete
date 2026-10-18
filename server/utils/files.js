const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

// Where uploaded files live on the VPS. Set FILES_DIR in .env to a folder
// OUTSIDE the project/git folder so deploys never touch it.
const FILES_DIR = process.env.FILES_DIR || path.join(__dirname, '..', '..', '..', 'detempete-files');
const PUBLIC_DIR = path.join(FILES_DIR, 'public');   // images: served directly by Nginx
const PRIVATE_DIR = path.join(FILES_DIR, 'private'); // documents: only via expiring links

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.mkdirSync(PRIVATE_DIR, { recursive: true });

const FILES_BASE_URL = (process.env.FILES_BASE_URL || '').replace(/\/+$/, '');
if (!FILES_BASE_URL) {
  console.warn('WARNING: FILES_BASE_URL is not set in .env, uploaded file links will be broken');
}

// Documents are saved in the database as "local:<stored-file-name>".
// Old Google Drive links keep working because they don't start with this.
const LOCAL_PREFIX = 'local:';
const LINK_SECRET = `${process.env.JWT_SECRET}:file-links`;

const isLocalRef = (v) => typeof v === 'string' && v.startsWith(LOCAL_PREFIX);
// path.basename blocks any "../" tricks
const refToName = (ref) => path.basename(ref.slice(LOCAL_PREFIX.length));
const displayName = (stored) => stored.replace(/^[a-f0-9]{8}__/, '');

// Builds a branded, expiring link: https://files.yourdomain.com/d/<token>/<file-name>
const signLink = (ref, minutes = 30) => {
  const name = refToName(ref);
  const token = jwt.sign({ f: name, t: 'dl' }, LINK_SECRET, { expiresIn: `${minutes}m` });
  return `${FILES_BASE_URL}/d/${token}/${encodeURIComponent(displayName(name))}`;
};

const verifyLink = (token) => {
  const payload = jwt.verify(token, LINK_SECRET);
  if (payload.t !== 'dl') throw new Error('Invalid link');
  return payload;
};

// Use this wherever a downloadUrl is handed to a visitor:
// local files become an expiring link, Drive links pass through unchanged.
const resolveDownloadUrl = (value, minutes) =>
  isLocalRef(value) ? signLink(value, minutes) : value;

module.exports = {
  PUBLIC_DIR, PRIVATE_DIR, FILES_BASE_URL,
  isLocalRef, signLink, verifyLink, resolveDownloadUrl,
};