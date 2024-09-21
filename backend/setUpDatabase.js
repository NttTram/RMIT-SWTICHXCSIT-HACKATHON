const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run("CREATE TABLE accommodations (student TEXT, address TEXT, price_week INTEGER, type TEXT, background  TEXT, image TEXT, Description TEXT)");

  const stmt = db.prepare("INSERT INTO accommodations (student, address, price_week, type, background, image, Description) VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run("Samatha Williams", "1310/555 Flinders Street, Melbourne VIC 3000", 850, "2 bedrooms & 1 bathroom, Per Week Fully Furnished", "White", "https://www.homely.com.au/img-resize/l-BoxDice-11449296-3.jpg?width=1472&height=982&fit=cover&quality=60&format=webp&version=p8XqyNWfskYIeE._t0l9QZRNFir03tj2");
  stmt.run("Aaron Yeung", "87/546 Flinders Street, Melbourne VIC 3000", 350, "1 bath and 1 bedroom", "Chinese", "https://www.homely.com.au/img-resize/l-AgentBox-11381461-1.jpg?width=1472&height=982&fit=cover&quality=60&format=webp&version=To4SOpci4GGYf.thPY8LvVxTSOQjR9R8");
  stmt.run("Emory Nguyen", "800 Swanston Street, Melbourne Victoria 3053", 441, "Studio apartment", "Vietnamese", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400-3.355x254.png");
  stmt.run("Emily Walters", "800 Swanston Street, Melbourne Victoria 3053", 466, "Twin standard apartment, 2 long single beds, kitchen and bathroom", "Swedish", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400-5.355x254.png");
  stmt.run("Binsa Shrestha", "800 Swanston Street, Melbourne Victoria 3053", 730, "1 bedroom, bathroom, kitchen and living room", "Nepal", "https://www.reserve.unilodge.com.au/data/deposits/www.collegesquareonswanston.reserve.unilodge.com.au/media/images/image1040x400.355x254.png");
  stmt.finalize();
});

db.close();