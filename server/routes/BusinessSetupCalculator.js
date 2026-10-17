const express = require('express');
const resend = require('../utils/Resend');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL;

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const buildEmailHtml = ({ country, name, email, phone, readableAnswers }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color:#16244b; margin-bottom: 4px;">New Business Setup Calculator submission</h2>
    <p style="color:#6b7280; font-size:13px; margin-top:0;">Country: <strong>${esc(country)}</strong></p>

    <table style="width:100%; border-collapse:collapse; margin: 16px 0;">
      <tbody>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold; width:130px;">Name</td><td style="padding:8px 0; color:#111827;">${esc(name) || '-'}</td></tr>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Email</td><td style="padding:8px 0; color:#111827;">${esc(email) || '-'}</td></tr>
        <tr><td style="padding:8px 0; color:#374151; font-weight:bold;">Phone</td><td style="padding:8px 0; color:#111827;">${esc(phone) || '-'}</td></tr>
      </tbody>
    </table>

    <h3 style="color:#16244b; border-top: 1px solid #e5e7eb; padding-top: 16px;">Responses</h3>
    <table style="width:100%; border-collapse:collapse;">
      <tbody>
        ${(Array.isArray(readableAnswers) ? readableAnswers : []).map(({ label, value }) => `
          <tr>
            <td style="padding:8px 0; color:#374151; vertical-align:top; width:45%;">${esc(label)}</td>
            <td style="padding:8px 0; color:#111827; font-weight:600;">${esc(value)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
`;

// POST /api/business-setup-calculator — public. Email only, nothing is stored.
router.post('/', publicLimiter, async (req, res) => {
  try {
    const { country, name, email, phone, readableAnswers } = req.body;

    if (!country || !name || !email || !phone) {
      return res.status(400).json({ message: 'country, name, email and phone are required' });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New calculator submission — ${country} (${name})`,
      html: buildEmailHtml({ country, name, email, phone, readableAnswers }),
    });

    if (error) {
      console.error('Resend email failed:', error.message || error);
      return res.status(502).json({
        message: "We couldn't send your request right now. Please try again, or contact us directly.",
      });
    }

    res.status(201).json({ message: "Thank you — we'll reach you shortly." });
  } catch (err) {
    console.error('Calculator submission error:', err.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;