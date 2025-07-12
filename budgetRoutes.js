const express = require('express');
const { createBudget, getBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');

const router = express.Router();

router.post('/', createBudget);
router.get('/:userId', getBudgets);
router.put('/:budgetId', updateBudget);
router.delete('/:budgetId', deleteBudget);

module.exports = router;