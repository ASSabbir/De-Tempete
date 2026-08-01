require('dotenv').config();

if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
  console.error('FATAL: JWT secrets not set in .env');
  process.exit(1);
}

const autoSeedAdmin = async () => {
  const Admin = require('./models/Admin');
  try {
    const exists = await Admin.findOne({ email: 'admin@detempete.com' });
    if (!exists) {
      await Admin.create({
        name: 'Super Admin',
        email: 'admin@detempete.com',
        password: 'Admin@123',
      });
      console.log('✓ Default admin created: admin@detempete.com / Admin@123');
    }
  } catch (err) {
    console.error('Auto seed failed:', err.message);
  }
};

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const connectDB = require('./config/db');

connectDB().then(() => autoSeedAdmin());

const app = express();

app.use(helmet());
app.use(compression());

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));

// manual mongo injection sanitize — no package needed
app.use((req, _res, next) => {
  const sanitize = (obj) => {
    if (!obj || typeof obj !== 'object') return;
    Object.keys(obj).forEach(key => {
      if (key.startsWith('$')) {
        delete obj[key];
      } else {
        sanitize(obj[key]);
      }
    });
  };
  sanitize(req.body);
  sanitize(req.params);
  next();
});

// Rate limiting now lives inside each route file, applied only to the routes
// that need it (public unauthenticated endpoints, login/refresh). Protected
// admin routes are gated by a valid JWT already and are never rate-limited
// here, so multiple admins working at once don't hit 429s.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/library', require('./routes/library'));
app.use('/api/publications', require('./routes/publications'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/news-events', require('./routes/newsEvents'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/business-setup-leads', require('./routes/Businesssetupleads'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/business-setup-calculator', require('./routes/Businesssetupcalculator'));

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));