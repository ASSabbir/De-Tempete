// One-time script to migrate the hardcoded GUIDES object into the database.
// Run from the server folder: node scripts/seedBusinessSetupGuides.js
// Safe to run more than once — it skips any guideKey that already exists.
require('dotenv').config();
const mongoose = require('mongoose');
const BusinessSetupGuide = require('../models/BusinessSetupGuide');

const EXISTING_GUIDES = [
  { guideKey: 'uae-guide-2026', label: 'UAE Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1Z2Jb8WTWfPANPppx6ER1yTqBxP-bAqXR/view' },
  { guideKey: 'uk-guide-2026', label: 'UK Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1IqvyjfW8Wxg2YQJ1k3pQMINfMbru9Uw0/view' },
  { guideKey: 'bd-guide-2026', label: 'Bangladesh Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1v7JMWqLcxb1g4IMGhpbEzjo3cdIg9Dw2/view' },
  { guideKey: 'ksa-guide-2026', label: 'KSA Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1NCEpaNPTxwVh8OOKR2RUr76wN4meYc76/view' },
  { guideKey: 'usa-guide-2026', label: 'USA Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1cwzcFTX6QP3FnUp7ZfjxJqpT3sQq4_to/view' },
  { guideKey: 'estonia-guide-2026', label: 'Estonia Business Setup Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1idRV8ZYj7QpdfS06_5-sHH5z6Sy_8Bs-/view' },
  { guideKey: 'aml-guide-2026', label: 'AML Compliance Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1p9LZU_bdbjv-IK7_VlXdzw4CZjiVP1a1/view' },
  { guideKey: 'ebrochure-guide-2026', label: 'E-Brochure Guide 2026', downloadUrl: 'https://drive.google.com/file/d/1TnXWiIXZ_COHbNNrZyLPzH0hamYBc32f/view' },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'detempete' });
  console.log('Connected to MongoDB');

  for (const guide of EXISTING_GUIDES) {
    const exists = await BusinessSetupGuide.findOne({ guideKey: guide.guideKey });
    if (exists) {
      console.log(`- ${guide.guideKey} already exists, skipping`);
      continue;
    }
    await BusinessSetupGuide.create(guide);
    console.log(`✓ Inserted ${guide.guideKey}`);
  }

  console.log('Done.');
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});