// scripts/createAdmin.js
// Script to create an admin user in MongoDB

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema({
  nama: String,
  nik: String,
  alamat: String,
  nohp: String,
  email: String,
  password: String,
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

async function createAdmin() {
  await mongoose.connect(MONGODB_URI);

  const existing = await User.findOne({ nik: 'admindesalinggar' });
  if (existing) {
    console.log('Admin user already exists.');
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash('desalinggar2025', 10);

  const adminUser = new User({
    nama: 'Admin Desa Linggar',
    nik: 'admindesalinggar',
    alamat: 'Desa Linggar',
    nohp: '-',
    email: 'admin@desalinggar.com',
    password: hashedPassword,
    isAdmin: true
  });

  await adminUser.save();
  console.log('Admin user created successfully.');
  process.exit(0);
}

createAdmin().catch(err => {
  console.error('Error creating admin user:', err);
  process.exit(1);
});
