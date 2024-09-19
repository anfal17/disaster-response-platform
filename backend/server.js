const express = require('express');
const connectDB = require('./config/dbConfig'); // Import DB config
// const userRoutes = require('./routes/userRoutes'); // Import user routes
// const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
// const protectedRoutes = require('./routes/protectedRoutes'); // Import protected routes

// Initialize environment variables
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/admins', adminRoutes);
// app.use('/api', protectedRoutes); // Protected routes require authentication

// Basic route to check server status
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Set up server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
