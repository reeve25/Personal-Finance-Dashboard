const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let transactions = []; // In-memory data store for transactions

// GET all transactions
app.get('/transactions', (req, res) => {
    res.json(transactions);
});

// POST a new transaction
app.post('/transactions', (req, res) => {
    const newTransaction = { id: Date.now(), ...req.body };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});

// DELETE a transaction by ID
app.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    transactions = transactions.filter(transaction => transaction.id !== id);
    res.status(200).json({ message: 'Transaction deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
