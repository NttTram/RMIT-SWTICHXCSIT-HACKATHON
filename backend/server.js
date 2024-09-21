const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3030;

// Use CORS to allow requests from your frontend (React app)
app.use(cors());

// Middleware to parse incoming request body as JSON
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database('database.db');

// Create accommodations table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS accommodations (
    id INTEGER PRIMARY KEY,
    student TEXT,
    address TEXT,
    price_week INTEGER,
    type TEXT,
    background TEXT,
    image TEXT,
    description TEXT
  )`);
});

// POST route to handle form submissions
app.post('/api/accommodations', (req, res) => {
  const { student, address, price_week, type, background, image, description } = req.body;

  // Prepare and run the SQL statement
  const stmt = db.prepare("INSERT INTO accommodations (student, address, price_week, type, background, image, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
  
  stmt.run(student, address, price_week, type, background, image, description, (err) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send({ message: 'Error inserting data' });
    } else {
      res.status(201).send({ message: 'Accommodation added successfully' });
    }
  });

  stmt.finalize();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
