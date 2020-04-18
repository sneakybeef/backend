const express = require('express');

const { deleteTask } = require('../../database/database.js');
const authenticate = require('../middleware/checkAuth.js');

const router = express.Router();

const delTask = (req, res) => {
	const id = req.body.id;
	deleteTask(id)
		.then((id) => {
			console.log('successssid', id);

			res.status(200).json({
				message: 'task deleted',
				id: id
			});
		})
		.catch((error) => {
			res.status(401).json({
				message: 'task not deleted'
			});
		});
};

router.delete('/deleteTask', delTask);

module.exports = router;
