const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');

    // Force-create any missing indexes (e.g. text index) defined in schemas
    const LibraryItem = require('../models/LibraryItem');
    const Publication = require('../models/Publication');
    const Form = require('../models/Form');
    await Promise.all([
      LibraryItem.syncIndexes(),
      Publication.syncIndexes(),
      Form.syncIndexes(),
    ]);
    console.log('Indexes synced');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
// connectDB now returns the promise so .then() works