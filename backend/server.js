const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const multer = require('multer'); // For handling file uploads
const path = require('path');

const app = express();
const port = 3030;

// Use CORS to allow requests from your frontend (React app)
app.use(cors());

// Middleware to parse incoming request body as JSON
app.use(bodyParser.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

// Set up multer to store uploaded files in 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file names
  }
});

const upload = multer({ storage });

// GET route to retrieve all accommodations
app.get('/accommodations', (req, res) => {
  db.all("SELECT * FROM accommodations", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// POST route to handle form submissions with file upload
app.post('/api/accommodations', upload.single('image'), (req, res) => {
  const { student, address, price_week, type, background, description } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Image path

  // Prepare and run the SQL statement
  const stmt = db.prepare("INSERT INTO accommodations (student, address, price_week, type, background, image, description) VALUES (?, ?, ?, ?, ?, ?, ?)");
  
  stmt.run(student, address, price_week, type, background, imagePath, description, (err) => {
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
