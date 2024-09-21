const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3030;

app.use(cors()); // Use the cors middleware

const db = new sqlite3.Database('database.db');

app.get('/accommodations', (req, res) => {
  db.all("SELECT * FROM accommodations", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});