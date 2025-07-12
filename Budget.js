const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    userId: { type: String, required: true }
});

module.exports = mongoose.model('Budget', BudgetSchema);