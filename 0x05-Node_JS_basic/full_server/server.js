const express = require('express');
const router = require('./routes/index');

const port = 1245;
const app = express();
app.use('/', router);

// listen on port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
