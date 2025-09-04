const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 5000;

const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 👈 Add this for JSON parsing

// DB Setup
mongoose.connect('mongodb://127.0.0.1:27017/students');
const db = mongoose.connection;
db.once('open', () => {
    console.log('MongoDB connection successful');
});

// Schema
const userschema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const Users = mongoose.model('data', userschema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const user = new Users({ username, email, password });
    await user.save();
    console.log('Data saved successfully');
    res.json({ message: 'Form submission successful' }); // 👈 JSON response
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
