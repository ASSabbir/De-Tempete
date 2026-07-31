const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ROLES = ['superadmin', 'resource', 'news', 'blog'];

const adminSchema = new mongoose.Schema({
  email: {
    type: String, required: true, unique: true,
    lowercase: true, trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
  },
  password: { type: String, required: true, minlength: 8, select: false },
  name: { type: String, required: true, trim: true, maxlength: 50 },
  role: {
    type: String,
    enum: ROLES,
    required: true,
    default: 'superadmin', // keeps the auto-seeded default admin a superadmin without touching server.js
  },
}, { timestamps: true });

adminSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

adminSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

adminSchema.statics.ROLES = ROLES;

module.exports = mongoose.model('Admin', adminSchema);