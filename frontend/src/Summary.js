import React from 'react';

function Summary({ transactions }) {
  // Calculate total income
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

  // Calculate balance
  const balance = totalIncome - totalExpenses;

  return (
    <div className="summary">
      <p className="summary-income">Total Income: ${totalIncome.toFixed(2)}</p>
      <p className="summary-expenses">Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p className="summary-balance">Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
