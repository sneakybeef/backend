const express = require('express');

const dbFunc = require('../../database/database.js');

const router = express.Router();

const editTask = (req, res) => {
	const db = dbFunc();
	const { task } = req.body;
	const sql = `
    UPDATE tasks
    SET 
    name = ? ,
    description = ?,
    urgency = ?,
    done= ?
    WHERE ID = ${task.ID} `;
	db.run(sql, [ task.name, task.description, task.urgency, task.done ]);
	res.send('ok');
};

router.put('/editTask', editTask);

module.exports = router;
