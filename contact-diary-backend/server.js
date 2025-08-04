const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Correct CORS setup
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://contact-diary-frontend.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Connect to MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI || "Not Found");
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Contact Diary API is running...');
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
