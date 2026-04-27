const express = require('express');
const app = express();

const Port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Shopeasy code Test');
});


const server = app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

module.exports = { app, server };

  

