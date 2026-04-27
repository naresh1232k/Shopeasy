const express = require('express');
const app = express();

const Port = process.env.PORT || 3000;
const name = "NScode";

app.get('/', (req, res) => {
  const message = `Welcome to Shopeasy, ${name}!`;
  res.send(message);
});


const server = app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

module.exports = { app, server ,name};

  

