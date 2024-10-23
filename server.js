// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware base
app.use(express.json());

// Route di esempio
app.get('/', (req, res) => {
  res.send('Ciao, mondo! Il server Express è attivo.');
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
