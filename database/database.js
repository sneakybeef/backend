const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "data.db");

const getDb = () => {
  console.log("starting db", dbPath);
  return new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
};

module.exports = getDb;
