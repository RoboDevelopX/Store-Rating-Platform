const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
    const { name, amount, userId } = req.body;
    try {
        const budget = new Budget({ name, amount, userId });
        await budget.save();
        res.status(201).json({ message: 'Budget created successfully', budget });
    } catch (err) {
        res.status(400).json({ error: 'Error creating budget' });
    }
};

exports.getBudgets = async (req, res) => {
    const { userId } = req.params;
    try {
        const budgets = await Budget.find({ userId });
        res.status(200).json(budgets);
    } catch (err) {
        res.status(400).json({ error: 'Error fetching budgets' });
    }
};

exports.updateBudget = async (req, res) => {
    const { budgetId } = req.params;
    const { name, amount } = req.body;
    try {
        const budget = await Budget.findByIdAndUpdate(budgetId, { name, amount }, { new: true });
        res.status(200).json({ message: 'Budget updated successfully', budget });
    } catch (err) {
        res.status(400).json({ error: 'Error updating budget' });
    }
};

exports.deleteBudget = async (req, res) => {
    const { budgetId } = req.params;
    try {
        await Budget.findByIdAndDelete(budgetId);
        res.status(200).json({ message: 'Budget deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error deleting budget' });
    }
};