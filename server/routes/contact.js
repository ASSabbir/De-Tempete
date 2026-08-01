const express = require('express');
const ContactSubmission = require('../models/Contactsubmission');
const resend = require('../utils/resend');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;     // e.g. 'De Tempête <notifications@detempete.uk>'
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL;  // where you want to receive these

const buildEmailHtml = ({ name, email, phone, company, designation, service, message, source }) => `
  <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
    <h2 style="color:#0f1f3d; margin-bottom: 4px;">New consultation request</h2>
    <p style="color:#6b7280; font-size:13px; margin-top:0;">${source || 'Website'}</p>
    <table style="width:100%; border-collapse:collapse; margin-top:16px;">
      <tbody>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold; width:130px;">Name</td><td style="padding:8px 0; color:#111827;">${name}</td></tr>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Email</td><td style="padding:8px 0; color:#111827;">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Phone</td><td style="padding:8px 0; color:#111827;">${phone}</td></tr>` : ''}
        ${company ? `<tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Company</td><td style="padding:8px 0; color:#111827;">${company}</td></tr>` : ''}
        ${designation ? `<tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Designation</td><td style="padding:8px 0; color:#111827;">${designation}</td></tr>` : ''}
        ${service ? `<tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Service</td><td style="padding:8px 0; color:#111827;">${service}</td></tr>` : ''}
      </tbody>
    </table>
    ${message ? `<div style="margin-top:16px;"><p style="color:#374151; font-weight:bold; margin-bottom:6px;">Message</p><p style="color:#111827; white-space:pre-wrap;">${message}</p></div>` : ''}
  </div>
`;

// POST /api/contact — public. Saves the submission, then emails you via Resend.
router.post('/', publicLimiter, async (req, res) => {
  try {
    const { name, email, phone, company, designation, service, message, source } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const submission = await ContactSubmission.create({
      name, email, phone, company, designation, service, message, source,
    });

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New consultation request from ${name}`,
        html: buildEmailHtml({ name, email, phone, company, designation, service, message, source }),
      });
      submission.emailSent = true;
      await submission.save();
    } catch (emailErr) {
      // The submission is already saved — don't fail the request just because
      // the email hiccuped. Log it so you notice in PM2 logs.
      console.error('Resend email failed:', emailErr.message);
    }

    res.status(201).json({ message: "Thanks — we'll be in touch shortly." });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Something went wrong' });
  }
});

// GET /api/contact/admin/all — protected, for an admin panel page later
router.get('/admin/all', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 50);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      ContactSubmission.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      ContactSubmission.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;