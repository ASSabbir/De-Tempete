const express = require('express');
const ClientEnquiry = require('../models/ClientEnquiry');
const PartnershipEnquiry = require('../models/PartnershipEnquiry');
const CareerApplication = require('../models/CareerApplication');
const { protect, authorize } = require('../middleware/auth');
const { publicLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// Free, no-key spam guard: a honeypot field bots fill in but humans never
// see, plus a minimum time-on-form check. No external service required.
const MIN_FORM_SECONDS = 3;
const isSpam = (body) => {
  if (body._gotcha) return true;
  const loadedAt = Number(body.formLoadedAt);
  if (!loadedAt || (Date.now() - loadedAt) / 1000 < MIN_FORM_SECONDS) return true;
  return false;
};

const paginate = async (Model, req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(200, parseInt(req.query.limit) || 20);
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      Model.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Model.countDocuments(),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ── Client enquiries ─────────────────────────
router.post('/client', publicLimiter, async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(201).json({ message: 'Thank you for reaching out.' });
    const {
      fullName, companyName, workEmail, phone, countryOfResidence,
      marketInterest, otherMarket, helpNeeded, otherHelp, message,
      preferredContactMethod, source, consent,
    } = req.body;

    if (!fullName || !workEmail || !phone || !message || !consent) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }
    await ClientEnquiry.create({
      fullName, companyName, workEmail, phone, countryOfResidence,
      marketInterest, otherMarket, helpNeeded, otherHelp, message,
      preferredContactMethod, consent,
      ...(source && { source }), // falls back to the schema default ('Contact Page') if omitted
    });
    res.status(201).json({ message: 'Thank you for reaching out.' });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Something went wrong' });
  }
});

router.get('/client/admin/all', protect, authorize('superadmin', 'resource'), (req, res) =>
  paginate(ClientEnquiry, req, res)
);

// ── Partnership enquiries ────────────────────
router.post('/partnership', publicLimiter, async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(201).json({ message: 'Thank you for your interest.' });
    const {
      fullName, companyName, jobTitle, businessEmail, phone, countryMarket,
      websiteOrLinkedin, partnershipInterest, otherPartnershipInterest,
      marketsOperatedIn, message, consent,
    } = req.body;

    if (!fullName || !companyName || !businessEmail || !phone || !countryMarket || !message || !consent) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }
    await PartnershipEnquiry.create({
      fullName, companyName, jobTitle, businessEmail, phone, countryMarket,
      websiteOrLinkedin, partnershipInterest, otherPartnershipInterest,
      marketsOperatedIn, message, consent,
    });
    res.status(201).json({ message: 'Thank you for your interest.' });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Something went wrong' });
  }
});

router.get('/partnership/admin/all', protect, authorize('superadmin', 'resource'), (req, res) =>
  paginate(PartnershipEnquiry, req, res)
);


//  delete
router.delete('/client/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const item = await ClientEnquiry.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.delete('/partnership/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const item = await PartnershipEnquiry.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.delete('/career/:id', protect, authorize('superadmin', 'resource'), async (req, res) => {
  try {
    const item = await CareerApplication.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ── Career applications ──────────────────────
router.post('/career', publicLimiter, async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(201).json({ message: 'Application received.' });

    const data = { ...req.body };
    delete data._gotcha;
    delete data.formLoadedAt;

    if (data.cvLink && !/^https?:\/\//i.test(data.cvLink)) {
      return res.status(400).json({ message: 'CV link must be a valid URL' });
    }

    const required = [
      'fullName', 'email', 'phone', 'currentLocationCity', 'currentResidenceCountry',
      'nationality', 'linkedinUrl', 'opportunityType', 'preferredTimezone', 'yearsExperience',
      'highestEducation', 'institutionName', 'employmentStatus', 'earliestJoiningDate',
      'whyJoin', 'suitabilityExperience', 'pressureSituation', 'deadlineManagement',
      'keyExpertise', 'howHeard', 'cvLink', 'consent',
    ];
    const missing = required.filter((f) => !data[f]);
    if (missing.length) {
      return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
    }

    await CareerApplication.create(data);
    res.status(201).json({ message: 'Application received.' });
  } catch (err) {
    res.status(400).json({ message: err.message || 'Something went wrong' });
  }
});

router.get('/career/admin/all', protect, authorize('superadmin', 'resource'), (req, res) =>
  paginate(CareerApplication, req, res)
);

module.exports = router;