const express = require('express');
const { getDb } = require('../../database/database.js');
const router = express.Router();

const getTask = (req, res) => {
	const db = getDb();
	const { ID } = req.params;

	const respArray = [];
	db.serialize(() => {
		db.each(
			`SELECT * FROM games where id=${ID}`,
			(err, row) => {
				respArray.push(row);
			},
			(err) => {
				if (err) {
					return res.send('error getting games');
				}
				res.setHeader('Content-Type', 'application/json');
				res.send(JSON.stringify(respArray));
			}
		);
	});
};

router.get('/tasks/:name', getTask);

module.exports = router;
