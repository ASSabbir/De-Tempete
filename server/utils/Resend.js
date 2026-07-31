const { Resend } = require('resend');

if (!process.env.RESEND_API_KEY) {
  console.error('FATAL: RESEND_API_KEY not set in .env');
  process.exit(1);
}

module.exports = new Resend(process.env.RESEND_API_KEY);