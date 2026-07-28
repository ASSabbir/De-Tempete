const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'detempete', // <-- change this if you want a different DB name
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB connected (db: ${mongoose.connection.name})`);

    // Sync indexes in the background — don't block server startup on it.
    // A slow/large text index rebuild shouldn't delay the server from accepting requests.
    const LibraryItem = require('../models/LibraryItem');
    const Publication = require('../models/Publication');
    const Form = require('../models/Form');

    Promise.all([
      LibraryItem.syncIndexes(),
      Publication.syncIndexes(),
      Form.syncIndexes(),
    ])
      .then(() => console.log('Indexes synced'))
      .catch((err) => console.error('Index sync failed:', err.message));
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
// connectDB now returns the promise so .then() works