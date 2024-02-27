// Simple web server using http module
const http = require('http');

const app = http.createServer((req, res) => {
  const data = 'Hello Holberton School!'; // response body
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', data.length);
  res.end(data); // adds data and call res.writeHead for implicit headers before sending response
});

app.listen(1245, () => {
  console.log('Server running on port 1245.');
});

module.exports = app;
