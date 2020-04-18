const express = require('express');

const { deleteTask } = require('../../database/database.js');

const router = express.Router();

const delTask = (req, res) => {
	const ID = req.body.ID;
	deleteTask(ID)
		.then((ID) => {
			res.send(`task deleted  ${ID} `);
		})
		.catch(res.send(`task not deleted  ${ID} `));
};

router.delete('/deleteTask', delTask);

module.exports = router;
