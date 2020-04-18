const express = require('express');

const { getDb } = require('../../database/database.js');
const checkAuth = require('../middleware/checkAuth.js');
const router = express.Router();

const newTask = (req, res) => {
	const db = getDb();
	const { userData, body } = req;
	const infoValues = [];
	const infoKeys = [];

	const taskData = Object.entries(body);
	const email = [ 'userEmail', userData.email ];
	taskData.push(email);

	taskData.forEach(([ infoKey, infoValue ]) => {
		if (infoValue === '') infoValues.push(null);
		else {
			infoValues.push(infoValue);
		}

		infoKeys.push(infoKey);
	});
	const placeholders = infoKeys.map(() => '(?)');
	const query = `INSERT INTO tasks (${infoKeys}) VALUES (${placeholders})`;
	db.run(query, infoValues);
	res.send(`task added ${JSON.stringify(body)} `);
};

router.post('/newTask', checkAuth, newTask);

module.exports = router;
