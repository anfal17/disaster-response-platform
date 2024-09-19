const foundPersonSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String, required: true },
    age: { type: Number },
    dead: { type: Boolean }, // true if deceased, false if alive
    location: { type: { type: String }, coordinates: [Number] }, // Geolocation of the report
    image: { type: String } // URL of the image
});
