const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Allow parsing JSON bodies

// POST route to handle incoming data
app.post('/api/data', (req, res) => {
    const userInput = req.body.input; // Extract the input data from the request body
    console.log(`Received input from frontend: ${userInput}`); // Log the data to see it in the terminal
    res.json({ message: `You sent: ${userInput}` });
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

// Sample GET route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));
