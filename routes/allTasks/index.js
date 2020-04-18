const express = require('express');
const { getTasks } = require('../../database/database.js');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth.js');
const tasks = (req, res) => {
	const { userData } = req;
	console.log('request');
	getTasks(userData.email)
		.then((tasks) => {
			if (tasks.length > 0) {
				res.status(200).send(JSON.stringify(tasks));
			}
		})
		.catch((err) => res.status(401).json({ errd: err, message: 'Auth failed' }));
};
router.get('/tasks', checkAuth, tasks);

module.exports = router;
