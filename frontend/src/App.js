import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Summary from './Summary';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [feedback, setFeedback] = useState(''); // State for user feedback

  // Fetch transactions from backend when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  // Handle adding a new transaction
  const handleAddTransaction = (transaction) => {
    axios.post('http://localhost:5000/transactions', transaction)
      .then((response) => {
        setTransactions([...transactions, response.data]); // Update state with new transaction
        setFeedback('Transaction added successfully!');
        // Clear the feedback after 3 seconds
        setTimeout(() => setFeedback(''), 3000);
      })
      .catch(error => console.error('Error adding transaction:', error));
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = (id) => {
    axios.delete(`http://localhost:5000/transactions/${id}`)
      .then(() => {
        setTransactions(transactions.filter(transaction => transaction.id !== id)); // Update state by removing deleted transaction
        setFeedback('Transaction deleted successfully!');
        // Clear the feedback after 3 seconds
        setTimeout(() => setFeedback(''), 3000);
      })
      .catch(error => console.error('Error deleting transaction:', error));
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Manage Your Finances Like a Pro</h1>
        <p>Track your income and expenses with ease!</p>
      </div>

      <TransactionForm onAddTransaction={handleAddTransaction} />
      {feedback && <p className="feedback-message">{feedback}</p>}
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default App;
