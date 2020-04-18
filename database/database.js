const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

const getDb = () => db;

const getTasks = async () => {
	return new Promise((resolve, reject) => {
		db.all('SELECT * FROM tasks order by urgency desc', (err, rows) => {
			if (err) {
				reject(err);
			}
			if (rows) {
				resolve(rows);
			}
		});
	});
};

const deleteTask = async (ID) => {
	return new Promise((resolve, reject) => {
		const query = `DELETE FROM tasks WHERE ID=${ID}`;
		db.run(query, [], (err, success) => {
			if (err) {
				reject(err);
			}
			if (success) {
				resolve(ID);
			}
		});
	});
};

module.exports = { getTasks, deleteTask, getDb };
