const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    image: { type: String }, // URL of the admin's image
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    availability: { type: Boolean, default: true },
    // Additional fields or permissions can be added here
    // Admins have access to all functionalities including managing reports, users, and sending alerts
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
