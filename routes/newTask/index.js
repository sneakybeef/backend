const express = require('express');

const dbFunc = require('../../database/database.js');

const router = express.Router();

const newTask = (req, res) => {
	const db = dbFunc();

	const infoValues = [];
	const infoKeys = [];
	const taskData = Object.entries(req.body);

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
	res.send(`task added ${JSON.stringify(req.body)} `);
};

router.post('/newTask', newTask);

module.exports = router;
