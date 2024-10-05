import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import InputForm from './InputForm';

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/data', { input })
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <InputForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <p>{data}</p>
    </div>
  );
}

export default App;
