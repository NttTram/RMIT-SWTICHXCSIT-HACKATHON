const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS accommodations (id INTEGER PRIMARY KEY, name TEXT, description TEXT)");

  const stmt = db.prepare("INSERT INTO accommodations (name, description) VALUES (?, ?)");
  stmt.run("Hostel A", "A cozy hostel in the city center.");
  stmt.run("Hostel B", "A budget-friendly hostel near the university.");
  stmt.finalize();
});

db.close();