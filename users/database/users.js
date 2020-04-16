const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath);

const createDb = () => {
	db.run(
		`CREATE TABLE 
		users(id INTEGER PRIMARY KEY AUTOINCREMENT,email text type UNIQUE ,userName text type UNIQUE, passwordHash text)`
	);
};
const getUserByEmail = async (email) => {
	const query = `Select * from users where email=?`;
	return new Promise((resolve, reject) => {
		db.get(query, [ email ], (err, row) => {
			if (err) {
				reject(err.message);
			}
			if (row) {
				resolve(row);
			}
			resolve(null);
		});
	});
};
const getUserByUserName = async (userName) => {
	const query = `Select * from users where userName=?`;
	return new Promise((resolve, reject) => {
		db.get(query, userName, (err, row) => {
			if (err) {
				reject(err.message);
			}
			if (row) {
				resolve(row);
			}
			resolve(null);
		});
	});
};

const addUser = async ({ email, userName, passwordHash }) => {
	return new Promise((resolve, reject) => {
		console.log('trying to add user to db', email, userName, passwordHash);

		const query = `INSERT INTO users(email,userName,passwordHash) VALUES (?,?,?)`;
		db.run(query, [ email, userName, passwordHash ], (err) => {
			if (err) {
				reject(err);
			}
			resolve(true);
		});
	});
};

module.exports = { addUser, createDb, getUserByEmail, getUserByUserName };
