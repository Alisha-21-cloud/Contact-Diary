const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));


// Connect to MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI || "Not Found");

connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Contact Diary API is running...');
});

// Routes
app.use('/api/contacts', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
