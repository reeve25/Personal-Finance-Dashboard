import React from 'react';

function InputForm({ input, setInput, handleSubmit }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
      />
      <button onClick={handleSubmit}>Send Data</button>
    </div>
  );
}

export default InputForm;
