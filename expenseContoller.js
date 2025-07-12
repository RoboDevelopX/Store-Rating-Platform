const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
    const { description, amount, category, userId } = req.body;
    try {
        const expense = new Expense({ description, amount, category, userId });
        await expense.save();
        res.status(201).json({ message: 'Expense created successfully', expense });
    } catch (err) {
        res.status(400).json({ error: 'Error creating expense' });
    }
};

exports.getExpenses = async (req, res) => {
    const { userId } = req.params;
    try {
        const expenses = await Expense.find({ userId });
        res.status(200).json(expenses);
    } catch (err) {
        res.status(400).json({ error: 'Error fetching expenses' });
    }
};

exports.updateExpense = async (req, res) => {
    const { expenseId } = req.params;
    const { description, amount, category } = req.body;
    try {
        const expense = await Expense.findByIdAndUpdate(expenseId, { description, amount, category }, { new: true });
        res.status(200).json({ message: 'Expense updated successfully', expense });
    } catch (err) {
        res.status(400).json({ error: 'Error updating expense' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { expenseId } = req.params;
    try {
        await Expense.findByIdAndDelete(expenseId);
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error deleting expense' });
    }
};