const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    req.admin = jwt.verify(auth.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
};

// Restricts a route to specific roles. Always use AFTER protect.
// Usage: router.get('/admin/all', protect, authorize('superadmin', 'resource'), handler)
const authorize = (...allowedRoles) => (req, res, next) => {
  if (!req.admin?.role || !allowedRoles.includes(req.admin.role)) {
    return res.status(403).json({ message: 'Forbidden — your role cannot access this' });
  }
  next();
};

module.exports = { protect, authorize };