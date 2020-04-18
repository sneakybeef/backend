const express = require('express');
const { getDb } = require('../../database/database.js');

const router = express.Router();
const database = async (req, res) => {
	const db = getDb();

	db.run(
		'CREATE TABLE tasks(id INTEGER PRIMARY KEY AUTOINCREMENT,userEmail text,name text,description text,urgency numeric,done boolean)'
	);

	console.log('db');
};

router.get('/db', database);

module.exports = router;
