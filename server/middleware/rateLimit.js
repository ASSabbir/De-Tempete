const rateLimit = require('express-rate-limit');

// Strict — only for brute-forceable auth endpoints (login/refresh).
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: 'Too many requests, try again later' },
});

// Lighter — only for genuinely public, unauthenticated content endpoints.
// Never apply this to protected (protect/authorize-gated) routes — those
// already require a valid JWT, so throttling them just punishes logged-in
// admins, especially with multiple admins active at once.
const publicLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
});

module.exports = { authLimiter, publicLimiter };