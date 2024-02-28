// Simple http server using Express module
const express = require('express');

const app = express();
const port = 1245;
// set handler for '/' route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// listen on port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
