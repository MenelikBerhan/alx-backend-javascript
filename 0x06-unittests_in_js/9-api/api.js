// simple http server
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// id must be a digit (\d). '\' should be escaped
app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
