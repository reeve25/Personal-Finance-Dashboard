import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      type,
      description,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">
        <i className="fas fa-plus"></i> Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
