const express = require("express");

const dbFunc = require("../../database/database.js");

const router = express.Router();

const delTask = (req, res) => {    

    const db = dbFunc();
    const { ID } = req.query;
    const query = `DELETE FROM tasks WHERE ID=${ID}`;
    db.run(query);
    res.send(`task deleted  ${ID} `);
};

router.delete("/deleteTask", delTask);

module.exports = router;
