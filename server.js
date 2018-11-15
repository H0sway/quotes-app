// server.js
const express = require('express');
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// API Routes
app.use('/api/quotes', require('./routes/quote-routes'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
