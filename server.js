const express = require('express');
const app = express();

// Define a simple API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from bcguru.in!' });
});

// Set the port the app will listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});