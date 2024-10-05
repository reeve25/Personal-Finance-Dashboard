import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="transaction-list">
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-item">
          <span>
            {transaction.type === 'Income' ? '+ ' : '- '}
            ${transaction.amount} - {transaction.description}
          </span>
          <button onClick={() => onDeleteTransaction(transaction.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;

