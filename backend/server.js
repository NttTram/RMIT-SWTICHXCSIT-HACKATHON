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
  const stmt = db.prepare("INSERT INTO accommodations (student, address, price_week, type, background, image, Description) VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run("Samatha Williams", "1310/555 Flinders Street, Melbourne VIC 3000", 850, "2 bedrooms & 1 bathroom, Per Week Fully Furnished", "White", "https://www.homely.com.au/img-resize/l-BoxDice-11449296-3.jpg?width=1472&height=982&fit=cover&quality=60&format=webp&version=p8XqyNWfskYIeE._t0l9QZRNFir03tj2");
  stmt.run("Aaron Yeung", "87/546 Flinders Street, Melbourne VIC 3000", 350, "1 bath and 1 bedroom", "Chinese", "https://www.homely.com.au/img-resize/l-AgentBox-11381461-1.jpg?width=1472&height=982&fit=cover&quality=60&format=webp&version=To4SOpci4GGYf.thPY8LvVxTSOQjR9R8");
  stmt.run("Emory Nguyen", "800 Swanston Street, Melbourne Victoria 3053", 441, "Studio apartment", "Vietnamese", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400-3.355x254.png");
  stmt.run("Emily Walters", "800 Swanston Street, Melbourne Victoria 3053", 466, "Twin standard apartment, 2 long single beds, kitchen and bathroom", "Swedish", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400-5.355x254.png");
  stmt.run("Binsa Shrestha", "800 Swanston Street, Melbourne Victoria 3053", 730, "1 bedroom, bathroom, kitchen and living room", "Nepal", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400.355x254.png");
  stmt.finalize();
});


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
