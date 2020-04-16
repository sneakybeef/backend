const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'data.db');

const getDb = () => {
	return new sqlite3.Database(dbPath);
};

module.exports = getDb;
