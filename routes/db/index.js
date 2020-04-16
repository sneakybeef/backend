const express = require('express');
const dbFunc = require('../../database/database.js');
console.log(dbFunc);

const router = express.Router();
const database = async (req, res) => {
	const db = dbFunc();
	console.log(db, 'XXXXXXXXXXXXXXX');

	db.run(
		'CREATE TABLE tasks(ID INTEGER PRIMARY KEY AUTOINCREMENT,name text,description text,urgency numeric,done boolean)'
	);

	console.log('db');
};

router.get('/db', database);

module.exports = router;
