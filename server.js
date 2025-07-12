const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const budgetRoutes = require('./routes/budgetRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Logging
console.log('Setting up routes...');

// Routes
app.use('/api/budgets', budgetRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running smoothly' });
});

// Database connection
console.log('Connecting to MongoDB...');
mongoose.connect('mongodb://localhost/smartsaver-ai', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});