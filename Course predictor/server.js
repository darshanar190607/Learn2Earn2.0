// server.js - Main entry point for the application

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Import routes
const cutoffRoutes = require('./routes/cutoffRoutes');
const rankRoutes = require('./routes/rankRoutes');
const paperToughnessRoutes = require('./routes/paperToughnessRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cutoffSystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/cutoffs', cutoffRoutes);
app.use('/api/ranks', rankRoutes);
app.use('/api/paper-toughness', paperToughnessRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));