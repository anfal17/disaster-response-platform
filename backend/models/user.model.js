const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    image: { type: String }, // URL of the user's image
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    availability: { type: Boolean, default: true },
    reportsSubmitted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }] // Reference to reports submitted by the user
});

const User = mongoose.model('User', userSchema);
module.exports = User;
