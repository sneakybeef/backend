const express = require("express");

const dbFunc = require("../../database/database.js");

const router = express.Router();

const editTask = (req, res) => {    

    const db = dbFunc();
    const body = req.body;
    console.log(params,body);
    res.send("ok",body);
};

router.put("/editTask", editTask);

module.exports = router;
