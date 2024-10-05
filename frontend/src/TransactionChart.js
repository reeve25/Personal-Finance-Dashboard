import React from 'react';
import { Pie } from 'react-chartjs-2';

function TransactionChart({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Income vs Expenses',
        data: [income, expenses],
        backgroundColor: ['#28a745', '#dc3545'],
      },
    ],
  };

  return (
    <div>
      <h2>Income vs Expenses</h2>
      <Pie data={data} />
    </div>
  );
}

export default TransactionChart;
