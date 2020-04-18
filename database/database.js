const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

const getDb = () => db;

const getTasks = async (userEmail) => {
	return new Promise((resolve, reject) => {
		db.all(
			'SELECT id ,name,description,urgency,done FROM tasks WHERE userEmail=? order by urgency desc',
			userEmail,
			(err, rows) => {
				if (err) {
					reject(err);
				}
				if (rows) {
					resolve(rows);
				}
			}
		);
	});
};

const deleteTask = async (id) => {
	return new Promise((resolve, reject) => {
		const query = `DELETE FROM tasks WHERE id=?`;
		db.run(query, id, (err) => {
			if (err) {
				reject(err);
			}
			console.log('success');
			resolve(id);
		});
	});
};

module.exports = { getTasks, deleteTask, getDb };
