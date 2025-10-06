// server.js (na raiz)
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`API em http://localhost:${PORT}`);
});