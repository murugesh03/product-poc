const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Welcome');
});

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server is running in port:${port}`));
