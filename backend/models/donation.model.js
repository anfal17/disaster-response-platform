const donationEventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    donationNumbers: { type: Number }, // Total number of donations
    donationLinks: [{ type: String }], // Links to donation pages
    images: [{ type: String }], // URLs of images related to the event
    place: { type: String },
    donationComplete: { type: Boolean, default: false } // true if the donation event is complete
});
