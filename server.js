// importing libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// importing libraries

// defining the server
const app = express();
const port = 3000;
// defining the server

// defining middleware
app.use(cors());
app.use(express.json()); 
// defining middleware

// GET method
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: '1' });
});
// GET method

// POST method
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
  
    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid input' });
    }
  
    const numbers = data
    .filter(item => typeof item === 'number' || (typeof item === 'string' && /^[0-9]+$/.test(item))) // Check if item is a number or a numeric string
    .map(item => String(item)); 

    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  
    const lowercaseAlphabets = alphabets.filter(char => /[a-z]/.test(char));
    const highestLowercase = lowercaseAlphabets.length > 0 ? Math.max(...lowercaseAlphabets.map(c => c.charCodeAt(0))) : null;
    const highestLowercaseChar = highestLowercase ? String.fromCharCode(highestLowercase) : null;
    
    res.json({
      is_success: true,
      user_id: 'nakshatra_aich_19112002',
      email: 'nakshatra.aich2021@vitstudent.ac.in',
      roll_number: '21BAI1922',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseChar ? [highestLowercaseChar] : []
    });
  })
// GET method

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Start the server

