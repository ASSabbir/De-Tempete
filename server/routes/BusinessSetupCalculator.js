const express = require('express');
const BusinessSetupCalculatorSubmission = require('../models/BusinessSetupCalculatorSubmission');
const resend = require('../utils/resend');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL;

const buildEmailHtml = ({ country, name, email, phone, readableAnswers }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color:#16244b; margin-bottom: 4px;">New Business Setup Calculator submission</h2>
    <p style="color:#6b7280; font-size:13px; margin-top:0;">Country: <strong>${country}</strong></p>

    <table style="width:100%; border-collapse:collapse; margin: 16px 0;">
      <tbody>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold; width:130px;">Name</td><td style="padding:8px 0; color:#111827;">${name || '-'}</td></tr>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Email</td><td style="padding:8px 0; color:#111827;">${email || '-'}</td></tr>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Phone</td><td style="padding:8px 0; color:#111827;">${phone || '-'}</td></tr>
      </tbody>
    </table>

    <h3 style="color:#16244b; border-top: 1px solid #e5e7eb; padding-top: 16px;">Responses</h3>
    <table style="width:100%; border-collapse:collapse;">
      <tbody>
        ${(readableAnswers || []).map(({ label, value }) => `
          <tr>
            <td style="padding:8px 0; color:#374151; vertical-align:top; width:45%;">${label}</td>
            <td style="padding:8px 0; color:#111827; font-weight:600;">${value}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
`;

// POST /api/business-setup-calculator — public
router.post('/', publicLimiter, async (req, res) => {
  try {
    const { country, name, email, phone, answers, readableAnswers } = req.body;

    if (!country || !name || !email || !phone) {
      return res.status(400).json({ message: 'country, name, email and phone are required' });
    }

    const submission = await BusinessSetupCalculatorSubmission.create({
      country, name, email, phone, answers,
    });

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New calculator submission — ${country} (${name})`,
        html: buildEmailHtml({ country, name, email, phone, readableAnswers }),
      });
      submission.emailSent = true;
      await submission.save();
    } catch (emailErr) {
      console.error('Resend email failed:', emailErr.message);
    }

    res.status(201).json({ message: "Thank you — we'll reach you shortly." });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Something went wrong' });
  }
});

// GET /api/business-setup-calculator/admin/all — protected, for the admin panel later
router.get('/admin/all', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      BusinessSetupCalculatorSubmission.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      BusinessSetupCalculatorSubmission.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;